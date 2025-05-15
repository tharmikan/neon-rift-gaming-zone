
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Resize listener
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();
    
    // Grid setup
    const gridSize = 30;
    const gridDots: { x: number; y: number; opacity: number; pulseSpeed: number }[] = [];
    
    // Create grid points
    const createGrid = () => {
      gridDots.length = 0;
      const cols = Math.floor(canvas.width / gridSize) + 2;
      const rows = Math.floor(canvas.height / gridSize) + 2;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          gridDots.push({
            x: i * gridSize,
            y: j * gridSize,
            opacity: Math.random() * 0.5 + 0.1,
            pulseSpeed: Math.random() * 0.01 + 0.005
          });
        }
      }
    };
    
    createGrid();
    window.addEventListener('resize', createGrid);
    
    // Grid animation
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid points
      gridDots.forEach(dot => {
        dot.opacity += Math.sin(Date.now() * dot.pulseSpeed) * 0.005;
        dot.opacity = Math.max(0.1, Math.min(0.6, dot.opacity));
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${dot.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('resize', createGrid);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gaming-darker">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ opacity: 0.5 }}
      />
      
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gaming-dark/0 via-gaming-dark/60 to-gaming-dark"
      />
      
      <div className="container mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <h2 className="inline-block font-orbitron text-sm md:text-base tracking-[0.2em] bg-gaming-accent/50 text-neon-blue px-4 py-1 rounded-full">
                NEXT-GEN PERFORMANCE
              </h2>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gradient">UNLEASH</span> NEXT-LEVEL 
              <br />
              <span className="text-white">POWER</span> – DELL GAMING
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience unrivaled power with Dell's Alienware and G-Series gaming laptops. 
              Engineered for victory, designed for dominance.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="btn-neon flex items-center gap-2">
                Shop Now <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border border-gray-600 text-white hover:bg-white/5">
                Explore Models
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-orbitron text-neon-blue text-xl md:text-2xl font-bold">165Hz+</h3>
                <p className="text-sm text-gray-400">Display Refresh</p>
              </div>
              <div className="text-center">
                <h3 className="font-orbitron text-neon-blue text-xl md:text-2xl font-bold">RTX 40</h3>
                <p className="text-sm text-gray-400">Series Graphics</p>
              </div>
              <div className="text-center">
                <h3 className="font-orbitron text-neon-blue text-xl md:text-2xl font-bold">13th Gen</h3>
                <p className="text-sm text-gray-400">Intel Core</p>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto lg:ml-auto lg:mr-0 max-w-md lg:max-w-none">
            {/* Enhanced image container with stronger glow effect */}
            <div className="relative p-4 bg-gaming-darker/80 rounded-lg border-2 border-neon-blue shadow-[0_0_20px_rgba(0,240,255,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Gaming Laptop" 
                className="w-full h-auto object-contain rounded z-10 relative shadow-inner shadow-neon-blue/40"
                aria-label="High-performance Gaming Laptop"
              />
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg border-2 border-neon-blue animate-pulse-neon"></div>
            </div>
            
            {/* Enhanced glow effects */}
            <div className="absolute -inset-2 bg-neon-blue/25 rounded-lg blur-xl -z-10"></div>
            <div className="absolute -inset-4 bg-neon-blue/15 rounded-lg blur-2xl -z-20"></div>
            <div className="absolute -inset-6 bg-neon-blue/5 rounded-lg blur-3xl -z-30"></div>
            
            {/* RGB lighting effects */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500/20 rounded-full blur-xl mix-blend-screen"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl mix-blend-screen"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-xl mix-blend-screen"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
