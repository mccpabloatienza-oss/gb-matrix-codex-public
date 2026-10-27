# Test report — current publicly verified state

## Latest automated verification

[GitHub Actions run 28](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40451410979) completed successfully on 27 October 2026 and includes:

- `npm run generate`: successful, synthetic data generator.
- `npm test`: **15 passed; 0 failed**, including the two new unsafe-HTML-rendering tests.
- `npm run check`: successful syntax checking.
- `node scripts/audit_public_repo.js`: **38 files scanned, 0 findings** according to its custom rule set.

These results are visible in the workflow job log. This custom audit is limited to file extensions, token patterns and selected terms; it does not constitute a comprehensive vulnerability assessment.

## Reproduce

```bash
npm run generate
npm test
npm run check
node scripts/audit_public_repo.js
python -m http.server 8000
```

Open `http://localhost:8000`. The demonstration contains 800 fictional products across 12 periods, generated with seed `20261026`.

## Manual browser tests outstanding

Automated parser and update tests passed; the native browser file chooser and click-through CSV import/apply workflow still need a complete independent manual run. The post-release fix escapes strings received from CSV before insertion into HTML templates. [Issue #4](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/4) tracks a real browser test for valid/invalid CSV, malicious-name display and mobile presentation. **Do not claim completed manual end-to-end testing until evidence is attached.**

## Publication and provenance

The [original Codex demonstration PR](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/pull/2) was reviewed, merged and published with approval. The [final documentation and QA PR](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/pull/5) has also been merged. The original commercial system stays private; no original records or formulas are published here.
