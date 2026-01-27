
import React, { useState } from 'react';
import NeoButton from './NeoButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Simulation
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="flex-1 flex flex-col justify-center bg-[#bef264] px-4 py-12">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Let's talk.</h2>
          <p className="text-lg font-medium mb-8 text-black/80">
            I'm always open to discussing new industrial projects, sustainability challenges, or speaking opportunities about human-centric data science.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-12 h-12 neo-border bg-white flex items-center justify-center neo-shadow-sm group hover:bg-black transition-colors cursor-pointer">
              <svg className="w-6 h-6 group-hover:fill-white fill-black" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white neo-border p-6 md:p-8 neo-shadow">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-4">
              <div className="text-4xl">🚀</div>
              <h3 className="text-2xl font-black">Thanks for reaching out!</h3>
              <p>I'll get back to you within 24 hours.</p>
              <NeoButton onClick={() => setSent(false)}>Send another message</NeoButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black mb-1 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-3 neo-border focus:bg-[#fcfcfc] outline-none transition-colors text-sm"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black mb-1 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full p-3 neo-border focus:bg-[#fcfcfc] outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black mb-1 uppercase tracking-wider">How can I help?</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full p-3 neo-border focus:bg-[#fcfcfc] outline-none transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <NeoButton variant="accent" className="w-full py-3 text-base">Send Message</NeoButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
