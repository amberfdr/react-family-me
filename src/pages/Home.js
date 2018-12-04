import React,{Component} from 'react';
import { hot } from 'react-hot-loader';
 class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    
    _handleClick = () => {
        this.setState({
            count:++this.state.count
        })
    }
    render(){
        return(
            <div>
                This is Home!kls2323fs245wemmlo34 <br/>
                计数器现在显示的数字是：{this.state.count}<br/>
                <button onClick={() =>  this._handleClick()}>自增</button>
            </div>
        )
    }
}
export default hot(module)(Home);