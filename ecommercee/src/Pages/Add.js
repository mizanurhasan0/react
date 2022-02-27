import React, { useContext, useEffect, useState } from "react";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import "../Designs/add.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Helper/GlobalContext";

export const Add = () => {
  const navigate = useNavigate();
  const { authUser, setActiveNav } = useContext(GlobalContext);

  const [selectedImage, setSelectedImage] = useState();
  const initialValues = {
    degree: "",
    institute: "",
    cgpa: "",
    passyear: "",
  };
  const validationSchema = Yup.object().shape({
    degree: Yup.string().required("Required field"),
    institute: Yup.string().required("Required field"),
    cgpa: Yup.string().required("Required field"),
    passyear: Yup.string().required("Required field"),
  });

  const onSubmit = (data) => {};
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (!authUser.status) {
      navigate("/login");
    } else {
      setActiveNav(3);
      navigate("/add");
    }
  }, []);
  return (
    <div className="AppAdd">
      <div className="CreateBox">
        <FontAwesomeIcon
          className="loginIcon"
          icon={faShopify}
          color="#ff5c72"
        />
        <h1>Insert New Product</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <div className="imageUploadBox">
              <Field
                type="file"
                onChange={imageChange}
                className="inputField"
                name="image"
              />

              {selectedImage && (
                <img
                  className="previewImage"
                  src={URL.createObjectURL(selectedImage)}
                  alt=""
                />
              )}
            </div>
            <label>Product Title</label>
            <br />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="product"
              placeholder="(Ex. BSc in CSC...)"
            />
            <ErrorMessage name="product" component="span" />
            <label>Brand Name </label>
            <br />
            <ErrorMessage name="institute" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="brand"
              placeholder="(Ex. University Name...)"
            />
            <ErrorMessage name="brand" component="span" />
            <div className="mini_field">
              <div>
                <label>Qunatity</label>
                <br />
                <Field
                  autoComplete="off"
                  className="inputField"
                  id="inputCreatePost"
                  name="qunatity"
                  placeholder="(Ex. 4.0 ...)"
                />
                <ErrorMessage name="qunatity" component="span" />
              </div>
              <div>
                <label>Regular Price</label>
                <br />
                <Field
                  autoComplete="off"
                  className="inputField"
                  id="inputCreatePost"
                  name="reg_price"
                  placeholder="(Ex. 2022...)"
                />
                <ErrorMessage name="reg_price" component="span" />
              </div>
              <div>
                <label>Dicount Price</label>
                <br />
                <Field
                  autoComplete="off"
                  className="inputField"
                  id="inputCreatePost"
                  name="dis_price"
                  placeholder="(Ex. 2022...)"
                />
                <ErrorMessage name="dis_price" component="span" />
              </div>
            </div>
            <label>Basic Info</label>
            <br />
            <Field
              as="textarea"
              autoComplete="off"
              className="inputField textareaField"
              id="inputCreatePost"
              name="info"
              placeholder="(Ex. 2022...)"
            />
            <ErrorMessage name="info" component="span" />
            <label>Specification</label>
            <br />
            <Field
              as="textarea"
              autoComplete="off"
              className="inputField textareaField"
              id="inputCreatePost"
              name="specification"
              placeholder="(Ex. 2022...)"
            />
            <ErrorMessage name="specification" component="span" />
            <button type="submit">Add Product</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
