import { c as createComponent, a as createAstro, d as addAttribute, f as renderHead, e as renderSlot, r as renderTemplate } from './astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "MKP-TRI", description = "Living codex", ogImage = "/og/default-og.png" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><link rel="icon" href="/og/default-og.png"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen flex flex-col" style="background: linear-gradient(135deg, #18122B 0%, #44318D 100%); font-family: 'Inter', system-ui, sans-serif;"> <main class="flex-1 max-w-5xl mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/Layout.astro", void 0);

export { $$Layout as $ };
