import React, { useState } from 'react';
import { Menu, X, MapPin, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenCart: () => void;
  onJoinTribe: () => void;
  cartItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onJoinTribe, cartItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Menú', href: '#menu' },
    { name: 'Promos', href: '#promos' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') return;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 h-24 flex items-center font-sans border-b-4 border-momon-black">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        
        {/* Logo & Desktop Links */}
        <div className="flex items-center gap-8">
          <a href="#" onClick={(e) => handleScroll(e, '#')} className="flex items-center gap-3 group">
             {/* Logo Component */}
            <div className="transition-transform group-hover:-rotate-6 group-hover:scale-110 duration-300">
              <Logo size="md" />
            </div>
            <span className="font-brand font-bold text-3xl tracking-wide text-momon-black pt-2 hidden sm:block">
              MoMon Tea
            </span>
          </a>

          <div className="hidden md:flex gap-8 font-bold text-sm tracking-wide uppercase text-momon-black ml-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-momon-red transition-colors hover:-rotate-2 inline-block transform py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 md:gap-6">
           {/* Mobile/Desktop Cart Trigger */}
           <button onClick={onOpenCart} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
            <ShoppingBag size={28} className="text-momon-black group-hover:text-momon-red transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-momon-red text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-momon-black animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>

          <a href="#" className="hidden md:flex items-center gap-2 hover:text-momon-red font-bold text-sm text-momon-black">
            <MapPin size={20} className="text-momon-red" />
            <span className="font-brand">Tiendas</span>
          </a>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={onJoinTribe}
              className="px-6 py-2 bg-momon-black text-momon-yellow border-2 border-momon-black rounded-full font-bold hover:bg-momon-red hover:text-white hover:border-momon-black text-sm transition-all shadow-[2px_2px_0px_#ffe115] active:translate-y-[2px] active:shadow-none font-brand uppercase tracking-wide"
            >
              Únete a la Tribu
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-momon-black p-2">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-23 left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 gap-6 border-t-4 border-momon-black border-b-4 h-auto z-50">
          <div className="flex flex-col gap-6 text-2xl font-brand font-bold text-momon-black text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)} 
                className="hover:text-momon-red hover:bg-gray-50 py-2 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <hr className="border-gray-200" />
          <div className="flex flex-col gap-4">
             <a href="#" className="flex items-center justify-center gap-2 font-bold text-momon-black py-2">
              <MapPin size={24} className="text-momon-red" />
              Encuentra tu tienda
            </a>
            <div className="flex flex-col gap-4 mt-2">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onJoinTribe();
                }}
                className="w-full px-4 py-3 bg-momon-black text-momon-yellow border-2 border-momon-black rounded-full font-bold hover:bg-momon-red hover:text-white text-lg font-brand shadow-hard"
              >
                Únete a la Tribu
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};