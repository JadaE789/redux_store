import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';

ReactDOM.render(
    <ApolloProvider client={client}> 
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>,
  document.getElementById('root')
);
