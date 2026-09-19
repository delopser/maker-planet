export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("audios");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("js");
  
  eleventyConfig.addPassthroughCopy("sass");

  eleventyConfig.addWatchTarget("./sass/");

  return {
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
