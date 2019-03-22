import React,{Component} from 'react'
import AppData from './AppData'

export class AllBarbers extends Component{
    constructor(props){
        super(props)


        }
        static contextType = AppData
            render(){
                return(
                    <div>

                    <h1>Welcome {this.context.barbers}</h1>
                    
                    
                    </div>
                )
            }
        }
    
