# Public-release security review — scope and limits

The synthetic demonstration was initially reviewed privately, then published with explicit owner approval. The original commercial system remains private and separate.

## Data and implementation boundaries

- All demo records are generated from scratch with a fixed seed; no real commercial dataset, transformed company rows, customer identifiers or financial figures are included.
- The publicly shown ITD and IRI formulas are transparent *demonstration formulas*, not private production methods.
- Brand 1 and Brand 2 are **anonymized real business contexts** discussed at a conceptual level; the public demo implements a separate synthetic tool and **does not implement the original commercial-family resolver**.
- No original source code or private repository history was copied into the public history.

## Release checks

The original pre-publication record documented 34 scanned files and 0 findings. The **latest audited workflow** now covers **38 files with 0 pattern findings**, after additional documentation and HTML-escaping tests: [GitHub Actions run 28](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40451410979).

Reproducible checks:

```bash
git log --all -p
git ls-files
npm run generate
npm test
npm run check
node scripts/audit_public_repo.js
```

The custom audit tests a constrained set of names, extensions and token patterns; it is **not an industry-standard vulnerability scanner or a guarantee of secrecy**. Review Git history, commit metadata, paths, rendering, links and dependencies separately.

## Post-release hardening

Imported product text is now escaped before interpolation in interface HTML templates. Two regression tests were added for unsafe markup. The updated CI run passed 15 tests and the 38-file custom audit. Independent native CSV file upload and visual review remain required; see [manual QA issue #4](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/4).

## Publication policy

Publish only independent synthetic material. When any user-driven decision is documented, record the human source; avoid inventing approvals or team meetings. If a security issue is detected, stop publishing updated outputs until it is corrected.
