const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('./common');

const config = {
	// Set webpack build mode
	mode: 'production',
	output: {
		filename: '[name].bundle.[chunkhash].js',
	},
	devtool: false,
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: commonPaths.public,
					to: commonPaths.outputPath,
					globOptions: {
						ignore: ['**/index.tmpl.html'],
					},
				},
			],
		}),
		// Ensure dotenv-webpack is included here to load .env variables
		new dotenvWebpack(),
	],
	optimization: {
		runtimeChunk: false,
		splitChunks: {
			chunks: 'all',
		},
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
};

module.exports = config;
