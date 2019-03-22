const express = require('express')
const router = express.Router()
const passport = require('passport')
const mongoose = require('mongoose')
//Load profile model
const barberProfile = require('../../models/barberProfile')

//Load validation
const validateProfileInput = require('../../validation/profile')

//Load user model   
const user = require('../../models/User')

//@route GET api/profiles/test
//@desc Tests post route
//@access Public
const newBarber = new barberProfile({
    handle:'MitchTheBarber215',
    shop:'Kreations by hand',
    location:'1733 South street Philadelphia,PA 19146',
    schedule:[
            {hours:['9am-8pm','9am-8pm','9am-8pm','9am-8pm','9am-8pm','9am-8pm']},
            {daysAvailable:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']},],
     services:['Haircut','Shave','fade'],
     images:'src="lkkkklaflkdflkd'




})
router.get('/test',(req,res)=>{
    res.json({
        message:'Profile WORKS!'
    })
})


//@route GET api/profile
//@desc Tests post route
//@access Private
router.get('/', passport.authenticate('jwt',{session:false}),(req,res)=>{
    const errors = {}
    barberProfile.findOne({user:req.user.id})
    .then(profile=>{
        if(!profile){
            errors.noProfile = 'There is no profile for this user'
            return res.status(404).json(errors)
        }
        res.json(profile)
    })
})

//@route POST api/profile
//@desc Create user profile
//@access Private
router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    console.log('works')
    console.log(req.body.handle)
    const {errors,isValid} = validateProfileInput(req.body)


    if(!isValid){
        //return errors 
        return res.status(400).json(errors)
    }
    // get fields 
    const profileFields = {}
    profileFields.user = req.user.id
    
    if(req.body.handle) profileFields.handle = req.body.handle
    if(req.body.shop) profileFields.shop = req.body.shop
    if(req.body.location) profileFields.location = req.body.location
    if(req.body.schedule) profileFields.schedule = req.body.schedule
    if(req.body.daysAvailable) profileFields.daysAvailable = req.body.daysAvailable
    // if(req.body.services) profileFields.services = req.body.services
    // // split skills into array
    // if(typeof req.body.services !== 'undefined'){
    //     profileFields.services = req.body.services.split(",")
    // }
    if(req.body.images) profileFields.imgages = req.body.images
    if(req.body.bio) profileFields.bio = req.body.bio
    if(req.body.socialMediaLinks) profileFields.socialMediaLinks = req.body.socialMediaLinks



    barberProfile.findOne({user:req.user.id})
    .then(profile=>{
        if(profile){
            barberProfile.findOneAndUpdate(
                { user:req.user.id},
                {$set:profileFields},
                {new:true}
            )
            .then(profile=>res.json(profile))
        }
        else{

            //check if handle exits
            barberProfile.findOne({handle:profileFields.handle}).then(profile=>{
                if(profile){
                    errors.handle = 'That handle already exits'
                    res.status(400).json(errors)
                }
            })
            //Save profile
            new barberProfile(profileFields).save().
                then(profile=>{
                    res.json(profile)
                })
                .catch(err=>res.status(400).json(err))
        }
    })
    
    })

//@route GET api/profile/all
//@desc Get all profiles
//@access Public

router.get('/all',(req,res)=>{
    const errors = {}
    barberProfile.find()
    .populate('user',['name','avatar'])
    .then(profile=>{
        if(!profile){
            errors.noprofile = 'There are no profiles'
            res.status(400).json(errors)
        }
        res.json(profile)
    })
    .catch(err=>{
        res.status(400).json({
            profile:'There are no profiles'
        })
    })
    
})

    
//@route GET api/profile/handle:handlename
//@desc Get user by handle name
//@access Public

   router.get('/handle/:handle',(req,res)=>{
       const errors = {}
       barberProfile.findOne({handle:req.params.handle})
       .populate('user',['name','avatar'])
       .then(profile=>{
           if(!profile){
             errors.noprofile = 'There is no profile for this user'
             res.status(400).json(errors)
           }
           res.json(profile)
       })
   })
   router.get('/handle/:handle',(req,res)=>{
       const errors = {}
       barberProfile.findOne({handle:req.params.handle})
       .populate('user',['name','avatar'])
       .then(profile=>{
           if(!profile){
             errors.noprofile = 'There is no profile for this user'
             res.status(400).json(errors)
           }
           res.json(profile)
       })
   })
   
//@route GET api/profile/handle/user_id
//@desc Get user by user id
//@access Public

   router.get('/handle/:user_id',(req,res)=>{
       const errors = {}
       barberProfile.findOne({handle:req.params.user_id})
       .populate('user',['name','avatar'])
       .then(profile=>{
           if(!profile){
             errors.noprofile = 'There is no profile for this user'
             res.status(400).json(errors)
           }
           res.json(profile)
       })
   })
 module.exports = router