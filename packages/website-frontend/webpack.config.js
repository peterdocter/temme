const HtmlWebpackPlugin = require('html-webpack-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const pkg = require('./package.json')

const webpackConfig = (env, argv) => {
  const prod = argv.mode === 'production'

  const output = prod
    ? {
        publicPath: '/static/',
        path: path.resolve(__dirname, 'dist/static/'),
        filename: '[name].[hash:6].js',
      }
    : {
        publicPath: '/',
        filename: '[name].js',
      }

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: prod ? '../index.html' : 'index.html',
  })

  return {
    context: __dirname,
    target: 'web',
    entry: [
      'normalize.css',
      '@blueprintjs/core/lib/css/blueprint.css',
      path.resolve(__dirname, 'src/index.tsx'),
    ],
    output,

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
          },
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.styl$/,
          loaders: ['style-loader', 'css-loader', 'stylus-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: prod ? '[hash].[ext]' : '[path][name].[ext]',
          },
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        TEMME_VERSION: JSON.stringify(pkg.version),
      }),
      !prod && new webpack.HotModuleReplacementPlugin(),
      htmlWebpackPlugin,
      new MonacoWebpackPlugin(),
    ].filter(Boolean),

    devServer: {
      historyApiFallback: true,
      proxy: {
        '/api': 'http://localhost:3000',
        '/oauth-request': 'http://localhost:3000',
        '/oauth-callback': 'http://localhost:3000',
        '/archive': 'http://localhost:3000',
      },
      hot: true,
    },
  }
}

module.exports = webpackConfig
