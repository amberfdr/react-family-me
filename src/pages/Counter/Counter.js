import React,{Component} from 'react';
import { connect } from 'react-redux';
import {increment,decrement,reset} from 'actions/counter'
class Counter extends Component{
    render(){
        return(
            <div>
                <div>当前计数为（显示redux计数）：</div>
                <button onClick={() => {console.log('调用自增函数')}}>自增</button>
                <button onClick={() => {console.log('调用自减函数')}}>自减</button>
                <button onClick={() => {console.log('调用重置函数')}}>重置</button>
            </div>
        )
    }
}

//通过react-redux中的connect方法，mapStateToProps从redux中的state树读取部分数据，并通过props传递给要渲染的组件；mapDispatchToProps就是把发射action的方法，转换为该组件的属性函数
const mapStateToProps = (state) => {
    return{
        counter:state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return{
        increment:() => {dispatch(increment())},
        decrement:() => {dispatch(decrement())},
        reset:() => {dispatch(reset())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
