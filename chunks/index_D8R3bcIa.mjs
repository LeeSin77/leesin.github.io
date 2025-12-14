import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_lQeudqkI.mjs';

const html = () => "";

				const frontmatter = {"title":"my first blog","published":"2025-12-14T00:00:00.000Z","description":"人生中的第一个博客","image":"./cover.jpeg","draft":true,"minutes":1,"words":0,"excerpt":""};
				const file = "/Users/leesin/Desktop/fuwari/src/content/posts/guide/index.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
