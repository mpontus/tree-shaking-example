const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [["env", { modules: false }]]
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsWebpackPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            dead_code: true
          }
        }
      })
    ]
  },
  plugins: [new BundleAnalyzerPlugin()]
};
