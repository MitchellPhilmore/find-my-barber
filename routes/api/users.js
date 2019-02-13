
//@route GET api/users/test
//@desc Tests users route
//@access Public


const express = require('express')
const router = express.Router()

router.get('/test',(req,res)=>{
    res.json({
        message:'USERS WORKS!'
    })
})

 module.exports = router