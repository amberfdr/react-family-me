const path = require('path');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname,'src/index.js')
    ],//__dirname变量:程序运行的根目录  join()将字符串拼接在一起
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
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
    mode:'none',
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router')
        }
    }
}
