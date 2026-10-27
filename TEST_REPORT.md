# Test report

Run from the repository root:

```powershell
npm run generate
npm test
npm run check
node scripts/audit_public_repo.js
```

The local execution produced 800 products, 12 periods and seed `20261026`. The automated suite passed 9 tests after correcting the generator's module format and IRI data join. The public-repo audit passed with 29 files and 0 findings. Browser verification confirmed data loading, ITD/IRI values, filters, product detail and controlled invalid-import handling. The browser file chooser did not expose a native dialog to this automation session, so direct CSV selection remains a manual check before publication.

The independent repository `mccpabloatienza-oss/gb-matrix-codex-public` is now private, with `development` published for review. No public visibility change or GitHub Pages publication has been made.
