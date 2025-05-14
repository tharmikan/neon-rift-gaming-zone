
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-darker via-gaming-dark/80 to-gaming-darker/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            READY TO <span className="text-gradient">ELEVATE</span> YOUR GAMING?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Step into the future of gaming with Dell's cutting-edge laptops. 
            Experience performance that pushes boundaries and design that turns heads.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="btn-neon py-3 px-8 text-lg flex items-center gap-2">
              <span>Shop Alienware</span>
              <ChevronRight size={18} />
            </button>
            <button className="py-3 px-8 text-lg border border-gray-600 text-white rounded-md hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
              <span>Explore G-Series</span>
              <ChevronRight size={18} />
            </button>
          </div>
          
          <p className="mt-8 text-sm text-gray-400">
            Free shipping on orders over $999. 12-month warranty included.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
