// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});
