# Human decisions — source and status

This file records actual user instructions and business-domain decisions. It is **not** a record of approvals that the user did not give. Company names and product identifiers are intentionally omitted.

| Date / stage | Human decision | Evidence / status | Technical consequence |
|---|---|---|---|
| Original ChatGPT work | Define the problem as an actionable combined reading of demand, inventory and supporting evidence, not a static list of SKUs. | Owner account; historical tool reviewed privately | ITD × IRI dashboard, filters, drill-down and review statuses in the original artifact. |
| Historical methodology | Compare alternative indicators and analytical windows, backtest against later observations, preserve uncertainties and reconcile source differences. | Existing private workbooks and validation notes, reviewed; individual abandoned early KPI concepts are not exhaustively documented | Model comparison and provenance checks; missing fields remain missing instead of being coerced to zero. |
| Historical family-view design | SKU identity is necessary for exact records but insufficient for some commercial families. For anonymized **Brand 1 / Brand 2**, combine available SKU evidence with normalized titles, models and categories while preserving exact source IDs. | Explicit owner explanation; second perspective confirmed in an original private version | SKU-level and family-level views in the original artifact. Not reproduced as a feature in this synthetic demo. |
| Public Codex demonstration | Build an independent, technically reproducible example with **entirely synthetic data**, modular code, CSV updating, validation and automated tests. | Owner-approved Codex brief | New codebase, reproducible seeded dataset, tests and GitHub Actions. |
| Publication boundary | Publish this synthetic demonstration following review; **retain the commercial repository privately**. | Explicit owner instruction; published state visible on GitHub | Public source, GitHub Pages and PR history with private commercial system excluded. |

## Decision provenance

The table distinguishes **owner-account decisions** from **observable engineering results**. The private historical evidence is deliberately not reproduced in this public project. No claim is made that Codex originated the commercial matrix or implemented commercial-family grouping in this demo. No previously unrecorded team meetings or approvals are claimed.

[Case study](docs/CASE_STUDY_FOR_REVIEWERS.md) · [Development record](CODEX_DEVELOPMENT_LOG.md)
