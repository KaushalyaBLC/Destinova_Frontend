import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import style from "./NovaForm.module.css";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Footer from "../components/Footer";

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
    ol:{
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
    preal:"",
    al:{
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
    degree:"",
  });

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
          {formPage ===  2 && (
            <Form2

              personalData={personalData}
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
              setFormPage={setFormPage}
            />
          )}
          {/* Future forms (Form2, Form3, etc.) will be added here */}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default NovaForm;
