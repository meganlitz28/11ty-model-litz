import { eleventyPluginIsLand } from "@11ty/is-land";

export default function (eleventyConfig) {
  // Register the islands plugin
  eleventyConfig.addPlugin(eleventyPluginIsLand);

  // Passthrough copies
  eleventyConfig.addPassthroughCopy("_src/_includes/");
  eleventyConfig.addPassthroughCopy("_src/style.css");
  eleventyConfig.addPassthroughCopy("_src/img/");
  eleventyConfig.addPassthroughCopy("_src/js");

  // Project directories
  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
}
