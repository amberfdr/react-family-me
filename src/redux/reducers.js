import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
//优化：利用redux提供的函数来合并reducers
import {combineReducers} from 'redux';
export default combineReducers({counter,userInfo});

// export default function combineReducers(state={},action){
//     debugger
//     //把多个子reducer合并成一个单一的state树
//    return {
//     counter:counter(state.counter,action),
//     userInfo:userInfo(state.userInfo,action)
//    }
// }