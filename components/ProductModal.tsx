
import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Product, OrderOptions } from '../types';
import { MENU_PRODUCTS, BASES, EXTRAS } from '../data/menuData';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, options: OrderOptions, price: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [options, setOptions] = useState<OrderOptions>({
    base: 'Estoy bien (Base del té)',
    size: 'Emoción',
    temperature: 'Con hielo',
    sweetness: 'Normal',
    straw: true,
    extras: []
  });

  const [price, setPrice] = useState(product.basePrice);

  useEffect(() => {
    let newPrice = product.basePrice;
    // Size adjustments
    if (options.size === 'Ánimo') newPrice += 3;
    if (options.size === 'Inspiración') newPrice += 5;
    // Extras adjustments
    newPrice += (options.extras.length * 2);
    
    setPrice(newPrice);
  }, [options, product.basePrice]);

  const handleExtraChange = (extra: string) => {
    if (options.extras.includes(extra)) {
      setOptions({ ...options, extras: options.extras.filter(e => e !== extra) });
    } else {
      if (options.extras.length < 2) {
        setOptions({ ...options, extras: [...options.extras, extra] });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4 bg-momon-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Content - Bottom sheet on mobile, centered card on desktop */}
      <div className="bg-white w-full max-w-2xl h-[90vh] md:max-h-[90vh] rounded-t-3xl md:rounded-3xl overflow-hidden shadow-hard flex flex-col border-t-4 md:border-4 border-momon-black">
        
        {/* Header Image */}
        <div className="relative h-40 md:h-48 bg-momon-yellow shrink-0 border-b-4 border-momon-black">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-90" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-momon-red hover:text-white transition-colors shadow-hard-sm border-2 border-momon-black z-10">
            <X size={24} />
          </button>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-momon-black/80 to-transparent p-4 md:p-6">
            <h2 className="font-brand text-2xl md:text-3xl text-white drop-shadow-md leading-none">{product.name}</h2>
            <p className="text-white font-sans text-xs md:text-sm font-medium mt-1 line-clamp-1">{product.description}</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-4 md:p-6 space-y-6 md:space-y-8 font-sans pb-24 md:pb-6">
          
          {/* 1. Diversión (Base) */}
          <section>
            <h3 className="font-brand text-lg md:text-xl text-momon-black mb-3 flex items-center gap-2">
              1. Diversión <span className="text-xs md:text-sm font-sans font-bold text-momon-black/50">(Elige una)</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BASES.map(base => (
                <button
                  key={base}
                  onClick={() => setOptions({ ...options, base })}
                  className={`p-3 rounded-xl border-2 text-xs md:text-sm font-bold transition-all shadow-sm min-h-[50px] flex items-center justify-center text-center ${
                    options.base === base 
                      ? 'border-momon-black bg-momon-yellow text-momon-black shadow-hard-sm' 
                      : 'border-gray-200 text-gray-600 hover:border-momon-black hover:text-momon-black'
                  }`}
                >
                  {base}
                </button>
              ))}
            </div>
          </section>

          {/* 2. Tamaño */}
          <section>
            <h3 className="font-brand text-lg md:text-xl text-momon-black mb-3">2. Tamaño</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[{label: 'Emoción', vol: '420ml', price: ''}, {label: 'Ánimo', vol: '660ml', price: '+S/3'}, {label: 'Inspiración', vol: '1000ml', price: '+S/5'}].map((item) => (
                 <button 
                 key={item.label}
                 onClick={() => setOptions({ ...options, size: item.label as any })}
                 className={`flex-1 p-3 md:p-4 rounded-xl border-2 flex flex-col items-center gap-1 transition-all ${
                   options.size === item.label 
                     ? 'border-momon-black bg-momon-green text-white shadow-hard-sm' 
                     : 'border-gray-200 text-gray-500 hover:border-momon-black hover:text-momon-black'
                 }`}
               >
                 <span className="font-brand text-base md:text-lg">{item.label}</span>
                 <span className="text-[10px] md:text-xs font-medium">{item.vol} {item.price}</span>
               </button>
              ))}
            </div>
          </section>

          {/* 3. Temp & Dulzura */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             <section>
                <h3 className="font-brand text-lg md:text-xl text-momon-black mb-3">3. Temperatura</h3>
                <div className="flex flex-wrap gap-2">
                  {['Con hielo', 'Poco hielo', 'Sin hielo', 'Tibio'].map(temp => (
                     <button
                     key={temp}
                     onClick={() => setOptions({ ...options, temperature: temp as any })}
                     className={`px-3 py-2 md:px-4 md:py-3 rounded-lg border-2 text-xs md:text-sm font-bold transition-all flex-1 md:flex-none justify-center text-center ${
                       options.temperature === temp 
                         ? 'bg-momon-black text-white border-momon-black shadow-hard-sm' 
                         : 'bg-white text-gray-600 border-gray-200 hover:border-momon-black hover:text-momon-black'
                     }`}
                   >
                     {temp}
                   </button>
                  ))}
                </div>
             </section>

             <section>
                <h3 className="font-brand text-lg md:text-xl text-momon-black mb-3">4. Dulzura</h3>
                 <div className="flex flex-wrap gap-2">
                  {['Normal', 'Dulcero', 'Bajo azúcar', 'FIT (sin azúcar)', 'Stevia'].map(sweet => (
                     <button
                     key={sweet}
                     onClick={() => setOptions({ ...options, sweetness: sweet as any })}
                     className={`px-3 py-2 rounded-lg border-2 text-xs md:text-sm font-bold transition-all flex-1 md:flex-none justify-center text-center ${
                       options.sweetness === sweet 
                         ? 'bg-momon-black text-white border-momon-black shadow-hard-sm' 
                         : 'bg-white text-gray-600 border-gray-200 hover:border-momon-black hover:text-momon-black'
                     }`}
                   >
                     {sweet}
                   </button>
                  ))}
                </div>
             </section>
          </div>

          {/* 5. Sorbete */}
          <section>
            <h3 className="font-brand text-lg md:text-xl text-momon-black mb-3">5. ¿Sorbete?</h3>
             <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer group p-2 bg-gray-50 rounded-lg border border-gray-200 w-full md:w-auto">
                  <div className={`w-6 h-6 rounded-full border-2 border-momon-black flex items-center justify-center shrink-0 ${options.straw ? 'bg-momon-green' : 'bg-white'}`}>
                    {options.straw && <Check size={14} className="text-white" />}
                  </div>
                  <input 
                    type="radio" 
                    checked={options.straw === true} 
                    onChange={() => setOptions({...options, straw: true})}
                    className="hidden"
                  />
                  <span className="font-bold text-sm md:text-base text-momon-black group-hover:text-momon-green">Sí, por favor</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group p-2 bg-gray-50 rounded-lg border border-gray-200 w-full md:w-auto">
                  <div className={`w-6 h-6 rounded-full border-2 border-momon-black flex items-center justify-center shrink-0 ${!options.straw ? 'bg-momon-red' : 'bg-white'}`}>
                    {!options.straw && <X size={14} className="text-white" />}
                  </div>
                  <input 
                    type="radio" 
                    checked={options.straw === false} 
                    onChange={() => setOptions({...options, straw: false})}
                    className="hidden"
                  />
                  <span className="font-bold text-sm md:text-base text-momon-black group-hover:text-momon-red">No gracias</span>
                </label>
             </div>
          </section>

          {/* 6. Más Diversión (Extras) */}
           <section>
            <h3 className="font-brand text-lg md:text-xl text-momon-black mb-3 flex items-center gap-2">
              6. Más Diversión <span className="text-xs md:text-sm font-sans font-bold text-momon-black/50">(+S/2 c/u, Máx 2)</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {EXTRAS.map(extra => (
                <button
                  key={extra}
                  onClick={() => handleExtraChange(extra)}
                  disabled={!options.extras.includes(extra) && options.extras.length >= 2}
                  className={`p-3 rounded-xl border-2 text-xs md:text-sm font-bold transition-all flex justify-between items-center min-h-[50px] ${
                    options.extras.includes(extra)
                      ? 'border-momon-black bg-momon-red text-white shadow-hard-sm' 
                      : 'border-gray-200 text-gray-600 hover:border-momon-black hover:text-momon-black disabled:opacity-50 disabled:cursor-not-allowed'
                  }`}
                >
                  {extra}
                  {options.extras.includes(extra) && <Check size={16} className="text-white" />}
                </button>
              ))}
            </div>
          </section>

        </div>

        {/* Footer / Add Action */}
        <div className="p-4 md:p-6 border-t-2 border-momon-black bg-momon-offwhite shrink-0 flex justify-between items-center sticky bottom-0 z-20 safe-pb-4">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-momon-black font-bold uppercase tracking-wider">Total a pagar</span>
            <span className="font-brand text-2xl md:text-3xl text-momon-black">S/{price.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => onAddToCart(product, options, price)}
            className="bg-momon-red text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg border-2 border-momon-black hover:bg-momon-black hover:text-momon-yellow transition-all shadow-hard active:translate-y-[2px] active:shadow-none"
          >
            Agregar <span className="hidden md:inline">al Carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};
