import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import academicBot from "../assets/botimg/academic.gif";

const Form3 = ({ answers, setAnswers, personalData, setFormPage }) => {
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
    setFormPage(4); // Set to the next page (adjust the number based on your form structure)
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100 container">
      <div className="col-lg-4 text-light text-center">
        <Typewriter
          options={{
            strings: [
              `OK ${personalData.name}`,
              "Let's dive into your academic and technical skills! 📚💻",
              "Your strengths in subjects and tech expertise help me understand your potential.",
              "Don't worry, just share your experiences, and I'll do the rest! 😊"
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
        <h2 className="text-danger text-center">Academic and Technical Skills</h2>
        <form>
          {/* Question 1 - Confidence in Mathematics and Science */}
          <div className="mb-3">
            <label className="form-label" htmlFor="mathConfidence">
              How confident do you feel in your mathematics and science abilities? (1 to 5)
            </label>
            <input
              type="range"
              className="form-range"
              id="mathConfidence"
              name="answer1" // Correctly map to answer1
              value={answers.answer1 || 1} // Set initial value to 1
              onChange={handleChange}
              min="1"
              max="5"
              step="1"
            />
            <div className="text-center">{answers.answer1 || 1}</div>
          </div>

          {/* Question 2 - Proficiency in Software */}
          <div className="mb-3">
            <label className="form-label" htmlFor="softwareProficiency">
              Rate your proficiency in using computers and software applications (e.g., word processors, spreadsheets, presentation tools) from 1 to 5.
            </label>
            <input
              type="range"
              className="form-range"
              id="softwareProficiency"
              name="answer2" // Correctly map to answer2
              value={answers.answer2 || 1} // Set initial value to 1
              onChange={handleChange}
              min="1"
              max="5"
              step="1"
            />
            <div className="text-center">{answers.answer2 || 1}</div>
          </div>

          {/* Question 3 - Comfort with Writing Essays or Reports */}
          <div className="mb-3">
            <label className="form-label" htmlFor="writingComfort">
              How comfortable are you with writing essays or reports? (Rate from 1 to 5.)
            </label>
            <input
              type="range"
              className="form-range"
              id="writingComfort"
              name="answer3" // Correctly map to answer3
              value={answers.answer3 || 1} // Set initial value to 1
              onChange={handleChange}
              min="1"
              max="5"
              step="1"
            />
            <div className="text-center">{answers.answer3 || 1}</div>
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={() => setFormPage(2)} // Set the form to previous page (adjust accordingly)
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

export default Form3;
