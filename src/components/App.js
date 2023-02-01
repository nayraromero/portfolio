//styles
import '../styles/App.scss';
//useEffect + Routes + ls
// import { useEffect, useState } from 'react';
// import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// import ls from '../services/localStorage';
//components
import Header from './Header';
import HomePage from './HomePage';
import Contact from './Contact';

function App() {
  //RETURN HTML
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
