import React, { Component } from 'react'
import { Icon } from 'zarm';
import "./css/index.less"
import Right from "./Right"
import { connect } from "react-redux"
import { reqcategoryRight, reqcategoryLeft } from "../../api"
import { createSaveListAsyncAction } from "../../redux/actions/list"

class List extends Component {
  state = {
    rightList: {
      categoryList: [],
      leftList: [],
      active: 0
    }
  }
  reqRightList = async (id) => {
    this.setState({
      active: id
    })
    const result = await reqcategoryRight(id)
    const { data, code } = result.data
    if (code === 200) {
      this.props.getRightList(data)
      this.setState({
        rightList: data
      })
    }
  }
  reqLeftList = async () => {
    const results = await reqcategoryLeft()
    const { result, code } = results.data
    if (code === 200) {
      console.log(result)
      this.setState({
        leftList: result[0].categoryL1List
      })

    }
  }
  componentDidMount() {
    this.reqLeftList()
    this.reqRightList(11)

  }
  render() {
    const { leftList, active } = this.state
    return (
      <div className="classifyList">
        <div className="wrap">
          <button className="search">
            <Icon type="search" theme="primary" size="lg" className="icon" />
            <span>搜索商品，共254615款好物</span>
          </button>
        </div>
        <div className="line"></div>
        <section className="centent">
          <ul className="left">
            {leftList && leftList.map((item) => {
              return (
                <li
                  className={active === item.id ? 'active item' : 'item'}
                  key={item.id}
                  onClick={() => { return this.reqRightList(item.id) }}
                >
                  {item.name}
                </li>)
            })
            }

          </ul>

          <div className="punctuation"></div>
          <Right rightList={this.state.rightList} render={() => (
            <div>
              <h1>tut list</h1>
              <button>隐藏/显示</button>
            </div>
          )} />

        </section>



      </div>
    )
  }
}
export default connect((state) => ({
  list: state.list
}), {
  getRightList: createSaveListAsyncAction
})(List)
