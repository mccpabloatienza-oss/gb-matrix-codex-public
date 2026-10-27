import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const forbiddenNames = [/\.sqlite$/i, /\.xlsx?$/i, /\.xlsm$/i, /\.parquet$/i, /\.db$/i];
const secretPatterns = [/ghp_[A-Za-z0-9]{20,}/, /sk-[A-Za-z0-9]{20,}/, /-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----/, /AKIA[0-9A-Z]{16}/];
const sensitiveTerms = [/oneDrive/i, /global branding/i, /password\s*=/i, /api[_-]?key\s*=/i];
const ignored = new Set(["node_modules", ".git"]);
const files = [];
function visit(folder) {
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const absolute = path.join(folder, entry.name);
    if (entry.isDirectory()) visit(absolute); else files.push(absolute);
  }
}
visit(root);
const findings = [];
for (const file of files) {
  const relative = path.relative(root, file);
  if (forbiddenNames.some((pattern) => pattern.test(relative))) findings.push(`${relative}: forbidden data extension`);
  let text;
  try { text = fs.readFileSync(file, "utf8"); } catch { continue; }
  for (const pattern of secretPatterns) if (pattern.test(text)) findings.push(`${relative}: secret-like token`);
  for (const pattern of sensitiveTerms) if (pattern.test(text) && !relative.endsWith("audit_public_repo.js")) findings.push(`${relative}: sensitive term ${pattern}`);
}
const result = { status: findings.length ? "failed" : "passed", files: files.length, findings };
console.log(JSON.stringify(result, null, 2));
process.exitCode = findings.length ? 1 : 0;
