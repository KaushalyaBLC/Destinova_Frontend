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
    setFormPage(7); // Set to the next page (adjust the number based on your form structure)
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100 container">
      <div className="col-lg-4 text-light text-center">
        <Typewriter
          options={{
            strings: [
              `You are almost done ${personalData.name}! 🎉`,
              "Let's take a look at your extra-curricular activities! 🏅",
              "Beyond academics, these activities show your leadership, creativity, and teamwork skills.",
              "Whether it's sports, arts, or volunteering, it's all about passion and growth! 🌱",
              "Share your experiences, and let's celebrate your diverse talents! 💪",
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
        <h2 className="text-danger text-center">Extra Curricular Activities</h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="learnOutside">
              Which sports have you participated in?
            </label>
            <input
              type="text"
              className="form-control"
              id="learnOutside"
              name="answer10"
              value={answers.answer10}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="problemSolving">
              What skills or lessons have you gained from sports, and how have
              they influenced your personal or professional goals?
            </label>
            <textarea
              className="form-control"
              id="problemSolving"
              name="answer11"
              value={answers.answer11}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="learnOutside">
              Which extracurricular activities have you participated in? Mention
              any special positions or leadership roles you held.
            </label>
            <input
              type="text"
              className="form-control"
              id="learnOutside"
              name="answer12"
              value={answers.answer12}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="problemSolving">
              Have you taken any initiatives or led any projects? If so, please
              describe your role and the impact of your work."{" "}
            </label>
            <textarea
              className="form-control"
              id="problemSolving"
              name="answer13"
              value={answers.answer13}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={() => setFormPage(5)} // Set the form to previous page (adjust accordingly)
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

export default Form6;
