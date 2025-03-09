import React from "react";
import styles from "./CareerVision.module.css";
import NavigationBar from "../components/NavigationBar";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineAgriculture } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { MdFactory } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CareerVision = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className="d-block">
        <NavigationBar />
      </div>

      <div className={styles.content}>
        <div className="container d-flex align-items-center h-100">
          <div className="col-lg-4 ">
            <h3 className="text-danger mb-3">
              Welcome to Career Vision Crystal
            </h3>
            <p className="text-light">
              Discover personalized career insights, industry trends, and clear
              pathways tailored to your skills and goals. Whether you're a
              student or a professional, make informed career decisions with
              confidence!
            </p>
            <div className="text-light d-flex  align-items-center">
              <p className="my-auto me-2">Select an Industry to Explore</p>
              <FaArrowRight />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h6 className="text-light text-center">
              - Select a Industry to Explore -
            </h6>
            <div className="mb-1 text-light d-flex">
              <div className={`col-4 me-1 ${styles.industry}`} onClick={() => navigate("/career-vision/agriculture")}>
                <h5>Agriculture & Plantation</h5>
                <p className="py-2">
                  Innovate in agribusiness, sustainable farming, and food
                  technology.
                </p>
                <MdOutlineAgriculture size={50} />
              </div>

              <div className={`col-4 me-1 ${styles.industry}`} onClick={() => navigate("/career-vision/apparel")}>
                <h5>Apparel & Textiles</h5>
                <p className="py-2">
                  {" "}
                  Design, manufacture, and manage global fashion brands.
                </p>
                <GiClothes size={50} />
              </div>
              <div className={`col-4 me-1 ${styles.industry}`} onClick={() => navigate("/career-vision/tourism")}>
                <h5>Tourism & Hospitality</h5>
                <p className="py-2">
                  Build a career in travel, hotel management, and event
                  planning.
                </p>
                <MdOutlineModeOfTravel size={50} />
              </div>
            </div>

            <div className=" text-light d-flex">
              <div className={`col-4 me-1 ${styles.industry}`} onClick={() => navigate("/career-vision/it")}>
                <h5>IT & BPM</h5>
                <p className="py-2">
                  {" "}
                  Join the future of tech in software development, AI, and data
                  analytics.{" "}
                </p>
                <FaComputer size={50} />
              </div>
              <div className={`col-4 me-1 ${styles.industry}`} onClick={() => navigate("/career-vision/manufacturing")}>
                <h5>Manufacturing & Industrial</h5>
                <p className="py-2">
                  {" "}
                  Drive innovation in engineering, automation, and production.{" "}
                </p>
                <MdFactory size={50} />
              </div>
              <div className={`col-4 me-1 ${styles.industry}`} onClick={() => navigate("/career-vision/construction")}>
                <h5>Construction & Infrastructure</h5>
                <p className="py-2">
                  Shape the nation with careers in engineering and urban
                  planning.
                </p>
                <IoIosConstruct size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerVision;
