
import React from 'react';
import { Cpu, Wifi, Zap, Thermometer, Fan, Command } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <Cpu size={32} />,
      title: "Supreme Processing Power",
      description: "Latest Intel and AMD processors designed for multitasking and high-performance gaming without lag."
    },
    {
      icon: <Thermometer size={32} />,
      title: "Advanced Cooling System",
      description: "Innovative thermal design with multiple heat pipes and fans keeps your system cool under pressure."
    },
    {
      icon: <Wifi size={32} />,
      title: "Lightning-Fast Connectivity",
      description: "Killer Wi-Fi 6 technology and multiple ports ensure you stay connected with minimal latency."
    },
    {
      icon: <Zap size={32} />,
      title: "Stunning Visual Experience",
      description: "High refresh rate displays with NVIDIA RTX graphics deliver breathtaking visuals and smooth gameplay."
    },
    {
      icon: <Command size={32} />,
      title: "Precision Control",
      description: "Responsive, anti-ghosting keyboards with customizable RGB lighting for ultimate control."
    },
    {
      icon: <Fan size={32} />,
      title: "Alienware Command Center",
      description: "Fine-tune performance, adjust lighting, and monitor system stats with intuitive software."
    }
  ];

  return (
    <section className="py-20 bg-gaming-darker relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block font-orbitron text-sm md:text-base tracking-[0.2em] bg-gaming-accent/50 text-neon-blue px-4 py-1 rounded-full mb-4">
            CUTTING-EDGE TECHNOLOGY
          </h2>
          <h3 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            POWERED BY <span className="text-gradient">INNOVATION</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our gaming laptops feature the latest advancements in gaming technology, 
            designed to push the boundaries of what's possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="bg-gaming-dark border border-gaming-accent hover:border-neon-blue/50 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group"
            >
              <div className="bg-gaming-highlight/50 p-3 rounded-lg inline-block mb-4 text-neon-blue group-hover:text-white group-hover:bg-neon-blue/20 transition-all">
                {feature.icon}
              </div>
              <h4 className="font-orbitron text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
