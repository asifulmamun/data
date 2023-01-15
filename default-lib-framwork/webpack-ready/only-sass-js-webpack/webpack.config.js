const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries'); // fix js come output with css


module.exports = {
    watch: true,
    devtool: "source-map",
    mode: 'development',
    // mode: 'production',


    entry: {
        // js
        'js/app': ['./js/app.js'],
        'js/woo': ['./js/woo.js'],

        // css
        'css/app': ['./sass/app.scss'],
        'css/woo': ['./sass/woo.scss'],
    },


    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/')
    },


    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new FixStyleOnlyEntriesPlugin(), // for remove js file extra after transpile css from scss

    ]
}
