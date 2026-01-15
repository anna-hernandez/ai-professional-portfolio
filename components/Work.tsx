
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        Selected Projects 
        <span className="text-sm font-bold bg-gray-100 neo-border px-3 py-1">4 Highlighted</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group neo-border bg-white p-8 neo-shadow transition-all hover:-translate-y-1">
            <h3 className="text-2xl font-black mb-4">{project.title}</h3>
            
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Context</p>
              <p className="text-gray-800">{project.context}</p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">My Role</p>
              <p className="text-gray-800 italic">{project.role}</p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">The Approach</p>
              <ul className="space-y-2">
                {project.approach.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <span className="text-[#bef264] font-black">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 neo-border p-4 mb-6 neo-shadow-sm border-dashed">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Outcomes</p>
              <p className="text-lg font-bold text-black">{project.results}</p>
            </div>

            <div className="pt-4 border-t-2 border-black border-dotted">
              <p className="text-sm text-gray-600">
                <span className="font-bold">Technologies:</span> {project.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
