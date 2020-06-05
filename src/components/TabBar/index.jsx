import React, { Component } from 'react'
import "./css/index.less"
import { Link, Route, NavLink } from "react-router-dom";
export default class TaBBar extends Component {
  state = {
    activeKey: '1',
    visible: true
  };

  render() {

    return (


      <ul className="tabbar">
        <NavLink to="home">
          <li>
            <span className="iconfont icon-shouye" />
            <div>主页</div>
          </li>
        </NavLink>
        <NavLink to="list">
          <li> <span className="iconfont icon-fenlei" />
            <div>分类</div>
          </li>
        </NavLink>
        <NavLink to="worth">
          <li><span className="iconfont icon-maishui" />
            <div>值得买</div>
          </li>
        </NavLink>
        <NavLink to="shopping">
          <li>
            <span className="iconfont icon-gouwuchekong" />
            <div>购物车</div>
          </li>
        </NavLink>
        <NavLink to="user">
          <li>
            <span className="iconfont icon-geren" />
            <div>个人</div>
          </li>
        </NavLink>




      </ul>

    )
  }
}