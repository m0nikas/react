import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"

class Register extends Component {
    state = { 
        firstName:"",
        lastName:'',
        email:'',
        password:'',
        confirmpassword:''
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("hey yeah");        
    }

    handleFirstName = (event) => {
        this.setState({firstName: event.target.value});
    }

    handleLastName = (event) => {
        this.setState({lastName: event.target.value});
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value});
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }

    handleConfirmPassword = (event) => {
        this.setState({confirmpassword: event.target.value});
    }
    render() {
        return (
            <div className="flex-container">
                <pre>{this.state.firstName}{this.state.lastName}{this.state.email}{this.state.password}{this.state.confirmpassword}
                </pre>
                <div className="text">
                    <h1>Register </h1>
                    </div>
                    <div className="text">

                    <form name="form2" onSubmit={this.handleSubmit} class="form-group">
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input type="text" pattern="[a-zA-Z]{2,}" onChange={this.handleFirstName} className="form-control" id="firstname"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type="text" pattern="[a-zA-Z]{2,}" onChange={this.handleLastName} className="form-control" id="lastname"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/" onChange={this.handleEmail} className="form-control" id="email" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={this.handlePassword}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" className="form-control" id="password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                            <input onChange={this.handleConfirmPassword}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" className="form-control" id="confirmpassword"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    </div>
                </div>
           
        );
    }
}

export default Register;