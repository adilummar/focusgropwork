import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FocusMart } from './pages/FocusMart';
import { PopIce } from './pages/PopIce';
import { FocusCafe } from './pages/FocusCafe';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0B0B] font-['Inter']">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/focus-mart" element={<FocusMart />} />
          <Route path="/pop-ice" element={<PopIce />} />
          <Route path="/focus-cafe" element={<FocusCafe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
