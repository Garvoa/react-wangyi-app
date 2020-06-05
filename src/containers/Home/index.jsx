import React, { Component } from 'react'
import { createSaveHomeAsyncAction } from "../../redux/actions/home"
import "./css/index.less"
import IScroll from "iscroll/build/iscroll-lite"
import { Collapse, Carousel, Modal, Tabs } from 'zarm';
import { connect } from "react-redux"
const { Panel } = Tabs;
// 数据
const ITEMS = [
  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',
];
const contentRender = () => {
  return ITEMS.map((item, i) => {
    return (
      <div className="carousel__item__pic" key={+i}>
        <img src={item} alt="" draggable={false} />
      </div>
    );
  });
}
class Home extends Component {
  state = {
    animated: true, //是否有过渡效果
    activeKey: '0', //默认为0不展示下拉导航列表
    modal: false, //是否显示
    panelValue: 0  //导航栏下标

  }
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
          // if (e.target) {
          //   this.wrapper.current.children[0].style.transform = `translate(${-83 * index}px,0px)`
          //   console.log(this.iscroll.startX)
          //   this.iscroll.startX = index * -83
          //   console.log(this.iscroll.startX)
          // }
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

  componentDidMount() {
    //横向滚动
    new IScroll('#wrapper', {
      mouseWheel: true,
      scrollbars: true,
      scrollX: true,
      interactiveScrollbars: true
    })
    //发送请求
    this.props.reqHome()

  }
  render() {
    const { animated, activeKey, modal, panelValue } = this.state;
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
          <Carousel
            autoPlay
            loop
            direction="left"
          >
            {contentRender()}
          </Carousel>
        </div>

      </div >
    )
  }
}
export default connect(
  (state) => ({

  }),
  {
    reqHome: createSaveHomeAsyncAction
  }
)(Home)