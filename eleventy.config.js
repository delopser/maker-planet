export default function(eleventy) {
  eleventy.addPassthroughCopy("imagenes");
  eleventy.addPassthroughCopy("audios");
  eleventy.addPassthroughCopy("videos");
  eleventy.addPassthroughCopy("js");

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