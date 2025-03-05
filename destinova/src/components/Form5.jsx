import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import academicBot from "../assets/botimg/search.gif";

const Form5 = ({ answers, setAnswers, personalData, setFormPage }) => {
  // Handle changes to answers
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value, // Update the specific answer field
    });
  };

  // Handle the "Next" button click
  const handleNext = () => {
    // Transition to the next page by changing the form page number
    setFormPage(6); // Set to the next page (adjust the number based on your form structure)
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100 container">
      <div className="col-lg-4 text-light text-center">
        <Typewriter
          options={{
            strings: [
             
              "Let's explore your interests and passions! 💡",
              "Your passion for certain subjects reveals so much about your potential.",
              "Share what excites you, and let's dive deep into your strengths! 🚀",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 1,
          }}
        />
        <img src={academicBot} alt="Nova Bot" width="300" />
      </div>

      <div className="col-lg-1"></div>

      <div
        className="p-5 rounded-3 col-lg-6"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <h2 className="text-danger text-center">Interests and Passion</h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="favouriteSubjects">
              What subjects are you most passionate about, and why? (e.g.,
              Mathematics, Science, Literature, History)
            </label>
            <textarea
              className="form-control"
              id="favouriteSubjects"
              name="answer7"
              value={answers.answer7}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="learnOutside">
              Describe a topic or concept you learned outside your school
              curriculum that fascinated you.
            </label>
            <input
              type="text"
              className="form-control"
              id="learnOutside"
              name="answer8"
              value={answers.answer8}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="problemSolving">
            Can you describe a challenging problem you solved and how you approached it?
            </label>
            <textarea
              className="form-control"
              id="problemSolving"
              name="answer9"
              value={answers.answer9}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={() => setFormPage(4)} // Set the form to previous page (adjust accordingly)
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={handleNext} // Go to the next page
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form5;
