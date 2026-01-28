
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import CVModal from './components/CVModal';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

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

  return (
    <div className={`bg-[#fcfcfc] text-[#1a1a1a] flex flex-col min-h-screen`}>
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onRequestCV={() => setIsCVModalOpen(true)}
      />
      
      <main className="flex-grow flex flex-col pt-20">
        <div className={`animate-in fade-in duration-500 flex-1 flex flex-col`}>
          {renderCurrentPage()}
        </div>
      </main>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      
      <footer className="bg-white border-t-4 border-black px-6 md:px-8 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
             <div className="text-[14px] leading-[1] font-black tracking-[0.1em] text-gray-800 uppercase text-center md:text-left">
              Anna Hernandez<br/>
              <span className="text-[10px] font-normal opacity-70 lowercase tracking-normal">Data and AI</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-bold text-sm uppercase">
            <button onClick={() => handleNavigate(Section.HOME)} className="hover:text-[#6a9e10] transition-colors">Home</button>
            <button onClick={() => handleNavigate(Section.ABOUT)} className="hover:text-[#6a9e10] transition-colors">About</button>
            <button onClick={() => handleNavigate(Section.WORK)} className="hover:text-[#6a9e10] transition-colors">Work</button>
            <button onClick={() => handleNavigate(Section.CONTACT)} className="hover:text-[#6a9e10] transition-colors">Contact</button>
            <button onClick={() => setIsCVModalOpen(true)} className="text-[#6a9e10] hover:underline decoration-2">Request CV</button>
          </div>
          
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">© 2024 Anna Hernandez</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
