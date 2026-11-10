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
import { eleventyPluginIsLand } from "@11ty/is-land";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginIsLand);

  eleventyConfig.addPassthroughCopy("src/js");
}
