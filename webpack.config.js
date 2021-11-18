/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */

const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HTMLWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// const isProd = process.env.NODE_ENV === 'production'

/** @type import("webpack").Configuration */
module.exports = {
  mode: 'development',
  // Change to your "entry-point".
  entry: {
    index: {
      import: './src/index',
      dependOn: 'vendor',
    },
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
      // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Siggraph UPenn',
      template: 'index.html',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: '',
    //     },
    //   ],
    // }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
}
