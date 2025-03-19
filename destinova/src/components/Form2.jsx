import React from "react";
import Typewriter from "typewriter-effect";
import WaitingBot from "../assets/botimg/waitingbot.gif";

const Form2 = ({
  personalData,
  educationDetails,
  setEducationDetails,
  setFormPage,
}) => {
  // Handle form changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prevDetails) => {
      const keys = name.split(".");

      if (keys.length === 1) {
        // Handles non-nested fields like "preal" and "degree"
        return {
          ...prevDetails,
          [name]: value,
        };
      } else if (keys.length === 2) {
        return {
          ...prevDetails,
          [keys[0]]: { ...prevDetails[keys[0]], [keys[1]]: value },
        };
      } else if (keys.length === 3) {
        return {
          ...prevDetails,
          [keys[0]]: {
            ...prevDetails[keys[0]],
            [keys[1]]: {
              ...prevDetails[keys[0]][keys[1]],
              [keys[2]]: value,
            },
          },
        };
      }
      return prevDetails;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Details Submitted:", educationDetails);
    setFormPage(3); // Move to next form
  };

  return (
    <div className="d-lg-flex align-items-center justify-content-center h-100 container">
      <div
        className="p-5 rounded-3 col-lg-6"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <h2 className="text-danger text-center">Education Information</h2>
        <form onSubmit={handleSubmit}>
          {personalData.education === "preol" && (
            setFormPage(3)
          )}


          {personalData.education === "ol" && (
            <div className="d-flex flex-column align-items-center mt-3">
              <h5>Ordinary Level (O/L)</h5>
              <table className="text-center">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(educationDetails.ol).map((key, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name={`ol.${key}.subject`}
                          placeholder={`Subject ${index + 1}`}
                          value={educationDetails.ol[key].subject}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`ol.${key}.grade`}
                          placeholder={`Grade`}
                          value={educationDetails.ol[key].grade}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {personalData.education === "preal" && (
            <>
              <h5>Preferred A/L Subject Combination</h5>
              <input
                type="text"
                name="preal"
                placeholder="Enter your A/L subject stream (e.g., Maths, Chemistry, Physics)"
                value={educationDetails.preal}
                onChange={handleChange}
                className="form-control my-2"
                required
              />
            </>
          )}

          {personalData.education === "al" && (
            <div className="d-flex flex-column align-items-center mt-3">
              <h5>Advanced Level (A/L)</h5>
              <table className="text-center">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(educationDetails.al).map((key, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name={`al.${key}.subject`}
                          placeholder={`A/L Subject ${index + 1}`}
                          value={educationDetails.al[key].subject}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`al.${key}.grade`}
                          placeholder={`Grade`}
                          value={educationDetails.al[key].grade}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {personalData.education === "degree" && (
            <>
              <h5 className="mt-2">Degree</h5>
              <input
                type="text"
                name="degree"
                placeholder="Enter your degree program"
                value={educationDetails.degree}
                onChange={handleChange}
                className="form-control my-2"
                required
              />
            </>
          )}
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger p-2 px-4 mt-3"
              onClick={() => setFormPage(1)}
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
              `Hello ${personalData.name}!`,
              "Let's move on to your education details! ",
              "Knowing your education level helps me suggest the best career paths for you.",
              "Please enter your education details to continue.",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 1,
          }}
        />
        <img src={WaitingBot} alt="Nova Bot" width="300" />
      </div>
    </div>
  );
};

export default Form2;
