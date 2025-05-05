import React from 'react'
import { Link} from 'react-router-dom'
import Header from './Header'

const Login = () => {
  return (
    <>
    <Header/>
    <div>
      <div className='login'>
        <h1>Log In</h1>
        <label for="email">Email</label>
        <input id="email" placeholder='Email' ></input>
        <label for="password">Password</label>
        <input id="password" placeholder='Password' ></input>
        <button>Log In</button>
        <p>Don't have an account? <Link to={"/signup"}>Signup</Link></p>
      </div>
    </div>
    </>
  )
}

export default Login
