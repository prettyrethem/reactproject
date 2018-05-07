import React, { Component } from 'react';
import './Address.css'
import provinceCity from '../../../mock/data/provinceCity.js'
console.log(provinceCity)
class Address extends Component
{
  constructor()
  {
    super()
    this.state=
    {
      provinceCity,cityArr:[]
    }
  }
  render()
  {
    const {cityArr}=this.state
    return (
      <div id='address'>
        <header className="header">
          <span><i className="iconfont icon-zuofanhui" onClick={this.goBack.bind(this)}></i> | 选择上牌城市</span>
        </header>
        <section className="section">
          <div className='left'>
            {
              provinceCity.provinceArr.map((item,idx)=>
              {
                return (
                  <div key={idx}>
                    <p>{item.letter}</p>
                    {
                      item.province.map((val,index)=>
                      {
                        return <li key={index} ref={val.name} onClick={(e)=>{this.fn(e,val.name)}}>{val.name}</li>
                      })
                    }
                  </div>
                )
              })
            }
          </div>
          <div className='middle'>
              {
                cityArr.map((item,ind)=>{
                  return (
                    <div key={ind}>
                      {
                        item.map((items,index)=>
                        {
                          return <li key={index}>{items.name}</li>
                        })
                      }
                    </div>
                    )
                })
              }
          </div>
          <div className='right'>
            {
              provinceCity.provinceArr.map((item,idx)=>
              {
                return (
                  <div key={idx}>
                    <p>{item.letter}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
  goBack()
  {
    const {history}=this.props
    history.go(-1)
  }
  componentWillMount()
  {
    const {provinceCity,cityArr}=this.state
    Object.keys(provinceCity.city).forEach(function(i)
    {
      cityArr.push(provinceCity.city[i])
    })

  }
  fn(e)
  {
    Object.keys(this.refs).forEach((i)=>
    {
      this.refs[i].className=''
    })
    e.target.className='bgg'
  }
}
export default Address