import React from 'react'
import { Link} from 'react-router-dom'
import Header from './Header'
import { useState } from 'react';
import { supabase } from '../context/PollContext';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Signup successful! Please check your email to confirm.");
    }
  };

  return (
    <>
    
      <div className='signup'>
        <h1>Sign Up</h1>
        <label htmlFor="email">Email</label>
        <input id="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <label htmlFor="con-password">Confirm Password</label>
        <input id="con-password" type="password" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <button type="button" onClick={handleSignup}>Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    
    </>
  )
}

export default Signup
