module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/_includes/");
  eleventyConfig.addPassthroughCopy("_src/style.css");
  eleventyConfig.addPassthroughCopy("_src/img/");

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};
eleventyConfig.addPassthroughCopy({
  "node_modules/@11ty/is-land/is-land.js": "js/is-land.js",
  "node_modules/petite-vue/dist/petite-vue.es.js": "js/petite-vue.js",
});
