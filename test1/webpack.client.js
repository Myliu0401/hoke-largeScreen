const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // 模式
  watch: true, // 开启监听

  entry: "./src/client/index.js",  // 入口文件

  // 输出配置
  output: {
    filename: "js/bundle.[hash:5].js",
    path: path.resolve(__dirname, "./public"),
  },

  // 解析规则
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    extensions: [".js", ".jsx", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.less/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },

      {
        test: /\.(woff|woff2|ttf|TTF|eot|svg)$/, // 匹配字体文件
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "font/", // 输出路径
            publicPath: '../font/'
          },
        },
      },
    ],
  },

  // 配置构建过程中执行的插件。
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        "!favicon.ico",
        "!index.html",
        "!awardRotate.js"
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
