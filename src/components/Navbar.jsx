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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* LOGO & TITRE */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0" 
            onClick={() => handleScroll('accueil')}
          >
            <div className="text-2xl sm:text-4xl flex-shrink-0">🐴</div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-lg lg:text-xl font-bold text-stone-800 truncate max-w-[150px] sm:max-w-none">
                Ferme & Club Équestre Icosium
              </h1>
              <p className="text-[10px] text-stone-600 hidden sm:block">
                المزرعة التربوية ونادي الفروسية إيكوزيوم
              </p>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button onClick={() => handleScroll('accueil')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">Accueil</button>
            <button onClick={() => handleScroll('services')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">Services</button>
            <button onClick={() => handleScroll('valeurs')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">Valeurs</button>
            <button onClick={() => handleScroll('contact')} className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:shadow-lg transition text-sm font-bold">
              Contact
            </button>
          </div>

          {/* BOUTON MENU MOBILE */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X size={24} className="text-amber-600" /> : <Menu size={24} className="text-stone-800" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-3">
            {['accueil', 'services', 'valeurs', 'temoignages'].map((item) => (
              <button 
                key={item}
                onClick={() => handleScroll(item)} 
                className="block w-full text-left py-2 text-stone-700 capitalize font-medium border-b border-stone-50"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => handleScroll('contact')} 
              className="block w-full text-center py-3 bg-amber-600 text-white rounded-xl font-bold"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
