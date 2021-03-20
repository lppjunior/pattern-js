const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  module: {}
}

const process = [
  {
    ...config,
    name: 'all',
    entry: {
      all: './src',
      middleware: './src/middleware',
      pipeline: './src/pipeline',
      observer: './src/observer'
    },
    output: {
      filename: 'js/[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
    }
  }
]

module.exports = {
  ...process[0],

  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pattern JS',
      favicon: 'src-example/favicon.png',
      template: 'src-example/index.html'
    }),
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, 'src-example', 'src')
      ]
    })
  ],

  // webpack-dev-server configurations
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9000
  }
}
