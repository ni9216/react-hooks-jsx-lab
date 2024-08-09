// src/components/App.js
import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
