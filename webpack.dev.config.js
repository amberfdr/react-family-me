const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');//webpack-merge来合并公共配置和单独的配置
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
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port: 9000,
        historyApiFallback:true,
        //host默认：localhost;   host:'0.0.0.0',//服务器外部访问  ：http://电脑ip:9000
        open:true//启用 open 后，dev server 会打开浏览器。
    }
}

module.exports = merge({
    customizeArray(a,b,key){
        if(key === 'entry.app'){
            return b;
        }
        return undefined;
    }
})(commonConfig,devConfig)
