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
import Chatbot from './components/Chatbot';
import FireCalculator from './components/FireCalculator'; // Yeh rakho
import subtlePattern from './images/Subtle.jpg';  // Your image path
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${subtlePattern})`, backgroundRepeat: 'repeat' }}>
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
            <Route path="/fire-calculator" element={<FireCalculator />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

