import React from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '213554653107';
    const message = 'Bonjour, je souhaite découvrir la Ferme Icosium';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

   return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      {/* Bouton flottant - Taille adaptée pour Samsung A15 (p-3 au lieu de p-4 sur mobile) */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          !
        </span>
      </button>

      <Navbar scrollTo={scrollTo} />
      
      {/* Contenu principal */}
      <main>
        <Hero scrollTo={scrollTo} openWhatsApp={openWhatsApp} />
        <Services />
        <Values />
        <Testimonials />
        <ContactForm openWhatsApp={openWhatsApp} />
      </main>

      <Footer scrollTo={scrollTo} />
    </div>
  );

}