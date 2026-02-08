
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const NavLinks = () => (
    <>
      <Link to="/" className={`hover:text-forest-green transition-colors ${path === '/' ? 'text-forest-green font-bold' : 'text-forest-green/80'}`}>Home</Link>
      <Link to="/about" className={`hover:text-forest-green transition-colors ${path === '/about' ? 'text-forest-green font-bold' : 'text-forest-green/80'}`}>About</Link>
      <Link to="/services" className={`hover:text-forest-green transition-colors ${path === '/services' ? 'text-forest-green font-bold' : 'text-forest-green/80'}`}>Services</Link>
      <Link to="/contact" className={`hover:text-forest-green transition-colors ${path === '/contact' ? 'text-forest-green font-bold' : 'text-forest-green/80'}`}>Contact</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-forest-green/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-forest-green flex items-center justify-center rounded-lg text-white shadow-sm">
            <span className="material-symbols-outlined text-2xl">account_balance</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-forest-green leading-none">Clayton Meeres</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold opacity-60 mt-1">Independent Financial Planning</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-sans font-medium text-sm">
          <NavLinks />
          <Link to="/contact" className="bg-forest-green text-white hover:bg-forest-green/90 px-6 py-2.5 rounded-lg font-bold transition-all shadow-sm">
            Book a Discovery Call
          </Link>
        </nav>

        <button
          className="md:hidden text-forest-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-light border-b border-forest-green/10 px-6 py-6 flex flex-col gap-4 font-sans font-medium">
          <NavLinks />
          <Link to="/contact" className="bg-forest-green text-white px-6 py-3 rounded-lg font-bold text-center" onClick={() => setIsOpen(false)}>
            Book a Discovery Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
