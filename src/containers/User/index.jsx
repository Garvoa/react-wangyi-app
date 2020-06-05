import React, { Component } from 'react'
import "./css/index.less"
export default class User extends Component {
  render() {
    return (
      <div className="wrap">
        <header>
          <div className="user">
            <div className="userleft">
              <img src="../../static/touxiang.png" alt="" />
              <div>
                <p>网易严选1358964833</p>
                <span>普通用户</span>
              </div>
            </div>
            <div className="userright">
              <span className="span1">
                <van-icon name="invition" size="0.2rem" />
              </span>

              <div className="diamond">
                <van-icon name="diamond" size="0.2rem" />
                <p>Pro会员</p>
                <p>立即试用</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="myAsset">
            <span className="mymoney">我的资产</span>

            <ul className="assetList">
              <li>
                <p>￥0</p>
                <p>回馈金</p>
              </li>
              <li>
                <p>0</p>
                <p>红包</p>
              </li>
              <li>
                <p>0</p>
                <p>优惠券</p>
              </li>
              <li>
                <p>￥0</p>
                <p>津贴</p>
              </li>
              <li>
                <p>0</p>
                <p>礼品卡</p>
              </li>
            </ul>
          </div>
          <div className="myuMenu">
            <ul className="list">
              <a href="###">
                <li className="item active">
                  <i className="icon-m"></i>
                  <span>我的订单</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>购卡白赚30元</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>周六一起拼</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>售后服务</span>
                </li>
              </a>

              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>邀请返利</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>优选购</span>
                </li>
              </a>

              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>积分中心</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>会员俱乐部</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>地址管理</span>
                </li>
              </a>

              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>账号安全</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>帮助与客服</span>
                </li>
              </a>
              <a href="###">
                <li className="item">
                  <i className="icon-m"></i>
                  <span>意见反馈</span>
                </li>
              </a>
            </ul>
          </div>
        </section>
        <footer>
          {/* <button @click="signOut">退出登录</button> */}
          <button>退出登录</button>
        </footer>
      </div>
    )
  }
}
