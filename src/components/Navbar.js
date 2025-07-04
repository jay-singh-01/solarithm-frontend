// frontend/src/components/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/60 dark:bg-black/60 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo and Brand Name */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-extrabold text-green-500 hover:text-green-400 transition"
        >
          <img
            src="/solarithmlogo.png"
            alt="Solarithm logo"
            className="w-8 h-8"
          />
          <span>Solarithm</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800 dark:text-gray-100">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/products" className="hover:text-green-500">Products</Link>
          <Link to="/services" className="hover:text-green-500">Services</Link>
          <Link to="/blog" className="hover:text-green-500">Blog</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
          <DarkModeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-green-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden flex flex-col space-y-2 px-6 pb-4 bg-white/90 dark:bg-black/90 text-gray-800 dark:text-white shadow-md backdrop-blur-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-500">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-green-500">About</Link>
          <Link to="/products" onClick={() => setOpen(false)} className="hover:text-green-500">Products</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:text-green-500">Services</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="hover:text-green-500">Blog</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-green-500">Contact</Link>
          <DarkModeToggle />
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
