
import React from 'react';
import { X, Sparkles, Rocket, Heart } from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-momon-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden shadow-hard border-4 border-momon-black flex flex-col relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-momon-black p-2 rounded-full border-2 border-momon-black hover:bg-momon-red hover:text-white transition-colors z-20 shadow-hard-sm"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-momon-green p-8 border-b-4 border-momon-black text-center relative shrink-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
          <Rocket className="inline-block text-white mb-2 drop-shadow-md" size={40} />
          <h2 className="font-brand text-4xl font-bold text-white drop-shadow-md text-stroke-black">El Origen del Sueño</h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-10 font-sans bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          
          {/* Chapter 1 */}
          <section className="relative bg-white p-6 rounded-2xl border-2 border-momon-black shadow-hard-sm transform -rotate-1">
            <div className="absolute -top-4 -left-4 bg-momon-yellow text-momon-black font-brand font-bold px-4 py-2 border-2 border-momon-black rounded-lg shadow-sm transform -rotate-3">
              Capítulo 1
            </div>
            <h3 className="font-brand text-2xl text-momon-black mb-3 mt-2">El Mundo Gris</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Todo comenzó cuando notamos que el mundo se estaba volviendo un poco... gris. 
              La gente corría, trabajaba y olvidaba lo más importante: <span className="font-bold text-momon-red">Jugar</span>. 
              La rutina había apagado la chispa de los "Soñadores Perdidos".
            </p>
          </section>

          {/* Chapter 2 */}
          <section className="relative bg-white p-6 rounded-2xl border-2 border-momon-black shadow-hard-sm transform rotate-1">
             <div className="absolute -top-4 -right-4 bg-momon-red text-white font-brand font-bold px-4 py-2 border-2 border-momon-black rounded-lg shadow-sm transform rotate-3">
              Capítulo 2
            </div>
            <h3 className="font-brand text-2xl text-momon-black mb-3 mt-2">La Revelación</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Entendimos que <span className="font-bold text-momon-black">"Crecer es soñar grande"</span>. 
              No necesitábamos solo té; necesitábamos un <span className="font-bold text-momon-green">RITUAL</span>. 
              Un momento del día para desconectar del "deber ser" y reconectar con el "querer ser".
            </p>
          </section>

          {/* Chapter 3 */}
          <section className="relative bg-white p-6 rounded-2xl border-2 border-momon-black shadow-hard-sm transform -rotate-1">
             <div className="absolute -top-4 -left-4 bg-momon-black text-momon-yellow font-brand font-bold px-4 py-2 border-2 border-white rounded-lg shadow-sm transform -rotate-3">
              Capítulo 3
            </div>
            <h3 className="font-brand text-2xl text-momon-black mb-3 mt-2">La Tribu Momon</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Así nació MoMon Tea. Más que bebidas, somos catalizadores de creatividad. 
              Cada sabor está diseñado para despertar una emoción: Alegría, Nostalgia, Aventura.
              Hoy, tú eres parte de esta historia.
            </p>
            <div className="mt-4 flex justify-center">
               <Heart className="text-momon-red fill-current animate-bounce" size={32} />
            </div>
          </section>

        </div>

        {/* Footer Action */}
        <div className="p-6 bg-white border-t-4 border-momon-black text-center shrink-0">
          <button 
            onClick={onClose}
            className="bg-momon-yellow text-momon-black px-10 py-3 rounded-full font-bold border-2 border-momon-black hover:bg-momon-black hover:text-white transition-all shadow-hard active:translate-y-[2px] active:shadow-none text-lg font-brand"
          >
            ¡Seguir Soñando!
          </button>
        </div>

      </div>
    </div>
  );
};
