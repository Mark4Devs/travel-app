import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export class Signup extends Component{
    state ={
        name: '',
        email: '',
        password: '',
        users: []
    };
    
      componentDidMount() {
        const url = 'https://travel-app-data.herokuapp.com/users.php'
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ users: data })
          console.log(this.state.users)
         })
      }
    
      handleFormSubmit( event ) {
        event.preventDefault();
     
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
     
        axios({
            method: 'post',
            url: 'https://travel-app-data.herokuapp.com/users.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response)
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
      }
    render(){
        return(
            <div class="wrapper-forms">
                <div class="form_info bg-info">
                    <h3>Welcome!</h3>
                    <p>
                        To get in touch please connect with your personal info.
                    </p>
                </div>
                <div class="forms_container">
                    <div class="register_container">
                        <form class="register_form">
                            <h2>Sign up</h2>
                            <label class="label">Username</label>
                            <input type="text" name="name" class="input_name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} placeholder="Enter Username"></input>
                            <label class="label">Email</label>
                            <input type="text" name="email" class="input_email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} placeholder="Enter Email"></input>
                            <label class="label">Password</label>
                            <input type="password" name="password" class="input_pass" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} placeholder="Enter Password"></input>
                            <button class="btn-outline-info" onClick={e => this.handleFormSubmit(e)}>Submit</button>
                            <span>{this.state.outroItem}</span>

                            <div class="stage_change_container">
                                <span>Already signed up?</span>
                                <button class="sign_up_btn"><Link to="/auth">Log in</Link></button>
                            </div>
                            <div class="err_container">
                                <span class="login_err text-success"></span>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}



export default Signup;  