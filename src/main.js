import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './static/css/react.css'
import './static/css/common.css'
import './static/font/iconfont.css'
import router from './router/router.config'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import RouterWrapper from './components/routeWrapper'
import { Provider } from 'react-redux'
import store from './store/store'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/index/home"></Redirect>
                <RouterWrapper routes={router.routes}></RouterWrapper>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)