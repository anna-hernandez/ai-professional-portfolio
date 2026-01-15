
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-4 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-black mb-8">A bit about me.</h2>
          
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              I've now worked in Data Science for over 10 years. They've gone fast. You can read about my journey here.
            </p>
            <div className="neo-border bg-white p-2 neo-shadow transform rotate-2 space-y-2 ">
            <h3 className="font-bold text-xl mb-4">The Beginnings.</h3>
            <p>
              I started in academia, through my PhD in Computational
              Biology. Then, I used graph and clustering algorithms to understand the physical and functional relationships
              formed between viral and host proteins during infection, and physics-guided methods to model the three-dimensional structure of viral entry
              proteins. That led to 5 papers and 1 patent application (which was
              got paused due to the difficulty of generating the mutant protein
              at the industrial scale necessary for a profitable
              commercialisation).
            </p>
            </div>
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              I've now worked in Data Science for over 10 years. They've gone fast. You can read about my journey here.
            </p>
            <div className="neo-border bg-white p-2 neo-shadow transform rotate-2 space-y-2 ">
            <h3 className="font-bold text-xl mb-4">The Beginnings.</h3>
            <p>
              After two short postdocs where I mostly worked on software to
              distribute the data of my research (designing databases and
              divulgation websites), I stepped into the data science world
              through an internship with Faculty AI (now part of Accenture).
              That opened my mind to industry, to the translation of research
              and theory into products and solutions. That internship was
              followed by a couple of years at Faculty where I learned from
              great colleagues and mentors in a fast-paced and dynamic
              environment. There I worked in projects in the legal, education,
              biosciences, government security and marketing domains. Many of my
              projects were NLP-focused, at the time its potential was to be
              fully unleashed. I worked on projects that required more simple
              techniques, such as document classification with algorithms as
              “simple” as logistic regression and having to handcraft the
              features yourself, to much more advanced approaches such as
              customising the architecture and fine-tuning a generative model
              (at a time when generative models were a dream rather than a
              reality). I also worked on computer vision and geo-special data
              science projects, and for a while I joined the R+D department and
              collaborated in ML-guided marketing attribution research using
              causal inference techniques.
            </p>
          </div>
            
            <p>
              When I'm not looking at a terminal, I'm usually teaching. Making AI accessible to non-technical stakeholders is my favorite part of the job. I truly believe that an AI-literate workforce is our best shot at solving the sustainability challenges of the next fifty years.
            </p>
          </div>
        </div>
        
        {/* <div className="flex flex-col gap-8"> */}
          
          <div className="neo-border bg-[#bef264] p-8 neo-shadow -rotate-1">
            <h3 className="font-bold text-xl mb-4">Core Focus Areas</h3>
            <ul className="space-y-2 font-medium">
              <li>→ Sustainability & Circular Economy</li>
              <li>→ Industrial AI / Predictive Maintenance</li>
              <li>→ Generative AI Governance & Ethics</li>
              <li>→ Technical Strategy for Product Teams</li>
              <li>→ Human-AI Collaboration Frameworks</li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
