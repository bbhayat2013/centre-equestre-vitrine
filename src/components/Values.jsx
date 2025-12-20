import React from 'react';

export default function Values() {
  const valeurs = [
    { icon: '❤️', titre: 'Bien-être Animal', desc: 'Nos chevaux sont heureux et en pleine forme' },
    { icon: '🛡️', titre: 'Sécurité', desc: 'Environnement propre et sécuritaire' },
    { icon: '⭐', titre: 'Qualité', desc: 'Service professionnel depuis 10 ans' },
    { icon: '🤝', titre: 'Complicité', desc: 'Des moments de plaisir intense' }
  ];

  return (
    <section id="valeurs" className="py-20 bg-gradient-to-br from-stone-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-xl text-stone-600">
            Ce qui fait la différence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valeurs.map((valeur, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-center border-2 border-stone-200 hover:border-amber-600"
            >
              <div className="text-5xl mb-4">{valeur.icon}</div>
              <h3 className="text-xl font-black text-stone-800 mb-2">{valeur.titre}</h3>
              <p className="text-stone-600">{valeur.desc}</p>
            </div>
          ))}
        </div>

        {/* Citation */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-bold text-stone-700 italic border-l-4 border-amber-600 pl-6">
            "Adhérez à notre club, nous veillerons à ce que vous soyez toujours bien servis"
          </blockquote>
        </div>
      </div>
    </section>
  );
}