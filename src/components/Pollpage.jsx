import { useState } from "react";

export default function PollPage({question="",options=[]}) {
  // const question = "Which JavaScript framework do you prefer?";
  // const options = ["React", "Vue", "Angular", "Svelte"];

  const [votes, setVotes] = useState(Array(options.length).fill(0));
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (selectedOption === null) return;
    const newVotes = [...votes];
    newVotes[selectedOption]++;
    setVotes(newVotes);
    setVoted(true);
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
        Vote
      </button>

        {voted && (
        <div className="poll-results">
          <h2 className="poll-results-title">Results:</h2>
          <ul className="poll-results-list">
            {options.map((option, index) => (
              <li key={index} className="poll-result-item">
                {option}: {votes[index]} vote{votes[index] !== 1 && "s"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
}
