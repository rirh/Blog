const vuxLoader = require('vux-loader');
const path = require('path');

const resolve = dir => path.join(__dirname, dir);
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'));
  },
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
