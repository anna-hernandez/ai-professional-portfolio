
import React from 'react';
import { Section } from '../types';
import NeoButton from './NeoButton';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="flex-1 flex flex-col justify-center px-4 max-w-4xl mx-auto w-full pt-12 pb-20">
      {/* Brand & Intro - Left Justified */}
      <div className="w-full text-left mb-16">
        <div className="text-[18px] leading-[0.9] font-normal tracking-[0.2em] text-gray-500 uppercase mb-4">
          Anna Hernandez
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
          Data and AI.
        </h1>
        <p className="text-lg font-medium text-black/80 max-w-2xl leading-relaxed">
          I am a Data Scientist with over ten years of international experience across industry sectors: from biosciences, legal tech, and government to creative media, energy, and manufacturing.
        </p>
      </div>

      {/* Services - Left Aligned */}
      <div className="w-full text-left mb-16">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Services I offer:</h3>
        <div className="flex flex-wrap justify-start gap-x-10 gap-y-4 text-lg font-bold">
          <span className="flex items-center gap-3"><span className="w-2 h-2 bg-[#bef264] border border-black"></span> Training & Mentoring</span>
          <span className="flex items-center gap-3"><span className="w-2 h-2 bg-[#bef264] border border-black"></span> Software Development</span>
          <span className="flex items-center gap-3"><span className="w-2 h-2 bg-[#bef264] border border-black"></span> Strategy Guidance</span>
        </div>
      </div>

      {/* Action Row - Left Aligned & Horizontal */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        <NeoButton 
          onClick={() => onNavigate(Section.WORK)} 
          className="py-4 px-10 text-xl" 
          variant="accent"
        >
          See my work
        </NeoButton>
        
        <button 
          onClick={() => onNavigate(Section.CONTACT)}
          className="font-black text-2xl md:text-4xl hover:text-[#6a9e10] transition-colors underline decoration-8 decoration-[#bef264] underline-offset-8 tracking-tighter"
        >
          Let's connect →
        </button>
      </div>
    </section>
  );
};

export default Hero;
