/**
 * Created by hanguangtian on 2018/1/7.
 */
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const cleanPath = ['dist', '*.html'];
const cleanOption = {
    root: rootPath,
    verbose: true,
    dry: false
};

module.exports = {
    entry: {
        index: rootPath + "/src/index.js"
    },
    output: {
        path: rootPath + "/dist/js/",
        filename: "[name]-[chunkHash:5].js"
        // publicPath: "./dist/js/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: './index.html',
            template: './public/index.html',
            inject: true
        })
        // new CleanWebpackPlugin(cleanPath, cleanOption)
    ]
};