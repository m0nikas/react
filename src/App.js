import React from 'react';
import './App.css'

import './css/home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/header'
import Data from './pages/product'
import Banner from './pages/home'
import Signin from './pages/login'
import Register from './pages/register'
import Carousel from './components/carousel'
import Footer from './components/footer'
// import { Carousel } from 'bootstrap';
 
// import carousel from './components/carousel'
 
function App() {
 
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path='/products'>
        <Data style={{display: 'flex', flexDirection: 'row'}}></Data>
        </Route>
        <Route path='/login'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/' exact={true}>
          <Carousel />
          <Banner />
        </Route>
      </Switch>
      <Footer />
 
    </Router>
    
  // <Data style={{display: 'flex', flexDirection: 'row'}}></Data>
  );
}
 
export default App;