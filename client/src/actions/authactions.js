import axios from 'axios'
import {GET_ERRORS} from '../actions/types'
import {SET_CURRENT_USER} from './types'
//Register User

export const registerUser = userData=> dispatch=>{
    return 
       (
        axios
       .post('/api/users/register',userData)
        .then(res=>console.log(res.data))
        .catch(err=>
            dispatch({
                type:SET_CURRENT_USER,
                payload:err.response.data
            })
            )
      
        )

       
}