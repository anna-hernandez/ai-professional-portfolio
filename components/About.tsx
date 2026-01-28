
import React from 'react';
import { Section } from '../types';

interface AboutProps {
  onNavigate: (section: Section) => void;
}

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[#bef264] px-1 font-bold inline-block leading-[1.1]">{children}</span>
);

const TerminalIcon = () => (
  <span className="text-[#bef264] font-black text-2xl leading-none select-none inline-flex items-center mr-3">
    &gt;<span className="cursor-blink">_</span>
  </span>
);

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="flex-1 flex flex-col px-6 md:px-8 max-w-5xl mx-auto w-full pt-16 md:pt-24 pb-24">
      <div className="w-full">
        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-16">
          My journey, briefly.
        </h2>
        
        <div className="space-y-12 text-lg font-medium text-black/80 leading-relaxed">
          <p className="text-2xl font-black mb-8 max-w-2xl text-black">
            I've now worked in Data Science for over 10 years. They've gone fast.
          </p>

          <div className="space-y-12 max-w-3xl">
            <p>
              <TerminalIcon />
              I started in academia, through my PhD in <Highlight>Computational Biology</Highlight>. I used <Highlight>graph and clustering algorithms</Highlight> to understand viral-host protein relationships and modeled viral entry proteins. That led to 5 papers and 1 patent.
            </p>

            <p>
              <TerminalIcon />
              I transitioned into industry via Faculty AI, translating research into solutions for legal, education, and marketing domains using <Highlight>NLP</Highlight> and <Highlight>causal inference</Highlight>.
            </p>
            
            <p>
              <TerminalIcon />
              At WildBrain, I rose to <Highlight>Tech Lead</Highlight>, shipping features while rolling out the company's <Highlight>Generative AI</Highlight> adoption framework and re-architecting <Highlight>ML operations</Highlight>.
            </p>

            <p>
              <TerminalIcon />
              Currently, I help industries navigate AI through <Highlight>technical strategy</Highlight>, workshops, and production-ready <Highlight>prototypes</Highlight>.
            </p>
          </div>

          <div className="pt-12">
             <button 
              onClick={() => onNavigate(Section.CONTACT)}
              className="font-black text-2xl md:text-4xl hover:text-[#6a9e10] transition-colors underline decoration-8 decoration-[#bef264] underline-offset-8 tracking-tighter"
            >
              Let's connect →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
