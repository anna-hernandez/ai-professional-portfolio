
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
              I started in academia, with a <Highlight>PhD</Highlight> in Computational Biology. I used <Highlight>graph and clustering</Highlight> algorithms to understand viral-host protein relationships and modeled viral entry proteins. That led to 5 papers and 1 patent.
            </p>

            <p>
              <TerminalIcon />
              I transitioned into industry via an internship, and that got me completely hooked. to the translation of research
          and theory into products and solutions. The internship was
          followed by a couple of years in <Highlight>AI consultancy</Highlight>, as an <i>officially</i> Data Scientist, learning from great colleagues and mentors in a fast-paced and dynamic
          environment. I worked in projects in the legal, education,
          biosciences, government security and marketing domains. Many of my
          projects were <Highlight>NLP</Highlight>-focused, requiring from more simple
          techniques (such as document classification with algorithms as
          foundational as logistic regression and having to handcraft the
          features yourself), to much more advanced approaches such as
          customising the architecture and fine-tuning a generative model
          at a time when these were a dream rather than a
          reality. I also stepped into <Highlight>computer vision</Highlight>, applied <Highlight>differential privacy</Highlight> techniques in client-facing real-world use cases. I also worked on <Highlight>causal inference</Highlight> applied to marketting campaigns during as part of a secondment in the R+D team..
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
