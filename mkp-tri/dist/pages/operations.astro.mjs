import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, f as renderSlot, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_LsOJtz2p.mjs';
import { g as getUnifiedState } from '../chunks/UnifiedContext_CUY5UcOb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://mkptri.org");
const $$OperationsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OperationsLayout;
  const { title = "Operations Terminal", description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "className": "bg-operations min-h-screen" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/layouts/OperationsLayout.astro", void 0);

const $$Astro = createAstro("https://mkptri.org");
const $$Operations = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Operations;
  return renderTemplate`${renderComponent($$result, "OperationsLayout", $$OperationsLayout, { "title": "Operations Terminal", "description": "Live Genesis validation, Omni heartbeat, and Codex event logs." }, { "default": ($$result2) => renderTemplate`${(() => {
    getUnifiedState(Astro2.locals.omni);
    return null;
  })()}${maybeRenderHead()}<section class="fibonacci-section flex flex-col gap-[var(--fib-5)]"> <header class="text-center"> <h1 class="fibonacci-header gradient-text text-4xl font-semibold">Operations Terminal</h1> <p class="mx-auto mt-3 max-w-2xl text-white/70">Monitor live logs, validate Genesis, and track Omni Engine heartbeat in real time.</p> </header> <div class="terminal-ui glass-panel border-glow flex flex-col gap-[var(--fib-3)] p-[var(--fib-4)]"> <div class="terminal-header flex items-center justify-between mb-[var(--fib-2)]"> <span class="font-mono text-xs text-white/60">Genesis Validation</span> <span class="omni-heartbeat px-3 py-1 rounded bg-purple-600/80 text-gold-200 font-bold animate-pulse">Omni Heartbeat</span> </div> <div id="terminal-logs" class="terminal-logs bg-black/80 rounded-lg p-[var(--fib-2)] h-64 overflow-y-auto text-xs font-mono text-green-400 border border-white/10"> <!-- Live logs will appear here --> </div> <div class="codex-log mt-[var(--fib-2)] p-[var(--fib-2)] bg-white/5 rounded-lg border border-white/10"> <h3 class="text-base font-semibold text-white">Codex Event Log</h3> <ul id="codex-events" class="text-xs text-white/70"></ul> </div> <form id="terminal-form" class="terminal-input flex gap-2 mt-[var(--fib-2)]"> <input type="text" id="terminal-command" class="flex-1 px-3 py-2 rounded bg-white/10 text-white/80 border border-white/20" placeholder="Enter command..." autocomplete="off"> <button type="submit" class="px-4 py-2 rounded bg-purple-600 text-white font-bold hover:bg-purple-700 transition">Send</button> </form> <div class="genesis-validation mt-[var(--fib-2)]"> <button id="validate-genesis" class="px-4 py-2 rounded bg-gold-200 text-purple-900 font-bold hover:bg-gold-300 transition">Validate Genesis</button> <span id="genesis-status" class="ml-4 text-xs text-white/80">Awaiting validation...</span> </div> </div> ${renderScript($$result2, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/operations.astro?astro&type=script&index=0&lang.ts")} </section> ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/operations.astro", void 0);

const $$file = "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/operations.astro";
const $$url = "/operations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Operations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
