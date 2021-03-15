import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
// import Input from './formcomps/input';
// import Label from './formcomps/label';


class Signin extends Component {
    state = { 
        email:"",
        password:'',
     }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState()        
    }

    handleInput = (event) => {
        this.setState({email: event.target.value});
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="container">
                {/* <div className="row"> */}
                <div className="image">
                    <h1>Login</h1>
                    <h3></h3>
                </div>
                <div className ="text">
                    <p>{this.state.email} {this.state.password}</p>
                    <form name ="formm"onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email-signin" name="Email Address"/>Name
                            <input id="email-signin" name="Email Address" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/" className="form-control" type="email" onChange={this.handleInput}/>
                        </div>                  
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password-signin" name="Password"/>Password
                            <input id="password-signin" type="password" onChange={this.handlePassword} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control"/>
                        </div> 
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
                </div>
            // </div>
        );                          
    }
}

export default Signin;