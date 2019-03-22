import React, { Component } from 'react'

import {connect} from 'react-redux'
import {registerUser} from '../../actions/authactions'
import propTypes from 'prop-types'

let inputStyles = {
  width:'80%'
}

let textStyled = {fontFamily: "'Dancing Script', cursive",fontSize:'70px'}

 class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            password:'',
            email:''
        }
    
        // this.onChange = this.onChange.bind(this)
    }
    onChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        this.props.registerUser(newUser)
       
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
          this.setState({errors:nextProps.errors})
        }
    }
    
  render() {
      let formStyle={
          marginTop:'20px',
        
      }
      let fontStyle = {
        fontFamily: "'Russo One', sans-serif"
      }
      const {errors} = this.state
      const {user} = this.props.auth
    return (
        <div style={formStyle} class="row">
         
        <h3 style={textStyled} className="center-align">Sign Up</h3>
        <h6 style={fontStyle} className="center-align">Create your Find My Barber account  {user?user.name:'love'}</h6>
        <form className="" onSubmit={this.onSubmit}>
        <div className="col m3"></div>
        <div class="input-field col s8">
          <input style={inputStyles} name="name" value={this.state.name} onChange={this.onChange}  id="name" type="text" class="validate" />
          <label style={fontStyle} for="name">Name</label>
        </div>
       
            <div class="row">
            <div className="col m3"></div>
            <div class="input-field col s8">
              <input style={inputStyles} name="email" value={this.state.email}  onChange={this.onChange} id="email" type="email" class="validate" required=""/>
              <label style={fontStyle} for="email">Email</label>
            </div>
          </div>
       
       
          
          <div class="row">
          <div className="col m3"></div>
            <div class="input-field col s8">
              <input  style={inputStyles}  name="password" value={this.state.password}  onChange={this.onChange} id="password" type="password" class="validate"/>
              <label style={fontStyle} for="password">Password</label>
            
            </div>
          </div>
          <div className="col m3"></div>
          <button type="submit" className="btn col m6  grey darken-4 hoverable" style={fontStyle}>Submit</button>
         </form>
          </div>
       
    
     )
  }
}

Register.propTypes = {
  registerUser:propTypes.func.isRequired,
  auth:propTypes.object.isRequired,
  errors:propTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{registerUser})(Register)