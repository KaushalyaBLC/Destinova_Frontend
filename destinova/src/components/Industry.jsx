import React, { useEffect, useState } from "react";
import styles from "./Industry.module.css";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { useParams } from "react-router-dom";

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
                <div className="col-lg-12 d-flex">
                  <div className="col-lg-6 ">
                    <h3>{industryData.industry_name} </h3>
                    {/* <h6>Description</h6> */}
                    <p>{industryData.overview.description}</p>
                    <h5>Importance</h5>
                    <p className="">{industryData.overview.importance}</p>
                    <h5>Industry Trends</h5>
                    {industryData.industry_trends.map((trend, index) => (
                      <div key={index}>
                        <p>
                          <strong> {trend.topic}:</strong> {trend.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-1 "></div>
                  <div className="col-lg-5">
                    <h5 className="text-center">Career Clusters</h5>
                    <div className="">
                      <div className="d-flex">
                        <div className="col-4 text-light border border-light border-2 me-1 rounded p-4 text-center">
                          <h6>
                            {industryData.career_clusters[0].cluster_name}
                          </h6>
                        </div>
                        <div className="col-4 text-light border border-light border-2 me-1 rounded p-4 text-center">
                          <h6>
                            {industryData.career_clusters[1].cluster_name}
                          </h6>
                        </div>
                        <div className="col-4 text-light border border-light border-2 me-1 rounded p-4 text-center">
                          <h6>
                            {industryData.career_clusters[2].cluster_name}
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-1">
                        <div className="col-4 text-light border border-light border-2 me-1 rounded p-4 text-center">
                          <h6>
                            {industryData.career_clusters[3].cluster_name}
                          </h6>
                        </div>
                        <div className="col-4 text-light border border-light border-2 me-1 rounded p-4 text-center">
                          <h6>
                            {industryData.career_clusters[4].cluster_name}
                          </h6>
                        </div>
                      </div>
                      
                    </div>
                    <p className="text-center text-secondary"><small>Click on the Cluster to Explore</small></p>
                    <div>
                        <h5 className="text-center mt-5">Major Employers</h5>
                        <ul className="">
                        {industryData.major_employers.map((employer, index) => (
                          <li key={index}>
                            {employer}
                          </li>
                        ))}
                        </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p> // Show loading message while waiting for the data
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
