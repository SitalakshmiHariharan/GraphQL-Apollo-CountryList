import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Header';
import { ApolloProvider } from '@apollo/client/react';
import {BrowserRouter as Router} from 'react-router-dom';
import client from './ApolloClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
      <Router>
       <Header></Header>
        <App/>
      </Router>
    </ApolloProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

