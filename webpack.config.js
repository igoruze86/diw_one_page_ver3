const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/assets/js/nav.js','./src/assets/js/main.js'],
  output: {
    filename: 'assets/js/main.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
      chunkFilename: "[id].css"
      }),
    new OptimizeCssAssetsPlugin({
      assetName: 'assets/css/style.css',
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'contact_page.html',
      template: './src/contact_page.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'job_page_fed.html',
      template: './src/job_page_fed.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'job_page_pm.html',
      template: './src/job_page_pm.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'job_page_design.html',
      template: './src/job_page_design.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
     rules: [
       {
         test: /\.(sa|sc|c)ss$/,
         use: [
           MiniCssExtractPlugin.loader,
           'css-loader',
           'sass-loader',
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
               emitFile: true,
               name: '[name].[ext]',
               outputPath: 'assets/img/'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: '65'
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: {
              loader: 'html-loader',
              options: {
                  minimize: false,
                  attrs: ['img:src', 'source:srcset', 'img:srcset']
              }
            }
          }, 
     ]
   },
   watch: true,
   devtool: 'inline-source-map',
   devServer: {
     hot: true,
     contentBase: path.resolve(__dirname,'dist')
   },
};
