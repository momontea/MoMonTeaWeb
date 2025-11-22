
import React from 'react';
import { MENU_PRODUCTS } from '../data/menuData';
import { Product } from '../types';

interface MenuHighlightsProps {
  onProductSelect?: (product: Product) => void;
}

const highlightIds = ['tt-1', 'ma-4', 'ta-3', 'mt-1']; // IDs from menuData

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onProductSelect }) => {
  // Find the actual product objects
  const highlightProducts = highlightIds.map(id => MENU_PRODUCTS.find(p => p.id === id)).filter(Boolean) as Product[];

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-5xl font-bold text-momon-black mb-4">
            Favoritos de la Estación
          </h2>
          <p className="text-momon-black/70 text-lg font-sans max-w-2xl mx-auto font-medium">
            Descubre los sabores que están enamorando a nuestra tribu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightProducts.map((product, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl overflow-hidden border-4 border-momon-black hover:shadow-hard transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2"
            >
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-momon-yellow border-b-4 border-momon-black">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute top-3 left-3 bg-momon-red text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-momon-black shadow-sm">
                  BEST SELLER
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1 bg-white relative">
                <div className="flex flex-col mb-3">
                  <h3 className="font-brand text-2xl text-momon-black leading-none mb-1">
                    {product.name}
                  </h3>
                  <span className="font-bold text-momon-red text-xl font-brand">S/{product.basePrice.toFixed(2)}</span>
                </div>
                <p className="font-sans text-gray-600 text-sm font-medium leading-relaxed flex-1 mb-6 line-clamp-3">
                  {product.description || "Una explosión de sabor única en Momon Tea."}
                </p>
                
                <button 
                  onClick={() => onProductSelect && onProductSelect(product)}
                  className="w-full py-3 rounded-xl font-bold text-base bg-momon-red text-white border-2 border-momon-black hover:bg-momon-black hover:text-momon-yellow transition-all shadow-hard-sm active:translate-y-[2px] active:shadow-none uppercase tracking-wider font-brand"
                >
                  ¡LO QUIERO!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
