import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import SignupMutation from '../mutations/Signup';
import CurrentUserQuery from '../queries/CurrentUser';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUserQuery }],
      })
      .catch((response) => {
        const errors = response.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className="container">
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(SignupMutation)(
  graphql(CurrentUserQuery)(SignupForm)
);
