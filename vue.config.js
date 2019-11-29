const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  assetsDir: "../static",
  publicPath: "/",
  outputDir: path.resolve(__dirname, "public/"),
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};
