import React from 'react';
import {BrowserRouter ,Switch,Router,Route,Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/Loading/Loading'
const Home = Loadable({loader:() => import('pages/Home'),loading:Loading,delay:300});//默认delay:200
const Page1 = Loadable({loader:() => import('pages/Page1/Page1'),loading:Loading,delay:300});
const Counter = Loadable({loader:() => import('pages/Counter/Counter'),loading:Loading,delay:300});
const UserInfo = Loadable({loader:() => import('pages/UserInfo/UserInfo'),loading:Loading,delay:300});
const NotFound = Loadable({loader:() => import('pages/NotFound/NotFound'),loading:Loading,delay:300});
const getRouter = () => (
    <div>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/page1'  component={Page1}/>
            <Route path='/counter' component={Counter}/>
            <Route path='/userinfo' component={UserInfo}/>
            <Route path='/404' component={NotFound}/>
        </Switch>
    </div>
)

export default getRouter;
