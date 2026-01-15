
import React from 'react';
import { Section } from '../types';
import NeoButton from './NeoButton';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 neo-border bg-[#bef264] text-sm font-bold neo-shadow-sm mb-4">
          ✨ Available for cool stuff
        </span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
        Making AI feel <span className="bg-[#bef264] px-2 border-b-4 border-black">human</span> & useful.
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed mb-10">
        I am a Lead Data Scientist and AI enthusiast with over ten years of international experience working across industry sectors: from science and government to creative media, energy, and manufacturing. 
        Lately, I've been focused on how generative AI and large language models can actually make teams more creative and data more human.
      </p>

      <div className="flex flex-wrap gap-4">
        <NeoButton onClick={() => onNavigate(Section.WORK)} className="py-4 px-10 text-xl" variant="accent">
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
