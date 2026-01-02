import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative pl-6"> <div class="absolute left-2 top-0 bottom-0 w-1 bg-codex-accent/20 rounded-full"></div> ${items.map((item, i) => renderTemplate`<div class="relative mb-8"${addAttribute(i, "key")}> <div class="absolute left-[-10px] top-2 w-4 h-4 bg-codex-accent rounded-full shadow-glow"></div> <div class="ml-8"> <div class="font-mono text-codex-accent text-sm mb-1">${item.year}</div> <div class="text-slate-200 text-base">${item.event || item.content}</div> </div> </div>`)} </div>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/Timeline.astro", void 0);

export { $$Timeline as $ };
