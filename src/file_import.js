export const supportedImportFormats = ["text/csv", ".csv"];

export function parseCsv(text) {
  const [header, ...lines] = text.trim().split(/\r?\n/);
  if (!header) return [];
  const columns = header.split(",");
  return lines.filter(Boolean).map((line) => {
    const values = line.split(",");
    return Object.fromEntries(columns.map((column, index) => [column, ["units", "stock", "unitValue"].includes(column) ? Number(values[index]) : values[index]]));
  });
}
