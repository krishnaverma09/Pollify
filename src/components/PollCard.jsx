import React, { useContext } from "react";
import {SeletedPollContext} from "../context/SeletedPoll.jsx"
import { useNavigate } from "react-router-dom";


export default function VoteCard({ question , id }) {
    const {setSelectedPoll} = useContext(SeletedPollContext)
    // console.log(id);
    
    const navigate = useNavigate()
  return (
    <div className="vote-card">
      <h2 className="vote-name">{question}</h2>
      <div className="vote-buttons">
        <button className="round-button vote" onClick={() => {
            setSelectedPoll(id)
            navigate(`/pollVote/${id}`)
          }}>Vote</button>
        <button className="round-button result" onClick={() => {
          setSelectedPoll(id)
          navigate(`/pollResult/${id}`)
        }}>Result</button>
      </div>
    </div>
  );
}
