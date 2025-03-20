
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '#products' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="./lovable-uploads/95f9abca-d08f-4b34-9662-9ba1ab31ca2d.png" 
                alt="Prezzie Bazaar - Your One-Stop Gift Hub" 
                className="h-12 md:h-16 transition-all duration-300"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-serif font-bold text-burgundy">Prezzie</span>
                <span className="text-xl font-serif font-bold text-gold">Bazaar</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-charcoal hover:text-burgundy font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-burgundy after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
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
          'fixed inset-0 flex flex-col items-center justify-center bg-cream bg-opacity-98 transform transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="space-y-8 text-center">
          <div className="mb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src="./lovable-uploads/95f9abca-d08f-4b34-9662-9ba1ab31ca2d.png" 
                alt="Prezzie Bazaar - Your One-Stop Gift Hub" 
                className="h-20 mx-auto"
              />
              <div className="mt-3">
                <span className="text-2xl font-serif font-bold text-burgundy">Prezzie</span>
                <span className="text-2xl font-serif font-bold text-gold">Bazaar</span>
              </div>
            </Link>
          </div>
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="block text-2xl font-medium text-charcoal hover:text-burgundy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block text-2xl font-medium text-charcoal hover:text-burgundy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
