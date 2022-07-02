const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './JS/main.js'),

    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        port: '5500',
        compress: true,
        open: true,
        hot: true,
        proxy: {
          '/': {
            target: '*',
            changeOrigin: true
          }
        }
      },
    plugins: [
        new HtmlWebpackPlugin({
          filename: "./index.html",
          template: "./JS/template.html",
        }),
    ],
}