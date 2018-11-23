import React from 'react';
import ReactDom from 'react-dom';
import Hello from 'component/Hello/Hello';
import { AppContainer } from 'react-hot-loader';
import getRouter from 'router/router';
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
            {RootElement}
        </AppContainer>,
        document.getElementById('app'));
}
