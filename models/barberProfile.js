const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barberProfileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    handle:{
        type:String,
        required:true,
        max:40
    },
    shop:{
        type:String
    },
    location:{
       type:String,
       required:true
    },
    schedule:[{
        hours:{
            type:String,
            required:true
        },
        daysAvailable:{
            type:String,
            required:true
        }
    }],
    
    images:{
        type:[String]
        
    },
    bio:{
        type:String,

    },
    socialMediaLinks:{
        type:String,
        
    }
}
)

module.exports = barberProfile = mongoose.model('barber-profiles',barberProfileSchema)