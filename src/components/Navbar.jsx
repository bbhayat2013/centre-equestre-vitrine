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
      <div className="w-full px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo et titre */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-1 min-w-0" 
            onClick={() => handleScroll('accueil')}
          >
            <div className="text-2xl sm:text-4xl lg:text-5xl flex-shrink-0">🐴</div>
            <div className="flex-1 min-w-0">
              {/* Mobile : titre compact */}
              <div className="sm:hidden">
                <h1 className="text-xs font-bold text-stone-800 leading-tight">
                  Ferme & Club
                </h1>
                <h2 className="text-xs font-semibold text-stone-700 leading-tight">
                  Équestre Icosium
                </h2>
              </div>
              {/* Tablette et plus */}
              <div className="hidden sm:block">
                <h1 className="text-base lg:text-xl font-bold text-stone-800">
                  Ferme & Club Équestre Icosium
                </h1>
                <p className="text-xs text-stone-600 hidden md:block">
                  المزرعة التربوية ونادي الفروسية إيكوزيوم
                </p>
              </div>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6 flex-shrink-0">
            <button onClick={() => handleScroll('accueil')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium whitespace-nowrap">
              Accueil
            </button>
            <button onClick={() => handleScroll('services')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium whitespace-nowrap">
              Services
            </button>
            <button onClick={() => handleScroll('valeurs')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium whitespace-nowrap">
              Valeurs
            </button>
            <button onClick={() => handleScroll('temoignages')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium whitespace-nowrap">
              Témoignages
            </button>
            <button onClick={() => handleScroll('contact')} className="px-3 py-2 lg:px-4 text-sm lg:text-base bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:shadow-lg transition whitespace-nowrap">
              Contact
            </button>
            <button onClick={() => handleScroll('localisation')} className="text-sm lg:text-base text-stone-700 hover:text-amber-600 transition font-medium whitespace-nowrap">
            Localisation
            </button>

          </div>

          {/* Burger menu */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden flex-shrink-0 p-2"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <button onClick={() => handleScroll('accueil')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600 text-sm">
              Accueil
            </button>
            <button onClick={() => handleScroll('services')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600 text-sm">
              Services
            </button>
            <button onClick={() => handleScroll('valeurs')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600 text-sm">
              Nos Valeurs
            </button>
            <button onClick={() => handleScroll('temoignages')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600 text-sm">
              Témoignages
            </button>
            <button onClick={() => handleScroll('contact')} className="block w-full text-left py-2 text-amber-600 font-semibold text-sm">
              Contact
            </button>
            <button onClick={() => handleScroll('localisation')} className="block w-full text-left py-2 text-stone-700 hover:text-amber-600 text-sm">
            Localisation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}