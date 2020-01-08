import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik/dist/index';
import { connect } from 'react-redux';
import { Button } from 'pcln-design-system';
import { Container } from './authStyle';
import {registerUser, errorClean} from '../../actions/authActions';
import Errors from "../reuseableParts/Errors";
import * as Yup from 'yup';

const RegisterForm = props => {
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
            {console.log('BINGO', props.errors)}
            <label>
              Username
              <Field className="form-inputs" type="text" name="username" />
              {props.touched.username && props.errors.username && (
                <p className="error-message">{props.errors.username}</p>
              )}
            </label>
            <label>
              Password
              <Field className="form-inputs" type="password" name="password" />
              {props.touched.password && props.errors.password && (
                <p className="error-message">{props.errors.password}</p>
              )}
            </label>
            <label>
              Confirm Password
              <Field className="form-inputs" type="password" name="confPassword" />
              {props.touched.confPassword && props.errors.confPassword && (
                <p className="error-message">{props.errors.confPassword}</p>
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

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, confPassword }) {
    return {
      username: username || '',
      password: password || '',
      confPassword: confPassword || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Enter a password'),
    confPassword: Yup.string().required('confirm your password')
  }),

  handleSubmit(values, { props }) {
    props.registerUser(values, props.history);
  }
})(RegisterForm);

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    error: state.authReducer.error
  };
};

export default connect(
  mapStateToProps,
  { registerUser, errorClean }
)(FormikLoginForm);
