import React, { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Logo from "../assets/coloredlogo.png";
import NotEnoughInformation from "./NotEnoughInformation";

const NovaResultDisplay = ({ results, enoughInformation }) => {
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const toggleEducation = (index) => {
    setExpandedEducation(expandedEducation === index ? null : index);
  };

  const toggleCareer = (index) => {
    setExpandedCareer(expandedCareer === index ? null : index);
  };

  return (
    <div className="col-lg-8 rounded">
      <div className="rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        <div className="p-5">
          {results.enoughInformation!="true" ? (
           <NotEnoughInformation />
          ) : (
            results && (
              <div>
                <h2 className="text-center">Empower Your Future</h2>
                <h6 className="text-center pb-5">
                  - Insights and Guidance by Nova, Your AI Career Counsellor -
                </h6>

                <h4>Passion</h4>
                <p>{results.passion}</p>
                <h4>Skills</h4>
                <p>{results.skill}</p>

                {/* Higher Education Section */}
                <div className="border p-5 rounded border-primary border-3 my-4">
                  <h4>Higher Education</h4>
                  {results.higherEducation?.map((education, index) => (
                    <div key={index} className="my-4">
                      <div className="bg-light p-3 rounded bg-dark">
                        <h5>{education.name}</h5>
                        <p>{education.description}</p>
                        {expandedEducation === index ? (
                          <>
                            <div>
                              <h6>Pathway to Higher Education</h6>
                              <p>{education.path}</p>
                              <h6>Why This Path is Suitable for You?</h6>
                              <p>{education.whySuitable}</p>
                              <h6>How to Get Ready</h6>
                              <p>{education.howtoImprove}</p>
                              <h6>Benefits</h6>
                              <ul>
                                {education.prosAndCons.pros.map((pro, i) => (
                                  <li key={i}>{pro}</li>
                                ))}
                              </ul>
                              <h6>Drawbacks</h6>
                              <ul>
                                {education.prosAndCons.cons.map((con, i) => (
                                  <li key={i}>{con}</li>
                                ))}
                              </ul>
                            </div>
                            <div
                              className="d-flex justify-content-center mt-3"
                              onClick={() => toggleEducation(null)}
                            >
                              <IoMdArrowDropupCircle size={25} />
                              <p className="ms-2">Read Less</p>
                            </div>
                          </>
                        ) : (
                          <div
                            className="d-flex justify-content-center border rounded border-3 align-items-center p-2 border-dark"
                            onClick={() => toggleEducation(index)}
                          >
                            <MdArrowDropDownCircle size={25} />
                            <p className="ms-2 d-block my-auto">Read More</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Career Paths Section */}
                <div className="border p-5 rounded border-danger border-3 mt-4">
                  <h4>Career Paths</h4>
                  {results.careerPath?.map((career, index) => (
                    <div key={index} className="my-4">
                      <div className="bg-light p-3 rounded bg-dark">
                        <h5>{career.name}</h5>
                        <p>{career.description}</p>
                        {expandedCareer === index ? (
                          <>
                            <div>
                              <h6>How to Become a {career.name}</h6>
                              <p>{career.path}</p>
                              <h6>Why This Career Path is Suitable for You?</h6>
                              <p>{career.whySuitable}</p>
                              <h6>How to Get Ready</h6>
                              <p>{career.howtoImprove}</p>
                              <h6>Benefits</h6>
                              <ul>
                                {career.prosAndCons.pros.map((pro, i) => (
                                  <li key={i}>{pro}</li>
                                ))}
                              </ul>
                              <h6>Drawbacks</h6>
                              <ul>
                                {career.prosAndCons.cons.map((con, i) => (
                                  <li key={i}>{con}</li>
                                ))}
                              </ul>
                            </div>
                            <div
                              className="d-flex justify-content-center mt-3"
                              onClick={() => toggleCareer(null)}
                            >
                              <IoMdArrowDropupCircle size={25} />
                              <p className="ms-2">Read Less</p>
                            </div>
                          </>
                        ) : (
                          <div
                            className="d-flex justify-content-center border rounded border-3 align-items-center p-2 border-dark"
                            onClick={() => toggleCareer(index)}
                          >
                            <MdArrowDropDownCircle size={25} />
                            <p className="ms-2 d-block my-auto">Read More</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer Section */}
        {enoughInformation && (
          <>
            <p className="text-secondary text-center container px-5">
              "You are the expert on yourself! Let us provide you with the insights,
              and together, we’ll help you make the smartest decision for your
              future!"
            </p>
            <hr className="m-2 p-1 mx-5" />
            <div className="p-3 d-flex flex-column justify-content-center align-items-center text-secondary">
              <p className="text-center">
                Report is generated by Nova, Your AI Career Counsellor <br /> Powered By
              </p>
              <div className="d-flex justify-content-center align-items-center border border-secondary rounded p-2 border-2">
                <img src={Logo} alt="Destinova Logo" style={{ height: "5rem" }} />
                <div>
                  <h6>Destinova</h6>
                  <p>Your Guiding Star for a Brighter Future</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NovaResultDisplay;
