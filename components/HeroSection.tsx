
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-momon-green overflow-hidden border-b-4 border-momon-black min-h-[500px] md:min-h-[600px] flex items-center transition-all duration-300">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
      
      {/* Floating Background Icons - Hidden on small mobile to reduce clutter */}
      <div className="hidden md:block absolute top-10 left-10 text-white/20 transform -rotate-12 animate-bounce duration-1000">
        <Sparkles size={60} />
      </div>
      <div className="hidden md:block absolute bottom-10 right-1/2 text-momon-yellow/30 transform rotate-45">
        <div className="w-32 h-32 rounded-full border-4 border-current border-dashed animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left w-full">
          <div className="inline-block bg-momon-yellow text-momon-black px-3 py-1 md:px-4 rounded-full font-bold border-2 border-momon-black shadow-hard-sm mb-4 md:mb-6 transform -rotate-2 font-brand tracking-wider animate-pulse text-xs md:text-sm">
            ¡SOLO POR HOY!
          </div>
          
          {/* Responsive Text Sizes: 5xl on mobile, 8xl on desktop */}
          <h1 className="font-brand text-5xl sm:text-6xl md:text-8xl text-white leading-[0.9] mb-2 drop-shadow-[3px_3px_0px_#231f20] md:drop-shadow-[4px_4px_0px_#231f20] text-stroke-black">
            MARTES <br/>
            <span className="text-momon-yellow text-stroke-black">DE RITUAL</span>
          </h1>
          
          <div className="relative inline-block mt-4 mb-6 md:mb-8">
            <span className="font-brand text-3xl md:text-5xl text-white transform -rotate-1 block">
              10% DSCTO
            </span>
            <span className="font-sans font-bold text-base md:text-xl text-white/90 tracking-widest uppercase bg-momon-black px-2">
              en Milkteas
            </span>
          </div>

          <p className="font-sans text-base md:text-lg text-white font-medium max-w-md mb-6 md:mb-8 leading-relaxed mx-auto md:mx-0">
            La excusa perfecta para romper la rutina. Únete a la tribu y recarga tu energía creativa.
          </p>

          <button 
            onClick={onCtaClick}
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-momon-black font-brand text-lg md:text-xl rounded-full border-4 border-momon-black shadow-[4px_4px_0px_#231f20] md:shadow-[6px_6px_0px_#231f20] hover:shadow-none hover:translate-y-[4px] transition-all flex items-center gap-3 mx-auto md:mx-0"
          >
            VER EL MENÚ
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Visual Content */}
        <div className="flex-1 relative w-full max-w-[280px] sm:max-w-md md:max-w-lg mt-4 md:mt-0">
          {/* Giant Circle Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] pb-[120%] bg-momon-yellow rounded-full border-4 border-momon-black shadow-hard opacity-90"></div>
          
          {/* Main Drink Image */}
          <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=800" 
               alt="Martes de Ritual" 
               className="w-full h-auto rounded-3xl border-4 border-momon-black shadow-2xl"
             />
             
             {/* Mascot / Logo Sticker - Scaled down slightly for mobile */}
             <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 transform -rotate-12 hover:scale-110 transition-transform cursor-pointer filter drop-shadow-lg">
               <Logo size="xl" className="w-full h-full" />
               <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white text-momon-black font-brand text-xs md:text-sm px-2 py-1 md:px-3 rounded-lg border-2 border-momon-black whitespace-nowrap">
                 ¡Soy Momon!
               </div>
             </div>

             {/* Price/Discount Sticker */}
             <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-momon-red text-white w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 border-momon-black shadow-hard animate-bounce">
               <div className="text-center leading-none">
                 <span className="block font-brand text-lg md:text-2xl">10%</span>
                 <span className="block font-sans text-[10px] md:text-xs font-bold">OFF</span>
               </div>
             </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[30px] md:h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};
