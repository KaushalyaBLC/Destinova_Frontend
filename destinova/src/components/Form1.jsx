import React from "react";
import WaitingBot from "../assets/botimg/waitingbot.gif";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Form1 = ({ personalData, setPersonalData, setFormPage }) => {
  // Handle form changes dynamically
  const handleChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Collected Data:", personalData);
    setFormPage(2); // Move to next form
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="d-lg-flex flex-row-reverse align-items-center justify-content-center h-100 container mt-5 mt-lg-1">
        <div
          className="p-5 rounded-3 col-lg-6"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <h2 className="text-danger text-center">Basic Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Name Input */}
              <div className="col-12">
                <label htmlFor="name" className="form-label pt-2">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={personalData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="col-12">
                <label htmlFor="email" className="form-label pt-2">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={personalData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="col-12">
                <label htmlFor="telNo" className="form-label pt-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telNo"
                  name="telNo"
                  value={personalData.telNo}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Date of Birth Input */}
              <div className="col-12">
                <label htmlFor="bday" className="form-label pt-2">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="bday"
                  name="bday"
                  value={personalData.bday}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Education Level Dropdown */}
              <div className="col-12">
                <label htmlFor="education" className="form-label pt-2">
                  Highest Education Qualification:
                </label>
                <select
                  className="form-control"
                  id="education"
                  name="education"
                  value={personalData.education}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="preol">Following GCE O/L</option>
                  <option value="ol">Completed GCE O/L</option>
                  <option value="preal">Following GCE A/L</option>
                  <option value="al">Completed GCE A/L</option>
                  <option value="degree">
                    Following or Completed a Bachelor | Master | PhD Degree
                    Program
                  </option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-danger p-2 px-4 mt-3"
                onClick={() => {navigate("/meet-nova");}}
              >
                Back
              </button>
              <button type="submit" className="btn btn-danger p-2 px-4 mt-3">
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
                "Hello there! 👋 I’m Nova, your AI career guide.",
                "I’ll ask you a few questions to understand your passions, skills, and goals.",
                "Ready to begin?",
                "Great! Let’s start with the basics.",
              ],
              autoStart: true,
              loop: false,
              delay: 75,
              deleteSpeed: 1,
            }}
          />
          <img src={WaitingBot} alt="Nova Bot" width={300} />
        </div>
      </div>
    </>
  );
};

export default Form1;
