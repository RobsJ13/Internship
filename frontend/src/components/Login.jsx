import React, { useState } from 'react'
import "./Login.css"
import user_icon from "./Icons/person.png"
import email_icon from "./Icons/email.png"
import pwd_icon from "./Icons/password.png"


const Login = () => {
  const  [page,setPage] =useState("Sign Up")

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">{page}</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="username" />
            <input type="text" placeholder='Username' />
          </div>
          {page==="Login"?<div></div>:<div className="input">
            <img src={email_icon} alt="email" />
            <input type="email" placeholder='E-mail' />
          </div>}
          
          <div className="input">
            <img src={pwd_icon} alt="password"  />
            <input type="password"placeholder='Password' />
          </div>
        </div>
        {page==="Sign Up"?<div></div>:<div className="forgot_pwd">Forgot Password? <span>Click Here</span></div>}
        <div className='submit-btn-container'></div>
        <div className="submit-btn">
            <div className="btn">Confirm {page} </div>
          </div>
        <div className="submit-container">
          <div className={page==="Login"?"submit gray":"submit"} onClick={()=>{setPage("Sign Up")}}>Sign Up</div>
          <div className={page==="Sign Up"?"submit gray":"submit"}onClick={()=>{setPage("Login")}}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Login