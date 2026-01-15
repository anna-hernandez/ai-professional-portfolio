
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
    <section id="contact" className="py-12 md:py-24 px-4 bg-[#bef264]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-black mb-8 leading-none">Let's build something useful.</h2>
          <p className="text-xl font-medium mb-12 text-black/80">
            I'm always open to discussing new industrial projects, sustainability challenges, or speaking opportunities about human-centric AI.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 neo-border bg-white flex items-center justify-center neo-shadow-sm">
                📧
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-black/60">Email me</p>
                <a href="mailto:hello@ds.ai" className="text-xl font-bold border-b-2 border-black">hello@ds.ai</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 neo-border bg-white flex items-center justify-center neo-shadow-sm">
                🔗
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-black/60">Connect</p>
                <a href="#" className="text-xl font-bold border-b-2 border-black">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white neo-border p-8 neo-shadow">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="text-4xl">🚀</div>
              <h3 className="text-2xl font-black">Thanks for reaching out!</h3>
              <p>I'll get back to you within 24 hours.</p>
              <NeoButton onClick={() => setSent(false)}>Send another message</NeoButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-black mb-2 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-4 neo-border focus:bg-[#fcfcfc] outline-none transition-colors"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-black mb-2 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full p-4 neo-border focus:bg-[#fcfcfc] outline-none transition-colors"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-black mb-2 uppercase tracking-wider">How can I help?</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full p-4 neo-border focus:bg-[#fcfcfc] outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <NeoButton variant="accent" className="w-full py-4 text-lg">Send Message</NeoButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
