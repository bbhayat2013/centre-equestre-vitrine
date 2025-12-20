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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo et titre - Version mobile optimisée */}
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-none" onClick={() => handleScroll('accueil')}>
            <div className="text-2xl sm:text-4xl lg:text-5xl flex-shrink-0">🐴</div>
            <div className="min-w-0">
              {/* Version mobile - texte très court */}
              <h1 className="text-xs font-bold text-stone-800 block sm:hidden">
                Ferme Icosium
              </h1>
              {/* Version tablette et plus */}
              <h1 className="hidden sm:block text-base lg:text-xl font-bold text-stone-800">
                Ferme & Club Équestre Icosium
              </h1>
              <p className="text-xs text-stone-600 hidden md:block">المزرعة التربوية ونادي الفروسية إيكوزيوم</p>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <button onClick={() => handleScroll('accueil')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">
              Accueil
            </button>
            <button onClick={() => handleScroll('services')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">
              Services
            </button>
            <button onClick={() => handleScroll('valeurs')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">
              Valeurs
            </button>
            <button onClick={() => handleScroll('temoignages')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium">
              Témoignages
            </button>
            <button onClick={() => handleScroll('contact')} className="px-3 py-2 lg:px-4 text-sm lg:text-base bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:shadow-lg transition">
              Contact
            </button>
          </div>

          {/* Burger menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex-shrink-0 p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <button onClick={() => handleScroll('accueil')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600">Accueil</button>
            <button onClick={() => handleScroll('services')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600">Services</button>
            <button onClick={() => handleScroll('valeurs')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600">Nos Valeurs</button>
            <button onClick={() => handleScroll('temoignages')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600">Témoignages</button>
            <button onClick={() => handleScroll('contact')} className="block w-full text-left py-2 text-amber-600 font-semibold">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}