import React, { Component,createContext } from 'react';
import Navbar from '../src/layouts/Navbar'
import Footer from '../src/layouts/Footer'
import Landing from '../src/layouts/Landing'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Register from '../src/components/auth/Register'
import Login from '../src/components/auth/Login'
import {Provider} from 'react-redux'
import store from './store'
import { AllBarbers } from './Allbarbers';





class App extends Component {
render() {
  
    return (
        <Provider store={store}>
        <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/allbarbers" component={AllBarbers}/>
          
          </div>
          <br/>
            <Footer />
          </div>
        </Router>
        </Provider>
   
    );
  }
}

export default App;
