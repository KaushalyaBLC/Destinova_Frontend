import React from "react";
import NavigationBar from "../components/NavigationBar";
import styles from "./WisdomGateway.module.css";

const WisdomGateway = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.wisdom}>
        <div className="container d-flex justify-content-center pt-lg-5">
          <div className={styles.content}>
            <div className="d-flex justify-content-between">
              <div className="col-lg-4 border border-light border-2 text-center rounded p-3 me-1 py-4">
                <h5>State Universities</h5>
                <p className="small text-">
                  Sri Lanka's state universities, managed by the UGC, provide
                  free higher education based on GCE A/L results, fostering
                  research and development.
                </p>
              </div>
              <div className="col-lg-4 border border-light border-2 text-center rounded p-3 me-1">
                <h5>Non State Universities</h5>
                <p className="small text-">
                  Non-state universities in Sri Lanka are privately funded
                  institutions offering higher education in various fields.
                  Notable ones include SLIIT, NSBM, CINEC, and APIIT, providing
                  alternatives to state universities.
                </p>
              </div>
              <div className="col-lg-4 border border-light border-2 text-center rounded p-3">
                <h5>Diploma and Higher Diploma</h5>
                <p className="small text-">
                  A diploma is a short-term program offering foundational
                  skills, while a higher diploma provides advanced knowledge,
                  often between a diploma and degree.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-1">
              <div className="col-lg-4 border border-light border-2 text-center rounded p-3 me-1 py-4">
                <h5>NVQ Courses</h5>
                <p className="small text-">
                  The NVQ (National Vocational Qualification) program in Sri
                  Lanka offers practical, job-oriented training and
                  certification in various fields, ensuring individuals are
                  skilled and employable.
                </p>
              </div>
              <div className="col-lg-4 border border-light border-2 text-center rounded p-3 me-1">
                <h5>Certificate Programs</h5>
                <p className="small text-">
                  A certificate is a short qualification that confirms
                  completion of a specific course or training, typically taking
                  a few months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WisdomGateway;
