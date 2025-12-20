import React from 'react';
import { Sparkles, ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero({ scrollTo, openWhatsApp }) {
  return (
    <section id="accueil" className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-green-50">
      {/* Background decorative - caché sur mobile */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute top-20 left-20 text-9xl">🐴</div>
        <div className="absolute bottom-32 right-20 text-9xl">🏇</div>
        <div className="absolute top-1/2 left-1/3 text-9xl">🌿</div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center py-8 sm:py-16">
        {/* Badge d'introduction */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur border-2 border-amber-600 rounded-full mb-6 sm:mb-8">
          <Sparkles size={16} className="text-amber-600 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-bold text-stone-800">10 ans de passion • Ferme Pédagogique</span>
        </div>

        {/* Titre principal */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 md:p-8 bg-amber-600/90 backdrop-blur rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-2xl">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
            L'AVENTURE ÉQUESTRE<br />
            <span className="text-3xl sm:text-5xl md:text-7xl">COMMENCE ICI</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl text-white/90 font-semibold">
            Ferme 70, Bouchaoui • Alger
          </p>
        </div>

        <p className="text-base sm:text-xl md:text-2xl text-stone-700 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium leading-relaxed px-2 sm:px-4">
          <span className="text-amber-700 font-bold">Bienvenue dans votre passion.</span><br />
          Centre équestre et ferme pédagogique
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-3 sm:px-4">
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-stone-700 to-stone-800 text-white rounded-xl font-bold text-sm sm:text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Découvrir nos services 🐴
          </button>
          <button 
            onClick={openWhatsApp}
            className="px-5 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-xl font-bold text-sm sm:text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 justify-center"
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            WhatsApp Direct
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-3xl mx-auto px-2">
          <div className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur rounded-lg sm:rounded-xl shadow-lg border-2 border-amber-600">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-700 mb-1 sm:mb-2">10+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-stone-600 font-semibold">Années d'excellence</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur rounded-lg sm:rounded-xl shadow-lg border-2 border-green-600">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-700 mb-1 sm:mb-2">100%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-stone-600 font-semibold">Passion & Qualité</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur rounded-lg sm:rounded-xl shadow-lg border-2 border-stone-600">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-700 mb-1 sm:mb-2">365j</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-stone-600 font-semibold">À votre service</div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 animate-bounce">
          <ChevronDown size={28} className="mx-auto text-amber-600 sm:w-8 sm:h-8" />
        </div>
      </div>
    </section>
  );
}