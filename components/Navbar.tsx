
import React from 'react';
import NeoButton from './NeoButton';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div 
          onClick={() => onNavigate(Section.HOME)}
          className="cursor-pointer text-[18px] leading-[0.9] font-normal tracking-[0.2em] text-gray-800 hover:text-black transition-all uppercase"
        >
          Anna Hernandez<br/>
          <span className="text-[12px] opacity-70 lowercase tracking-normal">Data and AI</span>
        </div>
        
        <div className="flex flex-nowrap md:flex-wrap gap-4 md:gap-4 overflow-x-auto py-2 px-2 scrollbar-hide">
          <NeoButton active={activeSection === Section.HOME} onClick={() => onNavigate(Section.HOME)}>Home</NeoButton>
          <NeoButton active={activeSection === Section.ABOUT} onClick={() => onNavigate(Section.ABOUT)}>About</NeoButton>
          <NeoButton active={activeSection === Section.WORK} onClick={() => onNavigate(Section.WORK)}>Work</NeoButton>
          <NeoButton active={activeSection === Section.CONTACT} onClick={() => onNavigate(Section.CONTACT)} variant="accent">Say Hi</NeoButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
