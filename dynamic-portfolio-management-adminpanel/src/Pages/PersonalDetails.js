import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";
import "../Styles/personalDetails.css";

export const PersonalDetails = () => {
  const initialValues = {
    father: "",
    mother: "",
    nationality: "",
    address: "",
    birth: "",
    blood: "",
    religion: "",
    gender: "",
  };
  const validationSchema = Yup.object().shape({
    father: Yup.string().required("Input University Name"),
    mother: Yup.string().required(),
  });

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Personal Details</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Father Name</label>
            <br />
            <ErrorMessage name="father" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="father"
              placeholder="(Ex. ABC Khan...)"
            />

            <label>Mother Name </label>
            <br />
            <ErrorMessage name="mother" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="mother"
              placeholder="(Ex. ABC Begum...)"
            />
            <label>Nationality</label>
            <br />
            <ErrorMessage name="nationality" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="nationality"
              placeholder="(Ex. Bangladeshi ...)"
            />
            <label>Permanent Address</label>
            <br />
            <ErrorMessage name="address" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="address"
              placeholder="(Ex. Tangail..)"
            />
            <label>Date Of Birth</label>
            <br />
            <ErrorMessage name="birth" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="birth"
              placeholder="(Ex. 12/12/2000..)"
            />

            <label>Blood Group</label>
            <br />
            <ErrorMessage name="blood" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="blood"
              placeholder="(Ex. o+/AB+..)"
            />
            <div className="shortField">
              <div className="ReligionField">
                <label>Religion</label>
                <br />
                <ErrorMessage name="religion" component="span" />
                <Field
                  as="select"
                  name="religion"
                  className="inputField"
                  id="inputCreatePost"
                >
                  <option value="select">Select</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Hindu">Hindu</option>
                  <option value="christian">Christian</option>
                </Field>
              </div>
              <div className="GenderField">
                <label>Gender</label>
                <br />
                <ErrorMessage name="gender" component="span" />
                <Field
                  as="select"
                  className="inputField"
                  id="inputCreatePost"
                  name="gender"
                >
                  <option value="select">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </Field>
              </div>
            </div>
            <button type="submit">Add Personal info</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
