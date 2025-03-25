import React, { useEffect, useState } from "react";
import styles from "./Industry.module.css";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import CareerBot from "./CareerBot";

const Industry = () => {
  const { industry } = useParams();
  const [industryData, setIndustryData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/crystal/industry/${industry}`)
      .then((response) => {
        setIndustryData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching industry data:", error));
  }, [industry]);

  return (
    <>
      <div className={styles[industryData?.industry]}>
        <NavigationBar />
        <div className={styles.content}>
          <div className="text-light container">
            {industryData ? (
              <div className="col-lg-12 d-flex">
                <div className="col-lg-6">
                  <h3>{industryData.industry_name}</h3>
                  <p>{industryData.overview.description}</p>
                  <h5 className="border border-light border-2 rounded p-1">Importance</h5>
                  <p>{industryData.overview.importance}</p>
                  <h5 className="border border-light border-2 rounded p-1">Industry Trends</h5>
                  {industryData.industry_trends.map((trend, index) => (
                    <p key={index}>
                      <strong>{trend.topic}:</strong> {trend.description}
                    </p>
                  ))}
                  <h5 className="border border-light border-2 rounded p-1">Work Environment</h5>
                  {industryData.work_environment.map((environment, index) => (
                    <p key={index}>
                      <strong>{environment.title}:</strong> {environment.description}
                    </p>
                  ))}
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  <h5 className="border border-light border-2 rounded p-1 text-center">Career Clusters</h5>
                  <div className="mt-4">
                    {industryData.career_clusters.length > 0 && (
                      <>
                        <div className="d-flex">
                          {industryData.career_clusters.slice(0, 3).map((cluster, index) => (
                            <div
                              key={index}
                              className={`col-4 me-1 ${styles.cluster}`}
                              onClick={() => navigate(`/career-vision/industry/${cluster.cluster_name}`)}
                              style={{ cursor: "pointer" }}
                            >
                              <h6>{cluster.cluster_name}</h6>
                            </div>
                          ))}
                        </div>
                        <div className="d-flex justify-content-center mt-1">
                          {industryData.career_clusters.slice(3, 5).map((cluster, index) => (
                            <div
                              key={index + 3}
                              className={`col-4 me-1 ${styles.cluster}`}
                              onClick={() => navigate(`/career-vision/industry/${cluster.cluster_name}`)}
                              style={{ cursor: "pointer" }}
                            >
                              <h6>{cluster.cluster_name}</h6>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-center text-secondary"><small>Click on the Cluster to Explore</small></p>
                  <h5 className="mt-5 border border-light border-2 rounded p-1 text-center">Major Employers</h5>
                  <ul>
                    {industryData.major_employers.map((employer, index) => (
                      <li key={index}>{employer}</li>
                    ))}
                  </ul>
                  <h5 className="border border-light border-2 rounded p-1 text-center">Industry Regulations and Policies</h5>
                  {industryData.industry_regulations_and_policies.map((regulation, index) => (
                    <p key={index}>
                      <strong>{regulation.title}:</strong> {regulation.description}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <CareerBot/>
      <Footer />
    </>
  );
};

export default Industry;
