# Scope and prompt history

This document is an **editorial reconstruction of the user-approved requirements** behind the demonstrative Codex project, **not a verbatim export of every Codex conversation**. See the real commit and pull-request histories for the implementation sequence.

## 1. Original user problem (pre-Codex)

A marketing-domain expert needed a consistent way to compare products across demand, stock, coverage, margins and data provenance. Using ChatGPT, the author established an operational matrix and iterated through model revisions. Later, a real commercial requirement motivated complementary SKU and family analysis.

## 2. Public-demonstration brief issued to Codex

The owner requested:
- Create a new independent repository for a **safe demonstrative project**. Start privately; do not copy commercial records, formulas or original Git history.
- Generate **synthetic data from scratch**, with a fixed seed and realistic but invented product and sales patterns.
- Implement modular JavaScript, transparent demonstrative ITD and IRI indicators, a filterable chart and product detail.
- Add a CSV import/update flow with validation, normalization, periods and history.
- Write automated tests, GitHub Actions, security checks, documentation in English and Spanish.
- Preserve an honest separation of the original ChatGPT artifact, human business decisions and new Codex contributions.

## 3. User publication instruction

After review, the owner explicitly authorized **public access to this independent synthetic repo only**, while the commercial repository remains private.

## 4. Follow-up documentation review

The author requested consistency across public materials: use the name **GB Matrix (Matriz GB)**; treat **Brand 1 / Brand 2 as anonymized real business contexts**; describe SKU/family design as a real feature of the original artifact; acknowledge that family grouping is not a feature of the current synthetic public demo; avoid exposing private counts, model parameters and product examples.

## 5. Reviewable evidence, limitations and next content

- [PR #2](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/pull/2)
- [Development log](CODEX_DEVELOPMENT_LOG.md)
- [Human decisions](HUMAN_DECISIONS.md)
- [Tests](TEST_REPORT.md)
- [Tutorial 01 — editorial brief](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/3)

**Limitations:** the CSV browser file-picker path still requires manual end-to-end confirmation. No additional product-family resolver is asserted in the public demo. Do not invent absent prompt transcripts.
