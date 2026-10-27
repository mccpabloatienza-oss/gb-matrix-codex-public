# GB Matrix (Matriz GB): from domain expertise to verifiable Codex development

**Candidate:** Pablo Atienza · **Role:** Marketing / Business Intelligence · **Path:** OpenAI Codex Ambassadors — Content Path

## Executive summary (for reviewers)

Pablo Atienza, an Argentine marketing and business-intelligence professional with 25+ years of experience, directed the creation of **GB Matrix**, a working multi-brand portfolio decision artifact with ChatGPT. Its original implementation combines demand traction (ITD), inventory relevance (IRI), alternative-model comparison, backtesting, source reconciliation, detailed product views and complementary SKU/family-level analysis. One consequential human decision—using identifiers together with normalized product descriptions to define commercially meaningful families—became a second view in the private artifact. Codex subsequently built a **separate, public, reproducible implementation** using 800 synthetic products, 12 periods, modular JavaScript, CSV updates, **15 passing tests**, a successful CI pipeline, reviewable commits and a pull request. The Content Path proposal is a monthly Spanish/English series showing how business experts can direct, verify and maintain software, with technical results anyone can inspect.

## 1. The artifact: the business problem and system

**Problem:** Sales, stock, valuation and product variants were fragmented across business sources; decisions required an auditable and consistent portfolio view.

**Working original artifact:** the user directed ITD × IRI quadrants, filters, drill-down product records, history, tabular export/inspection, decision statuses and rules preserving uncertainty. Candidate indicators and horizons were compared using backtesting; discrepancies between data sources were flagged and reviewed. Model selection remained provisional where further data were required. These facts are documented in **private historical versions**; this public file intentionally withholds product counts, model parameter choices, confidential sheet identifiers, value totals and actual catalog data.

**Product experience:** an interactive scatterplot positions the portfolio; product selection reveals the underlying details; the tabular view supports an alternate, more operational inspection of the same information.

## 2. Human judgment inside the working artifact — SKU ≠ family

A real design problem emerged: an SKU is an exact transaction/inventory record, but is not necessarily a meaningful commercial family.

- **Brand 1:** relatively consistent identifiers could support structured matching.
- **Brand 2:** the SKU structure was insufficient by itself. The author directed a combination of SKU clues, normalized product titles, category and model, with conservative distinctions for genuinely different products.

The resulting **two-level model** preserved exact SKU traceability alongside consolidated family-level demand and inventory readings. It was **implemented in a private historical version** of the original GB Matrix, not merely proposed later. The public demo describes this user-directed rationale with brand names anonymized and **does not implement this family grouping**.

Other owner-driven design judgments appear throughout: comparing alternative indicators rather than adopting the first candidate; inspecting backtesting results; distinguishing missing data from zero; handling discrepancies between sources; and requesting maintainability and tests once the artifact had grown.

## 3. What Codex implemented and what is auditable

The Codex project creates an independent, public demonstration rather than republishing production code. It has:

- 800 fictitious product records, five invented brands, six generic categories and 12 simulated periods, generated reproducibly.
- Modular code and transparent, generic demo indicators for an ITD × IRI matrix.
- An interactive scatterplot, filters, product detail, histories and review statuses.
- A CSV validation/update workflow with period append and local snapshot preservation.
- 15 recorded passing Node tests, syntax checks, a custom repository audit script, a successful GitHub Actions workflow, and documented commits and a PR.

**Exact boundaries:** family-resolution logic from the historical tool is not part of this synthetic demo. The native-browser CSV file-selection step still requires manual end-to-end checking; automated tests cover parsing, update logic and safe display of CSV-supplied text. The latest CI reports 15 passing tests and a custom audit of 38 files with zero pattern findings. The commercial original was created with ChatGPT, not with Codex. This case does not claim measured ROI or an independently verified Work-specific GB Matrix feature.

## 4. Evidence, status and provenance

| Claim | Evidence | Status |
|---|---|---|
| Original portfolio decision artifact exists; includes indicator comparison, product drill-down and evidence treatment | Historical company workbooks / tools reviewed privately | Verified in private artifacts; not disclosed |
| SKU and family views exist in the original | Historical private version and owner account | Verified historical design; brands anonymized |
| Codex created an independent reproducible synthetic project | [Public repository](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public), [PR #2](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/pull/2) | Publicly auditable |
| Test suite and CI passed | [Successful Actions run](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40451410979), [test report](../TEST_REPORT.md) | CI success; 13 tests documented |
| Demonstration is published | [Live GitHub Pages](https://mccpabloatienza-oss.github.io/gb-matrix-codex-public/) | Public |
| Monthly educational contribution | [Tutorial 01 brief](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/3) | Planned; not yet published |

## 5. Content Path: audience and first contribution

**Audience:** experienced Spanish-speaking professionals in marketing, operations, merchandising and small-business analytics who are not professional software engineers.

**Monthly commitment proposal:** one Spanish/English tutorial, demonstration or case study built on real, inspectable Codex workflows and reusable assets.

**Tutorial 01:** *From a Business Question to a Tested GB Matrix Demo with Codex*. [Editorial issue and acceptance checklist](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/3). It will show: framing a business question, choosing useful indicators, generating safe data, requesting modular changes, running tests, recording decisions and sharing a reproducible demo. **Status: proposed content, not an already published tutorial.**

## Links

[Live demo](https://mccpabloatienza-oss.github.io/gb-matrix-codex-public/) · [Source](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public) · [PR #2](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/pull/2) · [CI](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40451410979) · [YouTube introduction](https://www.youtube.com/shorts/JTkRiMG96o4)

*All demo data and formulas are synthetic and generic. Real brands, records, internal metric configurations and private product examples are excluded.*
