const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function getBaseConfiguration(config) {
  return {
    entry: config.entry,
    devtool: 'source-map',
    output: config.output,
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          use: [
            'babel-loader',
          ],
          exclude: /(node_modules|bower_components)/,
        },
        // {
        //   test: /\.svg$/,
        //   use: ['babel-loader', 'react-svg-loader'],
        // },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/font-woff'
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            { loader: 'file-loader' },
          ],
        },
      ],
    },
    resolve: {
      modules: [
        path.resolve('./src'),
        'node_modules',
      ],
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin([config.buildPath], {
        root: config.root,
        verbose: false,
        dry: false,
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  };
}

module.exports = getBaseConfiguration;
