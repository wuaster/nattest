const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  assetsDir: "../static",
  publicPath: "/template",
  outputDir: path.resolve(__dirname, "public/template"),
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};
