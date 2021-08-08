const {
    merge
} = require('webpack-merge');
const webpackBaseConf = require('./webpack.common.js');
const path = require('path');

module.exports = merge(webpackBaseConf, {
    devtool: 'inline-source-map',
    devServer: { // webpack提供一个不需手动刷新页面，根据代码更新而自动刷新的web服务器，其他参数大可以在用到的时候查询一下。
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true,
    },
    optimization: {
        usedExports: true
    },
    mode: 'development',
});