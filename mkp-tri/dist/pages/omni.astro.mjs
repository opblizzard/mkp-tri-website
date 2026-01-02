import { c as createComponent, m as maybeRenderHead, b as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$CodexLayout } from '../chunks/CodexLayout_CB1H2OIb.mjs';
import { C as CodexEngine } from '../chunks/engine_-4TgDyn4.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$OmniLLMChat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="omni-llm-chat glass-panel border-glow flex flex-col gap-4 p-6" data-astro-cid-7ctcl4ho> <h2 class="text-lg font-semibold text-white" data-astro-cid-7ctcl4ho>Omni LLM Chat</h2> <div id="chat-messages" class="flex-1 space-y-3 overflow-y-auto max-h-64 mb-2" data-astro-cid-7ctcl4ho> <!-- Messages will be rendered here --> </div> <form id="chat-form" class="flex gap-2 mt-2" data-astro-cid-7ctcl4ho> <input type="text" id="chat-input" class="flex-1 px-3 py-2 rounded bg-white/10 text-white/80 border border-white/20" placeholder="Describe a change, ask for a new feature..." autocomplete="off" data-astro-cid-7ctcl4ho> <button type="submit" class="px-4 py-2 rounded bg-purple-600 text-white font-bold hover:bg-purple-700 transition" data-astro-cid-7ctcl4ho>Send</button> </form> </div> ${renderScript($$result, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Omni/OmniLLMChat.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Omni/OmniLLMChat.astro", void 0);

const $$Omni = createComponent(async ($$result, $$props, $$slots) => {
  const highlights = CodexEngine.list().slice(0, 3);
  const omniEndpoint = "http://127.0.0.1:8788";
  return renderTemplate`${renderComponent($$result, "CodexLayout", $$CodexLayout, { "title": "Omni Operations", "description": "LLM control room wired into the Codex and Genesis protocols." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="fibonacci-section flex flex-col gap-[var(--fib-5)]"> <header class="text-center"> <p class="fibonacci-header text-xs uppercase tracking-[0.45em]">Omni Operator</p> <h1 class="gradient-text text-4xl font-semibold">Mission Console</h1> <p class="mx-auto mt-3 max-w-3xl text-white/70">
Issue directives to Omni. Every response is contextualized by live Codex data and recorded for provenance. Use the chat pane to brief operations, request codex writes, or pull status reports.
</p> <div class="mx-auto mt-6 fibonacci-grid grid w-full max-w-4xl gap-[var(--fib-3)] rounded-2xl border border-white/15 bg-black/30 p-5 text-left md:grid-cols-3"> ${highlights.map((entry) => renderTemplate`<div> <p class="text-xs uppercase tracking-[0.35em] text-white/50">${entry.sector}</p> <p class="text-lg font-semibold text-white">${entry.title}</p> <p class="text-xs text-white/60">Updated ${new Date(entry.updatedAt).toLocaleDateString()}</p> </div>`)} </div> <div class="omni-status-badge mt-[var(--fib-2)]"> <span class="px-4 py-2 rounded bg-purple-600/80 text-gold-200 font-bold">Cycle PHI-091 COD-02</span> </div> </header> <div class="fibonacci-grid grid gap-[var(--fib-3)] lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"> <section class="glass-panel border-glow flex flex-col overflow-hidden"> <header class="border-b border-white/10 px-6 py-4"> <p class="text-xs uppercase tracking-[0.4em] text-white/60">Chat Thread</p> <p class="text-white/80">Endpoint: ${omniEndpoint}</p> </header> ${renderComponent($$result2, "OmniLLMChat", $$OmniLLMChat, {})} </section> <aside class="glass-panel border-glow flex flex-col gap-[var(--fib-2)] p-[var(--fib-3)]"> <h2 class="text-lg font-semibold text-white">Codex Briefing</h2> <ul class="space-y-3 text-sm text-white/70"> ${highlights.map((entry) => renderTemplate`<li class="rounded-xl border border-white/10 p-3"> <p class="text-xs uppercase tracking-[0.3em] text-white/50">${entry.sector}</p> <p class="text-base font-semibold text-white">${entry.title}</p> <p class="text-xs text-white/60">${entry.synopsis}</p> </li>`)} </ul> <div class="rounded-xl border border-white/15 bg-white/5 p-4 text-xs text-white/70"> <p class="font-semibold text-white">Usage</p> <ol class="mt-2 list-decimal space-y-1 pl-4"> <li>Compose directive.</li> <li>Send to Omni worker.</li> <li>Monitor Codex for resulting entry.</li> </ol> </div> </aside> </div> ${renderScript($$result2, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/omni.astro?astro&type=script&index=0&lang.ts")} </section> ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/omni.astro", void 0);
const $$file = "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/omni.astro";
const $$url = "/omni";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Omni,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
