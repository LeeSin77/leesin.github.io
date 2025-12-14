import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderComponent, r as renderTemplate } from './astro/server_lQeudqkI.mjs';
import { d as getPostUrlBySlug } from './content-utils_C4anHaBx.mjs';
import $$PostCard from './PostCard_Cu_bRz-t.mjs';

const $$Astro = createAstro();
const $$PostPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPage;
  const { page } = Astro2.props;
  let delay = 0;
  const interval = 50;
  return renderTemplate`${maybeRenderHead()}<div class="transition flex flex-col rounded-[var(--radius-large)] bg-[var(--card-bg)] py-1 md:py-0 md:bg-transparent md:gap-4 mb-4"> ${page.data.map((entry) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "entry": entry, "title": entry.data.title, "tags": entry.data.tags, "category": entry.data.category, "published": entry.data.published, "updated": entry.data.updated, "url": getPostUrlBySlug(entry.slug), "image": entry.data.image, "description": entry.data.description, "draft": entry.data.draft, "class:list": "onload-animation", "style": `animation-delay: calc(var(--content-delay) + ${delay++ * interval}ms);` })}`)} </div>`;
}, "/Users/leesin/Desktop/fuwari/src/components/PostPage.astro", void 0);

export { $$PostPage as default };
