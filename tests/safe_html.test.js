import test from "node:test";
import assert from "node:assert/strict";
import { escapeHtml } from "../src/core/safe_html.js";

test("escapeHtml escapes imported product text and HTML attributes", () => {
  assert.equal(
    escapeHtml('<img src=x onerror="alert(1)" data-x=\'yes\'>&'),
    "&lt;img src=x onerror=&quot;alert(1)&quot; data-x=&#39;yes&#39;&gt;&amp;"
  );
});

test("escapeHtml preserves legitimate product labels", () => {
  assert.equal(escapeHtml("Model X / XL — Rev 2"), "Model X / XL — Rev 2");
  assert.equal(escapeHtml(null), "");
});
