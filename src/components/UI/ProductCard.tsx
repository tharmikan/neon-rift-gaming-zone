
import React from 'react';
import { Gamepad, Cpu, Monitor, MemoryStick, Clock } from 'lucide-react';
import { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, series, image, price, specs, category } = product;

  // Icons for specs
  const specIcons = {
    cpu: <Cpu className="text-neon-blue" size={16} />,
    gpu: <Gamepad className="text-neon-purple" size={16} />,
    display: <Monitor className="text-neon-green" size={16} />,
    memory: <MemoryStick className="text-neon-pink" size={16} />,
    storage: <Clock className="text-neon-blue" size={16} />,
  };

  return (
    <div className="card-glow group bg-gaming-darker border border-gaming-accent hover:border-neon-blue/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
      <div className="relative overflow-hidden h-48 md:h-64">
        <div className="absolute inset-0 bg-gaming-dark/50 z-10"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-2 left-2 bg-gaming-accent/80 backdrop-blur-sm px-3 py-1 rounded-full z-20">
          <span className="text-xs font-medium text-white">{series}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="btn-neon">
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-neon-blue transition-colors">
            {name}
          </h3>
          <span className="font-orbitron text-neon-blue font-bold">
            ${price}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          {Object.entries(specs).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              {specIcons[key as keyof typeof specIcons]}
              <span className="text-gray-400">{key}:</span>
              <span className="text-white font-medium">{value}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400 border border-gaming-accent/50 rounded-full px-2 py-1">
            {category}
          </span>
          <button className="flex items-center gap-1 group/btn">
            <span className="text-neon-blue text-sm font-medium group-hover/btn:underline">
              Compare
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
