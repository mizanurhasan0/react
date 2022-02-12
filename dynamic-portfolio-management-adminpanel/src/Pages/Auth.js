import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";

export const Auth = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Input University Name"),
    password: Yup.string().required(),
  });

  const onSubmit = () => {
    console.log("alert");
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Admin Panel</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Email Address</label>
            <br />
            <ErrorMessage name="email" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="email"
              placeholder="(Ex. admin@gmail.com...)"
            />

            <label>Password </label>
            <br />
            <ErrorMessage name="password" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="password"
              placeholder="(Ex. pass123...)"
            />

            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
