
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
              I transitioned into industry via an internship, and that got me completely hooked. to the translation of research and theory into products and solutions. The internship was followed by a couple of years in <Highlight>AI consultancy</Highlight>, as an <i>official</i> Data Scientist, learning from great colleagues and mentors in a fast-paced and dynamic environment. I worked in projects in the legal, education, biosciences, government security and marketing domains.
              
              <TerminalIcon />
              Many of my projects were <Highlight>NLP</Highlight>-focused, requiring from more simple techniques (such as document classification with algorithms as foundational as logistic regression and having to handcraft the features yourself), to much more advanced approaches such as customising the architecture and fine-tuning a generative model at a time when these were a dream rather than a reality. I also stepped into <Highlight>computer vision</Highlight>, applied <Highlight>differential privacy</Highlight> techniques in client-facing real-world use cases. I also worked on <Highlight>causal inference</Highlight> applied to marketting campaigns during as part of a secondment in the R+D team..
            </p>
            
            <p>
              <TerminalIcon />
              My next move took me to the world of digital entertainment, with a large-scale multi-national animation studio and distribution enterprise. The entertainment domain was new to me, as it was the company structure: from a mid-sized national company with a relatively large DS team (~50% of the company employees) to a very large, multi-national company, with thousands of employees, with a very small data science team. But I adapted, and I progressively rose from data scientist to senior data scientist, and, finally, team <Highlight>tech lead</Highlight>. 
            </p>
            <p>
              <TerminalIcon />
              As a digital entertainment company, the data available was vast: audio, text, video, image. Structured, unstructured, semi-structured data. You name it. And whilst our stakeholders were internal, this didn't reduce the variety of challenges. Here I honed my skills in <Highlight>computer vision</Highlight> and <Highlight>cloud technologies</Highlight>.
              
              <TerminalIcon />
              As individual contributor I worked on maintaining the existing codebases and projects, and developing new products, collaborating closely with stakeholders to understand their feature requirements and priorities. In parallel, I worked on growing the team, interviewing external candidates and <Highlight>mentoring</Highlight> colleagues.
              
              <TerminalIcon />
              As senior data scientist I took responsibility for devising and rolling out the <Highlight>MLOps</Highlight> strategy for the team, while becoming more involved in <Highlight>roadmap planning</Highlight> and alignment with the broader company strategy.
              
              <TerminalIcon />
              As tech lead, I remained an individual contributor on high priority or high complexity projects, but got fully embedded into business strategy, team development activities, and coordination with stakeholders and business owners to help define strategy and meet milestones, whilst protecting the sanity of my tech team. A defining aspect of my role, was to spearhead the development and implementation of the company's <Highlight>Generative AI governance</Highlight> framework during the initial surge of generative machine learning.
            </p>

            <p>
              <TerminalIcon />
              Currently, I'm back into AI consultancy start-up in the energy-intensive industry sector. My role is a mixture of hands-on technical work, with a focus on <Highlight>Generative AI</Highlight> solutions, and strategic guidance.  In parallel, I collaborate with the commercial team to engage with new clients, generate and convert leads, and ideate new products and solutions specific that help organisations face their challenges in a more efficient and sustainability-aware manner.
            </p>
            <p>
              <TerminalIcon />
              My journey so far has complemented my highly technical background, with strategic thinking and product management skills, gaining insights from across very different organisation sizes and structures, industry sectors, and collaborating with very diverse professional and
              personal backgrounds.
              
              Nonetheless, my most valuable skill remains the ability to <Highlight>learn quickly</Highlight>, adapt, and thrive when faced with new environments and challenges.
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
