/**
 * Created by hanguangtian on 2018/1/7.
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('webpack.common');
const rootPath = path.join(__dirname, '..');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: rootPath,
        open: true,
        openPage: 'index.html',
    }
});