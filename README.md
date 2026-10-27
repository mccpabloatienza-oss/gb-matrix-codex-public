# The Business Expert, Unlocked

*From ChatGPT to Codex: Building and Maintaining Business Analytics Without a Software Engineering Background.*

This repository is an independent, public-demo candidate for the GB Matrix concept. It explains how a business professional can direct the evolution of an analytical workflow through domain questions, explicit technical constraints, synthetic data, tests and evidence.

## Important safety statement

**ALL DATA IS SYNTHETIC. NO REAL COMMERCIAL RECORDS ARE INCLUDED.** The dataset is generated from scratch with seed `20261026`. It contains 800 fictitious products, five invented brands, six generic categories and twelve synthetic periods. The repository must remain private until its security review is complete. Do not add the original matrix, commercial exports, customer information, prices, costs or internal paths.

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

## Repository status

This is a new independent repository with its own history. It is initially private for review. Public release, GitHub Pages and any visibility change require explicit human approval after the security audit.

See [README_ES.md](README_ES.md), [docs/SECURITY_REVIEW.md](docs/SECURITY_REVIEW.md), [docs/REPRODUCE.md](docs/REPRODUCE.md), [CODEX_DEVELOPMENT_LOG.md](CODEX_DEVELOPMENT_LOG.md), [HUMAN_DECISIONS.md](HUMAN_DECISIONS.md) and [BEFORE_AND_AFTER.md](BEFORE_AND_AFTER.md).

## Presentation

The author's introduction video is available at [YouTube Shorts](https://www.youtube.com/shorts/JTkRiMG96o4). The video is a narrative resource; the repository remains the source of technical evidence.
