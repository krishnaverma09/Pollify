import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <Header/>
    <div className='main'>
        <h1>
            Welcome to Pollify
        </h1>
        <h2>
            Create Share and vote in polls
        </h2>
        <Link to = "/PollForm"><button>Create New Poll</button></Link>
        <input placeholder="Search polls..." type=""></input>
    </div>
    </>
  )
}

export default Main
