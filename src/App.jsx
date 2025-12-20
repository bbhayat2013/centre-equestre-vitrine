import React from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import Map from './components/Map'; // ← NOUVEAU
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-green-50 overflow-x-hidden">
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

      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} openWhatsApp={openWhatsApp} />
      <Services scrollTo={scrollTo} />
      <Values />
      <Testimonials />
      <Map /> {/* ← NOUVEAU */}
      <ContactForm />
      <Footer />
    </div>
  );
}