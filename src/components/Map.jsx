import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function Map() {
  const googleMapsUrl = "https://www.google.com/maps/place/ECURIE+ICOSIUM/@36.7421449,2.9013559,17z/data=!3m1!4b1!4m6!3m5!1s0x128fa5ed50c88f27:0xa79f4c7cfd28a06!8m2!3d36.7421449!4d2.9039308!16s%2Fg%2F11fj2y1w2m";
  const wazeUrl = "https://www.waze.com/live-map/directions?to=ll.36.7421449%2C2.9039308";
  const appleMapsUrl = "https://maps.apple.com/?address=Ferme%2070,%20Bouchaoui,%20Ch%C3%A9raga,%20Alger%2016084,%20Alg%C3%A9rie&ll=36.7421449,2.9039308";

  return (
    <section id="localisation" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-4">
            📍 Nous Trouver
          </h2>
          <p className="text-xl text-stone-600 mb-2">
            Ferme 70, Bouchaoui, Chéraga
          </p>
          <p className="text-lg text-stone-500">
            Alger 16084, Algérie
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.184391986994!2d2.901355911448114!3d36.74214487085424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa5ed50c88f27%3A0xa79f4c7cfd28a06!2sECURIE%20ICOSIUM!5e0!3m2!1sen!2sca!4v1766236511526!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Ferme Icosium"
                className="w-full h-full"
              ></iframe>
              
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg border-2 border-amber-600">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-amber-600" />
                  <span className="font-bold text-stone-800 text-sm">Ferme 70, Bouchaoui</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-stone-200">
              <h3 className="text-xl font-black text-stone-800 mb-4 flex items-center gap-2">
                <Navigation size={24} className="text-amber-600" />
                Itinéraire
              </h3>
              
              <div className="space-y-3">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all font-bold">
                  <span className="flex items-center gap-2"><MapPin size={20} />Google Maps</span>
                  <ExternalLink size={18} />
                </a>
                <a href={wazeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all font-bold">
                  <span className="flex items-center gap-2"><Navigation size={20} />Waze</span>
                  <ExternalLink size={18} />
                </a>
                <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all font-bold">
                  <span className="flex items-center gap-2">🍎 Apple Plans</span>
                  <ExternalLink size={18} />
                </a>
              </div>
              </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-600">
              <h3 className="text-lg font-black text-stone-800 mb-3">
                🚗 Accès
              </h3>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>À 15 min du centre d'Alger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Parking gratuit disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Accessible en transport public</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-stone-600">
            Besoin d'aide pour nous trouver ? Appelez-nous au{' '}
            <a href="tel:+213554653107" className="text-amber-600 font-bold hover:underline">
              05 54 65 31 07
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}