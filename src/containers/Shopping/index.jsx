import React, { Component } from 'react'
import "./css/index.less"
export default class Shopping extends Component {
  render() {
    return (
      <div>
        <div className="m-cartHd">
          <span className="left">购物车</span>

          <a href="javascript;" className="right">
            <span>领券</span>
          </a>
        </div>
        <ul className="g-grow">
          <li className="item">
            <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="" />
            <span>网易自营品牌</span>
          </li>
          <li className="item">
            <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="" />
            <span>30天无忧退货</span>
          </li>
          <li className="item">
            <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="" />
            <span>48小时快速退款</span>
          </li>
        </ul>
        <div className="container">
          <van-icon name="shopping-cart-o" size="1rem" />
          <van-button type="danger">登录</van-button>
        </div>
      </div>
    )
  }
}
