import React from 'react';
import { Sparkles, ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero({ scrollTo, openWhatsApp }) {
  return (
    <section id="accueil" className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-green-50">
      
      {/* Background décoratif - Caché sur très petit mobile pour performance */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 text-7xl sm:text-9xl">🐴</div>
        <div className="absolute bottom-20 right-10 text-7xl sm:text-9xl">🏇</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/80 backdrop-blur border border-amber-600 rounded-full mb-6 shadow-sm">
          <Sparkles size={16} className="text-amber-600" />
          <span className="text-[10px] sm:text-sm font-bold text-stone-800 uppercase tracking-wider">
            10 ans de passion • Bouchaoui
          </span>
        </div>

        {/* Titre Principal - Taille adaptée mobile */}
        <div className="mb-8 p-6 sm:p-10 bg-amber-600/90 backdrop-blur-sm rounded-[2rem] border-4 border-white shadow-2xl mx-2 sm:mx-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-2 leading-tight">
            L'AVENTURE ÉQUESTRE<br />
            <span className="text-3xl sm:text-5xl md:text-7xl">COMMENCE ICI</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 font-medium italic">
            Ferme 70, Bouchaoui, Chéraga • Alger
          </p>
        </div>

        <p className="text-base sm:text-xl md:text-2xl text-stone-700 mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Bienvenue dans une véritable <span className="text-amber-700 font-bold">ferme pédagogique</span> où le bonheur des cavaliers et des chevaux est notre priorité.
        </p>

        {/* Boutons d'action - Empilés sur mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-6 sm:px-0">
          <button 
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-stone-800 text-white rounded-2xl font-bold text-lg hover:bg-stone-900 transition shadow-lg"
          >
            S'inscrire 🐴
          </button>
          <button 
            onClick={openWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white rounded-2xl font-bold text-lg hover:bg-green-600 transition shadow-lg flex items-center gap-2 justify-center"
          >
            <MessageCircle size={24} />
            WhatsApp
          </button>
        </div>

        {/* Stats - Correction Grid pour Samsung A15 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
          <div className="p-4 bg-white/60 rounded-2xl border border-amber-100 shadow-sm">
            <div className="text-2xl font-black text-amber-700">10+</div>
            <div className="text-[10px] sm:text-xs uppercase font-bold text-stone-500">Années d'excellence</div>
          </div>
          <div className="p-4 bg-white/60 rounded-2xl border border-green-100 shadow-sm">
            <div className="text-2xl font-black text-green-700">100%</div>
            <div className="text-[10px] sm:text-xs uppercase font-bold text-stone-500">Passion & Qualité</div>
          </div>
          <div className="p-4 bg-white/60 rounded-2xl border border-stone-100 shadow-sm">
            <div className="text-2xl font-black text-stone-700">365j</div>
            <div className="text-[10px] sm:text-xs uppercase font-bold text-stone-500">À votre service</div>
          </div>
        </div>

        <div className="mt-12 animate-bounce hidden sm:block">
          <ChevronDown size={32} className="mx-auto text-amber-600/50" />
        </div>
      </div>
    </section>
  );
}
