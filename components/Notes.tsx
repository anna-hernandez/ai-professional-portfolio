
import React from 'react';
import { NOTES } from '../constants';

const Notes: React.FC = () => {
  return (
    <section id="notes" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black mb-4">Writing & Thinking</h2>
          <p className="text-lg text-gray-600">Casual musings on the intersection of industrial data and human intelligence.</p>
        </div>
        <a href="#" className="font-bold border-b-2 border-black hover:bg-[#bef264] transition-colors">View all posts →</a>
      </div>
      
      <div className="space-y-6">
        {NOTES.map((note) => (
          <div key={note.id} className="group p-6 neo-border bg-white neo-shadow-sm hover:neo-shadow transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 mb-1">{note.date}</p>
                <h3 className="text-2xl font-bold group-hover:text-[#6a9e10] transition-colors">{note.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{note.excerpt}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="neo-border px-4 py-2 font-bold group-hover:bg-[#bef264] transition-colors">Read Post</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notes;
