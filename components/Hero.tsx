
import React from 'react';
import { Section } from '../types';
import NeoButton from './NeoButton';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
      
      {/* Page status indicator */}
      <div className="fixed hidden lg:block pointer-events-none z-40">
        <div className="neo-border bg-white px-4 py-2 neo-shadow transform rotate-3 flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest">✨ Available for cool stuff</span>
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
        <span className="bg-[#bef264] px-2 border-b-4 border-black">Data</span> Scientist & <span className="bg-[#bef264] px-2 border-b-4 border-black"><br />AI</span> Ambassador.
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed mb-10">
        I am a Data Science and AI passionate with over ten years of international experience across industry sectors: from science and legal tech, and government to creative media, energy, and manufacturing.
      </p>

      <div className="flex flex-wrap gap-4">
        <NeoButton onClick={() => onNavigate(Section.WORK)} className="py-4 px-10 text-xl bg-[#bef264]" variant="accent">
          See my work
        </NeoButton>
        <NeoButton onClick={() => onNavigate(Section.CONTACT)} className="py-4 px-10 text-xl">
          Get in touch
        </NeoButton>
      </div>
    </section>
  );
};

export default Hero;
