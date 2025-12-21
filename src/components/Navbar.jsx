import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-center px-8 py-6">
      <div className="flex items-center justify-between w-full max-w-2xl px-6 py-3" style={{
        backgroundColor: '#FFFBF2',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
        <div className="flex gap-8">
          <a href="/#work" className="text-gray-400 hover:text-black transition">Work</a>
          <Link to="/about" className="text-gray-400 hover:text-black transition">About</Link>
          <a href="#contact" className="text-gray-400 hover:text-black transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
