const cover = new Proxy({"src":"/_astro/cover.CgGywNHJ.jpeg","width":2048,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/leesin/Desktop/fuwari/src/content/posts/guide/cover.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/leesin/Desktop/fuwari/src/content/posts/guide/cover.jpeg");
							return target[name];
						}
					});

export { cover as default };
