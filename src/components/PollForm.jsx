import { useContext, useState } from "react";
import { PollContext } from "../context/PollContext";
import { useNavigate } from "react-router-dom";
import { supabase } from '../context/PollContext';

export default function PollForm() {
  const navigate = useNavigate();

  const { setAllPoll } = useContext(PollContext);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPoll = {
      question,
      options,
      votes: Array(options.length).fill(0),
    };
    // Insert poll into Supabase
    const { data, error } = await supabase.from('polls').insert([newPoll]).select();
    if (error) {
      alert('Error creating poll: ' + error.message);
      return;
    }
    setAllPoll((prev) => [...prev, { ...newPoll, id: data[0].id }]);
    navigate("/");
  };

  return (
    <>
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
      </form>
    </>
  );
}
