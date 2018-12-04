const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');//webpack-merge来合并公共配置和单独的配置
const webpack = require('webpack');
const devConfig = {
    devtool:'inline-source-map',
    entry:{
        app:[
            'babel-polyfill',//babel-plugin-transform-runtime不支持
            'react-hot-loader/patch',
            path.join(__dirname,'src/index.js')
        ]
    },
    output:{
        //这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协
        filename:'[name].[hash].js'
    },
    //style-loader和css-loader是工具名称。
    //!感叹号是分割符，表示两个工具都参与处理。
    //?问号，其实跟url的问号一样，就是后面要跟参数的意思。
    //而modules这个参数呢，就是将css打包成模块。跟js打包是一样的，你不必再担心不同模块具有相同类名//时造成的问题了。
    module:{
        rules:[{
            test:/\.(css|scss)$/,
            use:['style-loader','css-loader?modules&localIdentName=[local]-[hash:base64:5]','postcss-loader']
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port: 9000,
        historyApiFallback:true,
        //host默认：localhost;   host:'0.0.0.0',//服务器外部访问  ：http://电脑ip:9000
        open:true//启用 open 后，dev server 会打开浏览器。
    },
    plugins:[
        new webpack.DefinePlugin({
            MOCK:true
        })
    ]
}

module.exports = merge({
    customizeArray(a,b,key){
        if(key === 'entry.app'){
            return b;
        }
        return undefined;
    }
})(commonConfig,devConfig)
