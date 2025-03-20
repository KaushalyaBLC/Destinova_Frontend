import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import styles from "./WisdomGateway.module.css";

const WisdomGateway = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.wisdom}>
        <div className="container d-flex justify-content-center pt-lg-5">
          <div className={styles.content}>
            <div className="d-lg-flex justify-content-between">
              <a
                href="https://www.ugc.ac.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className={`col-lg-4 mt-1 p-3 me-1 border border-light border-2 rounded text-center ${styles.education} text-decoration-none text-reset`}
              >
                <h4>State Universities</h4>
                <p className="small text-">
                  Sri Lanka's state universities, managed by the UGC, provide
                  free higher education based on GCE A/L results, fostering
                  research and development.
                </p>
              </a>
              <a
                href="https://www.coursenet.lk/courses/?levels=1,2"
                target="_blank"
                rel="noopener noreferrer"
                className={`col-lg-4 mt-1 p-3 me-1 border border-light border-2 rounded text-center ${styles.education} text-decoration-none text-reset`}
              >
                <h4>Non State Universities</h4>
                <p className="small text-">
                  Non-state universities in Sri Lanka are privately funded
                  institutions offering higher education in various fields.
                  Notable ones include SLIIT, NSBM, CINEC, and APIIT, providing
                  alternatives to state universities.
                </p>
              </a>
              <a
                href="https://www.coursenet.lk/courses/?levels=3,4,5,6"
                target="_blank"
                rel="noopener noreferrer"
                className={`col-lg-4 mt-1 p-3 me-1 border border-light border-2 rounded text-center ${styles.education} text-decoration-none text-reset`}
              >
                <h4>Diploma and Higher Diploma</h4>
                <p className="small text-">
                  A diploma is a short-term program offering foundational
                  skills, while a higher diploma provides advanced knowledge,
                  often between a diploma and degree.
                </p>
              </a>
            </div>
            <div className="d-lg-flex justify-content-center">
              <a
                href="https://course.vta.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className={`col-lg-4 mt-1 p-3 me-1 border border-light border-2 rounded text-center ${styles.education} text-decoration-none text-reset`}
              >
                <h4>NVQ Courses</h4>
                <p className="small text-">
                  The NVQ (National Vocational Qualification) program in Sri
                  Lanka offers practical, job-oriented training and
                  certification in various fields, ensuring individuals are
                  skilled and employable.
                </p>
              </a>
              <a
                href="https://www.coursenet.lk/courses/?levels=7"
                target="_blank"
                rel="noopener noreferrer"
                className={`col-lg-4 mt-1 p-3 me-1 border border-light border-2 rounded text-center ${styles.education} text-decoration-none text-reset`}
              >
                <h4>Certificate Programs</h4>
                <p className="small text-">
                  A certificate is a short qualification that confirms
                  completion of a specific course or training, typically taking
                  a few months.
                </p>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WisdomGateway;
