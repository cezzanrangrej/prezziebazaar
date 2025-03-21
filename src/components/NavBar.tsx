import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Detect which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });
      
      if (window.scrollY < 100) {
        setCurrentSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setCurrentSection('');
  };

  const navLinks = [
    { name: 'Home', href: null, onClick: scrollToTop },
    { name: 'Products', href: '#products' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const getSectionTitle = (sectionId: string) => {
    const link = navLinks.find(link => link.href === `#${sectionId}`);
    return link ? link.name : '';
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled 
          ? 'py-1 bg-white shadow-md' 
          : 'py-2 bg-white md:py-4 md:bg-transparent'
      )}
    >
      {currentSection && isScrolled && (
        <button 
          onClick={scrollToTop}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md z-50"
          aria-label="Back to home"
        >
          <ChevronLeft className="h-5 w-5 text-burgundy" />
        </button>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a onClick={scrollToTop} href="#" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
              <img 
                src="/prezzie-porch/lovable-uploads/95f9abca-d08f-4b34-9662-9ba1ab31ca2d.png" 
                alt="Prezzie Bazaar - Your One-Stop Gift Hub" 
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-8 sm:h-10 md:h-12" : "h-10 sm:h-12 md:h-16"
                )}
              />
              <div className="flex flex-col sm:block">
                <span className={cn(
                  "font-serif font-bold text-burgundy transition-all duration-300",
                  isScrolled ? "text-xs sm:text-sm md:text-lg" : "text-sm sm:text-xl"
                )}>Prezzie</span>
                <span className={cn(
                  "font-serif font-bold text-gold transition-all duration-300",
                  isScrolled ? "text-xs sm:text-sm md:text-lg" : "text-sm sm:text-xl"
                )}>Bazaar</span>
              </div>
            </a>
          </div>
          
          {/* Current section indicator (mobile) */}
          {currentSection && isScrolled && (
            <div className="md:hidden mx-auto absolute left-1/2 transform -translate-x-1/2">
              <span className="text-sm font-medium text-burgundy">{getSectionTitle(currentSection)}</span>
            </div>
          )}
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.onClick ? (
                <a
                  key={link.name}
                  onClick={link.onClick}
                  className="text-charcoal hover:text-burgundy font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-burgundy after:transition-all hover:after:w-full cursor-pointer"
                >
                  {link.name}
                </a>
              ) : link.href?.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-charcoal hover:text-burgundy font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
                    currentSection === link.href.substring(1) 
                      ? "text-burgundy after:w-full after:bg-burgundy" 
                      : "after:w-0 after:bg-burgundy hover:after:w-full"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href || ''}
                  className="text-charcoal hover:text-burgundy font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-burgundy after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-burgundy focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 pt-20 flex flex-col bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="space-y-6 text-center mt-6">
            {navLinks.map((link) => (
              link.onClick ? (
                <a
                  key={link.name}
                  onClick={link.onClick}
                  className="block text-xl font-medium text-charcoal hover:text-burgundy cursor-pointer py-2"
                >
                  {link.name}
                </a>
              ) : link.href?.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block text-xl font-medium hover:text-burgundy py-2",
                    currentSection === link.href.substring(1) ? "text-burgundy" : "text-charcoal"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href || ''}
                  className="block text-xl font-medium text-charcoal hover:text-burgundy py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
      
      {/* Overlay to close the menu when clicked outside */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default NavBar;
