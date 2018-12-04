const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//在页面加载的时候把相应js加到模板index.html中
const webpack = require('webpack');

const commonConfig = {
    // devtool:'cheap-module-source-map',
    entry:{
        app:[
            // 'react-hot-loader/patch',
            'babel-polyfill',
            path.join(__dirname,'src/index.js')
        ],
        vendor:['react','redux','react-router-dom','react-redux','react-dom']//将公共的三方库打包
    },//__dirname变量:程序运行的根目录  join()将字符串拼接在一起
    output:{
        publicPath:'/',
        path:path.join(__dirname,'./dist'),
        filename:'[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js'
    },
    optimization:{
        splitChunks:{
            name:'vendor'
        }
    },
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
        },
        {
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:8192//小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
                }
            }]
        }
        // ,
        // {
        //     test: /\.css$/,
        //     use: [
        //       {
        //         loader: MiniCssExtractPlugin.loader,
        //       },
        //       "css-loader"
        //     ]
        //   }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        
        // ,
        // new UglifyjsPlugin({
        //     sourceMap: true
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //      }
        //  }),
        //  new CleanWebpackPlugin(['dist']),
        //  new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        //   })
    ],
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            components:path.join(__dirname,'src/components'),
            router:path.join(__dirname,'src/router'),
            actions:path.join(__dirname,'src/redux/actions'),
            reducers:path.join(__dirname,'src/redux/reducers'),
            reduxm:path.join(__dirname,'src/redux'),
            mock:path.join(__dirname,'mock')
        }
    }
}
module.exports = commonConfig;