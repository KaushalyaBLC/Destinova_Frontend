import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import academicBot from "../assets/botimg/search.gif";

const Form6 = ({ answers, setAnswers, personalData, setFormPage }) => {
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
    setFormPage(8); // Set to the next page (adjust the number based on your form structure)
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100 container">
      <div className="col-lg-4 text-light text-center">
        <Typewriter
          options={{
            strings: [
              `You come to the end of the questions ${personalData.name}! 🎉`,
              "Now, let's dive into your career interests and work preferences! 💼",
              "Understanding your ideal job environment helps me guide you to the right career path.",
              "Do you prefer teamwork or independent work? A flexible schedule or structured routine?",
              "Share your thoughts, and let's map out the career that aligns with your strengths! 💡",
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
        <h2 className="text-danger text-center">
          Career Interests and Work Preferencess
        </h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="learnOutside">
              Which careers or industries excite you the most? What aspects of
              those careers interest you (e.g., creativity, problem-solving,
              leadership, stability)?{" "}
            </label>
            <textarea
              type="text"
              className="form-control"
              id="learnOutside"
              name="answer14"
              value={answers.answer14}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="problemSolving">
              Do you prefer to work individually or as part of a team? Explain
              why.
            </label>
            <textarea
              className="form-control"
              id="problemSolving"
              name="answer15"
              value={answers.answer15}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={() => setFormPage(6)} // Set the form to previous page (adjust accordingly)
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={handleNext} // Go to the next page
            >
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form6;
