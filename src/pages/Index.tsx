
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Features from '@/components/Home/Features';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Features />
      <CTASection />
      
      <footer className="bg-gaming-darker py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="font-orbitron text-xl font-bold tracking-wider text-white">
                  DELL
                </span>
                <span className="text-xs tracking-widest text-neon-blue">
                  GAMING
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Engineered for the ultimate gaming experience
              </p>
            </div>
            
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Dell Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
