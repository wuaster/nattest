const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  assetsDir: '../static',
  baseHref: '/',
  publicPath: undefined,
  outputDir: path.resolve(__dirname, '../app/templates'),
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined

}


