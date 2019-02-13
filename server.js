const express = require('express')
const app = express()
const port = 5000 || process.env.PORT 
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profiles = require('./routes/api/profile')
const post = require('./routes/api/post')

//Connection to mongoDB
const db = require('./config/keys').mongoURI

mongoose.connect(db)
.then(()=>console.log('Connected to DB'))
.catch(err=>console.log(JSON.stringify(err)))

//Use routes
app.use('/api/users',users)
app.use('/api/profile',profiles)
app.use('/api/posts',post)

app.get('/',(req,res)=>{
    res.send('Works!')
})


app.listen(port,()=>console.log(`Server is running on port ${port}`))
