
import React, { useState } from 'react';
import NeoButton from './NeoButton';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending CV Request to: annahernandez.consulting@gmail.com", {
      ...formData,
      subject: "CV Request from Portfolio"
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white neo-border neo-shadow w-full max-w-md p-8 relative animate-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 font-black text-2xl hover:text-red-500 transition-colors"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-black mb-2 uppercase">Request Sent!</h3>
            <p className="font-medium text-gray-600">Sending resume to {formData.email}...</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-black mb-2 tracking-tighter">Where should I send it?</h2>
            <p className="text-sm font-medium text-gray-500 mb-6 italic">Enter your details and I'll beam it over instantly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Your Name *</label>
                <input 
                  required
                  type="text"
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Company (Optional)</label>
                <input 
                  type="text"
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Email *</label>
                <input 
                  required
                  type="email"
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Note (Optional)</label>
                <textarea 
                  rows={2}
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <NeoButton variant="accent" className="w-full py-4 text-lg">Send Resume</NeoButton>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CVModal;
