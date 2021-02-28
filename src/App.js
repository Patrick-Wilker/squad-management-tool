import React from 'react';
import Routes from './routes';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer autoClose={5000} />
      <Routes/>
    </>
  );
}

export default App;
