const leesin = new Proxy({"src":"/_astro/leesin.CqhEX4_G.jpeg","width":439,"height":439,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/leesin/Desktop/fuwari/src/assets/images/leesin.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/leesin/Desktop/fuwari/src/assets/images/leesin.jpeg");
							return target[name];
						}
					});

export { leesin as default };
