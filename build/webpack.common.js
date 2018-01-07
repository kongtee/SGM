/**
 * Created by hanguangtian on 2018/1/7.
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '..');

module.exports = {
    entry: rootPath + "/src/index.js",
    output: {
        path: rootPath + "/dist/js",
        filename: "bundle-[chunkHash:5].js"
        // filename: "js/[name]-[chunkHash:5].js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '首页',
            filename: rootPath + '/index.html',
            template: './public/index.html',
            inject: true
        })
    ]
};