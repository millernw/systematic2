#!/usr/bin/env bash
# Served-HTML check. Runs against a deployed URL, from anywhere. Needs only curl.
#
#   bash checks/served-html-check.sh                       # defaults to production
#   bash checks/served-html-check.sh https://staging.url
#
# WHY THIS EXISTS, and why spec-check.js cannot do its job.
#
# gosystematic.com serves a prerendered HTML snapshot to clients it classifies as bots,
# and the live SPA to real browsers. That is a legitimate SEO technique. On 2026-08-19 the
# snapshots were STALE: the document served for / was a complete copy of the pre-round-one
# site, carrying the retired name "Calibrate", Signal+ outside its four permitted places,
# "Measurable ROI", "leads, calls, and revenue", and a "Book a free discovery call" CTA.
# Nine rule-violating strings, in the version Google and every link preview reads.
#
# spec-check.js runs in a browser, after hydration, so it saw a clean page and passed.
# It structurally cannot catch this. Every check in it can be green while the served
# document violates four of the seven rules. This script reads what curl gets.
#
# Run it after EVERY deploy. A stale snapshot is invisible from a browser.
set -uo pipefail
BASE="${1:-https://gosystematic.com}"
fail=0
say() { printf '%s\n' "$*"; }
get() { curl -s --max-time 20 "$BASE$1"; }

# Strings that must never appear in a served document. Each maps to a rule.
banned='Not a Gamble|Calibrate|Measurable ROI|discovery call|leads, calls, and revenue|SCHEDULE A DISCOVERY|FREE MARKETING AUDIT|Fortune 500'

say "== Served HTML at $BASE =="
say ""

for path in "" /about /work /build /diagnostic /components /signal-plus; do
  html=$(get "$path")
  label="${path:-/}"
  if [ -z "$html" ]; then say "  $label  UNREACHABLE"; fail=1; continue; fi

  title=$(printf '%s' "$html" | grep -oE '<title>[^<]*</title>' | head -1 | sed 's/<[^>]*>//g')
  hits=$(printf '%s' "$html" | grep -coE "$banned")

  if [ "$hits" -gt 0 ]; then
    say "  FAIL $label"
    say "       $hits banned strings in the SERVED document:"
    printf '%s' "$html" | grep -ooE "$banned" | sort -u | sed 's/^/         - /'
    say "       title: $title"
    fail=1
  else
    say "  ok   $label  ($title)"
  fi
done

say ""
say "== Every route needs its own served title =="
# Four routes sharing the homepage title means no per-route snapshot exists for them and
# bots get a fallback. spec-check.js asserts per-page metadata; it only sees the hydrated
# version, so a page can pass there and still serve a generic title to crawlers.
dupes=$(for path in "" /about /work /build /diagnostic /components /signal-plus; do
          get "$path" | grep -oE '<title>[^<]*</title>' | head -1
        done | sort | uniq -d)
if [ -z "$dupes" ]; then
  say "  ok   every route serves a distinct title"
else
  say "  FAIL these titles are served by more than one route:"
  printf '%s\n' "$dupes" | sed 's/^/         /'
  say "       Those routes have no prerendered snapshot of their own."
  fail=1
fi

say ""
say "== Snapshot freshness =="
# A served document with no <script> tag and real body content is a static snapshot.
# A snapshot is only correct if it matches what the browser renders. The cheapest proxy
# is whether it carries copy that only exists in the current build.
home=$(get "")
if printf '%s' "$home" | grep -q '\$9,240'; then
  say "  ok   the served homepage carries the current build's pricing"
else
  say "  FAIL the served homepage does not contain \$9,240."
  say "       Either the snapshot is stale, or there is no snapshot and bots get an"
  say "       empty shell. Both are bugs. See prompts/08-prerender.md."
  fail=1
fi

say ""
say "== Redirects must be real 3xx, not client-side =="
for path in /signal /pricing /calibration; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$BASE$path")
  loc=$(curl -s -o /dev/null -w '%{redirect_url}' --max-time 20 "$BASE$path")
  case "$path" in
    /calibration) want="/build" ;;
    *)            want="/" ;;
  esac
  if [ "$code" = "301" ] && printf '%s' "$loc" | grep -q "$want"; then
    say "  ok   $path -> 301 $loc"
  else
    say "  FAIL $path returned $code${loc:+ -> $loc}, expected 301 to something containing $want"
    say "       A 200 here means the SPA fallback is answering and the redirect, if any,"
    say "       is client-side. Client-side redirects pass no link equity."
    fail=1
  fi
done

say ""
if [ "$fail" -eq 0 ]; then say "PASS: the served HTML matches the current build."
else say "FAIL: the above are visible to crawlers and link previews and invisible in a browser."; fi
exit "$fail"
