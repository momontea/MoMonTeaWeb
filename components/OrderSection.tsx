
import React, { useState } from 'react';
import { FAMILIES, MENU_PRODUCTS } from '../data/menuData';
import { Product } from '../types';

interface OrderSectionProps {
  onProductSelect: (product: Product) => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onProductSelect }) => {
  const [selectedFamily, setSelectedFamily] = useState(FAMILIES[0]);

  const filteredProducts = MENU_PRODUCTS.filter(p => p.family === selectedFamily);

  return (
    <div id="menu" className="bg-white py-16 container mx-auto px-4 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-brand text-4xl md:text-5xl font-bold text-momon-black mb-4">
          Nuestro Menú
        </h2>
        <p className="text-momon-black/80 text-lg font-sans max-w-2xl mx-auto font-medium">
          Elige tu familia favorita y personaliza tu bebida al máximo.
        </p>
      </div>

      {/* Categories / Families */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {FAMILIES.map(family => (
          <button
            key={family}
            onClick={() => setSelectedFamily(family)}
            className={`px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all font-brand tracking-wide border-2 ${
              selectedFamily === family
                ? 'bg-momon-black text-momon-yellow border-momon-black shadow-hard'
                : 'bg-white text-momon-black border-momon-black hover:bg-momon-yellow hover:shadow-hard-sm'
            }`}
          >
            {family}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="group bg-white rounded-3xl border-2 border-momon-black overflow-hidden hover:shadow-hard transition-all cursor-pointer flex flex-col"
            onClick={() => onProductSelect(product)}
          >
            <div className="relative h-64 overflow-hidden bg-momon-offwhite border-b-2 border-momon-black">
               {/* Placeholder visual if img fails */}
               <div className="absolute inset-0 flex items-center justify-center text-momon-black/10 font-brand text-4xl">
                  Momon
               </div>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-float"
              />
              <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-hard-sm border-2 border-momon-black text-momon-black group-hover:bg-momon-red group-hover:text-white group-hover:border-momon-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-brand text-xl text-momon-black leading-tight">{product.name}</h3>
                <span className="font-bold text-white bg-momon-green px-2 py-1 rounded-lg text-sm whitespace-nowrap border-2 border-momon-black shadow-sm transform -rotate-2">S/{product.basePrice.toFixed(2)}</span>
              </div>
              <p className="text-momon-black/70 text-sm line-clamp-2 mb-4 font-sans flex-1 font-medium">
                {product.description}
              </p>
              <button className="w-full py-2 border-2 border-momon-black rounded-xl font-bold text-momon-black hover:bg-momon-yellow transition-colors text-sm uppercase tracking-widest">
                Personalizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
