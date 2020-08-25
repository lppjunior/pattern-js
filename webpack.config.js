const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {}

const process = [
  {
    ...config,
    name: "all",
    entry: {
      patterns: './src'
    },
    output: {
      filename: 'src/[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
    }
  },
  {
    ...config,
    name: "unity",
    entry: {
      middleware: './src/pattern/middleware',
      pipeline: './src/pattern/pipeline',
      observer: './src/pattern/observer'
    },
    output: {
      filename: 'src/pattern/[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
    }
  }
]

module.exports = [
  ...process,
  {
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
]