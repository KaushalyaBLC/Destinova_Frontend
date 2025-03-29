import React, { useState } from "react";
import BotImg from "../assets/botimg/waitingbot.gif";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const CareerBot = () => {
  const [career, setCareer] = useState("");
  const [response, setResponse] = useState("");
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCareer(e.target.value);
  };

  const handleSubmit = () => {
    if (career.trim()) {
      navigate(`/career-vision/career/${career}`);
    } else {
      setResponse("Please enter a career to search.");
    }
  };

  const toggleInputVisibility = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="position-fixed bottom-0 start-0 m-3 -3" style={{ zIndex: 1000 }}>
      <div className="container d-flex" style={{ width: "300px" }}>
        <img
          src={BotImg}
          alt="Career Bot"
          width="100"
          className="mb-3 cursor-pointer"
          onClick={toggleInputVisibility}
        />
        <div>
          <div className="text-lg font-weight-bold text-light mb-2 bg-primary p-2 rounded">
            <Typewriter
              options={{
                strings: [
                  "Hello there...",
                  "Curious about careers? Click me!",
                  "I can tell you about any career.",
                  "Just click on me!"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 1,
              }}
            />
          </div>

          {showInput && (
            <div>
              <input
                type="text"
                value={career}
                onChange={handleInputChange}
                className="form-control mb-2"
                style={{
                  backgroundColor: "black",
                  border: "1px solid #ccc",
                  color: "#FFF",
                  '::placeholder': { color: '#ccc' }
                }}
              />
              <button onClick={handleSubmit} className="btn btn-danger">
                Ask
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerBot;
