import './_page_.c3ff9ba7_DHCaSb6B.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_lQeudqkI.mjs';
import $$Pagination from './Pagination_DXo1Mv0y.mjs';
import $$PostPage from './PostPage_Ds8gDZAI.mjs';
import { $ as $$MainGridLayout, P as PAGE_SIZE } from './MainGridLayout_QFGoH-S3.mjs';
import { b as getSortedPosts } from './content-utils_C4anHaBx.mjs';

const $$Astro = createAstro();
const getStaticPaths = (async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "/Users/leesin/Desktop/fuwari/src/pages/[...page].astro", void 0);

const $$file = "/Users/leesin/Desktop/fuwari/src/pages/[...page].astro";
const $$url = "/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
