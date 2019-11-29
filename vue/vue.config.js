const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  assetsDir: '../static',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  outputDir: path.resolve(__dirname, '../app/templates'),
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined

}


