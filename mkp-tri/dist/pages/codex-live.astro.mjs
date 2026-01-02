import { c as createComponent, r as renderComponent, a as renderTemplate, b as renderScript, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$CodexLayout } from '../chunks/CodexLayout_CB1H2OIb.mjs';
import { C as CodexEngine } from '../chunks/engine_-4TgDyn4.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CodexLive = createComponent(async ($$result, $$props, $$slots) => {
  const initialEntries = CodexEngine.list();
  const codexEndpoint = "http://127.0.0.1:8787";
  return renderTemplate`${renderComponent($$result, "CodexLayout", $$CodexLayout, { "title": "Live Codex", "description": "Streaming artifact ledger sourced from Codex Worker." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="flex flex-col gap-8"> <header class="text-center"> <p class="text-xs uppercase tracking-[0.45em] text-white/60">Live Telemetry</p> <h1 class="gradient-text text-4xl font-semibold">Codex Feed</h1> <p class="mx-auto mt-3 max-w-2xl text-white/70">\nEntries below update whenever the worker emits a new packet. Keep this view open to monitor Omni writes and Genesis pings in real time.\n</p> <div class="mx-auto mt-6 grid w-full max-w-3xl gap-4 rounded-2xl border border-white/15 bg-black/30 p-4 text-left sm:grid-cols-3"> <div> <p class="text-xs uppercase tracking-[0.35em] text-white/50">Artifacts</p> <p class="text-2xl font-semibold" id="codexCount">', '</p> </div> <div> <p class="text-xs uppercase tracking-[0.35em] text-white/50">Last Sync</p> <p class="text-2xl font-semibold" id="codexSync">', '</p> </div> <div> <p class="text-xs uppercase tracking-[0.35em] text-white/50">Endpoint</p> <p class="text-sm text-white/70 break-all">', '</p> </div> </div> </header> <div class="grid gap-4" id="codexStream"> ', ' </div> <template id="codex-entry-template"> <article class="glass-panel border-glow flex flex-col gap-4 p-5"> <header class="flex items-center justify-between gap-4"> <div> <p class="text-xs uppercase tracking-[0.4em] text-white/60"></p> <h2 class="text-2xl font-semibold"></h2> </div> <span class="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70"></span> </header> <p class="text-white/70"></p> <div class="flex flex-wrap gap-2 text-xs text-white/70"></div> <footer class="text-xs uppercase tracking-[0.3em] text-white/50"></footer> </article> </template> <script type="application/json" id="codex-initial-data">{JSON.stringify(initialEntries)}</script> ', " </section> "])), maybeRenderHead(), initialEntries.length, (/* @__PURE__ */ new Date()).toLocaleTimeString(), codexEndpoint, initialEntries.map((entry) => renderTemplate`<article class="glass-panel border-glow flex flex-col gap-4 p-5"${addAttribute(entry.id, "data-entry-id")}> <header class="flex items-center justify-between gap-4"> <div> <p class="text-xs uppercase tracking-[0.4em] text-white/60">${entry.sector}</p> <h2 class="text-2xl font-semibold">${entry.title}</h2> </div> <span class="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70"> ${entry.priority} </span> </header> <p class="text-white/70">${entry.synopsis}</p> <div class="flex flex-wrap gap-2 text-xs text-white/70"> ${entry.tags.map((tag) => renderTemplate`<span class="rounded-full border border-white/20 px-3 py-1">${tag.label}</span>`)} </div> <footer class="text-xs uppercase tracking-[0.3em] text-white/50">
Updated ${new Date(entry.updatedAt).toLocaleString()} </footer> </article>`), renderScript($$result2, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex-live.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex-live.astro", void 0);
const $$file = "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex-live.astro";
const $$url = "/codex-live";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CodexLive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
