import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import academicBot from "../assets/botimg/academic.gif";

const Form4 = ({ answers, setAnswers, personalData, setFormPage }) => {
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
    setFormPage(5); // Set to the next page (adjust the number based on your form structure)
  };

  return (
    <div className="d-lg-flex flex-row-reverse align-items-center justify-content-center h-100 container mt-5 mt-lg-1">
      <div
        className="p-5 rounded-3 col-lg-6"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <h2 className="text-danger text-center">
          Academic and Technical Skills
        </h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="achievements">
              Describe any notable academic achievements you attained after the
              age of 15 (e.g., awards, scholarships, high grades in specific
              subjects).
            </label>
            <textarea
              className="form-control"
              id="achievements"
              name="answer4"
              value={answers.answer4}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="codingExperience">
              Have you learned or practiced coding? If so, was it through
              school, self-learning, or projects?
            </label>
            <input
              type="text"
              className="form-control"
              id="codingExperience"
              name="answer5"
              value={answers.answer5}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="programmingLanguages">
              What programming languages have you tried, and what have you
              created? (Keep empty if you have not tried coding yet)
            </label>
            <textarea
              className="form-control"
              id="programmingLanguages"
              name="answer6"
              value={answers.answer6}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={() => setFormPage(3)} // Set the form to previous page (adjust accordingly)
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
      <div className="col-lg-1"></div>
      <div className="col-lg-4 text-light text-center mt-4">
        <Typewriter
          options={{
            strings: [
              `OK ${personalData.name} !`,
              "Let's dive into your academic and technical skills! 📚💻",
              "Your strengths in subjects and tech expertise help me understand your potential.",
              "Don't worry, just share your experiences, and I'll do the rest! 😊",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 1,
          }}
        />
        <img src={academicBot} alt="Nova Bot" width="300" />
      </div>
    </div>
  );
};

export default Form4;
