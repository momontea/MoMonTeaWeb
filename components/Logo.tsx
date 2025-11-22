
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  imageUrl?: string;
  mood?: 'happy' | 'sad'; // New prop to control expression
}

// ID extraído de tu enlace: https://drive.google.com/file/d/1hIyXOwMMB8_-Jb-F2kNSxkiHBP46RvF7/view?usp=sharing
const DRIVE_IMAGE_ID = '1hIyXOwMMB8_-Jb-F2kNSxkiHBP46RvF7';
const DEFAULT_LOGO_URL = `https://drive.google.com/uc?export=view&id=${DRIVE_IMAGE_ID}`;

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', imageUrl = DEFAULT_LOGO_URL, mood = 'happy' }) => {
  const [imgError, setImgError] = useState(false);

  // Size mapping for the container
  const sizeClasses = {
    sm: 'w-10 h-12',
    md: 'w-14 h-16',
    lg: 'w-24 h-28',
    xl: 'w-40 h-48'
  };

  // Intentamos mostrar la imagen primero. Si falla (onError), cambiamos el estado para mostrar el CSS.
  if (imageUrl && !imgError) {
    return (
      <div className={`relative inline-block ${className} transition-transform duration-300`}>
        <img 
          src={imageUrl} 
          alt="Momon Tea Logo" 
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          className={`object-contain ${sizeClasses[size]} drop-shadow-md`}
        />
        {/* Visual cue for 'sad' mood on image: A sweat drop */}
        {mood === 'sad' && (
          <div className="absolute top-0 right-0 text-xl animate-bounce opacity-90 drop-shadow-md" style={{ animationDuration: '1s' }}>
            💧
          </div>
        )}
      </div>
    );
  }

  // === FALLBACK: LOGO DIBUJADO CON CSS ===
  // Explicit mapping for border classes to avoid dynamic interpolation issues in Tailwind
  const borderClasses = {
    sm: 'border-2',
    md: 'border-[3px]',
    lg: 'border-4',
    xl: 'border-4'
  };

  const smileBorderClasses = {
    sm: 'border-b-2',
    md: 'border-b-4',
    lg: 'border-b-4',
    xl: 'border-b-8'
  };

  const borderClass = borderClasses[size];
  
  // Mood Logic for CSS Logo
  const mouthClass = mood === 'happy'
    ? `${smileBorderClasses[size]} border-momon-black rounded-full rotate-12`
    : `${borderClass} border-t-4 border-transparent border-t-momon-black rounded-full rotate-12 mt-2 w-[15%] h-[8%]`; // Frown

  return (
    <div className={`relative flex flex-col items-center ${sizeClasses[size]} ${className}`}>
      
      {/* Leaf/Straw Detail */}
      <div className={`absolute -top-[15%] w-[40%] h-[15%] bg-momon-green rounded-full ${borderClass} border-momon-black rotate-6 z-0`}></div>

      {/* Lid */}
      <div className={`absolute top-0 w-[110%] h-[15%] bg-momon-yellow rounded-t-full ${borderClass} border-momon-black z-20`}></div>

      {/* Cup Body */}
      <div className={`w-full h-full bg-momon-red rounded-b-[30%] rounded-t-sm relative flex items-center justify-center ${borderClass} border-momon-black z-10 shadow-[2px_2px_0px_rgba(35,31,32,0.2)] overflow-hidden`}>
        
        {/* Eye Container */}
        <div className={`w-[65%] h-[65%] bg-white rounded-full ${borderClass} border-momon-black flex items-center justify-center relative overflow-hidden -mt-2 -ml-1`}>
           {/* Iris - Shifted if sad */}
           <div className={`w-[75%] h-[75%] bg-momon-green rounded-full absolute ${mood === 'sad' ? 'top-[15%] right-[10%]' : 'top-[10%] right-[5%]'} transition-all`}></div>
           {/* Pupil */}
           <div className={`w-[55%] h-[55%] bg-momon-black rounded-full absolute ${mood === 'sad' ? 'top-[25%] right-[15%] scale-90' : 'top-[20%] right-[10%]'} transition-all`}></div>
           {/* Reflection */}
           <div className="w-[20%] h-[20%] bg-white rounded-full absolute top-[25%] right-[20%] z-10"></div>
        </div>

        {/* Mouth Expression */}
        {mood === 'happy' ? (
          <div className={`absolute bottom-[15%] right-[25%] w-[20%] h-[10%] ${mouthClass}`}></div>
        ) : (
          <div className={`absolute bottom-[15%] right-[25%] ${mouthClass}`}></div>
        )}
        
        {/* Sweat Drop for CSS version */}
        {mood === 'sad' && (
          <div className="absolute top-[20%] left-[10%] text-blue-300 text-xs animate-pulse">
             💧
          </div>
        )}

      </div>
    </div>
  );
};
