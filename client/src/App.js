import React, {useState} from "react";
import Axios from "axios";
import "./App.css";

const App = () =>{
  const [usernameReg , setUsernameReg] = useState("");
  const [passwordReg , setPasswordReg] = useState("");

  const [usernameLog , setUsernameLog] = useState("");
  const [passwordLog , setPasswordLog] = useState("");

  const [loginStatue  , setLoginStatue] = useState("");
  const [registerStatue , setRegisterStatue] = useState("");

  const register = () =>{
    Axios.post("http://localhost:3001/register",
    {username : usernameReg , password : passwordReg
    }).then(Response => {
      if(Response.data.message)
      {
        setRegisterStatue(Response.data.message);
      }
      else
      {
        setRegisterStatue(`${usernameReg} Sucessfully added`);
      }
    })
  }
  const login = () => {
    Axios.post("http://localhost:3001/login",
    {username : usernameLog, password : passwordLog}
    ).then(Response =>  {
      if(Response.data.message)
      {
        setLoginStatue(Response.data.message);
      }else{
        setLoginStatue(`Sucessfully Logged in to ${Response.data[0].username }`);
      }
    });
  }
  return(
    <div><h1 className = "name">Auth System</h1>
    <div className = "main">
      <div className="register">
        <h1>Registration</h1>
        <label htmlFor="Username">Username : </label>
        <br/>
        <input type="text" 
        placeholder="Username..."
        onChange = {(e) => {setUsernameReg(e.target.value)}}></input>
        <br/>
        <label htmlFor="Password">Password</label>
        <br/>
        <input type="password" 
        placeholder="Password..."
        onChange = {(e) => {setPasswordReg(e.target.value)}}></input>
        <br/>
        <button onClick = {register}>Register</button>
        <p className = "statue">{registerStatue}</p>
      </div>
      <div className = "login">
      <h1>Login</h1>
        <label htmlFor="Username">Username : </label>
        <br/>
        <input type="text" 
        placeholder="Username..."
        onChange = {(e) => {setUsernameLog(e.target.value)}}></input>
        <br/>
        <label htmlFor="Password">Password</label>
        <br/>
        <input type="password" 
        placeholder="Password..."
        onChange = {(e) => {setPasswordLog(e.target.value)}}></input>
        <br/>
        <button onClick = {login}>Login</button>
        <p className = "statue">{loginStatue}</p>
      </div>
    </div>
    </div>
  );
};

export default App;