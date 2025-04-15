import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import styles from "./WisdomGateway.module.css";
import AOS from "aos";

const WisdomGateway = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Wisdom Gateway - Explore Educational Opportunities | Destinova</title>
        <meta
          name="description"
          content="Discover a wide range of educational opportunities in Sri Lanka, including state universities, private institutions, NVQ courses, and certificate programs. Empower your future with Destinova."
        />
        <meta
          name="keywords"
          content="education, state universities, private universities, NVQ courses, diploma programs, certificate programs, Sri Lanka, higher education, Destinova"
        />
        <meta property="og:title" content="Wisdom Gateway - Explore Educational Opportunities | Destinova" />
        <meta
          property="og:description"
          content="Discover a wide range of educational opportunities in Sri Lanka, including state universities, private institutions, NVQ courses, and certificate programs. Empower your future with Destinova."
        />
        <meta property="og:image" content="/assets/wisdom-gateway-banner.png" />
        <meta property="og:url" content="https://destinova.live/wisdom-gateway" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <NavigationBar />
      <div className={styles.wisdom}>
        <div className="container pt-4">
          <div className={styles.content}>
            <div className="row justify-content-center" data-aos="zoom-in">
              {[
                {
                  title: "State Universities",
                  link: "https://www.ugc.ac.lk/",
                  description: "Sri Lanka's state universities, managed by the UGC, provide free higher education based on GCE A/L results, fostering research and development."
                },
                {
                  title: "Non State Universities",
                  link: "https://www.coursenet.lk/courses/?levels=1,2",
                  description: "Non-state universities in Sri Lanka are privately funded institutions offering higher education in various fields. Notable ones include SLIIT, NSBM, CINEC, and APIIT, providing alternatives to state universities."
                },
                {
                  title: "Diploma and Higher Diploma",
                  link: "https://www.coursenet.lk/courses/?levels=3,4,5,6",
                  description: "A diploma is a short-term program offering foundational skills, while a higher diploma provides advanced knowledge, often between a diploma and degree."
                },
                {
                  title: "NVQ Courses",
                  link: "https://course.vta.lk/",
                  description: "The NVQ (National Vocational Qualification) program in Sri Lanka offers practical, job-oriented training and certification in various fields, ensuring individuals are skilled and employable."
                },
                {
                  title: "Certificate Programs",
                  link: "https://www.coursenet.lk/courses/?levels=7",
                  description: "A certificate is a short qualification that confirms completion of a specific course or training, typically taking a few months."
                }
              ].map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-stretch">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`d-block p-3 border border-light border-2 rounded text-center ${styles.education} text-decoration-none text-reset w-100`}
                  >
                    <h4>{item.title}</h4>
                    <p className="small">{item.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WisdomGateway;
