import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";

export const Skills = () => {
  const initialValues = {
    backend: "",
    frontend: "",
    database: "",
    scm: "",
  };
  const validationSchema = Yup.object().shape({
    backend: Yup.string().required("Input University Name"),
    frontend: Yup.string().required(),
  });

  const onSubmit = () => {
    console.log("alert");
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Programming Skills</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Backend Language </label>
            <br />
            <ErrorMessage name="backend" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="backend"
              placeholder="(Ex. University Name...)"
            />
            <label>Front-end Language</label>
            <br />
            <ErrorMessage name="frontend" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="frontend"
              placeholder="(Ex. Html, CSs ...)"
            />
            <label>Database </label>
            <br />
            <ErrorMessage name="database" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="database"
              placeholder="(Ex. MySql...)"
            />
            <label>Software Configuration Management (SCM) </label>
            <br />
            <ErrorMessage name="scm" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="scm"
              placeholder="(Ex. Git...)"
            />
            <button type="submit">Add Skill</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
