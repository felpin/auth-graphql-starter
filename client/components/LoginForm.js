import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import LoginMutation from '../mutations/Login';

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
