import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="classifyList">
        <button className="search">
          <van-icon name="search" size="0.18rem" className="icon" />
          <span>搜索商品，共254615款好物</span>
        </button>
        <div className="line"></div>
        <section className="centent">
          <ul className="left">
            <li className="item active">618专区</li>
            <li className="item">爆品专区</li>
            <li className="item">新品专区</li>
            <li className="item">居家生活</li>
            <li className="item">服饰鞋包</li>
            <li className="item">美食酒水</li>
            <li className="item">个人清洁</li>
            <li className="item">母婴亲子</li>
            <li className="item">运动旅行</li>
            <li className="item">数码家电</li>
          </ul>
          <div className="punctuation"></div>
          <div className="right">
            <img
              className="banner"
              src="https://yanxuan.nosdn.127.net/2c669cac8b0844bbd2620a5172a53dbd.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
              alt=""
            />
            <ul>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>

              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
                  alt=""
                />
                <span>99专区</span>
              </li>
            </ul>
          </div>
        </section>
        <div className="line"></div>


      </div>
    )
  }
}
