
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Growth from './components/Growth';
import Notes from './components/Notes';
import Contact from './components/Contact';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (activeSection) {
      case Section.HOME:
        return <Hero onNavigate={handleNavigate} />;
      case Section.ABOUT:
        return <About />;
      case Section.WORK:
        return <Work />;
      case Section.GROWTH:
        return <Growth />;
      case Section.NOTES:
        return <Notes />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-[#1a1a1a] flex flex-col">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-grow pt-24 md:pt-32">
        <div className="animate-in fade-in duration-500">
          {renderCurrentPage()}
        </div>
      </main>
      
      {/* Global Footer for all pages */}
      <footer className="bg-white border-t-2 border-black py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="font-black text-xl px-3 py-1 neo-border bg-white neo-shadow-sm">
              DS<span className="text-[#bef264]">.</span>AI
            </div>
            <p className="font-bold text-gray-600">Lead Data Scientist & AI Ambassador</p>
          </div>
          <div className="flex gap-6 font-bold">
            <button onClick={() => handleNavigate(Section.HOME)} className="hover:text-[#6a9e10]">Home</button>
            <button onClick={() => handleNavigate(Section.WORK)} className="hover:text-[#6a9e10]">Work</button>
            <button onClick={() => handleNavigate(Section.CONTACT)} className="hover:text-[#6a9e10]">Contact</button>
          </div>
          <p className="text-sm text-gray-400">© 2024 AI Portfolio. Professional & Human-Centered.</p>
        </div>
      </footer>

      {/* Page status indicator */}
      <div className="fixed bottom-8 right-8 hidden lg:block pointer-events-none z-40">
        <div className="neo-border bg-white px-4 py-2 neo-shadow transform rotate-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#bef264] rounded-full animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-widest">{activeSection} Page</span>
        </div>
      </div>
    </div>
  );
};

export default App;
