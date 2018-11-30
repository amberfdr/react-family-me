import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';//Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
import store from 'reduxm/store'
import App from 'components/App/App';
import _ from 'lodash'

import {BrowserRouter ,Switch,Router,Route,Link} from 'react-router-dom';
/*初始化*/
renderWithHotReload(App);//将其他的抽象成组件，开始是函数
/*热更新  当模块更新的时候通知index.js*/
if(module.hot){
    module.hot.accept('components/App/App',() => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    {/* {RootElement} */}
                    <RootElement/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app'));
}
