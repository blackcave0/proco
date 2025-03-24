'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JavaScriptSection from '@/components/JavaScriptSection';
import AndroidSection from '@/components/AndroidSection';
import MernSection from '@/components/MernSection';
import AchievementsSection from '@/components/AchievementsSection';
// import TeachersSection from '@/components/TeachersSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import BrandPopup from '@/components/BrandPopup';
import Portfolio from '@/components/Portfolio'; // Import Portfolio component

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen">
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />

      {/* Brand Popup */}
      {/* <BrandPopup /> */}

      {activeSection === 'home' && (
        <>
          <HeroSection />
          <JavaScriptSection />
          <AndroidSection />
          <MernSection />
          <AchievementsSection />
          {/* <TeachersSection /> */}
        </>
      )}

      {activeSection === 'courses' && (
        <>
          <JavaScriptSection />
          <AndroidSection />
          <MernSection />
        </>
      )}

      {activeSection === 'portfolio' && <Portfolio />} {/* Render Portfolio */}

      {activeSection === 'about' && (
        <>
          <AchievementsSection />
          {/* <TeachersSection /> */}
        </>
      )}

      {activeSection === 'contact' && <ContactForm />}

      <Footer />
    </main>
  );
}
