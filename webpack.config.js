const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    "react-typed-component": "./src/index.js",
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    libraryTarget: "umd",
    library: "react-typed-component",
    globalObject: "this",
  },

  plugins: [new CopyPlugin({ patterns: ["./src/animatedCursor.css"] })],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        type: "css/auto",
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
