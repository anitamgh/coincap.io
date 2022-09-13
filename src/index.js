import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import GlobalStyle from './style'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle/>
      <Router />
  </>
);
