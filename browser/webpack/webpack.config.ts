import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {} from "webpack-dev-server";

const config: Configuration = {
  mode: "development",
  entry: {
    global: "../src/main.ts",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../src/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    watchFiles: ["../src/*.html"],
  },
};

export default config;
