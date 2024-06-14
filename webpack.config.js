const path = require("path");

module.exports = {
  "mode": "development",
  "devtool": "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    hot: "only",
    host: "0.0.0.0",
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "public"),
      publicPath: "/",
      watch: true,
    },
    watchFiles: ["src/**/*.js"],
  },
};
