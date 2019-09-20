'use strict';

const webpackMerge = require('webpack-merge');
// const AngularCompilerPlugin = require('@ngtools/webpack');
const commonConfig = require('./webpack.config.common');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].dev-chunk.js'
    },

    optimization: {
        noEmitOnErrors: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('tsconfig.json')
                        }
                    },
                    'angular2-template-loader',
                    'angular-router-loader'
                ],

                exclude: [/node_modules/],

            },
            // {
            //     test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            //     loader: '@ngtools/webpack'
            // }
        ]
    },
    // plugins: [
    //     new AngularCompilerPlugin({
    //         tsConfigPath: 'path/to/tsconfig.json',
    //         entryModule: 'path/to/app.module#AppModule',
    //         sourceMap: true
    //     })
    // ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
