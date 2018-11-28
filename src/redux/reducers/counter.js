import {INCREMENT,DECREMENT,RESET} from 'actions/counter'
const initState = {
    count:0
}

export default function counter (state=initState,action){
    
    switch(action.type){
        case INCREMENT:
        console.log("我是纯函数")
        return {
            count:state.count+1
        }
        case DECREMENT:
        return {
            count:state.count-1
        }
        case RESET:
        return {
            count:0
        }
        default:
        console.log('默认state  counter',action.type);
        return state
        
    }
}