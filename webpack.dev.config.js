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
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port: 9000,
        historyApiFallback:true,
        host:'0.0.0.0'
    },
    mode: 'development',
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router'),
            actions:path.join(__dirname,'src/actions'),
            reducers:path.join(__dirname,'src/reducers'),
            redux:path.join(__dirname,'src/redux')
        }
    }
}
