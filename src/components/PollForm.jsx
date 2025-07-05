import { useState } from "react";
import PollPage from "./Pollpage";

export default function PollForm() {
const [isTrue,SetIsTrue] = useState(false);
const [question, setQuestion] = useState("");
const [options, setOptions] = useState(["", "", "", ""]);

const handleOptionChange = (index, value) => {
const updatedOptions = [...options];
updatedOptions[index] = value;
setOptions(updatedOptions);
};

const handleSubmit = (e) => {
e.preventDefault();
console.log("Question:", question);
console.log("Options:", options);
// Add your logic to send data to backend or state
SetIsTrue(!isTrue)

};

return (
  <>
{!isTrue ? 
<form className="poll-form" onSubmit={handleSubmit}>
<h2 className="form-title">Create a Poll</h2>
  <label className="form-label">
    Question:
    <input
      type="text"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      className="form-input"
      placeholder="Enter your poll question"
      required
    />
  </label>

  {options.map((option, index) => (
    <label key={index} className="form-label">
      Option {index + 1}:
      <input
        type="text"
        value={option}
        onChange={(e) => handleOptionChange(index, e.target.value)}
        className="form-input"
        placeholder={`Option ${index + 1}`}
        required
      />
    </label>
  ))}

  <button type="submit" className="submit-button">
    Create Poll
  </button>
</form> : <PollPage options = {options} question = {question}/> }
</>
)
}
