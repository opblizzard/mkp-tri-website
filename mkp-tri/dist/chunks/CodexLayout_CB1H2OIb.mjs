import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot } from './astro/server_DLSQ7M6e.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$BaseLayout } from './BaseLayout_LsOJtz2p.mjs';

const $$Astro = createAstro("https://mkptri.org");
const $$CodexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CodexLayout;
  const { title = "Codex - MKP TRI", description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "className": "bg-codex min-h-screen" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col gap-10"> ${renderSlot($$result2, $$slots["default"])} </section> ` })}`;
}, "C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/layouts/CodexLayout.astro", void 0);

export { $$CodexLayout as $ };
