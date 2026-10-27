export async function loadDemoData() {
  const response = await fetch("./public/demo-data/matrix-demo.json");
  if (!response.ok) throw new Error(`Could not load synthetic dataset (${response.status})`);
  const data = await response.json();
  if (data.synthetic !== true) throw new Error("Demo payload is not marked synthetic");
  return data;
}
