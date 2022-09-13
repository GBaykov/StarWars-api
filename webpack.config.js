/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const esLintPlugin = (isDev) =>
  isDev ? [] : [new ESLintPlugin({ extensions: ["ts", "tsx"] })];

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
          historyApiFallback: true
        }
      };

module.exports = ({ development }) => ({
  
  mode: development ? "development" : "production",
  devtool: development ? "inline-source-map" : false,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: development ? "/" : "",
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]"
  },
  ...devServer(development),



  plugins: [
    ...esLintPlugin(development),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }]
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ development ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [development ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        
          loader: "file-loader",
          options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
          }
      
  },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
            loader: "file-loader",
            options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
            }
        }
    },
      {
        test: /\.(tsx|ts|jsx|js)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js",".jsx", ".ts", ".tsx"]
  }
});
