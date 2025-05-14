
import React, { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import ProductCard from '@/components/UI/ProductCard';
import { allProducts } from '@/data/products';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const uniqueSeries = Array.from(new Set(allProducts.map(product => product.series)));
  const uniqueCategories = Array.from(new Set(allProducts.map(product => product.category)));
  
  const filteredProducts = allProducts.filter(product => {
    const matchesSeries = selectedSeries ? product.series === selectedSeries : true;
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSeries && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block font-orbitron text-sm md:text-base tracking-[0.2em] bg-gaming-accent/50 text-neon-blue px-4 py-1 rounded-full mb-4">
              GAMING ARSENAL
            </h2>
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              DELL GAMING <span className="text-gradient">LAPTOPS</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our collection of cutting-edge gaming laptops engineered for performance,
              designed for victory, and built to elevate your gaming experience.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-gaming-darker border border-gaming-accent rounded-lg p-4 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-orbitron font-bold text-white flex items-center gap-2">
                    <Filter size={18} />
                    <span>Filters</span>
                  </h3>
                  <button 
                    className="md:hidden text-gray-400 hover:text-white"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    {filterOpen ? <ChevronDown className="rotate-180" /> : <ChevronDown />}
                  </button>
                </div>
                
                <div className={`space-y-6 ${filterOpen ? 'block' : 'hidden md:block'}`}>
                  <div>
                    <h4 className="font-medium text-neon-blue mb-2">Series</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="series" 
                          className="peer sr-only" 
                          onChange={() => setSelectedSeries(null)}
                          checked={selectedSeries === null}
                        />
                        <span className="w-4 h-4 border border-gaming-accent rounded-sm mr-2 flex items-center justify-center peer-checked:bg-neon-blue peer-checked:border-neon-blue transition-all">
                          {selectedSeries === null && (
                            <span className="block w-2 h-2 bg-white rounded-sm"></span>
                          )}
                        </span>
                        <span className="text-gray-300">All Series</span>
                      </label>
                      
                      {uniqueSeries.map(series => (
                        <label key={series} className="flex items-center">
                          <input 
                            type="radio" 
                            name="series" 
                            className="peer sr-only"
                            onChange={() => setSelectedSeries(series)}
                            checked={selectedSeries === series}
                          />
                          <span className="w-4 h-4 border border-gaming-accent rounded-sm mr-2 flex items-center justify-center peer-checked:bg-neon-blue peer-checked:border-neon-blue transition-all">
                            {selectedSeries === series && (
                              <span className="block w-2 h-2 bg-white rounded-sm"></span>
                            )}
                          </span>
                          <span className="text-gray-300">{series}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-neon-blue mb-2">Category</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="category" 
                          className="peer sr-only"
                          onChange={() => setSelectedCategory(null)}
                          checked={selectedCategory === null}
                        />
                        <span className="w-4 h-4 border border-gaming-accent rounded-sm mr-2 flex items-center justify-center peer-checked:bg-neon-blue peer-checked:border-neon-blue transition-all">
                          {selectedCategory === null && (
                            <span className="block w-2 h-2 bg-white rounded-sm"></span>
                          )}
                        </span>
                        <span className="text-gray-300">All Categories</span>
                      </label>
                      
                      {uniqueCategories.map(category => (
                        <label key={category} className="flex items-center">
                          <input 
                            type="radio" 
                            name="category" 
                            className="peer sr-only"
                            onChange={() => setSelectedCategory(category)}
                            checked={selectedCategory === category}
                          />
                          <span className="w-4 h-4 border border-gaming-accent rounded-sm mr-2 flex items-center justify-center peer-checked:bg-neon-blue peer-checked:border-neon-blue transition-all">
                            {selectedCategory === category && (
                              <span className="block w-2 h-2 bg-white rounded-sm"></span>
                            )}
                          </span>
                          <span className="text-gray-300">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    className="w-full py-2 border border-neon-blue/50 text-neon-blue rounded bg-transparent hover:bg-neon-blue/10 transition-colors text-sm"
                    onClick={() => {
                      setSelectedSeries(null);
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 bg-gaming-darker border border-gaming-accent rounded-lg p-3">
                <div className="text-gray-300 flex items-center gap-2">
                  <SlidersHorizontal size={18} />
                  <span>Showing {filteredProducts.length} products</span>
                </div>
                
                <select className="bg-gaming-accent/50 text-white border border-gaming-accent rounded px-3 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="bg-gaming-darker border border-gaming-accent rounded-lg p-10 text-center">
                  <p className="text-gray-300 text-lg">No products match your filter criteria</p>
                  <button 
                    className="mt-4 py-2 px-4 border border-neon-blue/50 text-neon-blue rounded bg-transparent hover:bg-neon-blue/10 transition-colors text-sm"
                    onClick={() => {
                      setSelectedSeries(null);
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
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

export default Products;
