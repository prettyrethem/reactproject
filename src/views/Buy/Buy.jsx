import React, { Component } from 'react';
import './Buy.css'
import {connect} from 'react-redux'
import axios from 'axios'
class Buy extends Component
{
  render()
  {
    let {car}=this.props
    return (
      <div id='buy'>
        <div className='header'>
            <h1>北京市</h1>
            <nav>
                <p>排序</p><p>品牌</p><p>价格</p><p>筛选</p>
            </nav>
        </div>
        <div className='section'>
            {
                car.length!=0&&car.map((item,index)=>
                {
                  return (
                      item.map((it,index)=>{
                        return (
                          it.carList.map((i,ind)=>{
                            return (
                                i.price!=''?
                                <div className='sty' key={ind}>
                                  <p>{i.carName}</p>
                                  <p>{i.price}</p>
                                </div>:''
                              )
                          })
                        )
                      })
                    )
                })
            }
        </div>
      </div>
    )
  }
  componentDidMount()
  {
    const {dispatch}=this.props
    axios.get('/car').then((res)=>
    {
        dispatch(
        {
            type:'HELLO_CAR',
            data:res.data
        })
    })
  }
}

const mapStateToProps=(state)=>{
    return {
        car:state.car
    }
}
export default connect(mapStateToProps)(Buy)