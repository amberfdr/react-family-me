import React,{Component} from 'react';

import {BrowserRouter ,Switch,Router,Route,Link} from 'react-router-dom';

export default class Nav extends Component {

    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/page1'>Page1</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                    <li><Link to='/userinfo'>UserInfo</Link></li>
                </ul>
            </div>
        )
    }
}
