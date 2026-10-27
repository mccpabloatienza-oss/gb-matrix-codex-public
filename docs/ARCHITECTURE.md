# Architecture

The demo intentionally uses browser-native JavaScript modules and a Node-only generator/test toolchain. There is no backend, database or build framework.

- `index.html`: accessible page structure.
- `src/app.js`: presentation state, filters, canvas rendering and user interactions.
- `src/core/indicators.js`: pure generic ITD, IRI, normalization, quadrant and validation functions.
- `src/data/demo_loader.js`: loads and checks the synthetic payload.
- `scripts/generate_demo_data.js`: deterministic synthetic generator and monthly CSV fixture.
- `scripts/audit_public_repo.js`: security gate for the candidate public repository.
- `public/demo-data/`: generated synthetic JSON and CSV only.
- `tests/`: executable unit and data-contract tests.
- `.github/workflows/ci.yml`: automated reproducibility and safety checks.

The formulas are deliberately generic. This repository does not reproduce proprietary production formulas or copy the original application's source.
