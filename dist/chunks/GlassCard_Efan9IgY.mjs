import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, e as renderSlot } from './astro/server_EAiAy0kx.mjs';
import 'kleur/colors';
import 'html-escaper';

const $$Astro = createAstro();
const $$GlassCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GlassCard;
  const { as = "div", className = "", ...props } = Astro2.props;
  const Tag = as;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `glass shadow-glass transition-glow duration-200 hover:shadow-glow hover:scale-105 ${className}`, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Slizz/OneDrive/Documents/GitHub/mkp-tri/src/components/GlassCard.astro", void 0);

export { $$GlassCard as $ };
