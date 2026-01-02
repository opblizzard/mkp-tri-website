/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C56ioAUk.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$TransparencyPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TransparencyPanel;
  const {
    lastSync = "Unknown",
    sourceRepo = "https://github.com/opblizzard/mkp-tri",
    currentBranch = "main"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> <h2 class="text-sm font-semibold uppercase tracking-wide text-mkp-muted mb-2">
Transparency
</h2> <div class="code-shell space-y-1"> <div>// public provenance</div> <div>repo: ${sourceRepo}</div> <div>branch: ${currentBranch}</div> <div>last_sync: ${lastSync}</div> </div> </section>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/TransparencyPanel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lastSync = (/* @__PURE__ */ new Date()).toISOString();
  return renderTemplate`---
import GlassCard from "@components/GlassCard.astro";
import Timeline from "@components/Timeline.astro";
---
${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Transparency", "description": "Public provenance and deployment lineage for MKP-TRI." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header class="text-center glass max-w-2xl mx-auto mt-24 mb-10 py-10 px-4"><h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">Transparency</h1><p class="text-lg text-slate-200 font-mono mb-4">Open operations, public ledgers, and radical transparency are core to MKP-TRI. Inspect the principles, timeline, and ongoing efforts below.</p></header><section class="w-full max-w-4xl mx-auto px-2 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">${renderComponent($$result2, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate`<h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Transparency Principles</h3><ul class="list-disc ml-6 text-slate-300 text-base"><li>Open source code and models</li><li>Public ledgers for all operations</li><li>Real-time artifact provenance</li><li>Community-driven audits</li></ul>` })}${renderComponent($$result2, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate`<h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Transparency Timeline</h3>${renderComponent($$result3, "Timeline", Timeline, { "items": [
    { year: "2023", event: "Genesis protocol open-sourced" },
    { year: "2024", event: "Public artifact registry launched" },
    { year: "2025", event: "Real-time transparency dashboard" },
    { year: "2026", event: "Omni audit pipeline deployed" }
  ] })}` })}</section><section class="w-full max-w-3xl mx-auto px-2 mb-12">${renderComponent($$result2, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate`<h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Deployment Provenance</h3>${renderComponent($$result3, "TransparencyPanel", $$TransparencyPanel, { "lastSync": lastSync, "sourceRepo": "https://github.com/opblizzard/mkp-tri", "currentBranch": "main" })}` })}</section><section class="w-full max-w-3xl mx-auto px-2 mb-16"><h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Why Transparency?</h2><div class="glass p-6 text-slate-200 text-base leading-relaxed">
Transparency is the foundation of trust and sovereignty in MKP-TRI. Every operation, artifact, and protocol is open for inspection, audit, and contribution. Radical transparency ensures that the mythic edge remains accountable, collaborative, and ever-evolving.<br><br>
Join the community in shaping the future of open, inspectable computation.
</div></section>` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/transparency/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/transparency/index.astro";
const $$url = "/transparency";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
