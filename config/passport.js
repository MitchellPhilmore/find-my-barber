const JwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('./keys').secret




const opts = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys

module.exports = passport =>{
    passport.use(
        new JwtStrategy(opts,(payload,done)=>{
        User.findById(payload.id)
        .then(user =>{
            if(user){
                return done(null,user)
            }
            else{
                return done(null,false)
            }
        })
        .catch(err=>JSON.stringify(err))
    }))
}