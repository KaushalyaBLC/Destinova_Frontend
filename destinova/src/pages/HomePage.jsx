import React from "react";
import NavigationBar from "../components/NavigationBar";
import Typewriter from "typewriter-effect";
import peekBot from "../assets/botimg/peekbot.gif";

import styles from "./HomePage.module.css"; // Import the CSS module
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigator = useNavigate();
  return (
    <>
      <section className={styles.hero}>
        <NavigationBar />
        <div className="container d-flex  justify-content-center align-items-center vh-100 ">
          <div className="text-light text-center">
            <h1 className="p-3">
              Chart Your Path to Success with{" "}
              <span className="text-danger">Destinova</span>
            </h1>
            <div className=" text-warning fs-4">
              <b>
                <Typewriter
                  options={{
                    strings: [
                      "AI-powered skill and passion recognition.",
                      "Job market insights tailored for you.",
                      "Higher education networking made easy.",
                      "Helping you navigate your future with confidence.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </b>
            </div>
            <p className="container-lg p-3 mt-3">
              At Destinova, we believe that every individual has a unique path
              to success. Our AI-powered platform helps you discover your true
              potential, explore exciting career opportunities, and connect with
              top educational programs tailored to your goals. Whether you're
              seeking your dream job or advancing your skills, we're here to
              guide you every step of the way
            </p>

            <button className="btn btn-danger p-2 px-4">Get Started</button>
          </div>
        </div>
      </section>

      <section className={styles.spidbot}>
        <div className="d-flex align-items-center  h-100 container">
          <div
            className=" p-5 rounded-3 col-lg-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Reduced opacity only for the background
          >
            <div className="text-center">
              <h2 className="text-danger text-center">
                Unlock Your True Potential With{" "}
                <span className="text-warning">Nova</span>
              </h2>
              <h6 className="text-light text-center">
                - You Personal AI Career Mentor -
              </h6>
              <div className="px-5 text-center py-4 text-warning fs-5 text-jutify">
                <b>
                  <Typewriter
                    options={{
                      strings: [
                        "Nova analyzes your interests, skills, and personality to reveal career paths that align with your true passion.",
                        "Using advanced AI, Nova evaluates your responses and matches you with careers that fit your strengths.",
                        "Receive tailored job recommendations, trending industry insights, and higher education opportunities that match your ambitions.",
                        "Nova bridges the gap between who you are today and who you’re meant to become, guiding you toward a future of success and fulfillment.",
                      ],

                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 1,
                    }}
                  />
                </b>
              </div>

              <button className="btn btn-danger p-2 px-4 mt-3" onClick={()=>navigator("/meet-nova")}>
                Meet Nova
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.jobmarket}>
        <div className="d-flex align-items-center justify-content-end h-100 container">
          <div
            className=" p-5 rounded-3 col-lg-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Reduced opacity only for the background
          >
            <div className="">
              <h2 className="text-danger text-center">
                Discover JobMarket With CareerVision Crystal
              </h2>
              <h6 className="text-light text-center">
                - See Every Career Path, Unveil Your Possibilities -
              </h6>
              <p className="text-light mt-4 text-center">
                At Destinova, we believe that the right career insights can
                transform your future. Our CareerVision Crystal feature, powered
                by advanced AI, gives you an edge in navigating Sri Lanka’s
                dynamic job market with confidence and clarity.
              </p>
              <p className="text-center mt-4 mx-auto text-warning list-unstyled">
                Real-Time Industry Trends | Explore Tailored Career Paths |
                Salary Insights & Job Demand | Skills Gap Analysis
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger p-2 px-4 mt-3 ">
                  Unveil Your Possibilities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.academic}>
        <div className="d-flex align-items-center justify-content-start h-100 container">
          <div
            className=" p-5 rounded-3 col-lg-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Reduced opacity only for the background
          >
            <div className="">
              <h2 className="text-danger text-center">
                Wisdom Gateway: Your Gateway to Trusted Educational Resources
              </h2>
              <h6 className="text-light text-center">
                - Connecting You to the Right Education, One Click Away!-
              </h6>
              <p className="text-light mt-4 text-center">
                At Destinova, we make it easy for you to find the right academic
                opportunities by connecting you to reputed sources for higher
                education and skill development in Sri Lanka. we guide you to
                the best official resources where you can get accurate and
                up-to-date information.
              </p>

              <p className="text-center mt-4 mx-auto text-warning list-unstyled">
                State Universities | NonState Universities | Vocational Training
                | Certiicate Courses & Diploma Programs
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger p-2 px-4 mt-3 ">
                  Find Your Academic Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutus}>
        <div className="d-flex align-items-center justify-content-center h-100 container">
          <div
            className=" p-5 rounded-3 col-lg-8"
            style={{ backgroundColor: "rgba(23, 14, 14, 0.73)" }} // Reduced opacity only for the background
          >
            <div className="">
              <h2 className="text-danger text-center">About Us</h2>
              <h6 className="text-light text-center">
                - Empowering Your Career Journey with AI-Powered Insights -
              </h6>
              <p className="text-light mt-4 text-center">
                At Destinova, we believe that choosing the right career
                shouldn’t be a leap into the unknown. That’s why we’ve built an
                innovative platform that gives you access to comprehensive
                career insights, academic pathways, and industry trends, all
                powered by advanced AI.
              </p>
              <p className="text-center text-light">
                Whether you’re a student exploring options, a professional
                seeking growth, or a job seeker navigating the market, Destinova
                helps you make data-driven decisions about your future.
              </p>
              <h6 className="text-light text-center pt-4">- Our Mission -</h6>
              <p className="text-center  mx-auto text-warning list-unstyled">
                To bridge the gap between education and career success by
                providing accurate, accessible, and AI-driven career insights
                for every Sri Lankan.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger p-2 px-4 mt-3 ">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
