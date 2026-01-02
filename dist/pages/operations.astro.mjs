/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CGhlh63P.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DpIO8ead.mjs';
import { $ as $$GlassPanel } from '../chunks/GlassPanel_DYWXlq5d.mjs';
import { $ as $$Timeline } from '../chunks/Timeline_BpXIRve9.mjs';
export { renderers } from '../renderers.mjs';

const $$Operations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Operations Terminal", "description": "Interact with MKP-TRI's core operations, logs, and pipelines." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Operations Hero Panel", "className": "max-w-2xl mx-auto mt-24 mb-10 py-10 px-4 text-center" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">Operations Terminal</h1> <p class="text-lg text-slate-200 font-mono mb-4">Interact with MKP-TRI's core operations, logs, and pipelines. Simulated terminal and pipeline overview below.</p> ` })} <div class="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-2"> ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Terminal Panel", "className": "col-span-2 p-0 overflow-hidden" }, { "default": ($$result3) => renderTemplate` <div class="bg-black/80 p-6 h-72 overflow-y-auto font-mono text-green-400 text-xs rounded-t-xl border-b border-glass-border"> <div>// Deploy initiated at 2026-01-02 06:00 UTC</div> <div>Success: Artifact bound to commit abc123</div> <div>// Running sync:transparency</div> <div>Updated provenance data for artifact 11</div> <div>// Running generate:artifact</div> <div>Created new cycle entry: Cycle Delta</div> <div>// Running validate:genesis</div> <div>Genesis validation: OK</div> <div>// Running pipeline:deploy</div> <div>CI/CD: GitHub Actions → Cloudflare Deploy</div> <div>// Edge Worker Update: 2026-01-02 – No anomalies.</div> <div>// ...more logs...</div> </div> <form class="flex gap-2 p-4 bg-black/60 border-t border-glass-border"> <input type="text" class="flex-1 px-3 py-2 rounded bg-white/10 text-white/80 border border-white/20 font-mono" placeholder="Enter command..." autocomplete="off"> <button type="submit" class="px-4 py-2 rounded bg-codex-accent text-black font-bold hover:bg-codex-accent/80 transition">Send</button> </form> ` })} <div class="flex flex-col gap-6"> ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Command Palette Panel", "className": "p-4" }, { "default": ($$result3) => renderTemplate` <h3 class="font-bold text-codex-accent mb-2 font-mono">Command Palette</h3> <ul class="font-mono text-xs text-slate-200 space-y-1"> <li>sync:transparency – Update provenance data</li> <li>generate:artifact – Create new cycle entry</li> <li>validate:genesis – Validate genesis state</li> <li>deploy:edge – Deploy edge worker</li> <li>fetch:logs – Retrieve audit logs</li> <li>archive:cycle – Archive current cycle</li> <li>list:artifacts – List all artifacts</li> <li>status:pipeline – Show pipeline status</li> <li>help – Show command help</li> <li>exit – Close terminal</li> </ul> ` })} ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Pipeline Overview Panel", "className": "p-4" }, { "default": ($$result3) => renderTemplate` <h3 class="font-bold text-codex-accent mb-2 font-mono">Pipeline Overview</h3> ${renderComponent($$result3, "Timeline", $$Timeline, { "items": [
    { year: "2026-01-02", event: "Deploy to Cloudflare" },
    { year: "2026-01-02", event: "Sync Transparency" },
    { year: "2026-01-01", event: "CI/CD: GitHub Actions" },
    { year: "2025-12-30", event: "Genesis Validation" },
    { year: "2025-12-29", event: "Artifact Created" }
  ] })} ` })} </div> </div> ${renderComponent($$result2, "GlassPanel", $$GlassPanel, { "ariaLabel": "Documentation Panel", "className": "w-full max-w-3xl mx-auto px-2 mb-16" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Documentation</h2> <div class="text-slate-200 text-base leading-relaxed">
Interact with MKP-TRI's core operations: the terminal above simulates logs and commands for transparency and artifact management. The command palette lists available actions, and the pipeline overview shows the CI/CD lineage. In the future, this page will integrate with AI-driven operations and real-time edge events.<br><br>
Use the terminal to run commands like <span class="font-mono bg-black/40 px-1 rounded">sync:transparency</span> or <span class="font-mono bg-black/40 px-1 rounded">generate:artifact</span>. All actions are logged and bound to ceremonial checkpoints for full inspectability. <br><br> <b>Coming soon:</b> Live AI integration, real-time logs, and interactive artifact management.
</div> ` })} ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/operations.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/operations.astro";
const $$url = "/operations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Operations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
