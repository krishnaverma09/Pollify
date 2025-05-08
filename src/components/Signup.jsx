import React from 'react'
import { Link} from 'react-router-dom'
import Header from './Header'

const Signup = () => {
  return (
    <>
    <Header/>
    
      <div className='signup'>
        <h1>Sign Up</h1>
        <label for="email">Email</label>
        <input id="email" placeholder='Email' ></input>
        <label for="password">Password</label>
        <input id="password" placeholder='Password' ></input>
        <label for="con-password">Password</label>
        <input id="con-password" placeholder='Confirm Password' ></input>
        <button>Sign Up</button>
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    
    </>
  )
}

export default Signup
