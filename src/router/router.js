import React from 'react';
import {BrowserRouter ,Switch,Router,Route,Link} from 'react-router-dom';
import Home from 'pages/Home';
import Page1 from 'pages/Page1/Page1';
import Counter from 'pages/Counter/Counter';
import UserInfo from 'pages/UserInfo/UserInfo';
const getRouter = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/page1'>Page1</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/userinfo'>UserInfo</Link></li>
            </ul>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/page1'  component={Page1}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/userinfo' component={UserInfo}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default getRouter;
