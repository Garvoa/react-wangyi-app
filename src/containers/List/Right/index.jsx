import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Right extends Component {
  static propTypes = {
    rightList: PropTypes.object.isRequired,
  }
  componentDidMount() {


  }
  render() {
    const { categoryList, subCateList } = this.props.rightList
    return (
      <div className="right">
        <img
          className="banner"
          src="https://yanxuan.nosdn.127.net/2c669cac8b0844bbd2620a5172a53dbd.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
          alt=""
        />
        <div>

        </div>
        <ul>
          {
            (categoryList || subCateList).map((item, index) => {
              return (<li key={index}>
                <img
                  src={item.bannerUrl || item.wapBannerUrl}
                  alt=""
                />
                <span>{item.name}</span>
              </li>)
            })

          }


        </ul>
      </div>
    )
  }
}
