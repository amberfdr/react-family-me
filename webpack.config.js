const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');//文件压缩
const webpack = require('webpack');
module.exports = {
    devtool:'cheap-module-source-map',
    entry:{
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'src/index.js')
        ],
        vendor:['react','redux','react-router-dom','react-redux','react-dom']
    },
    optimization:{
        splitChunks:{
            name:'vendor'
        }
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'src/index.html')
        }),
        new UglifyjsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
         new webpack.HashedModuleIdsPlugin()
        
    ],
    optimization:{
        splitChunks:{
            name:'runtime'
        }
    },//声明vendor实例必须在runtime实例之前
    module:{
        rules:[{
            test:/\.js$/,
            use:[{
                loader:'babel-loader',
            }
            ],
            exclude:path.join(__dirname,'node_modules'),
            include:path.join(__dirname,'src')
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:8192
                }
            }]
        }]
    },
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router'),
            actions:path.join(__dirname,'src/redux/actions'),
            reducers:path.join(__dirname,'src/redux/reducers'),
            reduxm:path.join(__dirname,'src/redux')
        }
    }
}