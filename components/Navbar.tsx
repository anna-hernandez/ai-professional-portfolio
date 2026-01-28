
import React, { useState } from 'react';
import NeoButton from './NeoButton';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  onRequestCV: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onRequestCV }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (section: Section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black h-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => handleLinkClick(Section.HOME)}
          className="cursor-pointer text-[18px] leading-[0.9] font-black tracking-[0.1em] text-gray-800 hover:text-black transition-all uppercase"
        >
          Anna Hernandez<br/>
          <span className="text-[12px] font-normal lowercase tracking-normal opacity-70">Data and AI</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          <NeoButton active={activeSection === Section.HOME} onClick={() => onNavigate(Section.HOME)}>Home</NeoButton>
          <NeoButton active={activeSection === Section.ABOUT} onClick={() => onNavigate(Section.ABOUT)}>About</NeoButton>
          <NeoButton active={activeSection === Section.WORK} onClick={() => onNavigate(Section.WORK)}>Work</NeoButton>
          <NeoButton onClick={onRequestCV}>Request CV</NeoButton>
          <NeoButton active={activeSection === Section.CONTACT} onClick={() => onNavigate(Section.CONTACT)} variant="accent">Say Hi</NeoButton>
        </div>

        {/* Mobile Burger Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden w-12 h-12 neo-border bg-white flex flex-col items-center justify-center gap-1.5 neo-shadow-sm active:neo-shadow-active"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-1 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-6 h-1 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#bef264] z-40 border-t-4 border-black animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-8 gap-8 h-full justify-center items-center">
            <button 
              onClick={() => handleLinkClick(Section.HOME)}
              className={`text-4xl font-black uppercase tracking-tighter ${activeSection === Section.HOME ? 'underline decoration-black decoration-4' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleLinkClick(Section.ABOUT)}
              className={`text-4xl font-black uppercase tracking-tighter ${activeSection === Section.ABOUT ? 'underline decoration-black decoration-4' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => handleLinkClick(Section.WORK)}
              className={`text-4xl font-black uppercase tracking-tighter ${activeSection === Section.WORK ? 'underline decoration-black decoration-4' : ''}`}
            >
              Work
            </button>
            <button 
              onClick={() => { setIsMenuOpen(false); onRequestCV(); }}
              className="text-4xl font-black uppercase tracking-tighter text-black/60"
            >
              Request CV
            </button>
            <button 
              onClick={() => handleLinkClick(Section.CONTACT)}
              className="mt-4 py-4 px-12 bg-black text-[#bef264] text-3xl font-black uppercase neo-shadow-hover"
            >
              Say Hi
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
