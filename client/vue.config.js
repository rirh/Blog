const vuxLoader = require('vux-loader');

module.exports = {
  configureWebpack: (config) => {
    /** eslint global-require:0 */
    vuxLoader.merge(config, {
      plugins: ['vux-ui'],
    });
  },
  lintOnSave: false,
  devServer: {
    port: 8080,
  },
  css: {
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only',
      },
      // 给 sass-loader 传递选项
      less: {
        javascriptEnabled: true, // 设置为true
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        // data: '@import "@/variables.less";',
      },
    },

  },
};
