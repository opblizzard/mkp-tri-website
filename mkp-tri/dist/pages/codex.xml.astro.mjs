import { c as codexTimeline } from '../chunks/Codex_woyvu04A.mjs';
export { renderers } from '../renderers.mjs';

async function GET(_context) {
  const items = codexTimeline.flatMap(
    (cycle) => cycle.artifacts.map((a) => ({
      id: a.id,
      title: a.title,
      summary: a.summary,
      cycle: cycle.id,
      provenance: a.provenance ?? (/* @__PURE__ */ new Date()).toISOString()
    }))
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>MKP TRI Codex</title>
  <updated>${(/* @__PURE__ */ new Date()).toISOString()}</updated>
` + items.map(
    (i) => `  <entry>
    <id>${i.id}</id>
    <title>${escapeXml(i.title)}</title>
    <summary>${escapeXml(i.summary)}</summary>
    <category term="${i.cycle}"/>
    <updated>${i.provenance}</updated>
  </entry>`
  ).join("\n") + `
</feed>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" }
  });
}
function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
