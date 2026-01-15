
import React from 'react';
import { LEARNING_INITIATIVES } from '../constants';

const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-12 md:py-24 px-4 bg-black text-white min-h-[60vh]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12">Continuous Growth</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          The field moves fast. Here is how I stay on the edge—not for the sake of trends, but to find better tools for hard problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEARNING_INITIATIVES.map((item) => (
            <div key={item.id} className="neo-border border-white p-6 bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <span className={`inline-block px-2 py-1 text-xs font-bold uppercase mb-4 neo-border ${item.category.includes('Currently') ? 'bg-blue-500 text-white' : 'bg-[#bef264] text-black'}`}>
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Growth;
