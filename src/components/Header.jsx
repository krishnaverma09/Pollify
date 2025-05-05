import React from 'react'
import { Link} from 'react-router-dom'

import '../App.css'

function Header() {

  return (
    <>
      <div className='header'>
        <div className='pollify'>
          <Link className='homeLink' to={"/"}>Pollify</Link>
          <div className='navbar'>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
