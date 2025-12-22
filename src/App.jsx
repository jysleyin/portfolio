import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './About'
import Contact from './pages/Contact'


export default function App() {
  return (
    <Router>
      <div className="min-h-screen scroll-smooth" style={{backgroundColor: '#F5F1E8'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
