const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        infrablockchainjs_api: './src/infrablockchain-js-api.ts',
        infrablockchainjs_jsonrpc: './src/rpc-web.ts',
        infrablockchainjs_jssig: './src/infrablockchain-js-jssig.ts',
        infrablockchainjs_numeric: './src/infrablockchain-js-numeric.ts',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.json'
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*'] }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            buffer: 'buffer',
            crypto: 'crypto-browserify'
        }
    },
    output: {
        filename: x => x.chunk.name.replace('_', '-') + '.min.js',
        library: '[name]',
        path: path.resolve(__dirname, 'dist-web'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'externals',
                    filename: 'externals.min.js',
                    chunks: 'all'
                },
            },
        },
    }
};
