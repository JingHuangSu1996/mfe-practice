const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const pkg = require('../../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: { './AuthIndex': './src/bootstrap' },
      shared: pkg.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
