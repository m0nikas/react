import React, { Component } from 'react';
 
class Navbar extends Component {
    render(){
        return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                   <img src="/static/images/logo.png" alt="LOGO"/>
                </a>
            
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Products</a>
                    </li>
                    </ul>

                 </div>
                    <a>Sign-In</a>
                    <a>Register</a>
                    
                
     
                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> */}
                    <img className="cartImage" src="/static/images/cart.svg" alt="cart"/>
                    {/* </button> */}
                </nav>
                        </div>
        );
}
 
}
 
export default Navbar;