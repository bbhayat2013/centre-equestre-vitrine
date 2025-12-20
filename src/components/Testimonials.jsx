import React from 'react';

export default function Testimonials() {
  const temoignages = [
    { 
      nom: 'Famille B.', 
      texte: 'Mes enfants adorent ! L\'équipe est passionnée et le cadre magnifique. Un vrai lieu d\'apprentissage et de bonheur.',
      emoji: '👨‍👩‍👧‍👦'
    },
    { 
      nom: 'Karim M.', 
      texte: 'Excellent centre pour la préparation des compétitions. Coaching professionnel et installations de qualité.',
      emoji: '🏆'
    },
    { 
      nom: 'Sarah A.', 
      texte: 'Mon cheval est en pension ici depuis 2 ans. Environnement propre, sécurisé et personnel attentionné.',
      emoji: '🐴'
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-stone-600">
            Cavaliers et propriétaires satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((temoignage, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-stone-200"
            >
              <div className="text-6xl mb-4">{temoignage.emoji}</div>
              <p className="text-stone-700 mb-4 italic leading-relaxed">"{temoignage.texte}"</p>
              <div className="font-black text-stone-800">— {temoignage.nom}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}