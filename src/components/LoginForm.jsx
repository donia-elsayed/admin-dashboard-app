import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./Forms.module.css";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    localStorage.setItem("userName", values.username);
    navigate("/users");
  };
  const handleValidate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 3) {
      errors.username = "Username is too short";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "password is too short";
    }
    return errors;
  };
  const initValues = { username: "", password: "" };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validate={handleValidate}
      validateOnBlur={false}
    >
      <Form className={styles.form}>
        <h1>Welcome</h1>
        <Field
          type="text"
          name="username"
          placeholder="Enter username"
          className={styles.field}
        />
        <ErrorMessage
          name="username"
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
        <button type="submit" className={styles["login-buuton"]}>
          Sign In
        </button>
        <Link to="/signUp">Go to Sign Up</Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
