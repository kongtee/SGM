/**
 * Created by hanguangtian on 2018/1/7.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('webpack.common');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});