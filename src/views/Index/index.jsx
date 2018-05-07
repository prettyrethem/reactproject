import React, { Component } from 'react';
import './Index.css'
import RouterWrapper from '../../components/routeWrapper'
import {NavLink} from 'react-router-dom'

class Index extends Component
{
    render() {
        let {routes} = this.props
        return (
            <div id="index">
                <div className="content">
                    <RouterWrapper routes={routes}></RouterWrapper>
                </div>
                <ul className="footer">
                    <li>
                        <NavLink to="/index/home" activeClassName="bg">
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index/buy" activeClassName="bg">
                            <span>买车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index/sale" activeClassName="bg">
                            <span>卖车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index/mine" activeClassName="bg">
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Index;