
import React, { useState } from 'react';
import NeoButton from './NeoButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="flex-1 flex flex-col bg-[#bef264]">
      {/* Container with standardized margins and padding identical to other pages */}
      <div className="max-w-5xl mx-auto w-full px-6 md:px-8 pt-16 md:pt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-black">
              Let's talk.
            </h2>
            <div className="max-w-lg w-full">
              <p className="text-lg md:text-xl font-bold mb-10 text-black leading-relaxed">
                I'm always open to discussing new industrial projects, sustainability challenges, or speaking opportunities about human-centric data science.
              </p>
              
              {/* Centered LinkedIn icon relative to the paragraph block above */}
              <div className="flex justify-center w-full">
                <a 
                  href="https://linkedin.com/in/anna-hernandez-duran" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn" 
                  className="w-16 h-16 neo-border bg-white flex items-center justify-center neo-shadow-sm group hover:bg-black transition-colors cursor-pointer"
                >
                  <svg className="w-8 h-8 group-hover:fill-white fill-black" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="bg-white neo-border p-8 md:p-10 neo-shadow w-full">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-6">
                <div className="text-6xl">🚀</div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Message Sent!</h3>
                <p className="font-medium text-black/70">I'll get back to you within 24 hours.</p>
                <NeoButton onClick={() => setSent(false)} className="px-12 py-4">Send another</NeoButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black mb-1 uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 neo-border focus:bg-[#bef264]/10 outline-none transition-colors font-bold text-black"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black mb-1 uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-4 neo-border focus:bg-[#bef264]/10 outline-none transition-colors font-bold text-black"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black mb-1 uppercase tracking-widest text-gray-500">How can I help?</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full p-4 neo-border focus:bg-[#bef264]/10 outline-none transition-colors resize-none font-bold text-black"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <NeoButton variant="accent" className="w-full py-5 text-xl">Submit Inquiry</NeoButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
