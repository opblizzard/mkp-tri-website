import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, g as renderHead, r as renderComponent, f as renderSlot } from './astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
/* empty css                         */
import 'clsx';

const SITE_TITLE = "MKP TRI";
const SITE_DESCRIPTION = "Cybernetic elegance meets Fibonacci schematics.";

const $$Astro$2 = createAstro("https://mkptri.org");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const omni = Astro2.locals.omni;
  const navLinks = [
    { href: "/", label: "Genesis" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/codex", label: "Codex" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="glass-panel border-glow sticky top-4 z-20 mx-auto mt-6 flex w-[min(1100px,95%)] flex-wrap items-center justify-between gap-4 px-6 py-4"> <a href="/" class="flex flex-col font-techno text-xs uppercase tracking-[0.4em] text-cyberwhite"> <span>${SITE_TITLE}</span> <span class="text-[0.65em] font-mono tracking-[0.6em] text-mkblue">Omni Engine</span> </a> <nav class="flex flex-wrap items-center gap-6"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-[0.7rem] uppercase tracking-[0.45em] transition-all ${pathname === link.href ? "text-neonblue" : "text-cyberwhite/70 hover:text-cyberwhite"}`, "class")}> ${link.label} </a>`)} </nav> <div class="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-white/70 md:flex"> <span>${omni?.signature.node ?? "CAT-01"}</span> <span class="mkp-divider w-10" aria-hidden="true"></span> <span>${omni?.cycle ?? "PHI-000"}</span> <span class="mkp-divider w-10" aria-hidden="true"></span> <span${addAttribute(omni?.keyValid ? "text-aurora" : "text-brass", "class")}> ${omni?.keyValid ? "Key Validated" : "Key Pending"} </span> </div> </header>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://mkptri.org");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const omni = Astro2.locals.omni;
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto w-[min(1100px,95%)] py-10 text-xs uppercase tracking-[0.35em] text-white/50"> <div class="mkp-divider mb-6" aria-hidden="true"></div> <div class="flex flex-wrap items-center justify-between gap-4"> <span>${SITE_TITLE} - ${(/* @__PURE__ */ new Date()).getFullYear()}</span> <span>Cycle ${omni?.cycle ?? "PHI-000"} | ${omni?.signature.node ?? "CAT-01"}</span> </div> </footer>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://mkptri.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = SITE_TITLE, description = SITE_DESCRIPTION, className = "" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body${addAttribute(className, "class")}> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
