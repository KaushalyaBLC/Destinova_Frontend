import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import style from "./NovaForm.module.css";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4";
import Form5 from "../components/Form5";
import Form6 from "../components/Form6";
import Form7 from "../components/Form7";
import Footer from "../components/Footer";
import NovaResultDisplay from "../components/NovaResultDisplay";
import NovaResult from "../services/NovaResult";
import ResultBot from "../assets/botimg/result.gif";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

const NovaForm = () => {
 

  const [formPage, setFormPage] = useState(1);
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    telNo: "",
    bday: "",
    education: "",
  });
 

  const [educationDetails, setEducationDetails] = useState({
    ol: {
      subject1: {
        subject: "",
        grade: "",
      },
      subject2: {
        subject: "",
        grade: "",
      },
      subject3: {
        subject: "",
        grade: "",
      },
      subject4: {
        subject: "",
        grade: "",
      },
      subject5: {
        subject: "",
        grade: "",
      },
      subject6: {
        subject: "",
        grade: "",
      },
      subject7: {
        subject: "",
        grade: "",
      },
      subject8: {
        subject: "",
        grade: "",
      },
      subject9: {
        subject: "",
        grade: "",
      },
    },
    preal: "",
    al: {
      subject1: {
        subject: "",
        grade: "",
      },
      subject2: {
        subject: "",
        grade: "",
      },
      subject3: {
        subject: "",
        grade: "",
      },
    },
    degree: "",
  });

  const [answers , setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
    answer10: "",
    answer11: "",
    answer12: "",
    answer13: "",
    answer14: "",
    answer15: "",
  });

  const [results, setResults] = useState(null);

 

  const handleAPI = () => {
    NovaResult(personalData, educationDetails, answers, setResults);
  };

  useEffect(() => {
    if (formPage === 8 && !results) {
      handleAPI();
    }
  }, [formPage, results]);
  return (
    <>
      <div className={style.novaform}>
        <div className={style.navigation}>
          <NavigationBar />
        </div>
        <div className={style.content}>
          {formPage === 1 && (
            <Form1
              personalData={personalData}
              setPersonalData={setPersonalData}
              setFormPage={setFormPage}
            />
          )}
          {formPage === 2 && (
            <Form2
              personalData={personalData}
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
              setFormPage={setFormPage}
            />
          )}
          {formPage === 3 && (
            <Form3
              personalData={personalData}
              answers={answers}
              setAnswers={setAnswers}
              setFormPage={setFormPage}
            />
          )}
          {formPage === 4 && (
            <Form4
              personalData={personalData}
              answers={answers}
              setAnswers={setAnswers}
              setFormPage={setFormPage}
            />
          )}
          {formPage === 5 && (
            <Form5
              personalData={personalData}
              answers={answers}
              setAnswers={setAnswers}
              setFormPage={setFormPage}
            />
          )}
          {formPage === 6 && (
            <Form6
              personalData={personalData}
              answers={answers}
              setAnswers={setAnswers}
              setFormPage={setFormPage}
            />
          )}
          {formPage === 7 && (
            <Form7
              personalData={personalData}
              answers={answers}
              setAnswers={setAnswers}
              setFormPage={setFormPage}
            />
          )}
    
          {formPage === 8 && !results && (
          <>
            <div >
              <h6 className="text-light text-center"> <Typewriter
          options={{
            strings: [
              'Please Wait!',
              'Your results are on the way....'
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 1,
          }}
        /></h6>
              <img src={ResultBot} alt="" width={300}/>
            </div>
          </>
        )}
        {formPage === 8 && results && (
          <NovaResultDisplay results={results} />
        )}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default NovaForm;
