import React from 'react'

export default function Footer() {
  let copyWriteStyle = {fontFamily: "'Dancing Script', cursive",fontSize:'15px',textAlign:'center'}
  let fontStyle = {
    fontFamily: "'Russo One', sans-serif"
  }
  return (
    <footer class="page-footer grey darken-4">
    <div class="container">
      <div class="row">
        <div class="col l4 s12">
          <h5 style={fontStyle} class="white-text">CONTACT US</h5>
          <a class="grey-text text-lighten-3" href="mailto:findmybarber@gmail.com"><i class="far fa-envelope"> SEND FEEDBACK</i></a>
          <br/>
          <a class="grey-text text-lighten-3" href="mailto:findmybarbersupport@gmail.com"><i class="far fa-envelope"> EMAIL SUPPORT</i></a>
        </div>
        <div class="col l4 s8">
          <h5 style={fontStyle} class="white-text">SHARE </h5>
          <a class="grey-text text-lighten-3" href="mailto:findmybarber@gmail.com"><i class="fas fa-user-plus">  Invite Barber</i></a>
          <br/>
          <a style={fontStyle} class="grey-text text-lighten-3"><i class="fas fa-user-plus">  Invite Friends</i></a>
        </div>
        <div class="col l4  s12">
          <h5  class="white-text" style={fontStyle}>FOLLOW US</h5>
            <a class="grey-text text-lighten-3 col l2" target="_blank" href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
            <a class="grey-text text-lighten-3 col l2" target="_blank"  href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
            <a class="grey-text text-lighten-3 col l2" target="_blank"  href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
            
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div style={copyWriteStyle} class="container">
      © 2019 Find My Barber
      </div>
    </div>
  </footer>
      
    
        )    
  
}
