const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/index.html',
  filename: 'index.html'
})

const extractTextPlugin = new ExtractTextWebpackPlugin({
  filename: 'style.[hash].css',
  disable: false,
  allChunks: true
})

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    htmlPlugin,
    extractTextPlugin,
    new WebpackMd5Hash(),
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  ],
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    }
  }
}
