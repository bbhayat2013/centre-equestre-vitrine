import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-40 border-b-2 border-amber-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* ZONE LOGO + TEXTE */}
          <div 
            className="flex items-center gap-2 cursor-pointer min-w-0 flex-1" 
            onClick={() => handleScroll('accueil')}
          >
            {/* L'icône reste fixe */}
            <span className="text-2xl sm:text-4xl flex-shrink-0">🐴</span>
            
            {/* Le texte est protégé ici */}
            <div className="min-w-0">
              <h1 className="text-[13px] sm:text-lg lg:text-xl font-bold text-stone-800 leading-tight truncate">
                Ferme Équestre Icosium
              </h1>
              <p className="text-[9px] text-stone-500 uppercase tracking-tighter sm:hidden">
                Bouchaoui • Alger
              </p>
              <p className="text-xs text-stone-600 hidden sm:block">
                المزرعة التربوية ونادي الفروسية إيكوزيوم
              </p>
            </div>
          </div>

          {/* MENU DESKTOP (Invisible sur A15) */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => handleScroll('services')} className="text-stone-700 hover:text-amber-600 font-medium">Services</button>
            <button onClick={() => handleScroll('contact')} className="px-4 py-2 bg-amber-600 text-white rounded-lg font-bold">Contact</button>
          </div>

          {/* BOUTON BURGER (Prioritaire sur mobile) */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 flex-shrink-0 ml-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <button onClick={() => handleScroll('services')} className="text-left font-medium">Services</button>
          <button onClick={() => handleScroll('contact')} className="text-left text-amber-600 font-bold">Contact</button>
        </div>
      )}
    </nav>
  );
}
