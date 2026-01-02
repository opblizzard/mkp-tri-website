/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$GlassCard } from '../chunks/GlassCard_Efan9IgY.mjs';
import { $ as $$Timeline } from '../chunks/Timeline_C-4wyEaO.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CodexEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CodexEntry;
  const entry = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="border border-mkp-muted/30 rounded-lg p-4 mb-4 bg-mkp-surface/60"> <header class="flex justify-between items-baseline mb-2"> <h3 class="font-semibold text-sm">${entry.title}</h3> <span class="text-xs text-mkp-muted font-mono">${entry.timestamp}</span> </header> <p class="text-sm text-mkp-muted mb-2"> ${entry.description} </p> <div class="flex justify-between items-center text-xs text-mkp-muted"> <span class="uppercase tracking-wide">${entry.category}</span> ${entry.tags && entry.tags.length > 0 && renderTemplate`<div class="flex gap-1 flex-wrap"> ${entry.tags.map((tag) => renderTemplate`<span class="px-1.5 py-0.5 rounded bg-mkp-background border border-mkp-muted/30">
#${tag} </span>`)} </div>`} </div> </article>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/CodexEntry.astro", void 0);

const artifacts = [
	{
		id: "cycle-1-foundation",
		title: "Cycle 1: Codex Birth",
		category: "foundation",
		timestamp: "2025-01-01T00:00:00Z",
		description: "Initialized the MKP-TRI codex with a sovereign, inspectable Astro + Cloudflare architecture.",
		tags: [
			"birth",
			"architecture",
			"sovereignty"
		]
	},
	{
		id: "cycle-2-omni-console",
		title: "Cycle 2: Omni Console Online",
		category: "interface",
		timestamp: "2025-01-01T01:00:00Z",
		description: "Bound the Omni Console UI as the ceremonial interface for idea ingress.",
		tags: [
			"omni",
			"interface"
		]
	}
];

function getCodexEntries() {
  return artifacts;
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = getCodexEntries();
  return renderTemplate`${renderComponent($$result, "GlassCard", $$GlassCard, { "className": "p-6" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Codex Timeline</h3> ${renderComponent($$result2, "Timeline", $$Timeline, { "items": [
    { year: "2023", event: "Genesis cycle inscribed" },
    { year: "2024", event: "Artifact registry expanded" },
    { year: "2025", event: "Codex protocol formalized" },
    { year: "2026", event: "Edge ceremonies unified" }
  ] })} ` })} ${renderComponent($$result, "GlassCard", $$GlassCard, { "className": "p-6" }, { "default": ($$result2) => renderTemplate` <h3 class="font-semibold mb-2 text-codex-accent font-mono text-lg">Codex Entries</h3> ${entries.length === 0 ? renderTemplate`<p class="text-base text-slate-400 font-mono">No entries yet. The codex is waiting for its first inscription.</p>` : renderTemplate`<div class="space-y-3 sm:space-y-4"> ${entries.slice().sort((a, b) => a.timestamp < b.timestamp ? 1 : -1).map((entry) => renderTemplate`${renderComponent($$result2, "CodexEntry", $$CodexEntry, { ...entry })}`)} </div>`}` })} <section class="w-full max-w-3xl mx-auto px-2 mb-16"> <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Why the Codex?</h2> <div class="glass p-6 text-slate-200 text-base leading-relaxed">
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
