/**
 * Created by hanguangtian on 2018/1/7.
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const rootPath = path.join(__dirname, '..');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: rootPath + "/dist",
        open: true,
        openPage: 'index.html'
        // hot: true
    },
    plugins: [
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
});