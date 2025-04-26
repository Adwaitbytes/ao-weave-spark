
import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturedSection } from '../components/FeaturedSection';
import { InfoSection } from '../components/InfoSection';
import { Footer } from '../components/Footer';
import { BackgroundEffects } from '../components/BackgroundEffects';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
