const Validator = require('validator')
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data){
    let errors = {}

    if(!Validator.isLength(data.name,{min:2,max:30})){
        errors.name = 'Name must be between 2-30 characters'

    }
    if(!Validator.isLength(data.password,{min:6,max:30}) && Validator.isAlphanumeric(data.password)){
        errors.password = 'Password must contain at least 6 alphanumeric characters'
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Must enter a vaild email'
    }
 

 


    return {
        errors,
        isValid:isEmpty(errors)
    }
}