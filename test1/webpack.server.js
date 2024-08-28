const path = require("path");

const nodeExternals = require("webpack-node-externals"); // 使用 webpack-node-externals 插件进行外部模块排除

module.exports = {
  mode: "development", // 模式
  watch: true, // 开启监听

  target: "node", // 运行环境

  entry: "./src/server/index.js", // 入口文件

  // 输出配置
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "./dist"),
  },

  externals: [nodeExternals()], 

  // 解析规则
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    extensions: [".js", ".jsx", ".css"], // 按照后缀进行匹配
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
        use: ["isomorphic-style-loader", "css-loader"],
      },
      {
        test: /\.less/,
        use: ["isomorphic-style-loader", "css-loader", "less-loader"],
      },
      
    ],
  },

  // 配置构建过程中执行的插件。
  plugins: [],
};
