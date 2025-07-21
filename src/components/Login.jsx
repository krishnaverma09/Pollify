import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import { useState } from 'react';
import { supabase } from '../context/PollContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setSuccess("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Login successful!");
      navigate("/");
    }
  };

  return (
    <>
    <div>
      <div className='login'>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <input id="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Log In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <p>Don't have an account? <Link to={"/signup"}>Signup</Link></p>
      </div>
    </div>
    </>
  )
}

export default Login
