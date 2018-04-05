import ApolloClient from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

const client = new ApolloClient({
  dataIdFromObject: obj => obj.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Auth Starter
      </div>
    </ApolloProvider>

  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
