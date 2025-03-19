import React from "react";
import style from "./NovaPage.module.css";
import NovaBot from "../assets/botimg/bot.gif";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const NovaPage = () => {
  const navigator = useNavigate();
  return (
    <>
  
    <div className={style.novapage}>
      <div className={style.navigation}>
        <NavigationBar />
      </div>
      <section className="d-flex align-items-center justify-content-center h-100 container">
        <div className="d-lg-flex flex-row-reverse align-items-center justify-content-center  container">
         
          <div
            className=" p-5 rounded-3 col-lg-8"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Reduced opacity only for the background
          >
            <div className="">
              <h2 className="text-danger text-center">
                Unlock Your Future with Nova
              </h2>
              <h6 className="text-light text-center">
                - Empowering Your Career Journey with AI-Powered Insights -
              </h6>
              <p className="text-light mt-4">
                Choosing the right career path can be challenging, but you don’t
                have to do it alone. Nova, our intelligent career assessment
                tool, is designed to help you discover your true potential by
                analyzing your passions, skills, and strengths.
              </p>
              <h4 className="text-danger text-center">How Nova Works</h4>
              <ul className="text-light list-unstyled ">
                <li><span className="text-warning">Personalized Assessment :</span> Answer a series of carefully crafted questions.</li>
                <li><span className="text-warning"> AI-Powered Insights :</span> Gain a deeper understanding of your strengths and interests.</li>
                <li><span className="text-warning">Tailored Career Recommendations  :</span> Explore careers that align with your unique profile.</li>
              </ul>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger p-2 px-4 mt-3 " onClick={() => {navigator("/meet-nova/form")}}>
                  Start Now
                </button>
              </div>
            </div>
          </div>
           <div className="col-lg-4  d-flex justify-content-center align-items-center">
            <img src={NovaBot} width={300} />
          </div>
        </div>
      </section>
      
    </div>
    <Footer />
    </>
  );
};

export default NovaPage;
