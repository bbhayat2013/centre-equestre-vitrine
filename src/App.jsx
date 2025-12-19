import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Star, ChevronDown, Menu, X, Facebook, Instagram, Award, Heart, Sparkles, MessageCircle, Users, Trophy, Home } from 'lucide-react';

export default function FermeIcosium() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nom: '', email: '', tel: '', message: '' });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = () => {
    if (!formData.nom || !formData.email || !formData.message) {
      alert('⚠️ Veuillez remplir tous les champs obligatoires');
      return;
    }
    alert('✅ Merci ' + formData.nom + ' ! Nous vous répondrons très rapidement. 🐴');
    setFormData({ nom: '', email: '', tel: '', message: '' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '213554653107';
    const message = 'Bonjour, je souhaite découvrir la Ferme Icosium';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

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

  const valeurs = [
    { icon: '❤️', titre: 'Bien-être Animal', desc: 'Nos chevaux sont heureux et en pleine forme' },
    { icon: '🛡️', titre: 'Sécurité', desc: 'Environnement propre et sécuritaire' },
    { icon: '⭐', titre: 'Qualité', desc: 'Service professionnel depuis 10 ans' },
    { icon: '🤝', titre: 'Complicité', desc: 'Des moments de plaisir intense' }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-green-50">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        title="Contactez-nous sur WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          !
        </span>
      </button>

      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-40 border-b-2 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('accueil')}>
              <div className="text-5xl">🐴</div>
              <div>
                <h1 className="text-xl font-bold text-stone-800">Ferme & Club Équestre Icosium</h1>
                <p className="text-xs text-stone-600">المزرعة التربوية ونادي الفروسية إيكوزيوم</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollTo('accueil')} className="text-stone-700 hover:text-amber-600 transition font-medium">Accueil</button>
              <button onClick={() => scrollTo('services')} className="text-stone-700 hover:text-amber-600 transition font-medium">Services</button>
              <button onClick={() => scrollTo('valeurs')} className="text-stone-700 hover:text-amber-600 transition font-medium">Nos Valeurs</button>
              <button onClick={() => scrollTo('temoignages')} className="text-stone-700 hover:text-amber-600 transition font-medium">Témoignages</button>
              <button onClick={() => scrollTo('contact')} className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:shadow-lg transition">
                Contact
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollTo('accueil')} className="block w-full text-left py-2 text-stone-700">Accueil</button>
              <button onClick={() => scrollTo('services')} className="block w-full text-left py-2 text-stone-700">Services</button>
              <button onClick={() => scrollTo('valeurs')} className="block w-full text-left py-2 text-stone-700">Nos Valeurs</button>
              <button onClick={() => scrollTo('temoignages')} className="block w-full text-left py-2 text-stone-700">Témoignages</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 text-amber-600 font-semibold">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - L'AVENTURE COMMENCE ICI */}
      <section id="accueil" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-green-50">
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-9xl">🐴</div>
          <div className="absolute bottom-32 right-20 text-9xl">🏇</div>
          <div className="absolute top-1/2 left-1/3 text-9xl">🌿</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          {/* Badge d'introduction */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur border-2 border-amber-600 rounded-full mb-8">
            <Sparkles size={20} className="text-amber-600" />
            <span className="text-sm font-bold text-stone-800">10 ans de passion • Ferme Pédagogique</span>
          </div>

          {/* Titre principal inspiré du slogan */}
          <div className="mb-8 p-8 bg-amber-600/90 backdrop-blur rounded-3xl border-4 border-white shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              L'AVENTURE ÉQUESTRE<br />
              <span className="text-5xl md:text-7xl">COMMENCE ICI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-semibold">
              Ferme 70, Bouchaoui, Chéraga • Alger
            </p>
          </div>

          <p className="text-xl md:text-2xl text-stone-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
            <span className="text-amber-700 font-bold">Bienvenue dans votre passion.</span><br />
            Plus qu'un centre équestre, une véritable ferme pédagogique où cavaliers et chevaux sont heureux.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-stone-700 to-stone-800 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Découvrir nos services 🐴
            </button>
            <button 
              onClick={openWhatsApp}
              className="px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 justify-center"
            >
              <MessageCircle size={24} />
              WhatsApp Direct
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg border-2 border-amber-600">
              <div className="text-3xl md:text-4xl font-black text-amber-700 mb-2">10+</div>
              <div className="text-xs md:text-sm text-stone-600 font-semibold">Années d'excellence</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg border-2 border-green-600">
              <div className="text-3xl md:text-4xl font-black text-green-700 mb-2">100%</div>
              <div className="text-xs md:text-sm text-stone-600 font-semibold">Passion & Qualité</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg border-2 border-stone-600">
              <div className="text-3xl md:text-4xl font-black text-stone-700 mb-2">365j</div>
              <div className="text-xs md:text-sm text-stone-600 font-semibold">À votre service</div>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-amber-600" />
          </div>
        </div>
      </section>

      {/* Services Section */}
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

          {/* CTA Générique */}
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

      {/* Valeurs Section */}
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

          {/* Citation inspirante */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold text-stone-700 italic border-l-4 border-amber-600 pl-6">
              "Adhérez à notre club, nous veillerons à ce que vous soyez toujours bien servis"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Témoignages */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-stone-300">
              Une question ? Une visite ? Nous sommes à votre écoute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Infos */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border-2 border-amber-600">
                <h3 className="text-2xl font-black mb-6">Informations</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Adresse</div>
                      <div className="text-stone-300">Ferme 70, Bouchaoui, Chéraga<br />Alger, Algérie 16084</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Téléphone</div>
                      <a href="tel:+213554653107" className="text-stone-300 hover:text-amber-500 transition">
                        05 54 65 31 07
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <a href="mailto:contact@fermeicosium.com" className="text-stone-300 hover:text-amber-500 transition">
                        contact@fermeicosium.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Horaires</div>
                      <div className="text-stone-300">
                        Sur rendez-vous<br />
                        7 jours / 7
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
                    <Facebook size={24} />
                  </button>
                  <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
                    <Instagram size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-white text-stone-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Message rapide</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Nom complet *</label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.tel}
                    onChange={(e) => setFormData({...formData, tel: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition"
                    placeholder="05XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  Envoyer le message 🐴
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}