import React from "react";
import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react";   

const Auth = ({authenticate}) =>{
    const [data, setData] = useState([]);
    const [nameOutput, setName] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errCLass, setErrClass] = useState('');
    
    useEffect(() => {
        fetch("/login.php")
          .then(res => res.json())
          .then(
              (result) =>{
                setData(result);
                }
            )
      }, []);

    const onClick = (event) =>{
        event.preventDefault();       
        const arrayOfObject = data;
        const output = arrayOfObject.find( ({ name }) => name === nameOutput );
        const password = pass;
        if(nameOutput == 0){
            setErrorMessage('Please enter your username!'); 
            setErrClass("err_container_wrong");
        }
        else if(output.password == password){
            window.location.reload();
            console.log('all`s correct');
            authenticate();
            sessionStorage.setItem('UserName', nameOutput);
            sessionStorage.setItem('UserEmail', output.email);
        }
        else{
          console.log('all`s not correct');
          setErrorMessage('Data doesn`t match! You typed: ' + password+ ' as password!');
          setErrClass("err_container_wrong");
        }
    }
    return(
        <div class="wrapper-forms">
            <div class="form_info bg-info">
                <h3>Welcome!</h3>
                <p>
                   Enter your personal info and let`s start!
                </p>
            </div>
            <div class="forms_container">
                <div class="register_container">
                    <form class="register_form">
                        <h2>Log in</h2>
                        <label class="label">Username</label>
                        <input type="text" name="name" class="input_name" value={nameOutput} onInput={e => setName(e.target.value)} placeholder="Enter Username"></input>
                        <label class="label">Password</label>
                        <input type="password" name="pass" class="input_pass" value={pass} onInput={e => setPass(e.target.value)} placeholder="Enter Password"></input>
                        <button class="btn-outline-info" name="enter" onClick={onClick}>Submit</button>

                        <div class="stage_change_container">
                            <span>Haven`t joined yet?</span>
                            <button class="sign_up_btn"><Link to="/signup">Sign up</Link></button>
                        </div>
                        <div class={errCLass}>
                            <span class="login_err text-danger">  {errorMessage}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
        
    )
}

export default  Auth;  