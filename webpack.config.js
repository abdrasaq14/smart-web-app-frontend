const { merge } = require('webpack-merge');
const dotenvWebpack = require('dotenv-webpack');

// Get common Webpack config for all environments
const commonConfig = require('./build_config/webpack.common');

module.exports = (env) => {
	const envConfig = require(`./build_config/webpack.${env.mode}.js`); //eslint-disable-line

	return merge(commonConfig, envConfig, {
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif|svg)$/i,
					type: 'asset/resource', // Handles local image assets
				},
			],
		},
		plugins: [
			new dotenvWebpack(), // This will load the .env file automatically
		],
		devServer: {
			port: 3000, // Ensures the development server runs on port 3000
			hot: true, // Enables hot module replacement for faster development
			historyApiFallback: true, // Ensures the app works with client-side routing
			headers: {
				'Access-Control-Allow-Origin': '*', // Allow all origins during development
				'Content-Security-Policy':
					"img-src 'self' https://*.tile.openstreetmap.org https://cdnjs.cloudflare.com data:;",
			},
			proxy: {
				// Proxy API requests if necessary (example setup)
				'/api': {
					target: 'http://localhost:5000',
					secure: false, // Disable SSL verification for local development
				},
			},
		},
	});
};
