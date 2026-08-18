#!/usr/bin/env bash
# Copy-source check. Run from the root of the SITE repo, not the spec repo.
#
#   bash path/to/copy-source-check.sh
#
# Fails when marketing copy is hardcoded in a component instead of coming from
# src/content/ or src/config/. This is the check that keeps the copy refactor from
# silently undoing itself: the moment a component owns a sentence, that sentence becomes a
# second source of truth and the two drift.
set -uo pipefail
fail=0

say() { printf '%s\n' "$*"; }

# 1. Long string literals inside components
say "== Long string literals in components =="
hits=$(grep -rnoE '"[^"]{45,}"' src/components src/pages 2>/dev/null \
       | grep -viE 'className|aria-|alt=|href|src=|import |from ' || true)
if [ -n "$hits" ]; then say "$hits"; fail=1; else say "  none"; fi

# 2. Prices outside the data layer
say ""
say "== Prices outside src/config and src/content =="
hits=$(grep -rnoE '\$[0-9][0-9,]{2,}' src --include='*.tsx' --include='*.ts' 2>/dev/null \
       | grep -v '^src/config/' | grep -v '^src/content/' || true)
if [ -n "$hits" ]; then say "$hits"; fail=1; else say "  none"; fi

# 3. Product names outside the data layer
say ""
say "== Product names outside src/config and src/content =="
hits=$(grep -rnE '\b(Signal\+|Six-Point|Core Build|Never Miss a Lead|Fill the Calendar)\b' src \
       --include='*.tsx' 2>/dev/null | grep -v '^src/config/' | grep -v '^src/content/' || true)
if [ -n "$hits" ]; then say "$hits"; fail=1; else say "  none"; fi

# 4. The retired name, anywhere
say ""
say "== Retired name 'Calibration' =="
hits=$(grep -rn 'Calibration' src 2>/dev/null || true)
if [ -n "$hits" ]; then say "$hits"; fail=1; else say "  none"; fi

say ""
if [ "$fail" -eq 0 ]; then say "PASS: no copy, prices or product names hardcoded outside the data layer."
else say "FAIL: the hits above are second sources of truth. Move each into src/content/ or src/config/."; fi
exit "$fail"
