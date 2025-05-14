
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Laptop, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gaming-darker/90 backdrop-blur-md shadow-lg shadow-neon-blue/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Laptop size={28} className="text-neon-blue" />
            <div className="flex flex-col">
              <span className="font-orbitron text-xl font-bold tracking-wider text-white">
                DELL
              </span>
              <span className="text-xs tracking-widest text-neon-blue -mt-1">
                GAMING
              </span>
            </div>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-rajdhani text-lg font-medium transition-all duration-200 hover:text-neon-blue relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:bottom-0 after:transition-all after:duration-300 ${
                    isActive 
                      ? 'text-neon-blue after:w-full' 
                      : 'text-gray-300 hover:after:w-full'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <button className="btn-neon group ml-4 flex items-center gap-1">
              <span>Shop Now</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-neon-blue transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-gaming-darker/95 backdrop-blur-md shadow-lg shadow-neon-blue/10 transition-all duration-300 ${isOpen ? 'max-h-80 border-t border-neon-blue/20' : 'max-h-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `font-rajdhani text-lg font-medium transition-all duration-200 hover:text-neon-blue px-2 py-2 ${
                      isActive ? 'text-neon-blue bg-gaming-accent/20' : 'text-gray-300'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              
              <button className="btn-neon mt-4">
                Shop Now
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
