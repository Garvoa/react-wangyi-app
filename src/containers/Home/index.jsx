import React, { Component } from 'react'
import { createSaveHomeAction } from "../../redux/actions/home"
import "./css/index.less"
import IScroll from "iscroll/build/iscroll-lite"
import { Collapse, Carousel, Modal, Tabs } from 'zarm';
import { connect } from "react-redux"
import { reqHome } from "../../api"

const { Panel } = Tabs;
// 数据
class Home extends Component {
  state = {
    animated: true, //是否有过渡效果
    activeKey: '0', //默认为0不展示下拉导航列表
    modal: false, //是否显示
    panelValue: 0,  //导航栏下标
    ITEMS: [], //轮播图
    kingKongList: [],
    policyDescList: [],
    indexActivityModule: []

  }
  iscroll = {}
  wrapper = React.createRef();
  whole = React.createRef();
  navList = React.createRef();
  //打开遮罩层
  open = () => {
    this.setState({
      modal: true,
    });
  }
  //关闭遮罩层，以及收回下拉列表
  close = () => {
    this.setState({
      modal: false,
      activeKey: '0'
    });
    this.wrapper.current.style.display = "block"
    this.whole.current.style.display = "none"
  }
  onChange = (activeKey) => {
    if (activeKey === "3") {
      this.wrapper.current.style.display = "none"
      this.whole.current.style.display = "block"
      this.open()
    } else {
      this.close()
    }
    this.setState({ activeKey })
  }
  switchPage = (e) => {
    //给点击的导航标签添加类名
    if (typeof e === "number" || e.target.localName === 'button') {
      this.close()
      this.navList.current.childNodes.forEach((element, index) => {
        element.className = "cateTag"
        if (index === e || (e.target && e.target.innerText) === element.innerText) {
          element.className = "cateTag nav-selsect-active"

          const { style, clientWidth } = this.wrapper.current.children[0]
          let translateX
          if (index === this.navList.current.childNodes.length - 1) {
            translateX = index - 1
          }
          setTimeout(() => {
            //点哪里，移动到哪里
            style.transform = `translate(${-clientWidth / 9 / 1.5 * (translateX || index)}px,0px)`
            this.iscroll.x = (translateX || index) * (-clientWidth / 9 / 1.5)
          }, 500)
          this.setState({
            panelValue: index
          })
        }

      });
      if (e.target) {
        e.target.className = "cateTag nav-selsect-active"
      }
    }

  }
  jump = (val) => {
    this.setState({
      panelValue: val
    })
    this.switchPage(val)
  }
  reqHomeData = () => {
    return reqHome()
  }
  componentDidMount() {
    //横向滚动
    this.iscroll = new IScroll('#wrapper', {
      mouseWheel: true,
      scrollbars: 'custom',
      scrollX: true,
      interactiveScrollbars: true,
      startX: 0,
    })
    //发送请求
    this.reqHomeData().then((result) => {
      const { data, code, msg } = result.data
      if (code === 200) {
        this.props.getHome(data)
        const { policyDescList, focusList, kingKongModule, indexActivityModule } = this.props.homeData
        this.setState({
          ITEMS: focusList,
          policyDescList,
          kingKongList: kingKongModule.kingKongList,
          indexActivityModule
        })

      } else {
        alert(msg)
      }
    })


  }
  render() {
    const { animated, activeKey, modal, panelValue, ITEMS, policyDescList, kingKongList, indexActivityModule } = this.state;
    return (

      <div className="home">
        <div className="nav-head">
          <nav>
            <div className="nav-head-line">
              <h1>
                <img
                  className="logo"
                  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
                  alt="网易严选"
                />
              </h1>

              <button className="loginSeach">

                <span>搜索商品，共254615款好物</span>
              </button>
              <button className="loginBtn">登录</button>
            </div>
            <div className="nav-selsect">
              <div className="outer">
                <div id="wrapper" ref={this.wrapper}>
                  <ul>
                    <Tabs value={panelValue} lineWidth={50} onChange={this.jump}>
                      <Panel className="li" title="推荐"></Panel>
                      <Panel className="li" title="居家生活"></Panel>
                      <Panel className="li" title="服饰鞋包"></Panel>
                      <Panel className="li" title="美食酒水"></Panel>
                      <Panel className="li" title="个护清洁"></Panel>
                      <Panel className="li" title="母婴亲子"></Panel>
                      <Panel className="li" title="运动流行"></Panel>
                      <Panel className="li" title="数码家电"></Panel>
                      <Panel className="li" title="严选全球"></Panel>
                    </Tabs>
                  </ul>

                </div>
              </div>
              <span className="whole" ref={this.whole}>全部频道</span>
              <Collapse disabled activeKey={activeKey} animated={animated} onChange={this.onChange}>
                <Modal
                  visible={modal}
                  maskClosable
                  onCancel={() => this.close()}
                >
                </Modal>
                <Collapse.Item key="3" >
                  <div className="moreCate" onClick={this.switchPage} ref={this.navList}>
                    <button className="cateTag nav-selsect-active" >推荐</button>
                    <button className="cateTag">居家生活</button>
                    <button className="cateTag">服饰鞋包</button>
                    <button className="cateTag">美食酒水</button>
                    <button className="cateTag">个护清洁</button>
                    <button className="cateTag">母婴亲子</button>
                    <button className="cateTag">运动流行</button>
                    <button className="cateTag">数码家电</button>
                    <button className="cateTag">严选全球</button>
                  </div>
                </Collapse.Item>
              </Collapse>
            </div>
            <div className="nav-Line"></div>
          </nav>
        </div>
        <section>
          <Carousel
            autoPlay
            loop
            direction="left"
          >
            {ITEMS.map((item, i) => {
              return (
                <div className="carousel__item__pic" key={+i}>
                  <img src={item.picUrl} alt="" draggable={false} />
                </div>
              )
            })}
          </Carousel>
          <ul className="g-grow">
            {
              policyDescList && policyDescList.map((item, index) => {
                return (
                  <li className="item" key={index}>
                    <img src={item.icon} alt="" />
                    <span>{item.desc}</span>
                  </li>)
              }
              )
            }
          </ul>
          <ul className="goodsList">
            {
              kingKongList && kingKongList.map((kingKong, index) => {
                return (
                  <li className="goodsItem" key={index}>
                    <img src={kingKong.picUrl} alt="" />
                    <span>{kingKong.text}</span>
                  </li>
                )
              })
            }
          </ul>
          <div className="promotionModule">
            <div className="promItem">
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/7fd95465634b18169466121fae470269.png?quality=75&type=webp&imageView&thumbnail=750x0"
                  alt=""
                />
              </a>
            </div>

            <div className="promItem">
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/6dc4a8e77b84faef0264dc427c4b1b8b.png?quality=75&type=webp&imageView&thumbnail=750x0"
                  alt=""
                />
              </a>
            </div>

            <div className="floor">
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/24d20597f75afc86098b0b99c11033bf.png?quality=75&type=webp&imageView&thumbnail=375x0"
                  alt=""
                />
              </a>
              <a href="###">
                <img
                  src="https://yanxuan.nosdn.127.net/16ef9b23050650f50604e825fa61e206.png?quality=75&type=webp&imageView&thumbnail=375x0"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="freshGift">
            <h2>一 新人专享礼 一</h2>
            <div className="freshGift-content">
              <div className="freshGift-left">
                <span>新人专享礼包</span>
                <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="" />
              </div>
              <div className="freshGift-right">
                {
                  indexActivityModule.map((item, index) => {
                    return (
                      <div
                        className="freshGift-right-item"
                        key={index}
                      >
                        <div>
                          <p>{item.title}</p>
                          <p>{item.subTitle || item.tag}</p>
                        </div>
                        <img src={item.picUrl || item.targetUrl} alt="" />
                      </div>

                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className="m-popularItemModule m-indexFloor">
            <div className="moduleTitle">
              <div className="left">人气推荐</div>
              <a className="right" href="/item/recommend">
                更多>
        <i className="icon u-icon u-icon-index-titleArrow"></i>
              </a>
            </div>
            <a className="spItem">
              <div className="wraper">
                <div className="m-lazyload m-lazyload-loaded">
                  <img
                    data-original="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
                    data-src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
                    className="swiper-lazy"
                    src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
                    style={{ display: 'inline' }} alt=""
                  />
                </div>
              </div>
              <div className="spItemdesc">
                <div className="name">15分钟快速救脸，射频多功能美容仪</div>
                <div className="desc">掌心里的“美容院”</div>
                <div className="price">¥899</div>
              </div>
            </a>
            <div className="m-indexItem m-goodGrid">
              <ul className="list">
                <li className="item">
                  <div className="good">
                    <div className="hd">
                      <div className="wraper">
                        <div className="m-lazyload m-lazyload-loaded">
                          <img
                            data-original="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                            data-src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                            className="swiper-lazy"
                            src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""
                            style={{ display: 'block' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="name">【抢购】一次性医用口罩 1...</div>
                    <div className="newItemDesc">医用级别防护，99%细菌过滤效率 三层安全防护</div>
                    <div className="price">
                      <span className="priceInner">
                        <span>¥60</span>
                      </span>
                    </div>
                    {/* <!-- <div className="tagWraper new">
                      <span className="tag-status-new gradientPrice">特价</span>
                    </div>--> */}
                  </div>
                </li>
                <li className="item">
                  <div className="good">
                    <div className="hd">
                      <div className="wraper">
                        <div className="m-lazyload m-lazyload-loaded">
                          <img
                            data-original="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                            data-src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                            className="swiper-lazy"
                            src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330" alt=""
                            style={{ display: 'block' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="name">告别啃食尴尬，秘制无骨凤爪...</div>
                    <div className="newItemDesc">肉嘟嘟，大口吃</div>
                    <div className="price">
                      <span>¥13</span>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="good">
                    <div className="hd">
                      <div className="wraper">
                        <div className="m-lazyload m-lazyload-loaded">
                          <img
                            data-original="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                            data-src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                            className="swiper-lazy"
                            src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330" alt=""
                            style={{ display: 'block' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="name">男式精梳棉经典POLO衫</div>
                    <div className="newItemDesc">甄选面料，经典百搭版型</div>
                    <div className="price">
                      <span>¥99</span>
                    </div>
                    <span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="bd">
            <button>下载APP</button>
            <button>电脑版</button>
          </div>

          <p>
            网易公司版权所有 © 1997-2020
      <br />食品经营许可证：JY13301080111719
    </p>
        </footer>
      </div>
    )
  }
}
export default connect(
  (state) => ({
    homeData: state.home
  }),
  {
    getHome: createSaveHomeAction
  }
)(Home)