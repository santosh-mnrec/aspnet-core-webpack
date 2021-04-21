const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob')
const bundleFileName = 'bundle';
const dirName = 'wwwroot/dist';
const webpack = require("webpack");
const CssnanoPlugin = require('cssnano-webpack-plugin');
module.exports = (env, argv) => {
    return {
        mode: argv.mode === "production" ? "production" : "development",
        entry: ['./src/index.js', './src/sass/index.scss'],
        output: {
            filename: bundleFileName + '.js',
            path: path.resolve(__dirname, dirName)
        },
        module: {
            rules: [
                {
                    test: /\.s[c|a]ss$/,
                    use:
                        [
                            'style-loader',
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    config: {
                                        ctx: {
                                            env: argv.mode
                                        }
                                    }
                                }
                            },
                            'sass-loader'
                        ]  
                },
            ]
        },
       optimization: {
                            minimizer: [
               new CssnanoPlugin(), new UglifyJsPlugin()
           ],

                          },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: bundleFileName + '.css'
            }),
            new PurgecssPlugin({
                paths: glob.sync('./Views/**/*.cshtml', { nodir: true }),
                whitelistPatterns: [ /selectize-.*/ ]
            }),
            new CssnanoPlugin()
        ]
    };
};