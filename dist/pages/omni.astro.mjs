/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C56ioAUk.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_Efan9IgY.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$OmniConsole = createComponent(($$result, $$props, $$slots) => {
  const placeholder = `// Omni Console
// This is the ceremonial interface for idea ingress.
// Wired to your edge worker or LLM service.`;
  return renderTemplate(_a || (_a = __template(["", '<section class="mt-6"> <script src="/omni-client.js" defer><\/script> <h2 class="text-sm font-semibold uppercase tracking-wide text-mkp-muted mb-2">\nOmni console\n</h2> <div class="code-shell mb-3"> <pre>', '</pre> </div> <form class="space-y-3"> <textarea name="prompt" rows="4" class="w-full rounded-md bg-mkp-surface border border-mkp-muted/30 px-3 py-2 text-sm font-mono text-mkp-text placeholder:text-mkp-muted focus:outline-none focus:ring-1 focus:ring-mkp-accent" placeholder="Describe the cycle you want to inscribe..."></textarea> <button type="button" class="px-4 py-1.5 rounded-md bg-mkp-accent text-black text-sm font-semibold hover:bg-mkp-accentSoft transition-colors">\nSend to Omni (stub)\n</button> </form> </section>'])), maybeRenderHead(), placeholder);
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/OmniConsole.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Omni Interface", "description": "Omni console for idea ingress and cycle orchestration." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="text-center glass max-w-2xl mx-auto mt-24 mb-10 py-10 px-4"> <h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">Omni Interface</h1> <p class="text-lg text-slate-200 font-mono mb-4">Unified LLM context, chat, and protocol for MKP-TRI. Interact with the mythic edge below.</p> </header> <section class="w-full max-w-4xl mx-auto px-2 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8"> ${renderComponent($$result2, "GlassCard", $$GlassCard, { "className": "p-6 md:col-span-2" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Omni LLM Chat</h3> <p class="text-base text-slate-300 mb-2">Interact with the Omni LLM for codex queries, artifact generation, and protocol operations. The chat interface is designed for transparency and inspectability.</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Unified Context</h3> <p class="text-base text-slate-300 mb-2">All codex entries, artifacts, and operations are unified in a single context for seamless interaction. The Omni protocol ensures every exchange is logged and inspectable.</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "className": "p-6" }, { "default": ($$result3) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Omni Protocol</h3> <p class="text-base text-slate-300 mb-2">The Omni protocol powers sovereign, transparent, and programmable LLM operations. It is the mythic interface for the codex, artifacts, and edge computation.</p> ` })} ${renderComponent($$result2, "GlassCard", $$GlassCard, { "className": "p-6 md:col-span-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "OmniConsole", $$OmniConsole, {})} ` })} </section> <section class="w-full max-w-3xl mx-auto px-2 mb-16"> <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">About Omni</h2> <div class="glass p-6 text-slate-200 text-base leading-relaxed">
Omni is the sovereign LLM interface for MKP-TRI. It unifies all codex knowledge, artifact generation, and protocol operations in a single, inspectable context. Every interaction is logged, auditable, and open for community contribution.<br><br>
The Omni protocol is designed for mythic computation at the edge – blending transparency, sovereignty, and creative intelligence.
</div> </section> ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/omni/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/omni/index.astro";
const $$url = "/omni";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
