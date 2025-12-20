import React from 'react';
import { Sparkles, ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero({ scrollTo, openWhatsApp }) {
  return (
    
    <section id="accueil" className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-green-50">
      {/* Background decorative - caché sur mobile */}
      <div className="absolute inset-0 opacity-5 hidden sm:block pointer-events-none">
        <div className="absolute top-20 left-20 text-9xl">🐴</div>
        <div className="absolute bottom-32 right-20 text-9xl">🏇</div>
        <div className="absolute top-1/2 left-1/3 text-9xl">🌿</div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-16">
        {/* Badge d'introduction */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 bg-white/80 backdrop-blur border-2 border-amber-600 rounded-full mb-4 sm:mb-8">
          <Sparkles size={14} className="text-amber-600 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-sm font-bold text-stone-800 whitespace-nowrap">
            10 ans • Ferme Pédagogique
          </span>
        </div>

        {/* Titre principal - RÉDUIT */}
        <div className="mb-6 sm:mb-8 p-3 sm:p-6 md:p-8 bg-amber-600/90 backdrop-blur rounded-xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-2xl">
          <h1 className="text-xl sm:text-4xl md:text-6xl font-black text-white mb-2 sm:mb-4 leading-tight">
            L'AVENTURE ÉQUESTRE<br />
            <span className="text-2xl sm:text-5xl md:text-7xl">COMMENCE ICI</span>
          </h1>
          <p className="text-xs sm:text-lg md:text-2xl text-white/90 font-semibold">
            Bouchaoui • Alger
          </p>
        </div>

        <p className="text-sm sm:text-xl md:text-2xl text-stone-700 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
          <span className="text-amber-700 font-bold">Bienvenue dans votre passion.</span><br className="hidden sm:block" />
          <span className="hidden sm:inline">Centre équestre et ferme pédagogique</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center mb-6 sm:mb-12 max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={() => scrollTo('services')}
            className="px-4 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-stone-700 to-stone-800 text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-lg hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap"
          >
            Nos services 🐴
          </button>
          <button 
            onClick={openWhatsApp}
            className="px-4 sm:px-8 py-2.5 sm:py-4 bg-[#25D366] hover:bg-[#1eb855] text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-1.5 sm:gap-2 justify-center whitespace-nowrap border-2 border-white"
          >
            <MessageCircle size={16} className="sm:w-6 sm:h-6" />
            WhatsApp
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-xs sm:max-w-3xl mx-auto">
          <div className="text-center p-2 sm:p-4 bg-white/80 backdrop-blur rounded-lg sm:rounded-xl shadow-lg border border-amber-600 sm:border-2">
            <div className="text-xl sm:text-3xl md:text-4xl font-black text-amber-700 mb-0.5 sm:mb-2">10+</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-stone-600 font-semibold leading-tight">Années</div>
          </div>
          <div className="text-center p-2 sm:p-4 bg-white/80 backdrop-blur rounded-lg sm:rounded-xl shadow-lg border border-green-600 sm:border-2">
            <div className="text-xl sm:text-3xl md:text-4xl font-black text-green-700 mb-0.5 sm:mb-2">100%</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-stone-600 font-semibold leading-tight">Qualité</div>
          </div>
          <div className="text-center p-2 sm:p-4 bg-white/80 backdrop-blur rounded-lg sm:rounded-xl shadow-lg border border-stone-600 sm:border-2">
            <div className="text-xl sm:text-3xl md:text-4xl font-black text-stone-700 mb-0.5 sm:mb-2">365j</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-stone-600 font-semibold leading-tight">Service</div>
          </div>
        </div>

        <div className="mt-6 sm:mt-12 animate-bounce">
          <ChevronDown size={24} className="mx-auto text-amber-600 sm:w-8 sm:h-8" />
        </div>
      </div>
    </section>
  );
}