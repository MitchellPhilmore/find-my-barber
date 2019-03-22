const Validator = require('validator')
const isEmpty = require('./isEmpty')



module.exports = function validateProfileInput(data){
    let errors = {}
  data.handle = !isEmpty(data.handle) ? data.handle : ''
  data.shop = !isEmpty(data.shop) ? data.shop : ''
  data.location = !isEmpty(data.location) ? data.location : ''
  data.schedule = !isEmpty(data.schedule) ? data.schedule : ''
  data.services = !isEmpty(data.services) ? data.services : ''

  if(!Validator.isLength(data.handle,{min:2,max:40})){
      errors.handle = 'Handle needs to between 2 and 40 characters'
  }
    
  if(Validator.isEmpty(data.handle)){
      errors.shop = 'Shop name is required'
  }
  if(Validator.isEmpty(data.location)){
      errors.location = 'Location  is required'
  }
  if(Validator.isEmpty(data.services)){
      errors.services = 'Please list your services'
  }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}