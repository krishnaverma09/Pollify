import React from 'react'
import Header from './Header'

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
        <button>Create New Poll</button>
        <input placeholder="Search polls..." type=""></input>
    </div>
    </>
  )
}

export default Main
