
import React from 'react';
import ProductCard from '../UI/ProductCard';
import { featured } from '@/data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gaming-dark bg-circuit relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="inline-block font-orbitron text-sm md:text-base tracking-[0.2em] bg-gaming-accent/50 text-neon-blue px-4 py-1 rounded-full mb-4">
            FEATURED GAMING MACHINES
          </h2>
          <h3 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            ENGINEERED FOR <span className="text-gradient">VICTORY</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our most advanced gaming laptops, featuring cutting-edge technology, 
            stunning displays, and unmatched performance for the ultimate gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="btn-neon">
            View All Gaming Laptops
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
