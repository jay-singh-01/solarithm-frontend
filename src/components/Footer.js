// frontend/src/components/Footer.js
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white mt-12 p-8 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-extrabold text-green-500 mb-2">Solarithm</h3>
          <p className="text-sm opacity-80">
            Sustainable energy solutions for a greener tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-green-400 transition">Products</Link></li>
            <li><Link to="/services" className="hover:text-green-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-green-400 transition">Privacy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-5 mb-2">
            <a href="https://x.com/elonmusk" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <Twitter size={22} />
            </a>
            <a href="https://www.linkedin.com/in/jaysingh2003/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <Linkedin size={22} />
            </a>
            <a href="https://www.instagram.com/jay_raj_01/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <Instagram size={22} />
            </a>
          </div>
          <p className="text-xs opacity-70 mt-4">
            &copy; {new Date().getFullYear()} Solarithm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
