const path = require('path');
module.exports = {
    //多个入口，入口有多少个，就代表被打成多少个包
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname,'src/index.js'),
        path.join(__dirname,'src/redux/testRedux.js')
    ],//__dirname变量:程序运行的根目录  join()将字符串拼接在一起
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:[{
                loader:'babel-loader',
                // query: {
                //     presets: ['@babel/react'],
                //     plugins:[]
                //   }
            }
            ],
            include:path.join(__dirname,'src')
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:8192//小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
                }
            }]
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port: 9000,
        historyApiFallback:true,
        //host默认：localhost;   host:'0.0.0.0',//服务器外部访问  ：http://电脑ip:9000
        open:true//启用 open 后，dev server 会打开浏览器。
    },
    mode: 'development',
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
