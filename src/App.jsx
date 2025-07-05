import React from 'react'

import './App.css'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PollPage from './components/Pollpage'
import PollForm from './components/PollForm'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/PollForm' element={<PollForm/>}/>
    </Routes>
  )
}

export default App
