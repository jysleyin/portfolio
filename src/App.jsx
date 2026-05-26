import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BenefitBridge from './pages/BenefitBridge'
import EnchantedWhispers from './pages/EnchantedWhispers'
import ForeverHealth from './pages/ForeverHealth'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen scroll-smooth" style={{backgroundColor: '#F5F1E8'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/benefitbridge" element={<BenefitBridge />} />
          <Route path="/enchanted-whispers" element={<EnchantedWhispers />} />
          <Route path="/forever-health" element={<ForeverHealth />} />
        </Routes>
      </div>
    </Router>
  );
}
