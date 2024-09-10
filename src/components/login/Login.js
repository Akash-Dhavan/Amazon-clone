import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
function Login() {
    return (
      <div className='Main'>
    <div className='Login'>
          <div >
              <Link to="/" className='logo'>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-1869030-1583154.png?f=webp" alt="" className="LoginLogo"/>
                  </Link>
              {/* Login Starts From here */}
              <div className='LoginContainer'>
                  <h1>Sign In</h1>
                  <form>
                      <h3>Email</h3>
                      <input type="email" placeholder='Your Email' required />
                      <h3>Password</h3>
                      <input type="password" placeholder='Your Password' required />
                      <button className="LoginButton">Sign In</button>
                  </form>
                  <p>
                  By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                  </p>
                  <button className='LoginButton'>Create Your Amazon Account</button>
              </div>
      </div>
            </div>
            </div>
  )
}

export default Login
