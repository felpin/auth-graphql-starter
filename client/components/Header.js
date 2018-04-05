import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import CurrentUserQuery from '../queries/CurrentUser';

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>logout</div>;
    }

    return (
      <div>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(CurrentUserQuery)(Header);
