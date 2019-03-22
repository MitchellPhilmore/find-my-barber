import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
      let thumbnail = {
          height:'50px',
          width:'50px',
          borderRadius:'50%'
      }

      let fontStyle = {
        fontFamily: "'Russo One', sans-serif"
      }
    return (
      <div>
        
  <nav>
        <div className="nav-wrapper grey darken-4 z-depth-5">
        <Link to="/" className="brand-logo "><img style={thumbnail} className="responsive-img" src="https://cdn1.vectorstock.com/i/thumb-large/78/90/barber-chair-simple-icon-on-black-background-vector-15977890.jpg"/></Link>
   
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link style={fontStyle} to="/register">Sign up</Link></li>

            <li><Link style={fontStyle} to="/login">Login</Link></li>
            <li><Link style={fontStyle} to={{pathname:'/allbarbers',state:{users:["Mitch"]}}}>Barbers</Link></li>
        </ul>
        </div>
    </nav>
        
      </div>
    )
  }
}
