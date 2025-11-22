
import React, { useState } from 'react';
import { Logo } from './Logo';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onUnlock: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onUnlock }) => {
  const [isPopping, setIsPopping] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleInteraction = () => {
    if (isPopping) return;
    
    setIsPopping(true);
    
    // Trigger exit after animation
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onUnlock, 800); // Wait for exit animation
    }, 800); // Increased slightly to let user see the smile
  };

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-momon-yellow flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}`}
      style={{ backgroundColor: '#ffe115' }}
    >
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
      
      {/* Floating Background Particles */}
      <div className={`absolute top-1/4 left-1/4 text-momon-black animate-bounce delay-700 transition-opacity duration-300 ${isPopping ? 'opacity-0' : 'opacity-100'}`}>
         <Sparkles size={40} />
      </div>
      <div className={`absolute bottom-1/4 right-1/4 text-momon-red animate-bounce delay-100 transition-opacity duration-300 ${isPopping ? 'opacity-0' : 'opacity-100'}`}>
         <Sparkles size={30} />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-4 text-center">
        
        {/* Header Text */}
        <h1 className={`font-brand text-4xl sm:text-5xl md:text-7xl text-momon-black mb-8 md:mb-12 transition-all duration-500 drop-shadow-[4px_4px_0px_#fff] text-stroke-white ${isPopping ? 'scale-110 opacity-0 translate-y-[-50px]' : 'animate-float'}`}>
          ¿LISTO PARA <br/>
          <span className="text-momon-red text-stroke-black">AVENTURAR?</span>
        </h1>

        {/* THE BUBBLE TRAP */}
        <div 
          className="relative group cursor-pointer my-4 perspective-1000" 
          onClick={handleInteraction}
        >
          {/* 
             AESTHETIC BUBBLE DESIGN 
          */}
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/60 bg-gradient-to-br from-white/40 via-white/20 to-transparent backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 ${isPopping ? 'scale-150 opacity-0 duration-300' : 'animate-float-delayed hover:scale-105 hover:border-white/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]'}`}>
            
            {/* Glossy Reflections (Soap Bubble Effect) */}
            <div className="absolute top-[15%] right-[15%] w-12 h-6 bg-white/80 rounded-full transform rotate-45 blur-[2px]"></div>
            <div className="absolute bottom-[15%] left-[15%] w-4 h-4 bg-white/60 rounded-full blur-[1px]"></div>
            {/* Iridescent ring hint */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-300/30 border-b-blue-300/30 rotate-45 pointer-events-none"></div>
            
            {/* The Trapped Logo - Vibrating Intermittently */}
            {/* MODIFIED ANIMATION: When popping, simply scale up and tilt slightly so we can see the smile */}
            <div className={`transform transition-all duration-500 relative ${isPopping ? 'scale-125 rotate-6' : 'animate-shake-intermittent'}`}>
              
              {/* Pass 'sad' mood if trapped, 'happy' if released */}
              <Logo 
                size="xl" 
                className="filter drop-shadow-2xl" 
                mood={isPopping ? 'happy' : 'sad'} 
              />
              
              {/* Speech Bubble - Only show when trapped */}
              {!isPopping && (
                <div className="absolute -top-8 -right-10 md:-right-12 bg-white text-momon-black font-brand text-sm md:text-lg px-4 py-2 rounded-xl border-2 border-momon-black shadow-hard animate-bounce z-20 whitespace-nowrap">
                  ¡LIBÉRAME!
                  <div className="absolute bottom-0 left-4 w-4 h-4 bg-white border-r-2 border-b-2 border-momon-black transform rotate-45 translate-y-2"></div>
                </div>
              )}
            </div>
          </div>
          
          {/* Pop Effect Particles */}
          {isPopping && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-full h-full border-4 border-white rounded-full animate-ping"></div>
                <div className="absolute w-3/4 h-3/4 bg-white/50 rounded-full animate-ping delay-100"></div>
             </div>
          )}
        </div>

        {/* Bottom Slogan - Magical & Stylized */}
        <div className={`mt-12 transition-all duration-500 ${isPopping ? 'opacity-0 translate-y-10' : 'opacity-100'}`}>
             <div className="relative inline-block">
                <Sparkles className="absolute -top-6 -left-8 text-white animate-pulse" size={24} />
                <Sparkles className="absolute -bottom-4 -right-8 text-momon-red animate-pulse delay-300" size={24} />
                
                <h2 className="font-brand text-3xl md:text-4xl uppercase tracking-widest drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-r from-momon-black via-momon-red to-momon-black animate-gradient-x">
                   ✨ Libera la Magia ✨
                </h2>
             </div>
             {/* Magical Underline */}
             <div className="h-1.5 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-momon-yellow via-white to-momon-yellow shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </div>

      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};
