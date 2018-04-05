import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CurrentUserQuery from '../queries/CurrentUser';

class Header extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

export default graphql(CurrentUserQuery)(Header);
