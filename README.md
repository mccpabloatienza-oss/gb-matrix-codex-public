# The Business Expert, Unlocked

*From ChatGPT to Codex: Building and Maintaining Business Analytics Without a Software Engineering Background.*

[![Open live demo](https://img.shields.io/badge/Live%20demo-GitHub%20Pages-0f766e)](https://mccpabloatienza-oss.github.io/gb-matrix-codex-public/)

![GB Matrix synthetic demo preview](docs/demo-preview.svg)

This repository is an independent public demonstration of the GB Matrix concept. It explains how a business professional can direct the evolution of an analytical workflow through domain questions, explicit technical constraints, synthetic data, tests and evidence.

## Important safety statement

**ALL DATA IS SYNTHETIC. NO REAL COMMERCIAL RECORDS ARE INCLUDED.** The dataset is generated from scratch with seed `20261026`. It contains 800 fictitious products, five invented brands, six generic categories and twelve synthetic periods. Do not add the original matrix, commercial exports, customer information, prices, costs or internal paths.

## Evidence at a glance

| Evidence | Result | Reproduction or link |
| --- | --- | --- |
| Automated tests | 13 passed (the initial 9 plus 4 update-flow tests) | `npm test` |
| Syntax check | Passed | `npm run check` |
| Public-repository audit | 31 files scanned, 0 findings | `node scripts/audit_public_repo.js` |
| GitHub Actions | Passing on `main` and pull requests | [Actions](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions) |
| Live application | Published synthetic demo | [Open the demo](https://mccpabloatienza-oss.github.io/gb-matrix-codex-public/) |

## What this demonstrates

- A transparent, generic ITD demand-traction score and IRI inventory-relevance score.
- A normalized ITD × IRI scatterplot and four operating quadrants.
- Filters, product detail, historical demand/stock and review candidates.
- A simulated monthly CSV update with understandable validation errors, normalization, period append and local snapshot persistence.
- Reproducible synthetic data, modular source code and automated tests.

The formulas here are demonstrations. They are not claimed to be the company's proprietary production formulas.

## Run locally

```powershell
npm run generate
npm test
npm run check
python -m http.server 8000
```

Open `http://localhost:8000`. The browser must use a local HTTP server because the demo loads JSON as a module asset.

## Story

Business Expert → ChatGPT → Complex Workflows → Codex + GitHub → Continuous Improvement

ChatGPT helped the author create the first business tool from professional knowledge. Codex contributes here to modularization, reproducibility, testing, documentation and maintenance workflows. Codex is not credited with the original tool.

## Human Business Reasoning — From SKU Identity to Commercial Families

In a fictitious business discussion, the owner noticed that SKU identity alone was not enough to explain how some products competed within a family. For **Brand 1**, the analysis grouped records using a stable code, normalized titles, category and model so that similar commercial propositions could be reviewed together. The same reasoning was tested with **Brand 2** to avoid treating naming differences as different business opportunities.

This section documents the human reasoning that motivated a future capability. The public demo does not implement commercial-family grouping and does not claim that this feature was created by Codex. The original analytical concept was developed with ChatGPT; Codex contributed the modular, synthetic, tested and maintainable demonstration in this repository.

## Repository status

This is a new independent repository with its own history. It was reviewed privately first and is now published after the authorized security review. GitHub Pages serves only the synthetic demo.

See [README_ES.md](README_ES.md), [docs/SECURITY_REVIEW.md](docs/SECURITY_REVIEW.md), [docs/REPRODUCE.md](docs/REPRODUCE.md), [CODEX_DEVELOPMENT_LOG.md](CODEX_DEVELOPMENT_LOG.md), [HUMAN_DECISIONS.md](HUMAN_DECISIONS.md) and [BEFORE_AND_AFTER.md](BEFORE_AND_AFTER.md).

## Presentation

The author's introduction video is available at [YouTube Shorts](https://www.youtube.com/shorts/JTkRiMG96o4). The video is a narrative resource; the repository remains the source of technical evidence.
