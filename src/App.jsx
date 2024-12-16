import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Diablada from './pages/products/diablada';
import Caporal from './pages/products/caporal';
import Morenada from './pages/products/morenada';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/diablada" element={<Diablada/>} />
          <Route path="/products/caporal" element={<Caporal/>} />
          <Route path="/products/morenada" element={<Morenada/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
