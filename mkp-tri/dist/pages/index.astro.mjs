import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot, d as addAttribute } from '../chunks/astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_LsOJtz2p.mjs';
import 'clsx';
import { g as generateSpiralPoints } from '../chunks/QFSTDS_8yFMYetV.mjs';
import { g as getPrimeArtifacts, a as cycles } from '../chunks/Codex_woyvu04A.mjs';
import { g as getUnifiedState } from '../chunks/UnifiedContext_CUY5UcOb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://mkptri.org");
const $$CathedralLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CathedralLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "className": "bg-cathedral min-h-screen" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col gap-12"> ${renderSlot($$result2, $$slots["default"])} </section> ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/layouts/CathedralLayout.astro", void 0);

const $$TrifectaHUD = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="trifecta-hud"> <!-- HUD content goes here --> </div>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/HUD/TrifectaHUD.astro", void 0);

const $$GenesisSignal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="genesis-signal"> <span class="signal-status">Awaiting Validation</span> </div>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Panels/GenesisSignal.astro", void 0);

const $$Astro$2 = createAstro("https://mkptri.org");
const $$CycleClock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CycleClock;
  return renderTemplate`const ${timestamp = ""} = Astro.props;
${maybeRenderHead()}<div class="cycle-clock"> <span id="cycle-timestamp">${timestamp}</span> </div>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Panels/CycleClock.astro", void 0);

const $$OmniStatusPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="omni-status-panel"> <span class="omni-status">Omni AI: Standby</span> </div>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Panels/OmniStatusPanel.astro", void 0);

const $$Astro$1 = createAstro("https://mkptri.org");
const $$CyborgCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CyborgCard;
  const { title, subtitle, description, glyph = "TRI" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="glass-panel border-glow flex flex-col gap-4 px-6 py-6"> <div class="flex items-center gap-3"> <span class="text-3xl text-neonblue">${glyph}</span> <div> <p class="text-xs uppercase tracking-[0.45em] text-white/60">${subtitle}</p> <h3 class="text-xl font-semibold">${title}</h3> </div> </div> <p class="text-sm text-white/70">${description}</p> </article>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/CyborgCard.astro", void 0);

const $$FibonacciSpiral = createComponent(($$result, $$props, $$slots) => {
  const points = generateSpiralPoints(12);
  return renderTemplate`${maybeRenderHead()}<figure class="glass-panel border-glow relative overflow-hidden px-6 py-6"> <svg viewBox="-2 -2 4 4" class="h-64 w-full" role="img" aria-label="Fibonacci spiral schematic"> <defs> <linearGradient id="spiral" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#00f0ff"></stop> <stop offset="100%" stop-color="#c1925a"></stop> </linearGradient> </defs> <path${addAttribute(points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(3)} ${point.y.toFixed(3)}`).join(" "), "d")} stroke="url(#spiral)" stroke-width="0.04" fill="none"></path> ${points.map((point, index) => renderTemplate`<circle${addAttribute(point.x, "cx")}${addAttribute(point.y, "cy")}${addAttribute(Math.max(point.radius / 12, 0.01), "r")} fill="#74f2ce"${addAttribute((index + 2) / (points.length + 2), "opacity")}></circle>`)} </svg> <figcaption class="text-xs uppercase tracking-[0.35em] text-white/60">
Quantum Fibonacci scheduler output
</figcaption> </figure>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/FibonacciSpiral.astro", void 0);

const $$Astro = createAstro("https://mkptri.org");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const heroArtifacts = getPrimeArtifacts();
  const omni = Astro2.locals.omni;
  const unified = getUnifiedState(omni);
  return renderTemplate`${renderComponent($$result, "CathedralLayout", $$CathedralLayout, { "title": "MKP TRI - Genesis Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="fibonacci-section flex flex-col gap-[var(--fib-5)]"> <div class="glass-panel border-glow flex flex-col gap-[var(--fib-4)] px-[var(--fib-5)] py-[var(--fib-6)] text-white"> <p class="fibonacci-header text-xs uppercase tracking-[0.5em]">Cybernetic Elegance – Fibonacci Schematics</p> <h1 class="gradient-text text-5xl font-semibold leading-tight">
Sovereign design, omni-coherent storycraft.
</h1> <p class="max-w-2xl text-lg text-white/80">
MKP TRI binds architecture, ritual, and mythology into a living codex. Omni Engine modules steward provenance, Fibonacci pacing, and Genesis access protocols.
</p> <div class="flex flex-wrap gap-[var(--fib-2)] text-xs uppercase tracking-[0.35em] text-white/60"> <span>Cycle ${renderComponent($$result2, "CycleClock", $$CycleClock, { "timestamp": cycles?.current ?? (/* @__PURE__ */ new Date()).toISOString() })}</span> <span class="mkp-divider w-16" aria-hidden="true"></span> <span>${unified.signal.node ?? "CAT-01"}</span> <span class="mkp-divider w-16" aria-hidden="true"></span> <span>${unified.signal.stamp ?? (/* @__PURE__ */ new Date()).toISOString()}</span> </div> <div class="mt-[var(--fib-2)] flex gap-4"> <span class="px-3 py-1 rounded bg-green-700/80 text-white font-bold">Genesis: ${unified.keyValid ? "Validated" : "Pending"}</span> <span class="px-3 py-1 rounded bg-purple-600/80 text-gold-200 font-bold">Omni: ${unified.omni.status ?? "Standby"}</span> <span class="px-3 py-1 rounded bg-blue-600/80 text-white font-bold">Codex: ${unified.codex.length} entries</span> </div> </div> ${renderComponent($$result2, "TrifectaHUD", $$TrifectaHUD, { "signature": unified.signal, "cycle": unified.cycle, "keyValid": unified.keyValid })} ${renderComponent($$result2, "GenesisSignal", $$GenesisSignal, { "genesis": unified.genesis })} ${renderComponent($$result2, "OmniStatusPanel", $$OmniStatusPanel, { "omni": unified.omni })} <div class="fibonacci-grid grid gap-[var(--fib-3)] md:grid-cols-2"> ${heroArtifacts.map((artifact, index) => renderTemplate`${renderComponent($$result2, "CyborgCard", $$CyborgCard, { "title": artifact.title, "subtitle": `Artifact ${artifact.id}`, "description": artifact.summary, "glyph": ["TRI", "DELTA", "PHI"][index % 3] })}`)} </div> ${renderComponent($$result2, "FibonacciSpiral", $$FibonacciSpiral, {})} </section> ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/index.astro", void 0);

const $$file = "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
