
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const heroImage = heroRef.current.querySelector('.hero-image') as HTMLElement;
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (heroImage && heroContent) {
        heroImage.style.transform = `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`;
        heroContent.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden bg-cream"
      style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a78bfa\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-cream to-cream/80 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="hero-content w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <div className="animated-badge bg-burgundy/10 text-burgundy mb-4 inline-block px-4 py-2 rounded-full animate-fade-in">
            <span className="text-xs sm:text-sm font-medium">Handcrafted in Jaipur, India</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in">
            <span className="block text-charcoal">Artisanal Gift Boxes</span>
            <span className="block text-burgundy">& Wedding Invitations</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-lg animate-delay-100">
            Exquisite handcrafted treasures for life's most meaningful moments. Each piece telling a unique story, designed with love and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-delay-200">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-burgundy hover:bg-burgundy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy transition-all"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-burgundy rounded-md text-base font-medium text-burgundy bg-transparent hover:bg-burgundy/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy transition-all"
            >
              Request Custom Design
            </a>
          </div>
        </div>
        
        <div className="hero-image w-full md:w-1/2 relative animate-float">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/50 shadow-2xl border border-white/60 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-burgundy/5 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/95f9abca-d08f-4b34-9662-9ba1ab31ca2d.png" 
                      alt="Prezzie Bazaar Logo" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-charcoal">Elegant Gift Box</h3>
                  <p className="text-sm text-charcoal/70 mt-2">Handcrafted with love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#products" className="text-charcoal/50 hover:text-burgundy transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
