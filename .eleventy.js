const esbuild = require("esbuild");
module.exports = function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["_src/threeScene.js"],
      bundle: true,
      minify: true,
      format: "esm",
      outdir: "_site/js",
      sourcemap: true,
    });
  });

  eleventyConfig.addPassthroughCopy("_src/_includes/");
  eleventyConfig.addPassthroughCopy("_src/style.css");
  eleventyConfig.addPassthroughCopy("_src/img/");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "js/is-land.js",
    "node_modules/petite-vue/dist/petite-vue.es.js": "js/petite-vue.js",
  });

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};
