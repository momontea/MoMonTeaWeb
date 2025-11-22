
import React, { useState } from 'react';
import { X, Trash2, MapPin, ShoppingBag, Truck, Store, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const [deliveryMode, setDeliveryMode] = useState<'pickup' | 'delivery'>('pickup');
  const [address, setAddress] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const total = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In a real app, use Google Maps API to reverse geocode
        setAddress(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude} (Ubicación actual)`);
        setIsLocating(false);
      },
      (error) => {
        console.error(error);
        alert("No se pudo obtener tu ubicación.");
        setIsLocating(false);
      }
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-momon-black/60 z-[70] backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[80] shadow-hard transform transition-transform duration-300 flex flex-col border-l-4 border-momon-black ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 bg-momon-yellow flex justify-between items-center border-b-4 border-momon-black">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-momon-black" size={28} />
            <h2 className="font-brand text-3xl text-momon-black">Tu Pedido</h2>
            <span className="bg-momon-black text-white text-sm font-bold px-3 py-1 rounded-full border-2 border-white shadow-sm">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button onClick={onClose} className="p-2 bg-white text-momon-black hover:bg-momon-red hover:text-white rounded-full transition-colors border-2 border-momon-black shadow-hard-sm">
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-momon-black/40 gap-4">
              <ShoppingBag size={80} strokeWidth={1.5} />
              <p className="font-brand text-2xl">Tu carrito está vacío</p>
              <p className="font-sans text-sm font-medium">¡Agrega algo delicioso!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-2xl shadow-hard-sm border-2 border-momon-black flex flex-col gap-3">
                <div className="flex justify-between items-start">
                   <div className="flex-1">
                     <h4 className="font-brand text-xl text-momon-black leading-none mb-1">{item.product.name}</h4>
                     <p className="text-momon-green font-bold text-lg">
                        S/{item.totalPrice.toFixed(2)} <span className="text-xs text-gray-400 font-normal">({item.quantity} x S/{item.unitPrice.toFixed(2)})</span>
                     </p>
                   </div>
                   
                   {/* Quantity Controls */}
                   <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1 border border-gray-200">
                      <button 
                        onClick={() => item.quantity > 1 ? onUpdateQuantity(item.id, -1) : onRemoveItem(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded border border-gray-300 text-momon-black hover:text-momon-red hover:border-momon-red transition-colors"
                      >
                        {item.quantity === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                      </button>
                      <span className="font-brand text-lg w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-momon-black text-white rounded border border-momon-black hover:bg-momon-green hover:border-momon-green transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                   </div>
                </div>
                
                {/* Details */}
                <div className="text-xs text-momon-black/70 font-sans space-y-1 bg-momon-offwhite p-3 rounded-lg border border-gray-200">
                  <div className="flex gap-2">
                     <span className="font-bold text-momon-black">Tamaño:</span> {item.options.size}
                  </div>
                  <div className="flex gap-2">
                     <span className="font-bold text-momon-black">Base:</span> {item.options.base}
                  </div>
                  <div className="flex gap-2">
                     <span className="font-bold text-momon-black">Config:</span> {item.options.temperature}, {item.options.sweetness}
                  </div>
                  {item.options.extras.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-bold text-momon-black">Extras:</span> {item.options.extras.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        <div className="p-6 bg-white border-t-4 border-momon-black">
          
          {/* Toggle Delivery/Pickup */}
          <div className="bg-gray-100 p-1 rounded-xl flex mb-6 border-2 border-gray-200">
            <button 
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all ${
                deliveryMode === 'pickup' 
                  ? 'bg-white text-momon-black shadow-sm border-2 border-momon-black' 
                  : 'text-gray-500 hover:text-momon-black'
              }`}
              onClick={() => setDeliveryMode('pickup')}
            >
              <Store size={18} /> Recojo
            </button>
            <button 
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all ${
                deliveryMode === 'delivery' 
                  ? 'bg-white text-momon-black shadow-sm border-2 border-momon-black' 
                  : 'text-gray-500 hover:text-momon-black'
              }`}
              onClick={() => setDeliveryMode('delivery')}
            >
              <Truck size={18} /> Delivery
            </button>
          </div>

          {/* Address Input for Delivery */}
          {deliveryMode === 'delivery' && (
            <div className="mb-6 animate-in fade-in slide-in-from-top-2">
              <label className="block text-xs font-bold text-momon-black uppercase mb-2 tracking-wider">Dirección de entrega</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ingresa tu dirección..."
                  className="flex-1 bg-white border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-momon-yellow focus:ring-0 font-medium text-momon-black"
                />
                <button 
                  onClick={handleGeolocation}
                  className="bg-momon-black text-white p-2 rounded-lg hover:bg-momon-green transition-colors disabled:opacity-50 border-2 border-momon-black"
                  disabled={isLocating}
                  title="Usar mi ubicación"
                >
                  <MapPin size={20} className={isLocating ? 'animate-pulse' : ''} />
                </button>
              </div>
              {isLocating && <p className="text-xs text-momon-green mt-1 font-bold">Obteniendo ubicación...</p>}
            </div>
          )}

          {/* Total & Action */}
          <div className="flex justify-between items-end mb-4">
             <span className="text-gray-500 font-bold text-lg">Total</span>
             <span className="font-brand text-4xl text-momon-black">S/{total.toFixed(2)}</span>
          </div>

          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full bg-momon-green text-white py-4 rounded-xl font-bold text-xl border-2 border-momon-black hover:bg-momon-black hover:text-momon-yellow transition-all shadow-hard active:translate-y-[2px] active:shadow-none flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
             Pagar Ahora {deliveryMode === 'delivery' && <Truck size={24} />}
          </button>
        </div>
      </div>
    </>
  );
};
