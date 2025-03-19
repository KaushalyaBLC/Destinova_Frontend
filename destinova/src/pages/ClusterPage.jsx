import React, { useState, useEffect } from "react";
import styles from "./ClusterPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer'

const ClusterPage = () => {
  const { cluster } = useParams();
  const [clusterData, setClusterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/crystal/cluster/${cluster}`)
      .then((response) => {
        setClusterData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cluster data:", error);
        setError("There was an error loading the data.");
        setLoading(false);
      });
  }, [cluster]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className={`${styles[clusterData?.industry]}`}>
      <NavigationBar />
      <div className={styles.content}>
        <div className="container">
          <div className="d-flex">
            {/* Left Section */}
            <div className="col-lg-5">
              <h2>{clusterData?.name}</h2>
              <p>{clusterData?.definition}</p>

              {/* Key Areas Section */}
              <div>
                <h4 className="border border-light p-2 border-2 rounded">
                  Key Areas
                </h4>
                {clusterData?.key_areas?.map((area) => (
                  <div key={area._id}>
                    <h5>{area.title}</h5>
                    <p>{area.description}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="border border-light p-2 border-2 rounded">
                  Education & Training
                </h4>
                {clusterData?.education_training?.map((education) => (
                  <div key={education._id} className="mt-4">
                    <h5>{education.title}</h5>
                    <ul>
                      {education.description?.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="border border-light p-2 border-2 rounded">
                  Employment Sectors
                </h4>
                {clusterData?.employment_sectors?.map((employment) => (
                  <div key={employment._id} className="mt-4">
                    <h5>{employment.title}</h5>
                    <p>{employment.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer Column */}
            <div className="col-lg-1"></div>

            {/* Right Section */}
            <div className="col-lg-6">
              <div>
                <h4 className="border border-light p-2 border-2 rounded">
                  Popular Careers
                </h4>
                {clusterData?.career_paths?.map((career) => (
                  <div key={career._id} className="mt-3">
                    <h5>{career.title}</h5>
                    <p>{career.description}</p>
                  </div>
                ))}
              </div>
              <div>
              <h4 className="border border-light p-2 border-2 rounded">
                  Skills Required
                </h4>
                {clusterData?.skills_required?.map((skill) => (
                  <div key={skill._id} className="mt-3">
                    <p><b>{skill.title}: </b>{skill.description}</p>
                  </div>
                ))}
              </div>
              <div>
              <h4 className="border border-light p-2 border-2 rounded">
                  Future Trends
                </h4>
                {clusterData?.future_trends?.map((trend) => (
                  <div key={trend._id} className="mt-3">
                    <p><b>{trend.title}: </b>{trend.description}</p>
                  </div>
                ))}
              </div>
              <div>
              <h4 className="border border-light p-2 border-2 rounded">
                  Opportunities
                </h4>
                {clusterData?.opportunities?.map((opportunity) => (
                  <div key={opportunity._id} className="mt-3">
                    <p><b>{opportunity.title}: </b>{opportunity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ClusterPage;
