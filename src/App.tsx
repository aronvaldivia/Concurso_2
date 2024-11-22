import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-zinc-900 text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Let's <span className="text-red-600">Connect</span>
            </h3>
            <button className="bg-red-600/80 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-colors">
              Contact Me
            </button>
            <div className="mt-8 text-gray-400">
              © 2024 John Doe. All rights reserved.
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;