

const express = require('express')
const router = express.Router()
const User = require('../../models/User')
let gravatar = require('gravatar')
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')
const keys = require('../../config/keys').secret
const path = require('path')
const passport = require('passport')


const validateRegisterInput = require('../../validation/register')


//@route GET api/users/register
//@desc users register 
//@access Public



//@route GET api/users/register
//@desc Register user
//@access Public

router.post('/register', (req, res) => {
 const {errors,isValid} = validateRegisterInput(req.body)

//Check Validation
 if(!isValid){
    return res.status(400).json(errors)
 }

    const { name, password, email} = req.body

    const avatar = gravatar.url(email, {
        s: '200', //Size
        r: 'pg', //Rating
        d: '404'
    })

    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                return res.status(400).json({
                    email: 'Email already exists'
                })
            } else {
                const newUser = new User({
                    name,
                    email,
                    avatar,
                    password
                })
                //encrypt password then save to database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) console.log(JSON.stringify(err))
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => res.json(err))
                    })
                })
            }
        })
})

//@route GET api/users/login
//@desc Login user Returning token
//@access Public

router.post('/login', (req, res) => {
    const {email, password} = req.body

    User.findOne({email})
        .then(user => {
            //check for user
            if (!user) {
                res.status(404).json({
                    email: 'User not found!'
                })
            }
            //Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //User matched
                        const payload = {id:user.id,name:user.name,avatar:user.avatar} //Create JWT payload. Payload is info about user
                        //Sign token
                        jwt.sign(payload,
                            keys,
                            {expiresIn:3600},
                            (err,token)=>{
                                res.json({
                                    success:'true',
                                    token:'Bearer' + token
                                })
                        })

                        
                    } else {
                        return res.status(400).json({
                            password: 'Password incorrect'
                        })
                    }
                })

        })
})


//@route GET api/users/current
//@desc return current user
//@access Private

router.get('/current',passport.authenticate('jwt',
{session:false}),
(req,res)=>{
    res.json(req.user)
})

module.exports = router