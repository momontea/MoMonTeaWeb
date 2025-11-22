import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-momon-black pt-16 pb-8 font-sans relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          
          {/* Brand Column with Logo */}
          <div className="flex flex-col gap-6 md:w-1/4 items-start">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <span className="font-brand font-bold text-3xl text-momon-black">MoMon Tea</span>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              El ritual para despertar a tu soñador interior. Innovar o morir sin arrepentirse.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-brand font-bold text-xl mb-1 text-momon-black">El Ritual</h4>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Nuestra Carta</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Hacks de Barista</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Recetas Secretas</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-brand font-bold text-xl mb-1 text-momon-black">Nuestro Mundo</h4>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Manifiesto Soñador</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Origen del Té</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Sostenibilidad</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-brand font-bold text-xl mb-1 text-momon-black">La Tribu</h4>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Únete al Club</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Recompensas</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Comunidad</a>
            </div>

             {/* Column 4 */}
             <div className="flex flex-col gap-4">
              <h4 className="font-brand font-bold text-xl mb-1 text-momon-black">Soporte</h4>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Contáctanos</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Preguntas Frecuentes</a>
              <a href="#" className="text-gray-600 hover:text-momon-red hover:font-bold transition-all text-sm">Libro de Reclamaciones</a>
            </div>
          </div>
        </div>

        <hr className="border-momon-black mb-8 opacity-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="bg-momon-black text-white p-3 rounded-full hover:bg-momon-red transition-colors shadow-hard-sm border-2 border-momon-black">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-momon-black text-white p-3 rounded-full hover:bg-momon-red transition-colors shadow-hard-sm border-2 border-momon-black">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-momon-black text-white p-3 rounded-full hover:bg-momon-red transition-colors shadow-hard-sm border-2 border-momon-black">
              <Twitter size={20} />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 justify-center font-medium">
            <a href="#" className="hover:text-momon-black hover:underline">Privacidad</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-momon-black hover:underline">Términos de Uso</a>
          </div>
          <p className="text-sm text-gray-500 font-medium">© 2024 Momon Tea Company. Soñando en grande.</p>
        </div>
      </div>
    </footer>
  );
};