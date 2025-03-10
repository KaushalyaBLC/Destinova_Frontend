import React, { useEffect, useState } from "react";
import styles from "./Industry.module.css";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Industry = () => {
  const { industry } = useParams();

  const [industryData, setIndustryData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/crystal/industry/${industry}`)
      .then((response) => {
        setIndustryData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching industry data:", error));
  }, [industry]); // Add industry to the dependency array to refetch on changes

  return (
    <>
      <div className={styles[industryData?.industry]}>
        <NavigationBar />
        <div className={styles.content}>
          <div className="text-light container ">
            <>
              {industryData ? (
                <>
                <div className="col-lg-12 d-flex">
                  <div className="col-lg-6 ">
                    <h3>{industryData.industry_name} </h3>
                    {/* <h6>Description</h6> */}
                    <p>{industryData.overview.description}</p>
                    <h5 className="border border-light border-2 rounded p-1">Importance</h5>
                    <p className="">{industryData.overview.importance}</p>
                    <h5 className="border border-light border-2 rounded p-1">Industry Trends</h5>
                    {industryData.industry_trends.map((trend, index) => (
                      <div >
                        <p key={index}>
                          <strong> {trend.topic}:</strong> {trend.description}
                        </p>
                      </div>
                    ))}
                    <div >
                    <h5 className="border border-light border-2 rounded p-1 ">Work Environment</h5>
                    {industryData.work_environment.map((environment, index) => (
                      <div key={index}>
                        <p>
                          <strong> {environment.title}:</strong> {environment.description}
                        </p>
                      </div>
                    ))}
                </div>
                  </div>
                  <div className="col-lg-1 "></div>
                  <div className="col-lg-5">
                    <h5 className="border border-light border-2 rounded p-1 text-center">Career Clusters</h5>
                    <div className="mt-4">
                      <div className="d-flex">
                        <div className={`col-4  me-1 ${styles.cluster}`}>
                          <h6>
                            {industryData.career_clusters[0].cluster_name}
                          </h6>
                        </div>
                        <div className={`col-4  me-1 ${styles.cluster}`}>
                          <h6>
                            {industryData.career_clusters[1].cluster_name}
                          </h6>
                        </div>
                        <div className={`col-4  me-1 ${styles.cluster}`}>
                          <h6>
                            {industryData.career_clusters[2].cluster_name}
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-1">
                        <div className={`col-4  me-1 ${styles.cluster}`}>
                          <h6>
                            {industryData.career_clusters[3].cluster_name}
                          </h6>
                        </div>
                        <div className={`col-4  me-1 ${styles.cluster}`}>
                          <h6>
                            {industryData.career_clusters[4].cluster_name}
                          </h6>
                        </div>
                      </div>
                      
                    </div>
                    <p className="text-center text-secondary"><small>Click on the Cluster to Explore</small></p>
                    <div>
                        <h5 className=" mt-5 border border-light border-2 rounded p-1 text-center">Major Employers</h5>
                        <ul className="">
                        {industryData.major_employers.map((employer, index) => (
                          <li key={index}>
                            {employer}
                          </li>
                        ))}
                        </ul>
                    </div>
                    <div className="">
                    <h5 className="border border-light border-2 rounded p-1 text-center">Industry Regulations and Policies</h5>
                    {industryData.industry_regulations_and_policies.map((regulation, index) => (
                      <div key={index}>
                        <p>
                          <strong> {regulation.title}:</strong> {regulation.description}
                        </p>
                      </div>
                    ))}
                </div>
                  </div>
                </div>
                
                </>
              ) : (
                <p>Loading...</p> // Show loading message while waiting for the data
              )}
            </>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Industry;
