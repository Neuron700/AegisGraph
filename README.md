# AegisGraph

Local-first security investigation for source snapshots. AegisGraph analyzes files in the browser, shows evidence-backed findings and relationships, compares scans, and exports reports. It never executes imported projects. English and Indonesian interface choices are available.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Verify with `npm run typecheck`, `npm test`, and `npm run build`. No database server, AI account, or API key is required.

## Workflow

Import multiple files or a ZIP, inspect the preview, and scan. Actual `.env` files are skipped unless the user explicitly enables their inclusion. Paste a Git diff to scan added lines only; results are incomplete and do not retain original line locations. Import an exported scan JSON to review findings without source. Select findings for evidence, rationale, remediation, status, and notes. Review import and finding relationships in the graph, compare two snapshots, and export JSON or Markdown or print a report.

## Coverage

Rules detect `eval`/`Function`, dangerous HTML rendering, selected dynamic redirects, credential-like literals, public secret-like Next.js environment variables, sensitive route patterns without recognizable authorization, privileged Compose services, broad workflow permissions, and actions not pinned to full commit SHA. JavaScript/TypeScript uses Babel AST parsing; YAML is checked for syntax. Relative imports are linked only when the target exists in the snapshot. Rule findings and import edges include source provenance. Heuristics and manual-review results do not establish exploitability or prove absence of security issues. No vulnerability advisory feed is connected; dependency advisory coverage is unknown.

ZIP input is checked before extraction for traversal, duplicate paths, encryption, file count, compressed/expanded size, per-file size and expansion ratio. Unsupported or binary files are skipped. Supported files: JS/TS, package manifests and common lockfiles, Next.js config, example environment files, Dockerfile, Compose YAML, and GitHub Actions YAML. Not all supported file types have dedicated rules. The import limits are 10 MB compressed, 30 MB expanded, 500 files, and 2 MB per file.

## Privacy and limitations

Scans and source files persist in browser IndexedDB, which is not encrypted storage and is accessible to users of the same browser profile. Settings can delete local data. No source is uploaded or sent to AI. Reports omit source files and redact known credential patterns, but automated redaction cannot guarantee detection of every secret: review exports before sharing. Finding comparison matches rule ID, path, and line, so moved findings can appear new or resolved. It does not establish causation. User-marked resolved status is not independent verification.

## License

MIT; see LICENSE.
