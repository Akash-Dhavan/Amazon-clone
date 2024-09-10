import React from 'react'
import { Link } from 'react-router-dom';
import './Profile.css'
function Profile() {
  return (
    <div className='Profile'>
        <Link to="/" className='logo'>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-1869030-1583154.png?f=webp" alt="" className="ProfileLogo"/>
          </Link>
          {/* Profile below */}
          <div className='ProfileContainer'>
              <form>
                  <h3>Name</h3>
                  <input type="text" placeholder='Enter Your name' />
                  <h3>Email</h3>
                  <input type="email" placeholder='Enter Your Email' required/>
                  <h3>Mobile</h3>
                  <input type="number" placeholder='Enter Your Number' required />
                  <button className="ProfileButton">Update Profile</button>
              </form>
          </div>
    </div>
  )
}

export default Profile
