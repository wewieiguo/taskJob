const {
    merge
} = require('webpack-merge')
const path = require('path');
const commonConfig = require('./webpack.common.js')
const prodConfig = {
    //配置mode为production
    mode: 'production',
    //简洁的sourceMap
    devtool: 'cheap-module-source-map',
    // output: {
    //     path: path.join(__dirname, '..', 'dist'),
    //     filename: '[name].js'
    // }
}
module.exports = merge(commonConfig, prodConfig)