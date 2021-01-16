const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// const { NODE_ENV } = process.env;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  context: path.resolve(__dirname, ""),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      title: "project-x",
    }),
    new Dotenv(),
    // NODE_ENV !== "production" && new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        use: ["babel-loader", "eslint-loader"],
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ["babel-loader", "eslint-loader"],
        test: /\.jsx$/,
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //     },
      //   ],
      // },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      // minSize: 10,
      // minRemainingSize: 0,
      // maxSize: 20000,
      // minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   commons: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //     name: 'vendor',
      //     chunks: 'initial',
      //   },
      //   // defaultVendors: {
      //   //   test: /[\\/]node_modules[\\/]/,
      //   //   priority: -10,
      //   //   reuseExistingChunk: true,
      //   // },
      //   // default: {
      //   //   minChunks: 2,
      //   //   priority: -20,
      //   //   reuseExistingChunk: true,
      //   // },
      // },
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: '[name].bundle.js',
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/",
  },
};
