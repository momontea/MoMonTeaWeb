
import React, { useState } from 'react';
import { Sparkles, ArrowRight, Smile, Zap, Coffee, Heart } from 'lucide-react';
import { Product } from '../types';
import { MENU_PRODUCTS } from '../data/menuData';

interface MoodQuizProps {
  onRecommendation: (product: Product) => void;
}

export const MoodQuiz: React.FC<MoodQuizProps> = ({ onRecommendation }) => {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // Simple mapping logic
  const getRecommendation = (selectedMood: string) => {
    let matchId = 'mt-1'; // Default
    if (selectedMood === 'energy') matchId = 'ma-4';
    if (selectedMood === 'chill') matchId = 'ta-1';
    if (selectedMood === 'sweet') matchId = 'cc-2';
    if (selectedMood === 'fresh') matchId = 'tt-2';

    const product = MENU_PRODUCTS.find(p => p.id === matchId) || MENU_PRODUCTS[0];
    onRecommendation(product);
    setIsVisible(false); // Hide quiz after success
  };

  if (!isVisible) return null;

  return (
    <section className="py-12 bg-momon-offwhite border-b-4 border-momon-black overflow-hidden relative">
       {/* Decoration */}
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-momon-yellow via-momon-red to-momon-green"></div>

       <div className="container mx-auto px-4">
         <div className="bg-white rounded-3xl border-4 border-momon-black shadow-hard p-6 md:p-10 max-w-3xl mx-auto relative">
            
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-momon-yellow text-momon-black px-6 py-2 rounded-full border-4 border-momon-black font-brand text-lg shadow-sm whitespace-nowrap flex items-center gap-2">
              <Sparkles size={20} /> ¿NO SABES QUÉ PEDIR?
            </div>

            {step === 0 && (
              <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
                <h3 className="font-brand text-2xl md:text-4xl mb-6 text-momon-black">¿Cómo está tu vibra hoy?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button onClick={() => { setMood('energy'); setStep(1); }} className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-200 hover:border-momon-red hover:bg-red-50 transition-all group">
                    <div className="w-12 h-12 bg-red-100 text-momon-red rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">⚡</div>
                    <span className="font-brand text-lg">Con Energía</span>
                  </button>
                  <button onClick={() => { setMood('chill'); setStep(1); }} className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-200 hover:border-momon-green hover:bg-green-50 transition-all group">
                    <div className="w-12 h-12 bg-green-100 text-momon-green rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🍃</div>
                    <span className="font-brand text-lg">Chill / Relax</span>
                  </button>
                  <button onClick={() => { setMood('sweet'); setStep(1); }} className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 transition-all group">
                     <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🍫</div>
                    <span className="font-brand text-lg">Dulcero</span>
                  </button>
                  <button onClick={() => { setMood('fresh'); setStep(1); }} className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-200 hover:border-momon-yellow hover:bg-yellow-50 transition-all group">
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">☀️</div>
                    <span className="font-brand text-lg">Refrescante</span>
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
               <div className="text-center animate-in fade-in slide-in-from-right-8 duration-300 pt-4">
                  <div className="w-16 h-16 bg-momon-black text-momon-yellow rounded-full flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                     <Sparkles size={32} />
                  </div>
                  <h3 className="font-brand text-2xl md:text-3xl mb-2">¡Conectando con tu sueño!</h3>
                  <p className="font-sans text-gray-500 mb-6">Nuestros baristas mágicos están eligiendo...</p>
                  <button 
                    onClick={() => getRecommendation(mood)}
                    className="bg-momon-red text-white px-8 py-3 rounded-full font-brand text-xl border-2 border-momon-black shadow-hard hover:shadow-none hover:translate-y-1 transition-all"
                  >
                    VER MI BEBIDA
                  </button>
               </div>
            )}

         </div>
       </div>
    </section>
  );
};
