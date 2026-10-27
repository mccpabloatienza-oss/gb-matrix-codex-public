# Test report

Run from the repository root:

```powershell
npm run generate
npm test
npm run check
node scripts/audit_public_repo.js
```

The local execution produced 800 products, 12 periods and seed `20261026`. The automated suite passed 13 tests, including ITD, IRI, quadrants, validation errors, CSV parsing, monthly update normalization, period append, history preservation, new-product import and snapshot persistence. The public-repo audit passed with 31 files and 0 findings. Browser verification confirmed data loading, ITD/IRI values, filters, product detail and controlled invalid-import handling. The browser file chooser did not expose a native dialog to this automation session, so selecting a file and clicking the apply-update control remain manual checks before publication.

GitHub Actions for PR #2 ran two jobs on head `2be54ce` and both completed successfully with zero annotations.

Final publication verification: the `main` CI run completed successfully at [run 17](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40445413546), the Pages deployment completed successfully at [run 2](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40445413496), and the anonymous HTTP checks returned `200` for both the repository and the live demo.

The independent repository was reviewed privately, merged into `main`, and then authorized for public release. GitHub Pages is configured to serve the synthetic demo. The commercial repository `gb-matrix-evo` was not changed.
