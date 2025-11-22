
import React from 'react';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';

interface FeatureSectionProps {
  onCtaClick: () => void;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-momon-yellow py-16 md:py-24 overflow-hidden border-b-4 border-momon-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-10 text-momon-black/20 animate-spin-slow hidden md:block">
        <Sparkles size={80} />
      </div>
      <div className="absolute bottom-20 left-10 text-momon-red/20 transform -rotate-12 hidden md:block">
        <div className="w-24 h-24 rounded-full border-4 border-current border-dashed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Visual Side (Left on Desktop) */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative w-[250px] sm:w-[300px] md:w-[400px] aspect-square">
              
              {/* Blobs/Background Shapes */}
              <div className="absolute inset-0 bg-white rounded-full border-4 border-momon-black transform rotate-6 scale-105 shadow-[6px_6px_0px_#231f20] md:shadow-[8px_8px_0px_#231f20]"></div>
              <div className="absolute inset-0 bg-momon-green rounded-full border-4 border-momon-black transform -rotate-3 scale-95 opacity-80"></div>
              
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1541696432-82c6da8ce7ea?auto=format&fit=crop&q=80&w=800" 
                alt="Mango Ojo Loco" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-momon-black z-10 transform hover:scale-105 transition-transform duration-500"
              />

              {/* "Ojo Loco" Sticker */}
              <div className="absolute -top-2 -right-2 md:-top-6 md:-right-6 z-20 bg-white p-3 md:p-4 rounded-full border-4 border-momon-black shadow-hard animate-bounce">
                <Eye size={32} className="text-momon-black md:w-12 md:h-12" />
              </div>

              {/* Badge */}
              <div className="absolute bottom-0 -left-2 md:-left-4 z-20 bg-momon-red text-white px-4 py-1 md:px-6 md:py-2 rounded-full border-4 border-momon-black font-brand text-lg md:text-xl transform -rotate-6 shadow-hard-sm">
                ¡NUEVO!
              </div>
            </div>
          </div>

          {/* Text Side (Right on Desktop) */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-2">
            <h2 className="font-brand text-4xl sm:text-5xl md:text-7xl text-momon-black leading-[0.9] mb-4 md:mb-6 drop-shadow-sm">
              MANGO <br/>
              <span className="text-white text-stroke-black drop-shadow-[3px_3px_0px_#231f20] md:drop-shadow-[4px_4px_0px_#231f20]">OJO LOCO</span>
            </h2>
            
            <p className="font-sans text-lg md:text-xl font-medium text-momon-black/80 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              ¿Necesitas inspiración? Una explosión tropical que te mira de vuelta. 
              Mezcla de mango fresco, chamoy y perlas explosivas.
              <span className="block mt-2 font-bold text-momon-red">Despierta tu lado salvaje.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onCtaClick}
                className="px-6 py-3 md:px-8 md:py-4 bg-momon-black text-white rounded-full font-brand text-lg md:text-xl border-4 border-transparent hover:border-momon-black hover:bg-white hover:text-momon-black transition-all shadow-hard hover:shadow-none hover:translate-y-1 flex items-center justify-center gap-2"
              >
                PROBAR LA MAGIA <ArrowRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
