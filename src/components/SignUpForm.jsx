import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Forms.module.css";
import { Link } from "react-router-dom";
import { registerUser } from "../firebase/registerUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const initValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await registerUser(values);
      toast.success("Sign Up done successfully");
      resetForm();
    } catch (error) {
      toast.error("Sign up failed: " + error.message);
    }
  };
  const handleErrors = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.match(emailRegex)) {
      errors.email = "Invalid email format";
    }
    if (values.phoneNumber.length < 11) {
      errors.phoneNumber = "Phone number should be 11";
    }
    if (values.password.length < 8) {
      errors.password = "password should be 8";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password donot match";
    }
    return errors;
  };
  return (
    <div>
      <ToastContainer component="div" />
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validate={handleErrors}
      >
        <Form className={styles.form}>
          <Field
            type="text"
            name="fullName"
            placeholder="Enter full name"
            className={styles.field}
          />
          <Field
            type="text"
            name="email"
            placeholder="Enter email"
            className={styles.field}
          />
          <ErrorMessage
            name="email"
            component="div"
            className={styles.errors}
          />

          <Field
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            className={styles.field}
          />
          <ErrorMessage
            name="phoneNumber"
            component="div"
            className={styles.errors}
          />

          <Field
            type="password"
            name="password"
            placeholder="Enter password"
            className={styles.field}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.errors}
          />

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Enter confirm password"
            className={styles.field}
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className={styles.errors}
          />

          <button type="submit" className={styles["signUp-button"]}>
            Sign Up
          </button>
          <Link to="/">Go to Login</Link>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
