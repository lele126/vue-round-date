module.exports = {
  configureWebpack: () => {
    return {
      entry: './src/lib/index.js',
      output: {
        filename: 'js/vue-round-date.js',
        library: 'VueRoundDate',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }
  }
}