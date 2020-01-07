import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik/dist/index';
import { connect } from 'react-redux';
import { Button } from 'pcln-design-system';
import { Container } from './authStyle';
import { registerUser, errorClean } from '../../actions/authActions';
import Errors from '../reuseableParts/Errors';
import * as Yup from 'yup';

const RegistrationForm = props => {
  useEffect(() => {
    props.errorClean();
  }, [props.values]);

  return (
    <>
      <Container className="container">
        <div className="map"></div>
        <div className="form-container">
          <Form className="form-contents">
            <h1>Register</h1>
            <Errors errMsg={props.error} />

            <label>
              Username
              <Field className="form-inputs" type="text" name="username" />
              {props.touched.username && props.errors.username && (
                <p className="error-message">{props.errors.username}</p>
              )}
            </label>
            <label>
              Password
              <Field className="form-inputs" type="password" name="password1" />
              {props.touched.password1 && props.errors.password1 && (
                <p className="error-message">{props.errors.password1}</p>
              )}
            </label>
            <label>
              Retype Password
              <Field className="form-inputs" type="password" name="password2" />
              {props.touched.password2 && props.errors.password2 && (
                <p className="error-message">{props.errors.password2}</p>
              )}
            </label>

            <div className="btn-container">
              <Button className="submit-btn" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

const FormikResgistrationForm = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return {
      username: username || '',
      password1: password1 || '',
      password2: password2 || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password1: Yup.string().required('Enter a password'),
    password2: Yup.string().required('Enter a password'),

  }),

  handleSubmit(values, { props }) {

    props.registerUser(values, props.history);
  }
})(RegistrationForm);

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    error: state.authReducer.error
  };
};

export default connect(
  mapStateToProps,
  { registerUser, errorClean }
)(FormikResgistrationForm);
