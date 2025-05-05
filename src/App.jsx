import React from 'react'

import './App.css'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App
