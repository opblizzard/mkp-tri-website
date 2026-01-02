/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_73EGedir.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import Layout from "@components/Layout.astro";
import GlassCard from "@components/GlassCard.astro";
import Timeline from "@components/Timeline.astro";
import CodexEntry from "@components/CodexEntry.astro";
import ${getCodexEntries} from "@lib/codex";

const entries = getCodexEntries();
 ${renderComponent($$result, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Codex Timeline</h3> ${renderComponent($$result2, "Timeline", Timeline, { "items": [
    { year: "2023", event: "Genesis cycle inscribed" },
    { year: "2024", event: "Artifact registry expanded" },
    { year: "2025", event: "Codex protocol formalized" },
    { year: "2026", event: "Edge ceremonies unified" }
  ] })} ` })} ${renderComponent($$result, "GlassCard", GlassCard, { "className": "p-6" }, { "default": ($$result2) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Codex Entries</h3> ${entries.length === 0 ? renderTemplate`<p class="text-base text-slate-400 font-mono">No entries yet. The codex is waiting for its first inscription.</p>` : renderTemplate`<div class="space-y-3 sm:space-y-4"> ${entries.slice().sort((a, b) => a.timestamp < b.timestamp ? 1 : -1).map((entry) => renderTemplate`${renderComponent($$result2, "CodexEntry", CodexEntry, { ...entry })}`)} </div>`}` })} <section class="w-full max-w-3xl mx-auto px-2 mb-16"> <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Why the Codex?</h2> <div class="glass p-6 text-slate-200 text-base leading-relaxed">
The Codex is the ceremonial memory of MKP-TRI. It ensures every cycle, artifact, and protocol is open, inspectable, and sovereign. The archive is ever-expanding, shaped by community and ceremony.<br><br>
Contribute to the living codex and help inscribe the next mythic checkpoint.
</div> </section> `;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/codex/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/codex/index.astro";
const $$url = "/codex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
