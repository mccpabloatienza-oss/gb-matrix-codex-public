// Convert imported display strings into text-safe HTML fragments.
const entities = Object.freeze({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => entities[character]);
}
