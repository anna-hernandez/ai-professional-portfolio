
import React from 'react';
import NeoButton from './NeoButton';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div 
          onClick={() => onNavigate(Section.HOME)}
          className="cursor-pointer font-black text-2xl px-4 py-1 neo-border bg-white neo-shadow-sm hover:neo-shadow transition-all"
        >
          DS<span className="text-[#bef264]">.</span>AI
        </div>
        
        {/* Added px-4 to this container to ensure shadows aren't clipped on the edges */}
        <div className="flex flex-nowrap md:flex-wrap gap-3 md:gap-4 overflow-x-auto py-3 px-4 scrollbar-hide">
          <NeoButton active={activeSection === Section.HOME} onClick={() => onNavigate(Section.HOME)}>Home</NeoButton>
          <NeoButton active={activeSection === Section.ABOUT} onClick={() => onNavigate(Section.ABOUT)}>About</NeoButton>
          <NeoButton active={activeSection === Section.WORK} onClick={() => onNavigate(Section.WORK)}>Work</NeoButton>
          <NeoButton active={activeSection === Section.GROWTH} onClick={() => onNavigate(Section.GROWTH)}>Growth</NeoButton>
          <NeoButton active={activeSection === Section.NOTES} onClick={() => onNavigate(Section.NOTES)}>Notes</NeoButton>
          <NeoButton active={activeSection === Section.CONTACT} onClick={() => onNavigate(Section.CONTACT)} variant="accent">Say Hi</NeoButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
