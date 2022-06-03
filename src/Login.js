import React from 'react'
import { Link } from "react-router-dom";
import './Login.css';
function Login() {
  return (
    <div className='center-component'>
        <h1>Login Here.</h1>
        <form>
            <div className=''>
                <input type="text" placeholder='Enter username'/>
            </div>
            <div>
                <input type="password" placeholder='Enter password'/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        <h6><span>Not registered?</span> <Link to='register'>Sign up</Link></h6>
    </div>
  )
}

export default Login