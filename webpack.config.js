const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');//文件压缩
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');//每次打包前清除历史打包文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//抽取css,分开打包
const axios = require('axios');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const publicConfig = {
    devtool:'cheap-module-source-map',
    plugins:[
        new UglifyjsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
         new CleanWebpackPlugin(['dist/*.*']),
         new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
        
    ],
    
    module:{
        rules:[{
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              "css-loader?modules&localIdentName=[local]-[hash:base64:5]",'postcss-loader'
            ]
        }]
    }
}

module.exports = merge(commonConfig,publicConfig);