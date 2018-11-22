const path = require('path');
console.log(__dirname);
module.exports = {
    entry: path.join(__dirname,'src/index.js'),//__dirname变量:程序运行的根目录  join()将字符串拼接在一起
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:[{
                loader:'babel-loader?catchDirectory=true',
                query: {
                    presets: ['@babel/react']
                  }
            }
            ],
            include:path.join(__dirname,'src')
        }]
    }
}
