import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from 'reduxm/reducers';
//这里需要redux-thunk 涉及到middleWare中间件
//因为reducer只能处理{type:...}这样的action,不能处理action函数，
//所有redux-thunk的作用：将action函数处理成标准action,然后让reducer处理

//引入自己自定义的中间件
import promiseMiddleware from './middleware/promiseMiddleware';
//redux 模块热替换配置
if(module.hot){
    module.hot.accept('./reducers',()=>{
        const nextCombineReducers = require('./reducers').default;
        store.replaceReducer(nextCombineReducers);
    })
}
let store = createStore(combineReducers,applyMiddleware(promiseMiddleware));
//let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));
export default store;


//实现原理：
// let combileReducers=(state,action)=>{
//     return counter(state,action)
//  }
//  let store ={
//      state:{},
//    reducers:combileReducers,
//    lisenters:[],
//    dispatch:(action)=>{
//    this.state= this.reducers(this.state,action)
//    this.lisenters.map(item=>item(this.state))
//    },
//    subscrible:(item)=>{
//     this.lisenters.push(item)
//    }
//  };
