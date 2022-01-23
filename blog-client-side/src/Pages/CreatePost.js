import "./CreatePost.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const CreatePost = () => {
  const apiLink = "http://localhost:3001/posts";
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input title"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(12).required(),
  });
  const onSubmit = (data) => {
    axios.post(apiLink, data).then((response) => {
      console.log("It's Work");
    });
  };

  return (
    <div className="CreatePostApp">
      <div className="CreateBox">
        <img src={require("./createlogo.png")} alt="craeteLogo" />
        <h1>Create Post</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Title </label>
            <br />
            <ErrorMessage name="title" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="title"
              placeholder="(Ex. Title...)"
            />

            <label>Post </label>
            <br />
            <ErrorMessage name="postText" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="postText"
              placeholder="(Ex. Post...)"
            />

            <label>Username </label>
            <br />
            <ErrorMessage name="username" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="username"
              placeholder="(Ex. Username...)"
            />
            <button type="submit">Create Post</button>
          </Form>
        </Formik>
        <Link className="link" to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
