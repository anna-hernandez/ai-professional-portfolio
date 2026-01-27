
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
// import Growth from './components/Growth';
// import Notes from './components/Notes';
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
        return <About onNavigate={handleNavigate} />;
      case Section.WORK:
        return <Work onNavigate={handleNavigate} />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  // Only the Contact page might benefit from being "fixed" but generally it's safer to allow scroll on mobile.
  // We'll remove the h-screen overflow-hidden to allow natural scrolling on all pages.
  const isFixedPage = activeSection === Section.CONTACT;

  return (
    <div className={`bg-[#fcfcfc] text-[#1a1a1a] flex flex-col min-h-screen`}>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* pt-20 provides a consistent baseline offset for the fixed navbar across all pages */}
      <main className="flex-grow flex flex-col pt-20">
        <div className={`animate-in fade-in duration-500 flex-1 flex flex-col`}>
          {renderCurrentPage()}
        </div>
      </main>
      
      {/* Global Footer - Standardized Height */}
      <footer className="bg-white border-t-2 border-black px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="text-[12px] leading-[0.9] font-normal tracking-[0.2em] text-gray-800 uppercase">
              Anna Hernandez<br/>
              <span className="text-[9px] opacity-70 lowercase tracking-normal">Data and AI</span>
            </div>
          </div>
          <div className="flex gap-6 font-bold text-sm">
            <button onClick={() => handleNavigate(Section.HOME)} className="hover:text-[#6a9e10]">Home</button>
            <button onClick={() => handleNavigate(Section.WORK)} className="hover:text-[#6a9e10]">Work</button>
            <button onClick={() => handleNavigate(Section.CONTACT)} className="hover:text-[#6a9e10]">Contact</button>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">© 2024 Anna Hernandez</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
