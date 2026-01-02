import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$CodexLayout } from '../chunks/CodexLayout_CB1H2OIb.mjs';
import { c as codexTimeline } from '../chunks/Codex_woyvu04A.mjs';
import { s as scheduleRevealSequence } from '../chunks/QFSTDS_8yFMYetV.mjs';
export { renderers } from '../renderers.mjs';

const $$Codex = createComponent(($$result, $$props, $$slots) => {
  const reveals = scheduleRevealSequence(6);
  return renderTemplate`${renderComponent($$result, "CodexLayout", $$CodexLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="fibonacci-section flex flex-col gap-[var(--fib-5)]"> <header class="text-center"> <p class="fibonacci-header text-xs uppercase tracking-[0.5em]">Codex Entries</p> <h1 class="gradient-text text-4xl font-semibold">Living Archive</h1> <p class="mx-auto mt-4 max-w-2xl text-white/70">
The Codex chronicles artifact lore, ceremony protocol, and Omni telemetry. Inspect each cycle for provenance counts and active rites.
</p> <div class="mx-auto mt-6 flex w-full max-w-md items-center justify-center gap-[var(--fib-2)]"> <label for="cycleFilter" class="text-xs uppercase tracking-[0.35em] text-white/60">Filter Cycle</label> <select id="cycleFilter" class="glass-panel border-glow bg-black/40 px-3 py-2 text-sm text-white"> <option value="all">All</option> ${codexTimeline.map((c) => renderTemplate`<option${addAttribute(c.id, "value")}>${c.id}</option>`)} </select> </div> </header> <div class="fibonacci-grid grid gap-[var(--fib-3)] md:grid-cols-2" id="codexGrid"> ${codexTimeline.map((cycle) => renderTemplate`<article class="glass-panel border-glow flex flex-col gap-[var(--fib-2)] p-[var(--fib-3)]"${addAttribute(cycle.id, "data-cycle")}> <header> <p class="text-xs uppercase tracking-[0.45em] text-white/60">Cycle ${cycle.id}</p> <h2 class="text-2xl font-semibold">${cycle.title}</h2> </header> <p class="text-sm text-white/70">${cycle.mantra}</p> <div class="flex items-center gap-[var(--fib-2)] text-xs uppercase tracking-[0.35em] text-white/60"> <span>${cycle.artifacts.length} artifacts</span> <span class="mkp-divider w-16" aria-hidden="true"></span> <span>Prime #${reveals[cycle.artifacts.length % reveals.length]}</span> </div> <aside class="provenance-panel mt-[var(--fib-2)] p-[var(--fib-2)] bg-white/5 rounded-xl border border-white/10"> <h3 class="text-base font-semibold">Provenance</h3> <ul> ${cycle.artifacts.map((artifact) => renderTemplate`<li>${artifact.title} – ${artifact.provenance}</li>`)} </ul> </aside> </article>`)} </div> ${renderScript($$result2, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex.astro?astro&type=script&index=0&lang.ts")} </section> ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex.astro", void 0);

const $$file = "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex.astro";
const $$url = "/codex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Codex,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
