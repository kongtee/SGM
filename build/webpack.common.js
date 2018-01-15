/**
 * Created by hanguangtian on 2018/1/7.
 */
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const cleanPath = ['dist', '*.html'];
const cleanOption = {
    root: rootPath,
    verbose: true,
    dry: false
};
const extractCSS = new ExtractTextPlugin({
    filename: "/dist/css/[name]-[chunkHash:5].css",
    allChunks: true
});
const extractLESS = new ExtractTextPlugin({
    filename: "/dist/css/[name]-less-[chunkHash:5].css",
    allChunks: true
});

module.exports = {
    entry: {
        index: rootPath + "/src/index.js",
        vue: ["vue", "vuex", "axios"],
        element: ["element-ui"]
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
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract(['css-loader', 'less-loader'])
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
        }),
        extractCSS,
        extractLESS,
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "element"],
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        })
        // new CleanWebpackPlugin(cleanPath, cleanOption)
    ]
};