import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";

export const Projects = () => {
  const initialValues = {
    name: "",
    technology: "",
    link: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Input University Name"),
    technology: Yup.string().required(),
  });

  const onSubmit = () => {
    console.log("alert");
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Personal Project</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Project Name</label>
            <br />
            <ErrorMessage name="name" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="name"
              placeholder="(Ex. School Management...)"
            />
            <label>Use Technology</label>
            <br />
            <ErrorMessage name="technology" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="technology"
              placeholder="(Ex. React, Java ...)"
            />
            <label>Project Link </label>
            <br />
            <ErrorMessage name="link" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="link"
              placeholder="(Ex. MySql...)"
            />

            <button type="submit">Add Project</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
