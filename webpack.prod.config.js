const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.join(__dirname, 'src')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?modules', 'sass']
            },
            {
                test: /\.(eot|svg|ttf|otf|woff|woff2)(\?v=.*)?$/,
                exclude: /assets\/.*/,
                loader: 'file?name=/fonts/[name].[ext]'
            },
            {
                test: /assets\/.*\.(jpg|png|svg|mp4)$/,
                loader: 'file?name=assets/[name].[ext]'
            }
        ]
    }
};
