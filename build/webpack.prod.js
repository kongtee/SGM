/**
 * Created by hanguangtian on 2018/1/7.
 */
const merge = require('webpack-merge');
const common = require('webpack.common');

module.exports = merge(common, {
    devtool: 'source-map'
});