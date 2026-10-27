# Test report — verified release and latest review

## Reproduce

```bash
npm run generate
npm test
npm run check
node scripts/audit_public_repo.js
```

The published synthetic release generated **800 invented products** across **12 periods** with seed `20261026`. Its recorded CI run completed successfully with **13 passing Node tests** for indicators, quadrants, invalid input, parsing, monthly updating, new-product handling and snapshot behavior. Syntax checks passed.

- [Published release — successful GitHub Actions run](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40445413546)
- [Published release — GitHub Pages deployment](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40445413496)
- [Reviewed release changes — PR #2](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/pull/2)

## Recorded custom repository audit

The final pre-release audit was reported as **34 files, zero pattern-based findings**. An earlier report stating 31 files concerned a prior snapshot. New editorial and hardening commits add files; **re-run the current audit to obtain a new current-file count**. This custom script is a useful narrow safeguard, **not a replacement for a comprehensive secret scanner or manual history review**.

## Recent input rendering hardening

After release, the product display path was inspected. UI templates previously interpolated product names and categories originating from CSV imports into `innerHTML`. A new `escapeHtml` utility and **two additional regression tests** were added for untrusted display text. That increases the planned test suite from 13 to **15 tests**, pending successful CI confirmation for the new commit state. Until confirmed, the executive case cites **13 previously verified tests**.

## Manual browser QA still pending

Automated tests cover the CSV parser and update logic. The native browser file chooser and the complete CSV import/apply flow **have not yet been verified end-to-end manually**. [QA checklist, including malicious-label rendering and mobile review](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/4).

No private original records, product names, commercial parameters or commercial Git history are published.
