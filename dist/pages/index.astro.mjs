/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C56ioAUk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`---
import GlassCard from "@components/GlassCard.astro";
import Timeline from "@components/Timeline.astro";
import content from "@data/content.json";
---
${renderComponent($$result, "Layout", $$Layout, { "title": "MKP-TRI \xB7 Living Codex", "description": "Sovereign platform for mythic operations, blending AI, art, and transparency." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative min-h-screen flex flex-col items-center justify-center bg-codex-gradient"><div class="particle-bg"><svg width="100%" height="100%" class="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"></rect></svg></div><header class="text-center glass max-w-2xl mx-auto mt-24 mb-10 py-10 px-4"><h1 class="text-4xl sm:text-5xl font-bold text-white drop-shadow-glow mb-4">MKP-TRI — Living Codex</h1><p class="text-lg text-slate-200 font-mono mb-4">MKP-TRI is a sovereign platform for mythic operations, blending AI, art, and transparency. Explore cycles of creation where every artifact is verifiable.</p><div class="flex flex-wrap justify-center gap-4 mb-4">${renderComponent($$result2, "GlassCard", GlassCard, { "as": "a", "href": "/codex", "className": "w-40 text-center cursor-pointer" }, { "default": ($$result3) => renderTemplate`<h3 class="font-bold text-codex-accent mb-1">Codex</h3><p class="text-xs text-slate-300">Chronological ceremonies, artifacts, checkpoints.</p>` })}${renderComponent($$result2, "GlassCard", GlassCard, { "as": "a", "href": "/omni", "className": "w-40 text-center cursor-pointer" }, { "default": ($$result3) => renderTemplate`<h3 class="font-bold text-codex-accent mb-1">Omni</h3><p class="text-xs text-slate-300">Idea ingress, mythic systems, AI console.</p>` })}${renderComponent($$result2, "GlassCard", GlassCard, { "as": "a", "href": "/transparency", "className": "w-40 text-center cursor-pointer" }, { "default": ($$result3) => renderTemplate`<h3 class="font-bold text-codex-accent mb-1">Transparency</h3><p class="text-xs text-slate-300">Deployment state, provenance, CI/CD lineage.</p>` })}</div><div class="flex justify-center gap-6 mt-4"><div class="font-mono text-xs bg-black/40 rounded px-3 py-2 text-codex-accent shadow-glass">Commits: ${content.stats.commits}</div><div class="font-mono text-xs bg-black/40 rounded px-3 py-2 text-codex-accent shadow-glass">Last Sync: ${content.stats.lastSync}</div><div class="font-mono text-xs bg-black/40 rounded px-3 py-2 text-codex-accent shadow-glass">Artifacts: ${content.stats.artifacts}</div></div></header><section class="w-full max-w-5xl mx-auto px-2 mb-12"><h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Featured Artifacts</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">${content.featuredArtifacts.map((a) => renderTemplate`${renderComponent($$result2, "GlassCard", GlassCard, { "className": "flex flex-col items-center p-4" }, { "default": ($$result3) => renderTemplate`<img${addAttribute(a.img, "src")}${addAttribute(a.title, "alt")} class="rounded-lg mb-3 w-full h-32 object-cover" loading="lazy"><h3 class="font-bold text-codex-accent mb-1">${a.title}</h3><p class="text-xs text-slate-300 text-center">${a.desc}</p>` })}`)}</div></section><section class="w-full max-w-3xl mx-auto px-2 mb-12"><h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">Latest Updates</h2>${renderComponent($$result2, "Timeline", Timeline, { "items": content.timeline }, { [`item-${i}`]: ($$result3) => renderTemplate`${content.timeline.map((item, i2) => renderTemplate`<div class="glass p-4 mb-2"><div class="flex items-center gap-3"><span class="font-mono text-xs text-codex-accent">${item.date}</span><span class="font-mono text-xs text-slate-200">${item.event}</span></div></div>`)}` })}</section><section class="w-full max-w-3xl mx-auto px-2 mb-16"><h2 class="text-2xl font-bold text-codex-accent mb-4 font-mono">About MKP-TRI</h2><div class="glass p-6 text-slate-200 text-base leading-relaxed">
In the ether of digital sovereignty, MKP-TRI emerges as a beacon for mythic operations. Every cycle, ceremony, and artifact is bound to a verifiable checkpoint, ensuring eternal inspectability. The Living Codex is not just a record—it's a living, breathing archive of creation, where AI, art, and transparency converge. <br><br>
From the genesis of the Codex to the latest edge worker deployments, each event is a sovereign act, witnessed and preserved. Join the journey—explore, inspect, and contribute to the mythic evolution of MKP-TRI.
</div></section></div>` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/index.astro", void 0);

const $$file = "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
