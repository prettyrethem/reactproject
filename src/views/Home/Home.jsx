import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <header>
          <span>北京市<i className="iconfont icon-xiafanhui"  onClick={this.toCity.bind(this)}></i></span>
          <span><i className="iconfont icon-sousuo"></i></span>
        </header>
      </div>
    )
  }
  toCity() {
    const { history } = this.props
    history.push('/city')
  }
}

export default Home