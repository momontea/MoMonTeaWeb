
import React from 'react';
import { PromoContent } from '../types';

interface PromoBlockProps {
  content: PromoContent;
  onButtonClick?: () => void;
}

export const PromoBlock: React.FC<PromoBlockProps> = ({ content, onButtonClick }) => {
  const { title, description, buttonText, imageUrl, backgroundColor, textColor, imagePosition } = content;

  // Standard split screen order
  const textOrder = imagePosition === 'left' ? 'order-2 md:order-2' : 'order-2 md:order-1';
  const imageOrder = imagePosition === 'left' ? 'order-1 md:order-1' : 'order-1 md:order-2';

  return (
    <section className={`flex flex-col md:flex-row w-full ${backgroundColor} shadow-sm overflow-hidden`}>
      
      {/* Image Side - Takes full 50% width, cover fit */}
      <div className={`w-full md:w-1/2 h-[300px] md:h-[500px] ${imageOrder} relative`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Side - Takes full 50% width, centered content */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-16 ${textOrder} ${textColor}`}>
        
        <h2 className="font-brand text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="font-sans text-lg md:text-xl mb-8 font-medium max-w-md leading-relaxed opacity-90">
          {description}
        </p>
        <button 
          onClick={onButtonClick}
          className={`px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-md text-sm uppercase tracking-wider border-2
          ${textColor.includes('white') 
            ? 'border-white text-white hover:bg-white hover:text-momon-black' 
            : 'border-momon-black text-momon-black hover:bg-momon-black hover:text-white'
          }`}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};
