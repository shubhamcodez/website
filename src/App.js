import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import QuantResources from './pages/QuantResources';
import Resume from './pages/Resume';
import Casual from './pages/Casual';
import Movies from './pages/Movies';

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quant-resources" element={<QuantResources />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/casual" element={<Casual />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App; 