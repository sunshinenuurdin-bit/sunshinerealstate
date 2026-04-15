import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#aboutus' },
    
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-gray-800 font-poppins z-[100]">
      <div className="flex items-center justify-between px-6 py-3 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <a href="#home">
            <img 
              src={logo}
              alt="Sunshine Real Estate Logo" 
              className="h-12 w-auto md:h-14 object-contain" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative py-2">
              <a
                href={link.href}
                onClick={() => setActiveIndex(index)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeIndex === index
                    ? 'text-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </a>

              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+254718954599"
            className="hidden sm:flex items-center bg-[#D4AF37] hover:bg-[#b8962f] text-black px-5 py-2.5 rounded-md font-bold transition-all"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">+254 718 957 599</span>
          </a>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 border-t border-gray-800' : 'max-h-0 opacity-0 overflow-hidden'
      } bg-[#111]`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveIndex(index);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-medium py-2 border-l-4 pl-4 transition-all ${
                activeIndex === index 
                  ? 'text-[#D4AF37] border-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white border-transparent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;