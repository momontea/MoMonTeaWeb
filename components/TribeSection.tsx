
import React from 'react';
import { Users, Heart, Star, ArrowRight } from 'lucide-react';

interface TribeSectionProps {
  onJoinClick: () => void;
}

export const TribeSection: React.FC<TribeSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="relative bg-momon-red py-16 md:py-24 overflow-hidden border-b-4 border-momon-black text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
      
      {/* Floating Elements for "Movement" feel - Disabled on mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-10 left-10 text-momon-yellow opacity-30 transform -rotate-12">
          <Star size={60} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-20 text-white opacity-10 transform rotate-45">
          <Heart size={100} fill="currentColor" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white/5 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Manifesto Side */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white/30 mb-6">
              <Users size={20} className="text-momon-yellow" />
              <span className="font-brand text-sm tracking-widest uppercase text-white font-bold">Comunidad Oficial</span>
            </div>

            <h2 className="font-brand text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight drop-shadow-lg">
              NO ES SOLO TÉ, <br/>
              ES <span className="text-momon-yellow relative inline-block">
                PERTENECER
                <svg className="absolute -bottom-2 left-0 w-full h-2 md:h-3 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="font-sans text-lg md:text-2xl font-medium text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Únete a los soñadores que se atreven a romper el molde. 
              Acumula 'Chispas', desbloquea secretos y sé parte de un movimiento que celebra tu creatividad.
              <span className="block mt-4 font-bold text-momon-yellow">Algo grande te espera dentro.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={onJoinClick}
                className="group relative bg-momon-yellow text-momon-black px-8 py-4 md:px-10 md:py-5 rounded-full font-brand text-lg md:text-xl border-4 border-momon-black shadow-[6px_6px_0px_#231f20] hover:shadow-none hover:translate-y-[6px] transition-all flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">ÚNETE AL MOVIMIENTO</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Shine effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-white/30 skew-x-[-20deg] group-hover:animate-shine" />
              </button>
            </div>
          </div>

          {/* Visual Collage Side */}
          <div className="flex-1 relative w-full max-w-[300px] md:max-w-lg lg:max-w-xl order-1 lg:order-2">
            {/* Photo Collage Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3]">
              
              {/* Back Photo */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 transform rotate-6 transition-transform hover:rotate-3 duration-500 z-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-32 bg-yellow-200/80 rotate-90 z-20 shadow-sm"></div> {/* Tape */}
                <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 rounded-lg shadow-hard border-2 border-momon-black h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
                    alt="Amigos riendo" 
                    className="w-full h-full object-cover rounded border border-gray-200 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <p className="font-brand text-momon-black text-center mt-2 rotate-1 text-sm md:text-xl">#SomosTribu</p>
                </div>
              </div>

              {/* Front Photo */}
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 transform -rotate-3 transition-transform hover:-rotate-6 duration-500 z-20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-32 bg-red-200/80 rotate-90 z-30 shadow-sm"></div> {/* Tape */}
                <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 rounded-lg shadow-hard border-2 border-momon-black h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
                    alt="Comunidad Momon" 
                    className="w-full h-full object-cover rounded border border-gray-200"
                  />
                  <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                     <Heart className="text-momon-red fill-current animate-bounce" size={24} md:size={32} />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-momon-green text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="font-brand text-2xl md:text-3xl leading-none">100%</span>
                <span className="font-sans text-[10px] md:text-sm font-bold uppercase tracking-wider">Actitud</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
