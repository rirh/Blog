module.export = {
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'

    },  {
      test: /\.(jpe?g|gif|png)$/,
      use: 'url-loader'
    }],
    // 启用 CSS modules for all css / pre-processor files.
    modules: true
  },
  // ...
  chainWebpack: config => {
    // https://github.com/vuejs/vue-cli/issues/1104
    // typescript building error when import .vue file with separate .ts file, 即在 ts 文件中无法引入 .vue 组件;
    // 下面的代码解决上面这个 bug, 解决方法来源: https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/111
    // config.plugins.delete('fork-ts-checker')
    // config.module
    //   .rule('ts')
    //   .use('ts-loader')
    //   .tap(options => {
    //     return {
    //       'transpileOnly': false
    //     }
    //   })
  }

}