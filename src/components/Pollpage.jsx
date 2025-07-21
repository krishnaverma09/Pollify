import { useContext, useState } from "react";
import { SeletedPollContext } from "../context/SeletedPoll.jsx";
import { PollContext } from "../context/PollContext";
import { useNavigate } from "react-router-dom";

export default function PollPage() {
  const navigate = useNavigate()
  const { seletedPoll } = useContext(SeletedPollContext);
  const { allPoll, setAllPoll } = useContext(PollContext);


  const selectedPoll = allPoll.find((poll) => poll.id === seletedPoll);
  const { question, options } = selectedPoll;


  const [votes, setVotes] = useState(
    selectedPoll.votes ? [...selectedPoll.votes] : Array(options.length).fill(0)
  );

  const [selectedOption, setSelectedOption] = useState(null);


  const [voted, setVoted] = useState(selectedPoll.hasVoted);

  const handleVote = () => {
    if (selectedOption === null) return;

    const newVotes = [...votes];
    newVotes[selectedOption]++;

    setVotes(newVotes);
    setVoted(true);


    setAllPoll((prev) =>
      prev.map((poll) =>
        poll.id === selectedPoll.id
          ? { ...poll, votes: newVotes, hasVoted: true }
          : poll
      )
    );
    navigate("/thankyou")
  };

  return (
    <div className="poll-container">
      <h1 className="poll-question">{question}</h1>
      <div className="poll-options">
        {options.map((option, index) => (
          <label key={index} className="poll-option">
            <input
              type="radio"
              name="poll"
              value={index}
              disabled={voted}
              onChange={() => setSelectedOption(index)}
              className="poll-radio"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleVote}
        disabled={voted || selectedOption === null}
        className="poll-button"
      >
        {voted ? "Voted" : "Vote"}
      </button>

    </div>
  );
}
