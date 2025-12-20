import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="text-red-500" size={20} />
          <span>Un héritage de passion, une aventure qui commence ici</span>
        </div>
        <p>© 2024 Ferme & Club Équestre Icosium. Tous droits réservés.</p>
        <p className="text-xs mt-2 text-stone-500">Ferme 70, Bouchaoui, Chéraga • Alger, Algérie</p>
      </div>
    </footer>
  );
}