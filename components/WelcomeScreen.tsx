
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Sparkles, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onUnlock: () => void;
}

const UNIVERSE_MESSAGES = [
  "¡Hoy romperás las reglas! ⚡",
  "Tu creatividad está on fire 🔥",
  "El universo te sonríe hoy ✨",
  "Sigue a tu conejo blanco 🐰",
  "Crea, sueña, vive 🌈",
  "Dopamina activada 🍬",
  "Hoy es un buen día para soñar ☁️"
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onUnlock }) => {
  const [isPopping, setIsPopping] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [message, setMessage] = useState("");
  const [particles, setParticles] = useState<{id: number, x: number, y: number, color: string, rotation: number}[]>([]);

  // Generate particles on mount but show them on click
  const generateParticles = () => {
    const colors = ['#ec061e', '#ffe115', '#3a935e', '#231f20', '#ffffff'];
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: (Math.random() - 0.5) * 800, // Spread X
        y: (Math.random() - 0.5) * 800, // Spread Y
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360
      });
    }
    setParticles(newParticles);
  };

  useEffect(() => {
    generateParticles();
  }, []);

  const handleInteraction = () => {
    if (isPopping) return;
    
    const randomMsg = UNIVERSE_MESSAGES[Math.floor(Math.random() * UNIVERSE_MESSAGES.length)];
    setMessage(randomMsg);
    setIsPopping(true);
    
    // Trigger exit after animation
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onUnlock, 800); // Wait for exit animation
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 z-[200] bg-momon-yellow flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${isExiting ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      {/* High Energy Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
      
      {/* Radiating Rings Background (Concentrating energy) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPopping ? 'opacity-0' : 'opacity-100'}`}>
         <div className="w-[500px] h-[500px] border-4 border-momon-black/10 rounded-full animate-ping absolute"></div>
         <div className="w-[300px] h-[300px] border-4 border-momon-black/20 rounded-full animate-ping delay-75 absolute"></div>
      </div>

      {/* Burst Background (On Click) */}
      <div className={`absolute inset-0 bg-momon-red transition-transform duration-300 origin-center ${isPopping ? 'scale-[5]' : 'scale-0'} rounded-full`}></div>

      <div className="relative z-10 flex flex-col items-center w-full px-4">
        
        {/* Floating Elements - Increased Chaos */}
        <div className={`absolute top-[-150px] left-10 text-momon-black transform -rotate-12 transition-all duration-500 ${isPopping ? 'translate-y-[800px] rotate-[180deg] scale-150 opacity-0' : 'animate-bounce'}`}>
          <Sparkles size={100} strokeWidth={1} />
        </div>
        <div className={`absolute bottom-[-150px] right-10 text-momon-red transform rotate-12 transition-all duration-500 ${isPopping ? '-translate-y-[800px] rotate-[-180deg] scale-150 opacity-0' : 'animate-bounce delay-100'}`}>
          <Zap size={80} strokeWidth={3} fill="currentColor" />
        </div>

        {/* Header Text */}
        <h1 className={`font-brand text-5xl md:text-7xl text-momon-black mb-12 text-center transition-all duration-300 drop-shadow-[4px_4px_0px_#fff] text-stroke-white ${isPopping ? 'scale-150 opacity-0' : 'animate-bounce'}`}>
          ¿LISTO PARA <br/>
          <span className="text-momon-red text-stroke-black">SOÑAR?</span>
        </h1>

        {/* The Interaction Trigger */}
        <div className="relative group cursor-pointer perspective-1000" onClick={handleInteraction}>
          
          {/* Particles Explosion */}
          {isPopping && particles.map((p) => (
            <div 
              key={p.id}
              className="absolute top-1/2 left-1/2 w-4 h-4 rounded-sm md:w-6 md:h-6"
              style={{
                backgroundColor: p.color,
                transform: `translate(-50%, -50%) translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out',
                opacity: 0
              }}
            ></div>
          ))}

          {/* Main Object - Shake on Hover */}
          <div className={`relative transition-all duration-100 transform ${isPopping ? 'scale-0 rotate-[720deg]' : 'group-hover:scale-110 group-hover:rotate-3 group-active:scale-95'}`}>
            
            {/* Intense Shake Animation Container */}
            <div className={`${!isPopping ? 'group-hover:animate-[shake_0.3s_ease-in-out_infinite]' : ''}`}>
               <Logo size="xl" className={`filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] transition-all ${isPopping ? 'brightness-200' : ''}`} />
            </div>

            {/* "Touch Me" Sticker */}
            {!isPopping && (
              <div className="absolute -top-10 -right-16 bg-white border-4 border-momon-black text-momon-black px-4 py-2 rounded-full font-brand transform rotate-12 animate-pulse shadow-hard-sm whitespace-nowrap">
                ¡Libérame! ✨
              </div>
            )}
          </div>

          {/* Text Feedback (Reward Message) */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-brand text-4xl md:text-5xl text-white text-stroke-black text-center w-[200%] pointer-events-none transition-all duration-300 ${isPopping ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            {message}
          </div>

        </div>

        {/* Instruction */}
        <p className={`mt-12 font-sans text-xl font-bold text-momon-black/70 uppercase tracking-widest transition-opacity duration-300 ${isPopping ? 'opacity-0' : 'opacity-100'}`}>
          Haz click para liberar la magia
        </p>

      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
};
