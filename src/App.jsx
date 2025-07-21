import React from 'react'

import './App.css'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PollPage from './components/Pollpage'
import PollForm from './components/PollForm'
import VoteResult from './components/VoteResult'
import ThankYou from './components/Thanyou'
import Layout from './components/Layout'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/PollForm' element={<PollForm/>}/>
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path='/pollVote/:pollId' element={<PollPage/>}/>
        <Route path="/pollResult/:pollId" element={<VoteResult />} />
      </Route>
    </Routes>
  )
}

export default App
