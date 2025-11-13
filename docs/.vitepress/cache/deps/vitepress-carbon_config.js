// node_modules/vitepress-carbon/dist/theme/config/baseConfig.js
var deps = ["vitepress-carbon/components", "@vueuse/core", "body-scroll-lock"];
var baseConfig = {
  scrollOffset: ["header", ".VPLocalNav"],
  appearance: {
    initialValue: "dark"
  },
  vite: {
    ssr: {
      noExternal: [...deps, /\.css$/, /\.vue$/, /^vitepress-carbon/]
    },
    optimizeDeps: {
      exclude: deps
    }
  },
  head: [],
  markdown: {
    headers: {
      level: [2, 3]
    },
    config(md) {
    }
  },
  transformHead({ assets }) {
    const font = assets.find((file) => /Mona-Sans\.\w+\.woff2/.test(file));
    if (font) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: font,
            as: "font",
            type: "font/woff2",
            crossorigin: ""
          }
        ]
      ];
    }
  },
  shouldPreload(link) {
    return !link.includes("Algolia");
  }
};
var baseConfig_default = baseConfig;
export {
  baseConfig,
  baseConfig_default as default
};
//# sourceMappingURL=vitepress-carbon_config.js.map
