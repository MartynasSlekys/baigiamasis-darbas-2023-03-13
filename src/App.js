import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import MainNavigation from './components/MainNavigation/MainNavigation';

function App() {
  return (
    <div className='App'>
      <MainNavigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
