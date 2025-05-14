
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import { Cpu, Wifi, Zap, Thermometer, Fan, Command, Monitor, Lightning, MemoryStick, GameController } from 'lucide-react';

const Features = () => {
  const performanceFeatures = [
    {
      icon: <Cpu size={28} />,
      title: "Supreme Processing Power",
      description: "Latest Intel and AMD processors designed for multitasking and high-performance gaming without lag."
    },
    {
      icon: <Zap size={28} />,
      title: "Enhanced Graphics",
      description: "NVIDIA GeForce RTX graphics cards deliver ray-tracing capabilities and AI-enhanced visuals."
    },
    {
      icon: <MemoryStick size={28} />,
      title: "High-Speed Memory",
      description: "DDR5 memory with up to 64GB capacity ensures smooth multitasking and faster game loading."
    },
    {
      icon: <Lightning size={28} />,
      title: "Ultra-Fast Storage",
      description: "NVMe SSDs with up to 4TB capacity for lightning-fast game loading and file transfers."
    }
  ];
  
  const designFeatures = [
    {
      icon: <Thermometer size={28} />,
      title: "Advanced Cooling System",
      description: "Element 31 thermal interface material and vapor chamber cooling keep temperatures low even under heavy loads."
    },
    {
      icon: <Monitor size={28} />,
      title: "Next-Gen Displays",
      description: "High refresh rate displays with NVIDIA G-SYNC support for tear-free, smooth visuals."
    },
    {
      icon: <GameController size={28} />,
      title: "Immersive Experience",
      description: "Dolby Atmos spatial audio and RGB lighting create an immersive gaming environment."
    },
    {
      icon: <Fan size={28} />,
      title: "Innovative Design",
      description: "Sleek chassis with AlienFX lighting and performance-inspired design elements."
    }
  ];
  
  const softwareFeatures = [
    {
      icon: <Command size={28} />,
      title: "Alienware Command Center",
      description: "Fine-tune performance, adjust lighting, and monitor system stats with intuitive software."
    },
    {
      icon: <Wifi size={28} />,
      title: "Killer Networking",
      description: "Prioritizes gaming traffic to reduce latency and provide a smoother online experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="inline-block font-orbitron text-sm md:text-base tracking-[0.2em] bg-gaming-accent/50 text-neon-blue px-4 py-1 rounded-full mb-4">
                CUTTING-EDGE TECHNOLOGY
              </h2>
              <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                ADVANCED <span className="text-gradient">FEATURES</span>
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover the innovative technologies that power Dell gaming laptops,
                designed to deliver the ultimate gaming experience without compromise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 text-white">
                  Unmatched <span className="text-neon-blue">Performance</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Dell gaming laptops deliver exceptional power with the latest processors, 
                  graphics cards, and advanced cooling technology to handle the most demanding games.
                </p>
                
                <div className="space-y-4">
                  {performanceFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-gaming-accent/50 p-2 rounded-lg h-fit text-neon-blue flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-orbitron text-lg font-bold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Dell Gaming Laptop Performance" 
                  className="w-full h-auto object-cover rounded-lg neon-border"
                />
                <div className="absolute -inset-4 bg-neon-blue/5 rounded-lg blur-xl -z-10"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">              
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Dell Gaming Laptop Design" 
                  className="w-full h-auto object-cover rounded-lg neon-border"
                />
                <div className="absolute -inset-4 bg-neon-purple/5 rounded-lg blur-xl -z-10"></div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 text-white">
                  Distinctive <span className="text-neon-purple">Design</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Every element of our gaming laptops is crafted with purpose, 
                  combining futuristic aesthetics with practical functionality for gamers.
                </p>
                
                <div className="space-y-4">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-gaming-accent/50 p-2 rounded-lg h-fit text-neon-purple flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-orbitron text-lg font-bold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 text-white">
                  Intelligent <span className="text-neon-green">Software</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Our software solutions enhance your gaming experience with intuitive controls, 
                  performance optimization, and customization options.
                </p>
                
                <div className="space-y-4">
                  {softwareFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-gaming-accent/50 p-2 rounded-lg h-fit text-neon-green flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-orbitron text-lg font-bold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <button className="btn-neon">
                    Learn More About Our Technology
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Dell Gaming Software" 
                  className="w-full h-auto object-cover rounded-lg neon-border"
                />
                <div className="absolute -inset-4 bg-neon-green/5 rounded-lg blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gaming-darker relative">
          <div className="absolute inset-0 bg-circuit opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">
                EXPERIENCE THE <span className="text-gradient">DIFFERENCE</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Dell gaming laptops are built to deliver exceptional performance, stunning visuals, 
                and immersive experiences for every type of gamer.
              </p>
              <button className="btn-neon py-3 px-8">
                Explore Our Gaming Laptops
              </button>
            </div>
          </div>
        </section>
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

export default Features;
