import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";

export const Education = () => {
  const initialValues = {
    name: "",
    degree: "",
    university: "",
    cgpa: "",
    year: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Input University Name"),
    degree: Yup.string().required(),
  });

  const onSubmit = () => {
    console.log("alert");
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Educational Background</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Degree Name </label>
            <br />
            <ErrorMessage name="degree" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="degree"
              placeholder="(Ex. BSc in CSC...)"
            />

            <label>University </label>
            <br />
            <ErrorMessage name="university" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="university"
              placeholder="(Ex. University Name...)"
            />
            <label>CGPA</label>
            <br />
            <ErrorMessage name="cgpa" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="cgpa"
              placeholder="(Ex. 4.0 ...)"
            />
            <label>Passing Year </label>
            <br />
            <ErrorMessage name="year" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="year"
              placeholder="(Ex. 2022...)"
            />

            <button type="submit">Add Education</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
