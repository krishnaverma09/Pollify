import React, { useContext } from "react";
import { PollContext } from "../context/PollContext";
import { SeletedPollContext } from "../context/SeletedPoll";
import { useParams } from "react-router-dom";

const VoteResult = () => {
  const { pollId } = useParams();
  
  const { allPoll } = useContext(PollContext);

  if (!allPoll || allPoll.length === 0) {
    return <p>Loading polls...</p>;
  }
  
  const poll = allPoll.find((ele) => ele.id == pollId);

  if (!poll) return <p>Poll not found.</p>;

  const { options, votes } = poll;

  return (
    <div className="poll-results">
      <h2 className="poll-results-title">Results:</h2>
      <ul className="poll-results-list">
        {options.map((option, index) => (
          <li key={index} className="poll-result-item">
            {option} - {votes ? votes[index] : 0} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteResult;
