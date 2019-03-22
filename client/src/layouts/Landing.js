import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Landing extends Component {
  render() {
      let backgroundImg = {
          width:'95%',
          background: "url('https://www.lafilm.edu/wp-content/uploads/2016/07/barbershop-1.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          height:'800px',
          marginTop:'0',
          marginBottom:'40px',
          margin:'0 auto'
      
      }
      let fontStyle = {
        fontFamily: "'Russo One', sans-serif"
      }

      let btnStyle = {
          margin:'5px'
      }
 
      let h1Style = {fontFamily: "'Dancing Script', cursive",fontSize:'70px',textAlign:'center'}
    return (
      <div style={backgroundImg}>
        <h1 style={h1Style} className="white-text ">Find My Barber</h1>
        <h6 style={fontStyle} className='white-text center-align'>Create a profile and find talented barbers near you</h6>
        <div className="row">
        <div className="col m5"></div>
        <div className="col m5">
        <Link  to="/register" class="waves-effect waves-light btn white-text grey darken-4 hoverable"  style={fontStyle}>Sign up</Link>
        <Link  to="/login" class="waves-effect waves-light btn black-text grey grey lighten-2 hoverable"  style={fontStyle}>Login</Link>
        </div>
        <div className="col m1"></div>
        
        </div>
 
      </div>
    )
  }
}
