import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', tel: '', message: '' });

  const handleSubmit = () => {
    if (!formData.nom || !formData.email || !formData.message) {
      alert('⚠️ Veuillez remplir tous les champs obligatoires');
      return;
    }
    alert('✅ Merci ' + formData.nom + ' ! Nous vous répondrons très rapidement. 🐴');
    setFormData({ nom: '', email: '', tel: '', message: '' });
  };

  return (
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
  );
}