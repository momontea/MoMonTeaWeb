import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface JoinTribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinTribeModal: React.FC<JoinTribeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dream: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the submission (API call, etc.)
    alert(`¡Bienvenido a la Tribu, ${formData.name}! Tu sueño está a salvo con nosotros.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-momon-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-hard border-4 border-momon-black relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-momon-black p-2 rounded-full border-2 border-momon-black hover:bg-momon-red hover:text-white transition-colors z-10 shadow-hard-sm"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-momon-yellow p-8 border-b-4 border-momon-black text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
          <Sparkles className="inline-block text-momon-black mb-2" size={32} />
          <h2 className="font-brand text-3xl font-bold text-momon-black">Únete a la Tribu</h2>
          <p className="font-sans font-bold text-momon-black/70 mt-2">Donde soñar es el requisito.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          <div>
            <label className="block font-brand text-lg text-momon-black mb-2">Nombre de Soñador</label>
            <input 
              type="text" 
              required
              className="w-full p-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all"
              placeholder="¿Cómo te llamamos?"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block font-brand text-lg text-momon-black mb-2">Correo Electrónico</label>
            <input 
              type="email" 
              required
              className="w-full p-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all"
              placeholder="hola@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block font-brand text-lg text-momon-black mb-2">Tu Sueño Actual</label>
            <textarea 
              className="w-full p-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all resize-none"
              placeholder="Aprender a volar, escribir un libro..."
              rows={3}
              value={formData.dream}
              onChange={(e) => setFormData({...formData, dream: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-momon-red text-white py-4 rounded-xl font-brand text-xl border-2 border-momon-black hover:bg-momon-black hover:text-momon-yellow transition-all shadow-hard active:translate-y-[2px] active:shadow-none"
          >
            ¡Ser Parte!
          </button>
        </form>
      </div>
    </div>
  );
};