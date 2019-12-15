'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const helpers = require('./helpers');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss', 'md'],
        alias: {
            MD: path.resolve(__dirname, '../src/architecture.md'),
            Assets: path.resolve(__dirname, 'src/assets/'),
        }
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
                include: helpers.root('src', 'assets')
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'to-string-loader',
                    {loader: 'css-loader', options: {sourceMap: isDev}},
                    {loader: 'sass-loader', options: {sourceMap: isDev}}
                ],
                include: helpers.root('src', 'app')
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                options: {}
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'), {root: helpers.root(), verbose: true}),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, '..', 'src', 'architecture.md'),
                to: path.resolve(__dirname, '..', 'src', 'assets')
            }
        ]),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
};
