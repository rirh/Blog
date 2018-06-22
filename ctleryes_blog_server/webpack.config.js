var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var publicPath = 'http://localhost:3000/dist';
//路径是相对于package.json所在路径
var entry_map = {
  'index': ['./client/css/index.css','./client/js/index.js', hotMiddlewareScript],
  'home': ['./client/css/home.css','./client/js/home.js', hotMiddlewareScript],
}
module.exports = {
  entry: entry_map,
  // devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(),'./public/dist/'),
    //[name]-[hash].js可以指定hash值。
    filename: '[name].js',
    publicPath: publicPath
  },
  devServer: {
        //contentBase: DEV_PATH,
        historyApiFallback: true,
        // hot: true,
        open: true,
        inline: true,
        port: 3000
    },
  // plugins: [
  //   new ExtractTextPlugin("[name].css")
  // ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)|(global\/lib\/)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader', publicPath: "/dist"})
      },
      {
        test: /\.scss$/,
        //!代表先执行 ？是传递给loader的参数，?sourceMap表示使用sourceMap， js使用sourcemap通过devtool: sourcemap来指定。
        loader: ExtractTextPlugin.extract({ fallback:'style-loader',use:'css-loader?sourceMap&-convertValues!sass-loader?sourceMap'})
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin({filename:'./[name].[hash].css', 
                allChunks: true
            }),
            new webpack.optimize.OccurrenceOrderPlugin()
        ],
        module.exports.devtool = false
} else {
    module.exports.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"development"'
                }
            }),
            new ExtractTextPlugin({filename:'./[name].css', 
                allChunks: true
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ],
        module.exports.devtool = '#eval-source-map'
}