
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-4 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-black mb-8">The Narrative</h2>
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              I believe that the most powerful data science isn't just about the complexity of the algorithm, but the clarity of the insight. Over the past decade, I've led technical teams through the "trough of disillusionment" in AI by focusing on one thing: human-centered value.
            </p>
            <p>
              My journey started in academic research, where I learned the rigor of the scientific method. I transitioned to the industrial sector because I wanted to see my models impacting real-world efficiency and sustainability. Whether it's predicting failures in wind turbines or optimizing heavy logistics, I find the "puzzle" of real-world noise fascinating.
            </p>
            <p>
              Currently, I act as an AI Ambassador, helping organizations navigate the shift toward Large Language Models. I spend a lot of my time bridging the gap between C-suite expectations and engineering realities—ensuring that AI remains a tool for augmentation, not just automation.
            </p>
            <p>
              When I'm not looking at a terminal, I'm usually teaching. Making AI accessible to non-technical stakeholders is my favorite part of the job. I truly believe that an AI-literate workforce is our best shot at solving the sustainability challenges of the next fifty years.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="neo-border bg-white p-2 neo-shadow transform rotate-2">
            <img 
              src="https://picsum.photos/seed/ai-expert/800/800" 
              alt="Professional but approachable portrait" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
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
      </div>
    </section>
  );
};

export default About;
