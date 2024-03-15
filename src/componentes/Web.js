// src/componentes/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Web = ({ children }) => {
 return (
    <>
      <Header />
      {children}
      <Footer />
    </>
 );
};

export default Web;
