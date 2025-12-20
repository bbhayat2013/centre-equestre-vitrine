import React from 'react';

export default function Services({ scrollTo }) {
  const services = [
    { 
      icon: '👶', 
      titre: 'Cours Enfants', 
      desc: 'Programme adapté selon niveau et âge. Autonomie, confiance et plaisir.', 
      color: 'from-green-50 to-green-100',
      detail: 'Chez nous, les enfants ont une place de choix !'
    },
    { 
      icon: '🏇', 
      titre: 'Cours Adultes', 
      desc: 'Du débutant au confirmé. Loisir, perfectionnement ou compétition.', 
      color: 'from-amber-50 to-amber-100',
      detail: 'Le plaisir de monter à cheval jour après jour'
    },
    { 
      icon: '🏆', 
      titre: 'Préparation Compétitions', 
      desc: 'Galops 1 à 7, saut d\'obstacles, coaching personnalisé.', 
      color: 'from-red-50 to-red-100',
      detail: 'Centre d\'entraînement professionnel'
    },
    { 
      icon: '🏠', 
      titre: 'Pension Chevaux', 
      desc: 'Hébergement dans un environnement propre, sécuritaire et bien entretenu.', 
      color: 'from-blue-50 to-blue-100',
      detail: 'Boxes disponibles - Contactez-nous'
    },
    { 
      icon: '✨', 
      titre: 'Toilettage & Soins', 
      desc: 'Entretien, nettoyage et préparation de votre cheval.', 
      color: 'from-purple-50 to-purple-100',
      detail: 'Pour compétition ou plaisir'
    },
    { 
      icon: '🌿', 
      titre: 'Ferme Pédagogique', 
      desc: 'Découverte des animaux et apprentissage des soins.', 
      color: 'from-teal-50 to-teal-100',
      detail: 'Une expérience unique'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Du loisir à la compétition, de l'initiation au perfectionnement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`group bg-gradient-to-br ${service.color} p-8 rounded-2xl border-2 border-stone-300 hover:border-amber-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-stone-800 mb-3">
                {service.titre}
              </h3>
              <p className="text-stone-700 mb-3">
                {service.desc}
              </p>
              <p className="text-sm text-amber-700 font-semibold italic">
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border-2 border-amber-600">
            <p className="text-xl font-bold text-stone-800 mb-4">
              Intéressé par nos services ? Discutons de vos besoins.
            </p>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-bold hover:shadow-lg transition"
            >
              Contactez-nous pour plus d'informations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}