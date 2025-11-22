
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PromoBlock } from './components/PromoBlock';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection'; 
import { TribeSection } from './components/TribeSection';
import { MenuHighlights } from './components/MenuHighlights';
import { OrderSection } from './components/OrderSection';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { JoinTribeModal } from './components/JoinTribeModal';
import { HistoryModal } from './components/HistoryModal';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PaymentModal } from './components/PaymentModal';
import { Footer } from './components/Footer';
import { AiBarista } from './components/AiBarista';
import { Logo } from './components/Logo';
import { MagicCursor } from './components/MagicCursor';
import { Product, OrderOptions, CartItem } from './types';
import { Zap, Users, Sparkles, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  // Compare two options objects to see if they are identical
  const areOptionsEqual = (opt1: OrderOptions, opt2: OrderOptions) => {
    return (
      opt1.base === opt2.base &&
      opt1.size === opt2.size &&
      opt1.temperature === opt2.temperature &&
      opt1.sweetness === opt2.sweetness &&
      opt1.straw === opt2.straw &&
      opt1.extras.length === opt2.extras.length &&
      [...opt1.extras].sort().toString() === [...opt2.extras].sort().toString()
    );
  };

  const handleAddToCart = (product: Product, options: OrderOptions, unitPrice: number) => {
    // Check if item already exists
    const existingItemIndex = cart.findIndex(item => 
      item.product.id === product.id && areOptionsEqual(item.options, options)
    );

    if (existingItemIndex >= 0) {
      // Increment quantity
      const newCart = [...cart];
      const item = newCart[existingItemIndex];
      item.quantity += 1;
      item.totalPrice = item.unitPrice * item.quantity;
      setCart(newCart);
    } else {
      // Add new item
      const newItem: CartItem = {
        id: Math.random().toString(36).substr(2, 9),
        product,
        options,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice
      };
      setCart([...cart, newItem]);
    }
    
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.unitPrice * newQuantity
        };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const handleScrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCart([]); // Clear cart
    // Celebration logic is handled inside PaymentModal, we just reset state
  };

  return (
    <>
      {/* Welcome Screen Gatekeeper - Render outside main flow to act as strict overlay */}
      {showWelcome && (
        <WelcomeScreen onUnlock={() => setShowWelcome(false)} />
      )}

      <div className={`min-h-screen bg-white font-sans text-momon-black antialiased overflow-hidden transition-opacity duration-1000 ${showWelcome ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        
        <MagicCursor />
        
        <Navbar 
          onOpenCart={() => setIsCartOpen(true)} 
          onJoinTribe={() => setIsJoinModalOpen(true)}
          cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        />
        
        <main className="flex flex-col">
          
          {/* HERO SECTION: Martes de Ritual */}
          <div id="promos">
            <HeroSection onCtaClick={handleScrollToMenu} />
          </div>

          {/* Order Section (Full Menu) */}
          <OrderSection onProductSelect={setSelectedProduct} />

          {/* FEATURE SECTION: Mango Ojo Loco */}
          <FeatureSection onCtaClick={handleScrollToMenu} />

          {/* Highlights */}
          <MenuHighlights onProductSelect={setSelectedProduct} />

          {/* TRIBE SECTION: Replaces generic PromoBlock */}
          <TribeSection onJoinClick={() => setIsJoinModalOpen(true)} />
          
          {/* Brand Manifesto Section */}
          <section id="nosotros" className="py-16 md:py-24 bg-momon-black relative overflow-hidden px-4">
            
            {/* Hidden on mobile to prevent overlapping text */}
            <div className="hidden md:block absolute top-10 left-10 text-momon-yellow opacity-20 transform -rotate-12 animate-pulse">
              <Sparkles size={120} />
            </div>
            <div className="hidden md:block absolute bottom-20 right-10 text-momon-red opacity-20 transform rotate-12">
              <Heart size={120} strokeWidth={3} />
            </div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto relative z-10">
              
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-block bg-white text-momon-black px-4 py-2 md:px-6 rounded-full font-bold border-4 border-momon-black shadow-[4px_4px_0px_#ec061e] transform -rotate-2 mb-4 md:mb-6 font-brand text-sm md:text-lg tracking-widest hover:rotate-0 transition-transform duration-300">
                  ¿QUIÉNES SOMOS?
                </div>
                <h2 className="font-brand text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
                  SOMOS <span className="text-momon-yellow relative inline-block transform hover:scale-110 transition-transform duration-300">MOMON TEA</span>
                </h2>
                <p className="text-lg md:text-2xl text-white/90 font-sans font-medium max-w-2xl mx-auto leading-relaxed">
                  No vendemos solo té. <br/>
                  <span className="font-bold text-momon-green bg-white/10 px-2 rounded">Despertamos a los soñadores</span> que llevas dentro.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                
                <div className="bg-momon-red p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-4 border-momon-black shadow-[6px_6px_0px_#fff] md:shadow-[8px_8px_0px_#fff] transform -rotate-1 md:-rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-momon-black mb-4 md:mb-6 shadow-hard-sm">
                     <Zap size={32} md:size={40} className="text-momon-red fill-current" />
                  </div>
                  <h3 className="font-brand text-3xl md:text-4xl text-white mb-3 md:mb-4 drop-shadow-md">La Chispa</h3>
                  <p className="font-sans text-white font-bold text-base md:text-lg leading-tight">
                    Para los que creen que la rutina es el enemigo. Encendemos tu creatividad con cada sorbo.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 md:gap-8 py-4 order-first md:order-none">
                   <div className="transform hover:scale-110 hover:rotate-3 transition-transform duration-500 cursor-pointer filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.2)]" onClick={() => setIsHistoryModalOpen(true)}>
                      <Logo size="xl" />
                   </div>
                   <button 
                      onClick={() => setIsHistoryModalOpen(true)}
                      className="bg-momon-yellow text-momon-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold border-4 border-momon-black shadow-[4px_4px_0px_#fff] md:shadow-[6px_6px_0px_#fff] hover:shadow-none hover:translate-y-[4px] transition-all font-brand text-lg md:text-xl uppercase tracking-widest transform rotate-2 hover:rotate-0"
                    >
                      Ver Nuestra Historia
                    </button>
                </div>

                <div className="bg-momon-green p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-4 border-momon-black shadow-[6px_6px_0px_#fff] md:shadow-[8px_8px_0px_#fff] transform rotate-1 md:rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-momon-black mb-4 md:mb-6 shadow-hard-sm">
                     <Users size={32} md:size={40} className="text-momon-green fill-current" />
                  </div>
                  <h3 className="font-brand text-3xl md:text-4xl text-white mb-3 md:mb-4 drop-shadow-md">La Tribu</h3>
                  <p className="font-sans text-white font-bold text-base md:text-lg leading-tight">
                    "Crecer es soñar grande". Únete a una comunidad que innova sin miedo al qué dirán.
                  </p>
                </div>

              </div>

              <div className="mt-16 md:mt-24 text-center">
                  <p className="font-brand text-xl md:text-4xl text-white/80 italic tracking-wide relative inline-block px-8">
                    <span className="absolute -left-2 -top-4 md:-left-8 md:-top-8 text-4xl md:text-6xl text-momon-yellow opacity-50">"</span>
                    Innovar o morir sin arrepentirse
                    <span className="absolute -right-2 -bottom-4 md:-right-8 md:-bottom-12 text-4xl md:text-6xl text-momon-yellow opacity-50">"</span>
                  </p>
              </div>

            </div>
          </section>
        </main>

        <AiBarista />
        <Footer />

        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            onAddToCart={handleAddToCart}
          />
        )}

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart} 
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />

        <PaymentModal 
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          totalAmount={cartTotal}
          onPaymentSuccess={handlePaymentSuccess}
        />

        <JoinTribeModal 
          isOpen={isJoinModalOpen} 
          onClose={() => setIsJoinModalOpen(false)} 
        />

        <HistoryModal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
        />
      </div>
    </>
  );
};

export default App;
