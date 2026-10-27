# Codex development log

## 2026-10-26 — Initial public-demo build

- Request received: create an independent, initially private public demonstration for the Codex Ambassadors Content Path.
- Codex inspected the empty target directory and read the supplied prompt.
- Codex selected a dependency-light browser application with plain JavaScript modules, a seeded Node generator and Node's built-in test runner.
- Codex created a synthetic-data generator with seed `20261026`, 800 products, 5 invented brands, 6 categories and 12 periods.
- Codex implemented generic ITD, IRI, normalization, quadrant and validation modules.
- Codex added the browser demo, responsive styling, filters, product detail and a CSV update flow with normalization, validation, period append and local snapshot persistence.
- Codex corrected an initial module-format mismatch in the generator and an IRI data-joining defect found during browser verification.
- Codex verified the browser demo with 800 products, filters, product detail, historical values and the controlled invalid-import scenario.
- The browser file chooser was not exposed to the automation session; direct CSV import remains a manual browser check, while the parser path and validation engine are covered by code and tests.
- Codex added focused tests for duplicate/missing/negative/out-of-range data, monthly updates, history preservation, new products and snapshots; the suite now has 13 passing tests.
- GitHub Actions was verified on the current PR head with two successful jobs and no annotations. The browser file chooser is not exposed to this automation session, so selecting a file remains a manual browser check.
- Final release review: 13 commits audited for isolated history and sensitive content; local tests, syntax checks and the 34-file audit passed. The owner then authorized publication of this repository only; `gb-matrix-evo` was not changed.

This log records work performed in this project. It does not claim that Codex created the original commercial Matriz GB.
