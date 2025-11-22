
import React from 'react';
import { Star, Instagram } from 'lucide-react';

export const SocialReviews: React.FC = () => {
  const reviews = [
    { name: 'Andrea P.', text: '¡El mejor Bubble Tea de Lima! El Mango Ojo Loco es una locura.', stars: 5, color: 'bg-blue-100' },
    { name: 'Carlos M.', text: 'Amo que escriban mensajes en los vasos. Me hicieron el día.', stars: 5, color: 'bg-green-100' },
    { name: 'Valeria S.', text: 'El lugar tiene una vibra increíble. Perfecto para trabajar un rato.', stars: 4, color: 'bg-pink-100' },
    { name: 'Juan D.', text: 'La atención es 10/10. Momon siempre me recomienda lo mejor.', stars: 5, color: 'bg-yellow-100' },
  ];

  return (
    <section className="py-16 bg-white border-b-4 border-momon-black overflow-hidden">
       <div className="container mx-auto px-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full border border-gray-300 mb-4">
             <Instagram size={16} className="text-pink-600" />
             <span className="text-xs font-bold uppercase tracking-widest text-gray-600">@momontea.pe</span>
          </div>
          <h2 className="font-brand text-4xl md:text-5xl text-momon-black">La Tribu Habla</h2>
       </div>
       
       {/* Horizontal Scroll Container */}
       <div className="flex overflow-x-auto gap-6 px-4 pb-8 hide-scrollbar snap-x">
          {reviews.map((review, idx) => (
             <div key={idx} className={`min-w-[300px] md:min-w-[350px] p-6 rounded-3xl border-2 border-momon-black shadow-hard-sm snap-center ${review.color} transform hover:-rotate-1 transition-transform cursor-pointer`}>
                <div className="flex gap-1 mb-3 text-momon-yellow drop-shadow-sm">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill={i < review.stars ? "currentColor" : "none"} stroke={i < review.stars ? "none" : "currentColor"} className="stroke-momon-black" />
                   ))}
                </div>
                <p className="font-sans font-medium text-gray-800 mb-4 text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-momon-black flex items-center justify-center font-brand font-bold text-momon-black">
                      {review.name.charAt(0)}
                   </div>
                   <span className="font-brand text-momon-black">{review.name}</span>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
};
