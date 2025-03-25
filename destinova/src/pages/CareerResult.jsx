import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./CareerResult.module.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import BotImg from "../assets/botimg/waitingbot.gif";
import Typewriter from "typewriter-effect";

const CareerResult = () => {
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { career } = useParams();

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        console.log("Fetching career data for:", career);
        const response = await axios.get(`http://localhost:3000/crystal/career/${career}`);
        setCareerData((prevData) =>
          JSON.stringify(prevData) !== JSON.stringify(response.data) ? response.data : prevData
        );
      } catch (error) {
        console.error("Error fetching career data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerData();
  }, [career]); 

  return (
    <>
      <NavigationBar />
      <div className={styles.page}>
        <div className={`${styles.context} container`}>
          {loading ? (
            <div className="d-flex align-items-center justify-content-center text-center">
              <div>
                <img src={BotImg} width="300" alt="Loading bot" />
                <h5>
                  <Typewriter
                    options={{
                      strings: ["Please Wait....", "Your Career Details are on the way...."],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 1,
                    }}
                  />
                </h5>
              </div>
            </div>
          ) : (
            <div className="d-lg-flex">
              <div className="col-lg-5">
                <h2>{careerData?.career_title}</h2>
                <p>{careerData?.description}</p>
                <div>
                  <h4 className="border border-light border-2 p-2 rounded">Work Environment</h4>
                  <p>{careerData?.work_environment}</p>
                </div>
                <div>
                  <h4 className="border border-light border-2 p-2 rounded">Industries</h4>
                  <ul>
                    {careerData?.industries?.map((industry, index) => (
                      <li key={index}>{industry}</li>
                    ))}
                  </ul>
                </div>
                <h4 className="border border-light border-2 p-2 rounded">Skills</h4>
                <div>
                  <h5>Technical Skills</h5>
                  <ul>
                    {careerData?.skills?.technical_skills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Soft Skills</h5>
                  <ul>
                    {careerData?.skills?.soft_skills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <h4 className="border border-light border-2 p-2 rounded">Qualifications</h4>
                <div>
                  <h5>Minimum Education</h5>
                  <p>{careerData?.qualifications?.minimum_education}</p>
                </div>
                <div>
                  <h5>Recommended Education</h5>
                  <p>{careerData?.qualifications?.recommended_education}</p>
                </div>
                <div>
                  <h5>Training</h5>
                  <p>{careerData?.qualifications?.training_courses?.join(", ")}</p>
                </div>
                <h4 className="border border-light border-2 p-2 rounded">Recommended Tools & Technologies</h4>
                <ul>
                    {careerData?.tools_and_technologies?.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 mt-3">
                <h4 className="border border-light border-2 p-2 rounded">Job Market</h4>
                <div>
                    <h5>Demand in Srilanka</h5>
                    <p>{careerData.job_market.demand_in_sri_lanka}</p>
                </div>
                <div>
                    <h5>Growth Trends</h5>
                    <p>{careerData.job_market.growth_trends}</p>
                </div>
                <div>
                    <h5>Major Employers</h5>
                    <ul>
                        {careerData.job_market.major_employers.map((employer, index) => (
                            <li key={index}>{employer}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>Freelancing Opportunities</h5>
                    <p>{careerData.job_market.freelance_opportunities}</p>
                </div>
                <h4 className="border border-light border-2 p-2 rounded">Career Paths</h4>
                <div>
                    <h5>Entry Level Roles</h5>
                    <ul>
                        {careerData.career_path.entry_level_roles.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>Mid Level Roles</h5>
                    <ul>
                        {careerData.career_path.mid_level_roles.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>Senior Level Roles</h5>
                    <ul>
                        {careerData.career_path.senior_level_roles.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>Alternative Careers</h5>
                    <ul>
                        {careerData.career_path.alternative_careers.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="border border-light border-2 p-2 rounded">Work Life Balance</h4>
                    <div>
                        <h5>Working Hours</h5>
                        <p>{careerData.work_life_balance.working_hours}</p>
                    </div>
                    <div>
                        <h5>Job Flexibility</h5>
                        <p>{careerData.work_life_balance.job_flexibility}</p>
                    </div>
                    <div>
                        <h5>Stresss Level</h5>
                        <p>{careerData.work_life_balance.stress_level}</p>
                    </div>
                    <div>
                        <h5>Job Satisfaction</h5>
                        <p>{careerData.work_life_balance.job_satisfaction}</p>
                    </div>
                    <h4 className="border border-light border-2 p-2 rounded">Education and Training</h4>
                    <div>
                        <h5>Top Educational Institutions</h5>
                        <ul>
                            {careerData.education_and_training.top_universities.map((institution, index) => (
                                <li key={index}>{institution}</li>
                            ))}
                        </ul>
                        <h5>Online Education</h5>
                        <ul>
                            {careerData.education_and_training.online_courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerResult;
