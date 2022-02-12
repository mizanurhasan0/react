import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";

export const Experience = () => {
  const initialValues = {
    name: "",
    project: "",
    fontTech: "",
    backTech: "",
    jobRespose: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Input Company Name"),
    project: Yup.string().required(),
  });

  const onSubmit = () => {
    console.log("alert");
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Create Experience</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Company Name </label>
            <br />
            <ErrorMessage name="name" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="name"
              placeholder="(Ex. Software BD...)"
            />

            <label>Major Project </label>
            <br />
            <ErrorMessage name="project" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="project"
              placeholder="(Ex. Book managment...)"
            />
            <label>Font-end Technology </label>
            <br />
            <ErrorMessage name="fontTech" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="fontTech"
              placeholder="(Ex. Html,Css...)"
            />
            <label>Back-end Technology </label>
            <br />
            <ErrorMessage name="backTech" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="backTech"
              placeholder="(Ex. java, .Net, Python...)"
            />
            <label>Job Responsibility </label>
            <br />
            <ErrorMessage name="jobRespose" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="jobRespose"
              placeholder="(Ex. UX Design ...)"
            />

            <button type="submit">Create Post</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
