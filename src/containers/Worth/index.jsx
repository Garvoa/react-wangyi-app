import React, { Component } from 'react'
import "./css/index.less"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import { Pull, } from 'zarm';

const REFRESH_STATE = {
  normal: 0,  // 普通
  pull: 1,    // 下拉刷新（未满足刷新条件）
  drop: 2,    // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

const LOAD_STATE = {
  normal: 0,   // 普通
  abort: 1,    // 中止
  loading: 2,  // 加载中
  success: 3,  // 加载成功
  failure: 4,  // 加载失败
  complete: 5, // 加载完成（无新数据）
};

const getRandomNum = (min, max) => {
  const Range = max - min;
  const Rand = Math.random();
  return (min + Math.round(Rand * Range));
}



export default class Worth extends Component {
  mounted = true;

  state = {
    useBodyScroll: false,
    refreshing: REFRESH_STATE.normal,
    loading: LOAD_STATE.normal,
    dataSource: [],
  };

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    document.body.style.overflow = 'auto';
  }

  // 模拟请求数据
  refreshData = () => {
    this.setState({ refreshing: REFRESH_STATE.loading });
    setTimeout(() => {
      if (!this.mounted) return;

      this.appendData(20, []);
      this.setState({
        refreshing: REFRESH_STATE.success,
      });
    }, 2000);
  }

  // 模拟加载更多数据
  loadData = () => {
    this.setState({ loading: LOAD_STATE.loading });
    setTimeout(() => {
      if (!this.mounted) return;

      const randomNum = getRandomNum(0, 5);
      const { dataSource } = this.state;
      let loading = LOAD_STATE.success;

      console.log(`状态: ${randomNum === 0 ? '失败' : (randomNum === 1 ? '完成' : '成功')}`);

      if (randomNum === 0) {
        loading = LOAD_STATE.failure;
      } else if (randomNum === 1) {
        loading = LOAD_STATE.complete;
      } else {
        this.appendData(20);
      }

      this.setState({ loading });
    }, 2000);
  }

  appendData(length, dataSource) {
    dataSource = dataSource || this.state.dataSource;
    const startIndex = dataSource.length;
    for (let i = startIndex; i < startIndex + length; i++) {
      dataSource.push(
        <div className="list">
          <div className="content">
            <ul>
              <li className="contentitem">
                <img
                  className="m-image"
                  src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                  alt=""
                />
                <p>铁粉们，值得买的新东西来咯~</p>
                <div className="m-lookDetail">
                  <img
                    className="m-userName"
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    alt=""
                  />
                  <span>选妹</span>
                  <img src="../../static/liulan.png" alt="" className="m-userName" />
                  <span>111</span>
                </div>
              </li>
              <li className="contentitem">
                <img
                  className="m-image"
                  src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                  alt=""
                />
                <p>铁粉们，值得买的新东西来咯~</p>
                <div className="m-lookDetail">
                  <img
                    className="m-userName"
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    alt=""
                  />
                  <span>选妹</span>
                  <img src="../../static/liulan.png" alt="" className="m-userName" />
                  <span>112</span>
                </div>
              </li>
              <li className="contentitem">
                <img
                  className="m-image"
                  src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                  alt=""
                />
                <p>铁粉们，值得买的新东西来咯~</p>
                <div className="m-lookDetail">
                  <img
                    className="m-userName"
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    alt=""
                  />
                  <span>选妹</span>
                  <img src="../../static/liulan.png" alt="" className="m-userName" />
                  <span>112</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="content">
            <ul>
              <li className="contentitem">
                <img
                  className="m-image"
                  src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                  alt=""
                />
                <p>铁粉们，值得买的新东西来咯~</p>
                <div className="m-lookDetail">
                  <img
                    className="m-userName"
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    alt=""
                  />
                  <span>选妹</span>
                  <img src="../../static/liulan.png" alt="" className="m-userName" />
                  <span>111</span>
                </div>
              </li>
              <li className="contentitem">
                <img
                  className="m-image"
                  src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                  alt=""
                />
                <p>铁粉们，值得买的新东西来咯~</p>
                <div className="m-lookDetail">
                  <img
                    className="m-userName"
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    alt=""
                  />
                  <span>选妹</span>
                  <img src="../../static/liulan.png" alt="" className="m-userName" />
                  <span>112</span>
                </div>
              </li>
              <li className="contentitem">
                <img
                  className="m-image"
                  src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                  alt=""
                />
                <p>铁粉们，值得买的新东西来咯~</p>
                <div className="m-lookDetail">
                  <img
                    className="m-userName"
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    alt=""
                  />
                  <span>选妹</span>
                  <img src="../../static/liulan.png" alt="" className="m-userName" />
                  <span>112</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    this.setState({ dataSource });
  }

  toggleScrollContainer = () => {
    this.setState({
      useBodyScroll: !this.state.useBodyScroll,
    })
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项
      slidesPerView: 4,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          var customPaginationHtml = ''
          for (var i = 0; i < total; i++) {
            //判断哪个分页器此刻应该被激活
            if (i === current - 1) {
              customPaginationHtml +=
                '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
            } else {
              customPaginationHtml +=
                '<span class="swiper-pagination-customs"></span>'
            }
          }
          return customPaginationHtml
        }
      }
    })
    this.appendData(20)
  }
  render() {
    const { useBodyScroll, refreshing, loading, dataSource } = this.state;
    const style = useBodyScroll ? {} : { position: 'relative', overflowY: 'auto', maxHeight: 400 }
    return (
      <div className="worthBuy">
        <header>
          <a href="###" className="home">
            <van-icon name="home-o" size="0.3rem" />
          </a>
          <span>值得买</span>

          <a href="###" className="shopping">
            <van-icon name="cart-o" size="0.3rem" />
          </a>
          <a href="###" className="search">
            <van-icon name="search" size="0.3rem" />
          </a>
        </header>


        <section>

          <Pull
            style={style}
            refresh={{
              state: refreshing,
              handler: this.refreshData,
            }}
            load={{
              state: loading,
              distance: 200,
              handler: this.loadData,

            }}
          >
            <div className="swiper">
              <div className="font">
                <span className="worthBuyfont">值得买</span>
                <span>严选好物 用心生活</span>
              </div>
              <div>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/c61f80c59ecd986c3a87599b8403a16f.gif?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/c61f80c59ecd986c3a87599b8403a16f.gif?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/c61f80c59ecd986c3a87599b8403a16f.gif?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/c61f80c59ecd986c3a87599b8403a16f.gif?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/c61f80c59ecd986c3a87599b8403a16f.gif?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/c61f80c59ecd986c3a87599b8403a16f.gif?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                      <div className="swiper-item">
                        <img
                          src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"
                          alt=""
                        />
                        <span>入选就有红包</span>
                        <span>员工精选</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 如果需要分页器 --> */}
                  <div className="swiper-pagination"></div>

                  {/* <!-- 如果需要导航按钮 -->
          <!-- <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>-->

          <!-- 如果需要滚动条 --> */}
                  {/* <div className="swiper-scrollbar"></div> */}
                </div>
              </div>
            </div>
            <div className="list">
              <div className="content">
                <ul>
                  <li className="contentitem">
                    <img
                      className="m-image"
                      src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                      alt=""
                    />
                    <p>铁粉们，值得买的新东西来咯~</p>
                    <div className="m-lookDetail">
                      <img
                        className="m-userName"
                        src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                        alt=""
                      />
                      <span>选妹</span>
                      <img src="../../static/liulan.png" alt="" className="m-userName" />
                      <span>111</span>
                    </div>
                  </li>
                  <li className="contentitem">
                    <img
                      className="m-image"
                      src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                      alt=""
                    />
                    <p>铁粉们，值得买的新东西来咯~</p>
                    <div className="m-lookDetail">
                      <img
                        className="m-userName"
                        src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                        alt=""
                      />
                      <span>选妹</span>
                      <img src="../../static/liulan.png" alt="" className="m-userName" />
                      <span>112</span>
                    </div>
                  </li>
                  <li className="contentitem">
                    <img
                      className="m-image"
                      src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                      alt=""
                    />
                    <p>铁粉们，值得买的新东西来咯~</p>
                    <div className="m-lookDetail">
                      <img
                        className="m-userName"
                        src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                        alt=""
                      />
                      <span>选妹</span>
                      <img src="../../static/liulan.png" alt="" className="m-userName" />
                      <span>112</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content">
                <ul>
                  <li className="contentitem">
                    <img
                      className="m-image"
                      src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                      alt=""
                    />
                    <p>铁粉们，值得买的新东西来咯~</p>
                    <div className="m-lookDetail">
                      <img
                        className="m-userName"
                        src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                        alt=""
                      />
                      <span>选妹</span>
                      <img src="../../static/liulan.png" alt="" className="m-userName" />
                      <span>111</span>
                    </div>
                  </li>
                  <li className="contentitem">
                    <img
                      className="m-image"
                      src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                      alt=""
                    />
                    <p>铁粉们，值得买的新东西来咯~</p>
                    <div className="m-lookDetail">
                      <img
                        className="m-userName"
                        src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                        alt=""
                      />
                      <span>选妹</span>
                      <img src="../../static/liulan.png" alt="" className="m-userName" />
                      <span>112</span>
                    </div>
                  </li>
                  <li className="contentitem">
                    <img
                      className="m-image"
                      src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
                      alt=""
                    />
                    <p>铁粉们，值得买的新东西来咯~</p>
                    <div className="m-lookDetail">
                      <img
                        className="m-userName"
                        src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                        alt=""
                      />
                      <span>选妹</span>
                      <img src="../../static/liulan.png" alt="" className="m-userName" />
                      <span>112</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {dataSource}
          </Pull>
        </section>
      </div>
    )
  }
}
