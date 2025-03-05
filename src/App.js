import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Casual from './pages/blabb/Casual';
import Books from './pages/blabb/Books';
import { Resources, Coding, Patterns, Puzzles, QuantHome } from './pages/quant';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <div className="responsive-container">
          <Navigation />
          
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blabb" element={<Casual />} />
              <Route path="/blabb/books" element={<Books />} />
              
              {/* Quant Routes */}
              <Route path="/quant" element={<QuantHome />} />
              <Route path="/quant/resources" element={<Resources />} />
              <Route path="/quant/coding" element={<Coding />} />
              <Route path="/quant/patterns" element={<Patterns />} />
              <Route path="/quant/puzzles" element={<Puzzles />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App; 