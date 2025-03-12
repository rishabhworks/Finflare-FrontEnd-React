import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Events from './pages/Events';
import TaxTricks from './pages/TaxTricks';
import CreditCardHacks from './pages/CreditCardHacks';
import TaxAndToasted from './pages/TaxAndToasted';
import TaxGambit from './pages/TaxGambit';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ padding: '20px', flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources/tax-tricks" element={<TaxTricks />} />
            <Route path="/resources/credit-card-hacks" element={<CreditCardHacks />} />
            <Route path="/events/tax-and-toasted" element={<TaxAndToasted />} />
            <Route path="/events/tax-gambit" element={<TaxGambit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


