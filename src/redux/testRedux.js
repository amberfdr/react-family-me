import {increment,decrement,reset} from 'actions/counter';
import store from 'reduxm/store';

//打印初始状态
console.log(store.getState());
//state每次更新，打印日志
//subscribe监听器返回一个函数用来注销监听器。
let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
);

//发起一系列的action
//store action state 

//dispatch action-> 触发reducer state更新-> combineReducers  -> store 
/**
 * 1.dispatch发起action请求
 * 2.从根state树，combineReducers，根据action.type触发对应的单一reducer,更新state
 * 3.combineReducers返回新的state树
 *  */
//store.dispatch(increment());
//store.dispatch(decrement());
//store.dispatch(reset());

//停止监听state
unsubscribe();