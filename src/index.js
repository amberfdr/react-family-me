import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';//Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
import store from 'reduxm/store'
import getRouter from 'router/router';
import _ from 'lodash'
/*初始化*/
renderWithHotReload(getRouter())
/*热更新  当模块更新的时候通知index.js*/
if(module.hot){
    module.hot.accept('router/router',() => {
        const getRouter = require('router/router').default;
        console.log(getRouter());
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
            {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app'));
}
