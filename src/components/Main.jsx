import React, { useContext, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { PollContext } from '../context/PollContext'
import PollCard from './PollCard.jsx'

const Main = () => {
  const {allPoll} = useContext(PollContext)
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPolls = allPoll.filter((poll) =>
    poll.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <div className='main'>
        <h1>
            Welcome to Pollify
        </h1>
        <h2>
            Create Share and vote in polls
        </h2>
        <Link to = "/PollForm"><button>Create New Poll</button></Link>
        <input
        placeholder="Search polls..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {filteredPolls.length > 0 ? (
        filteredPolls.map((poll) => (
          <PollCard key={poll.id} question={poll.question} id={poll.id} />
        ))
      ) : (
        <p>No polls found.</p>
      )}
    </div>
    </>
  )
}

export default Main
