const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  assetsDir: "../static",
  href: "/",
  publicPath: "public/",
  // outputDir: path.resolve(__dirname, "public/templates"),
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};
