/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C56ioAUk.mjs';
import { $ as $$GlassCard } from '../chunks/GlassCard_Efan9IgY.mjs';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Model Gallery", "description": "A gallery of creative models and artifacts." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="text-center glass max-w-2xl mx-auto mt-24 mb-10 py-10 px-4"> <h1 class="text-4xl font-bold text-codex-accent font-mono mb-2 drop-shadow-glow">Model Gallery</h1> <p class="text-lg text-slate-200 font-mono mb-4">Behold the visual codex of MKP-TRI – where myths manifest as models, and generative art becomes ceremonial artifact. Explore the creative process and curated archive below.</p> </header> <section class="w-full max-w-6xl mx-auto px-2 mb-12"> <div class="flex flex-wrap gap-3 mb-6"> <span class="bg-codex-accent/10 text-codex-accent font-mono px-3 py-1 rounded-full text-xs">#generative</span> <span class="bg-codex-accent/10 text-codex-accent font-mono px-3 py-1 rounded-full text-xs">#sacred</span> <span class="bg-codex-accent/10 text-codex-accent font-mono px-3 py-1 rounded-full text-xs">#visual</span> <span class="bg-codex-accent/10 text-codex-accent font-mono px-3 py-1 rounded-full text-xs">#archive</span> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> ${[...Array(12)].map((_, i) => renderTemplate`${renderComponent($$result2, "GlassCard", $$GlassCard, { "className": "flex flex-col items-center p-4 group cursor-pointer" }, { "default": ($$result3) => renderTemplate` <img${addAttribute(`https://source.unsplash.com/400x240/?geometry,art,${i}`, "src")}${addAttribute(`Artifact ${i + 1}`, "alt")} class="rounded-lg mb-3 w-full h-32 object-cover group-hover:shadow-glow transition-glow duration-200" loading="lazy"> <h3 class="font-bold text-codex-accent mb-1">${["Pink\u2013Purple Cathedral", "Emerald Nexus", "Cerulean Spiral", "Mythic Gate", "Genesis Prism", "Obsidian Array", "Aether Grid", "Sovereign Glyph", "Edge Mandala", "Omni Sigil", "Ceremony Node", "Codex Bloom"][i]}</h3> <p class="text-xs text-slate-300 text-center mb-1">${["A ceremonial generative model, blending sacred geometry and vibrant hues.", "A geometric fusion of nature and code.", "Infinite spiral of blue, echoing cycles.", "Gateway to mythic operations.", "Prismatic artifact for genesis cycles.", "Array of obsidian, reflecting edge logic.", "Grid of aether, binding transparency.", "Glyph of sovereignty, etched in code.", "Mandala for edge worker ceremonies.", "Sigil for omni ingress.", "Node for ceremonial computation.", "Bloom of codex, ever-expanding."][i]}</p> <div class="flex gap-2 flex-wrap justify-center mb-1"> <span class="bg-codex-accent/10 text-codex-accent font-mono px-2 py-0.5 rounded-full text-xs">#artifact</span> <span class="bg-codex-accent/10 text-codex-accent font-mono px-2 py-0.5 rounded-full text-xs">2026-01-${String(i + 1).padStart(2, "0")}</span> </div> <span class="text-xs text-slate-400 font-mono">Model ID: ${["cathedral-v1", "nexus-v2", "spiral-v1", "gate-v1", "prism-v1", "array-v1", "grid-v1", "glyph-v1", "mandala-v1", "sigil-v1", "node-v1", "bloom-v1"][i]}</span> ` })}`)} </div> </section> <section class="w-full max-w-3xl mx-auto px-2 mb-16"> <h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">About the Gallery</h2> <div class="glass p-6 text-slate-200 text-base leading-relaxed">
Behold the visual codex of MKP-TRI – where myths manifest as models, and generative art becomes ceremonial artifact. Each entry is a sovereign creation, blending sacred geometry, code, and transparency. The gallery is curated to inspire, archive, and expand the mythic edge of digital sovereignty.<br><br>
From the Pink–Purple Cathedral to the Codex Bloom, every artifact is a checkpoint in the living archive. Explore, inspect, and contribute to the creative evolution of MKP-TRI.
</div> </section> ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
