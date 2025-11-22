
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Flame, Heart, Layers, Ticket, Lock } from 'lucide-react';
import { Logo } from './Logo';

interface HeroSectionProps {
  onCtaClick: () => void;
  stock: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, stock }) => {
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              // Reset loop for demo
              hours = 12;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  // Progress bar calculation (Based on max 2. 2=85%, 1=40%, 0=0%)
  const progressWidth = stock === 2 ? '85%' : stock === 1 ? '40%' : '0%';

  return (
    <section className="relative bg-momon-green overflow-hidden border-b-4 border-momon-black min-h-[700px] flex items-center transition-all duration-300 pt-12 pb-28 md:py-16">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
      
      {/* Floating Background Icons */}
      <div className="hidden md:block absolute top-10 left-10 text-white/20 transform -rotate-12 animate-bounce duration-1000">
        <Sparkles size={60} />
      </div>
      <div className="hidden md:block absolute bottom-10 right-1/2 text-momon-yellow/30 transform rotate-45">
        <div className="w-32 h-32 rounded-full border-4 border-current border-dashed animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Text Content & COUPON (Dominant Side - 60%) */}
        <div className="w-full md:w-7/12 text-center md:text-left relative z-20 flex flex-col items-center md:items-start">
          
          {/* URGENCY COUNTDOWN */}
          <div className="flex flex-col items-center md:items-start mb-6 transform hover:scale-105 transition-transform duration-300 cursor-default">
            
            {/* Alert Badge */}
            <div className="bg-momon-red text-white px-4 py-1 font-brand font-bold text-sm uppercase tracking-widest rounded-t-xl border-2 border-b-0 border-momon-black flex items-center gap-2 animate-pulse ml-2">
              <Flame size={16} className="fill-yellow-300 text-yellow-300" />
              Oferta Relámpago
              <Flame size={16} className="fill-yellow-300 text-yellow-300" />
            </div>

            {/* Timer Box */}
            <div className="bg-white p-2 rounded-2xl border-4 border-momon-black shadow-[6px_6px_0px_#ec061e] flex items-center gap-1 sm:gap-2">
              
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="bg-momon-black text-momon-yellow font-brand text-2xl sm:text-4xl px-3 py-2 rounded-lg min-w-[60px] sm:min-w-[70px] text-center border-2 border-gray-800">
                  {formatTime(timeLeft.hours)}
                </div>
                <span className="text-[10px] font-bold text-momon-black uppercase mt-1">Hrs</span>
              </div>

              <span className="text-momon-black font-brand text-2xl sm:text-4xl animate-pulse pb-4">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="bg-momon-black text-momon-yellow font-brand text-2xl sm:text-4xl px-3 py-2 rounded-lg min-w-[60px] sm:min-w-[70px] text-center border-2 border-gray-800">
                  {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-[10px] font-bold text-momon-black uppercase mt-1">Min</span>
              </div>

              <span className="text-momon-black font-brand text-2xl sm:text-4xl animate-pulse pb-4">:</span>

              {/* Seconds (Red Alert) */}
              <div className="flex flex-col items-center">
                <div className="bg-momon-red text-white font-brand text-2xl sm:text-4xl px-3 py-2 rounded-lg min-w-[60px] sm:min-w-[70px] text-center border-2 border-momon-black shadow-inner">
                  {formatTime(timeLeft.seconds)}
                </div>
                <span className="text-[10px] font-bold text-momon-red uppercase mt-1">Seg</span>
              </div>

            </div>
          </div>
          
          <h1 className="font-brand text-5xl sm:text-6xl md:text-8xl text-white leading-[0.9] mb-8 drop-shadow-[3px_3px_0px_#231f20] md:drop-shadow-[4px_4px_0px_#231f20] text-stroke-black text-center md:text-left">
            MARTES <br/>
            <span className="text-momon-yellow text-stroke-black">DE RITUAL</span>
          </h1>
          
          {/* === BRANDED PACK PROMO COUPON (Larger & Eye-Catching) === */}
          <div className={`relative mt-4 mb-16 group inline-block select-none w-full max-w-[420px] md:max-w-[500px] ${stock > 0 ? 'cursor-pointer animate-float' : 'grayscale opacity-90'}`}>
            
            {/* Shadow Layers for Depth */}
            <div className="absolute top-3 left-3 w-full h-full bg-momon-black rounded-xl border-2 border-white z-0 transform rotate-1"></div>
            
            {/* Main Card - Brand Yellow */}
            <div className="relative bg-momon-yellow w-full rounded-xl border-4 border-momon-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)] z-20 overflow-visible text-left p-6 md:p-8">
               
               {/* Aesthetic Tape */}
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/40 backdrop-blur-sm transform -rotate-1 z-30 border-l-2 border-r-2 border-white/20 shadow-sm"></div>

               {/* Internal Dashed Border (Ticket Feel) */}
               <div className="absolute inset-3 border-2 border-dashed border-momon-black/30 rounded-lg pointer-events-none"></div>

               {/* Header */}
               <div className="flex justify-between items-center mb-6 relative z-10">
                  <div className="flex items-center gap-2 bg-momon-black px-4 py-1.5 rounded-full transform -rotate-1">
                     <Layers className="text-momon-yellow" size={20} />
                     <h3 className="font-brand text-xl text-white tracking-wider">PACK X5</h3>
                  </div>
                  <div className="text-momon-red font-brand text-sm border-2 border-momon-red px-3 py-1 rounded transform rotate-2 bg-white/50">
                     {stock > 0 ? 'VÁLIDO HOY' : 'AGOTADO'}
                  </div>
               </div>

               {/* Body Content */}
               <div className="flex gap-5 mb-6 items-center relative z-10">
                  {/* Left Box */}
                  <div className="border-4 border-momon-black bg-white rounded-xl p-2 flex flex-col items-center justify-center w-24 h-24 shrink-0 shadow-hard-sm transform rotate-1">
                     <Ticket size={28} className="text-momon-black mb-0.5" />
                     <span className="font-brand text-4xl text-momon-black leading-none">5</span>
                     <span className="text-[9px] font-bold text-momon-black uppercase">Tickets</span>
                  </div>

                  {/* Right Text */}
                  <div className="flex-1">
                     <p className="font-brand text-xl md:text-2xl text-momon-black leading-none mb-1">5 CUPONES DE</p>
                     <div className="flex items-baseline gap-2 mb-1">
                       <span className="font-brand text-5xl md:text-6xl text-momon-red leading-none drop-shadow-sm text-stroke-white">50%</span>
                       <span className="font-brand text-3xl md:text-4xl text-momon-red leading-none drop-shadow-sm text-stroke-white">OFF</span>
                     </div>
                     <div className="bg-momon-black text-white text-[11px] font-bold px-2 py-0.5 inline-block rounded-sm mb-1">
                        EN TODA LA CARTA
                     </div>
                     <p className="font-sans text-xs font-bold text-momon-black/80 italic">¡Canjéalos cuando quieras!</p>
                  </div>
               </div>

               {/* Price Box Area */}
               <div className="bg-white/50 rounded-lg p-4 border-2 border-momon-black relative z-10">
                  <div className="flex justify-between text-xs font-bold text-momon-black/60 mb-2">
                     <span className="line-through decoration-momon-red font-sans">Valor Real: S/100.00</span>
                     {stock > 0 ? (
                        <span className="text-momon-red flex items-center gap-1 animate-pulse">
                           <Flame size={14} fill="currentColor" /> ¡QUEDAN {stock}!
                        </span>
                     ) : (
                        <span className="text-gray-500 flex items-center gap-1">
                           <Lock size={14} /> AGOTADO
                        </span>
                     )}
                  </div>
                  
                  <div className="flex items-end justify-between gap-2 mb-3">
                     <span className="text-sm font-bold text-momon-black mb-1">PRECIO PACK:</span>
                     <span className="font-brand text-5xl text-momon-black leading-none tracking-tight">S/10.00</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-4 bg-white rounded-full overflow-hidden border-2 border-momon-black">
                     <div 
                        className={`h-full relative transition-all duration-700 ${stock === 0 ? 'bg-gray-300' : 'bg-momon-red'}`} 
                        style={{ width: progressWidth }}
                     >
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
                     </div>
                  </div>
               </div>

               {/* Social Proof Bubble (Corner, White, Bordered) */}
               <div className="absolute -bottom-6 -right-4 z-30 animate-bounce">
                  <div className="bg-white text-momon-black px-4 py-2 rounded-full border-4 border-momon-black shadow-hard flex items-center gap-3 whitespace-nowrap">
                     <div className="flex -space-x-3">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                     </div>
                     <span className="text-xs font-bold">
                       {stock === 0 ? '10 soñadores compraron todo' : '8 soñadores ya tienen su pack'}
                     </span>
                  </div>
               </div>

            </div>
          </div>

          <div className="flex justify-center md:justify-start w-full">
            <button 
              onClick={onCtaClick}
              disabled={stock === 0}
              className={`group relative px-8 py-4 md:px-10 md:py-5 rounded-full font-brand text-xl md:text-2xl border-4 border-momon-black shadow-[4px_4px_0px_#231f20] md:shadow-[6px_6px_0px_#231f20] flex items-center gap-3 w-full md:w-auto justify-center transition-all ${
                stock === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none translate-y-[4px]'
                  : 'bg-white text-momon-black hover:shadow-none hover:translate-y-[4px] active:scale-95'
              }`}
            >
              {stock === 0 ? 'OFERTA AGOTADA' : 'QUIERO MI PACK X5'}
              {stock > 0 && <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Visual Content - Emotional Image (Smaller Side - 40%) */}
        <div className="w-full md:w-5/12 relative hidden md:flex justify-center md:justify-end">
           <div className="relative w-[260px] lg:w-[320px]">
              {/* Giant Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] pb-[120%] bg-momon-yellow rounded-full border-4 border-momon-black shadow-hard opacity-90"></div>
              
              {/* Main Lifestyle Image */}
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                {/* Emotional/lifestyle image */}
                <img 
                  src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=800" 
                  alt="Felicidad Líquida" 
                  className={`w-full h-auto rounded-3xl border-4 border-momon-black shadow-2xl ${stock === 0 ? 'grayscale' : ''}`}
                />
                
                {/* Mascot / Logo Sticker */}
                <div className="absolute -bottom-6 -left-6 w-28 h-28 transform -rotate-12 hover:scale-110 transition-transform cursor-pointer filter drop-shadow-lg animate-wiggle">
                  <Logo size="xl" className="w-full h-full" />
                  <div className="absolute -top-4 -right-4 bg-white text-momon-black font-brand text-xs px-2 py-1 rounded-lg border-2 border-momon-black whitespace-nowrap">
                    ¡Soy Momon!
                  </div>
                </div>

                {/* Price/Discount Sticker */}
                {stock > 0 && (
                  <div className="absolute -top-4 -right-4 bg-momon-red text-white w-20 h-20 rounded-full flex items-center justify-center border-4 border-momon-black shadow-hard animate-bounce cursor-pointer hover:scale-110 transition-transform group-hover:rotate-12">
                    <div className="text-center leading-none">
                      <Heart size={18} className="fill-white mx-auto mb-1" />
                      <span className="block font-sans text-[10px] font-bold">SOLO HOY</span>
                    </div>
                  </div>
                )}
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
