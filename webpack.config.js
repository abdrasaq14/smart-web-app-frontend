const { merge } = require('webpack-merge');
const dotenvWebpack = require('dotenv-webpack');

// Get common Webpack config for all environments
const commonConfig = require('./build_config/webpack.common');

// Merge additional webpack config for different environments (dev, prod)
module.exports = (env) => {
    const envConfig = require(`./build_config/webpack.${env.mode}.js`); //eslint-disable-line

    return merge(commonConfig, envConfig, {
        plugins: [
            new dotenvWebpack(), // This will load the .env file automatically
        ],
    });
};
