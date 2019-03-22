import React, { Component } from 'react'
import AppData from '../../../src/AppData'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
       
    }

    onChange = (e)=>{
        this.setState({
           
            [e.target.name]:e.target.value
           

        })
        this.context.barbers = this.state.username
    }
    onSubmit = (e)=>{
        e.preventDefault()
        let user = {
            username:this.state.username,
            password:this.state.password
        }
        console.log(user)
    }
  render() {
    let img = {
      height:'150px',
      width:'150px',
      borderRadius:'50%'

    }
    let fontStyle = {
      fontFamily: "'Russo One', sans-serif"
    }
    return (
      <div>
       
        <div class="row">
         <div class="col l4"></div>
        <img style={img} src="https://cdn1.vectorstock.com/i/thumb-large/78/90/barber-chair-simple-icon-on-black-background-vector-15977890.jpg"></img>
        
        <form onSubmit={this.onSubmit}>
       
            <div class="row">
            <div className="col s2"></div>
            <div class="input-field col s7">
              <input name="username" value={this.state.username}  onChange={this.onChange} id="username" type="text" class="validate" required=""/>
              <label style={fontStyle} for="email">Username</label>
            </div>
          </div>
       
       
          
          <div class="row">
          <div className="col s2"></div>
            <div class="input-field col s7">
              <input name="password" value={this.state.password}  onChange={this.onChange} id="password" type="password" class="validate"/>
              <label style={fontStyle} for="password">Password</label>
            
            </div>
          </div>
          <div className="col m2"></div>
          <button  type="submit" className="btn col m7  grey darken-4 hoverable" style={fontStyle}>Login</button>
         </form>
          </div>
      </div>
    )
  }
}
