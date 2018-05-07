import React, {Component} from 'react';
import './City.css'
import {connect} from 'react-redux'
import axios from 'axios'

class City extends Component
{
  constructor()
  {
    super()
    this.state =
    {
      province: []
    }
  }
  render(){
    let {city} = this.props;
    let {province} = this.state;
    return (
      <div id='city'>
        <header className="header">
          <span><i className="iconfont icon-zuofanhui" onClick={this.goBack.bind(this)}></i> | 选择城市</span>
        </header>
        <section className="section">
          <div className="skip">
            <span>您的上牌地址</span>
            <span><i className="iconfont icon-youfanhui" onClick={this.skip.bind(this)}></i></span>
          </div>
          <div className="select">
            <h3>您已选择城市</h3>
            <div className="city">
              <p>{province}</p>
            </div>
          </div>
          {
            city.map((item, index)=>
            {
              return (
                <div className="main" key={index}>
                  <h2>{item.letter}</h2>
                  <ul className="ulis">
                    {
                      item.city.map((items,index)=>
                      {
                        return (
                          <li key={index} onClick={this.getTar.bind(this)}>{items.name}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </section>
      </div>
    )
  }
  goBack()
  {
    const {history}=this.props
    history.go(-1)
  }
  skip()
  {
    const {history}=this.props
    history.push('/address')
  }
  componentDidMount()
  {
    const {dispatch}=this.props
    axios.get('/city').then((res) =>
    {
      dispatch({
        type:"HELLO_CITY",
        data:res.data
      })
    })
  }
  getTar(e)
  {
    this.setState(
    {
      province:e.target.innerHTML
    })
    if(e.target.className)
    {
      e.target.className=''
    }
    else
    {
      e.target.className='bgs'
    }
  }
  eliminate(params)
  {
    const {province} = this.state
    this.refs[params].className = ''
    const place= province.indexOf(params)
    province.splice(place, 1)
    this.forceUpdate()
  }
}

function mapStateToProps(state)
{
  return {
      city:state.city
  }
}
export default connect(mapStateToProps)(City)