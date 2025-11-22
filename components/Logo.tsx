import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  // Size mapping for the container
  const sizeClasses = {
    sm: 'w-10 h-12',
    md: 'w-14 h-16',
    lg: 'w-24 h-28',
    xl: 'w-40 h-48'
  };

  // Border width adjustment based on size
  const borderClass = size === 'sm' ? 'border-2' : size === 'md' ? 'border-[3px]' : 'border-4';

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
           {/* Iris */}
           <div className="w-[75%] h-[75%] bg-momon-green rounded-full absolute top-[10%] right-[5%]"></div>
           {/* Pupil */}
           <div className="w-[55%] h-[55%] bg-momon-black rounded-full absolute top-[20%] right-[10%]"></div>
           {/* Reflection */}
           <div className="w-[20%] h-[20%] bg-white rounded-full absolute top-[25%] right-[20%] z-10"></div>
        </div>

        {/* Smile */}
        <div className={`absolute bottom-[15%] right-[25%] w-[20%] h-[10%] border-b-${size === 'sm' ? '2' : '4'} border-momon-black rounded-full rotate-12`}></div>
      </div>
    </div>
  );
};