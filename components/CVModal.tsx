
import React, { useState } from 'react';
import NeoButton from './NeoButton';
import { FORMSPREE_CV_FORM_ID } from '../constants';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_CV_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          message: formData.message,
          _subject: 'CV Request from Portfolio'
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', company: '', email: '', message: '' });
          onClose();
        }, 3000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send request');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white neo-border neo-shadow w-full max-w-md p-8 relative animate-in zoom-in duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 font-black text-2xl hover:text-red-500 transition-colors"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-black mb-2 uppercase">Request Sent!</h3>
            <p className="font-medium text-gray-600">I'll send my resume shortly.</p>
          </div>
        ) : status === 'error' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">😕</div>
            <h3 className="text-2xl font-black mb-2 uppercase">Oops!</h3>
            <p className="font-medium text-gray-600 mb-4">{errorMessage}</p>
            <NeoButton onClick={() => setStatus('idle')} className="px-8 py-3">Try again</NeoButton>
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
                  disabled={status === 'submitting'}
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none disabled:opacity-50"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Company (Optional)</label>
                <input
                  type="text"
                  disabled={status === 'submitting'}
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none disabled:opacity-50"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Email *</label>
                <input
                  required
                  type="email"
                  disabled={status === 'submitting'}
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none disabled:opacity-50"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-1">Note (Optional)</label>
                <textarea
                  rows={2}
                  disabled={status === 'submitting'}
                  className="w-full p-3 neo-border focus:bg-[#bef264]/10 outline-none resize-none disabled:opacity-50"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <NeoButton
                variant="accent"
                className="w-full py-4 text-lg disabled:opacity-50"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Resume'}
              </NeoButton>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CVModal;
