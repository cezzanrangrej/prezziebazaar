
import React, { useState, useEffect, useRef } from 'react';
import { initAnimations } from '@/utils/animations';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { ShoppingBag, Gift, Tag } from 'lucide-react';

interface PortfolioItemProps {
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ category, title, description, imageSrc, link }) => {
  return (
    <div className="portfolio-item opacity-0 transform translate-y-8 transition-all duration-700 group cursor-pointer">
      <a href={link}>
        <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-burgundy/5 mb-4 transition-all duration-300 group-hover:shadow-xl">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                {category === 'Carry Bags' && <ShoppingBag className="w-8 h-8 text-burgundy" />}
                {category === 'Jewellery Boxes' && <Gift className="w-8 h-8 text-burgundy" />}
                {category === 'Accessories' && <Tag className="w-8 h-8 text-burgundy" />}
                {!['Carry Bags', 'Jewellery Boxes', 'Accessories'].includes(category) && (
                  <img 
                    src="/lovable-uploads/95f9abca-d08f-4b34-9662-9ba1ab31ca2d.png" 
                    alt="Prezzie Bazaar Logo" 
                    className="w-10 h-10 object-contain"
                  />
                )}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-burgundy/70 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-all duration-300">
            <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-serif font-semibold">{title}</h3>
              <p className="text-sm mt-2">{description}</p>
              <span className="inline-block mt-3 px-4 py-2 border border-white/50 rounded-full text-sm">View Project</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-burgundy font-medium">{category}</span>
          <h3 className="text-lg font-serif font-semibold mt-1">{title}</h3>
          <p className="text-sm text-charcoal/70 mt-1">{description}</p>
        </div>
      </a>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    initAnimations();
    
    // Custom scroll animation for portfolio items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
    
    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, [filter]);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'gift-boxes', name: 'Gift Boxes' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'custom', name: 'Custom' },
    { id: 'carry-bags', name: 'Carry Bags' },
    { id: 'jewellery-boxes', name: 'Jewellery Boxes' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'Gift Boxes',
      title: 'Luxury Anniversary Box',
      description: 'A handcrafted box for a 25th wedding anniversary gift.',
      type: 'gift-boxes',
      imageSrc: '/lovable-uploads/66b9abea-9cd4-4c30-b0dc-9fb30b5a7ac6.png',
      link: '#project-luxury-anniversary-box'
    },
    {
      id: 2,
      category: 'Wedding',
      title: 'Royal Wedding Invitation',
      description: 'Custom designed invitations for a royal-themed wedding.',
      type: 'wedding',
      link: '#project-royal-wedding-invitation'
    },
    {
      id: 3,
      category: 'Custom',
      title: 'Corporate Gift Package',
      description: 'Bespoke branded gifts for corporate clients.',
      type: 'custom',
      link: '#project-corporate-gift-package'
    },
    {
      id: 4,
      category: 'Gift Boxes',
      title: 'Birthday Surprise Box',
      description: 'A specially crafted birthday gift box with compartments.',
      type: 'gift-boxes',
      link: '#project-birthday-surprise-box'
    },
    {
      id: 5,
      category: 'Wedding',
      title: 'Wedding Favor Boxes',
      description: 'Elegant favor boxes for wedding guests.',
      type: 'wedding',
      link: '#project-wedding-favor-boxes'
    },
    {
      id: 6,
      category: 'Custom',
      title: 'Personalized Memory Box',
      description: 'Custom memory box for preserving special moments.',
      type: 'custom',
      link: '#project-personalized-memory-box'
    },
    // New items for the added categories
    {
      id: 7,
      category: 'Carry Bags',
      title: 'Elegant Paper Gift Bag',
      description: 'Premium paper gift bags with custom printing and handles.',
      type: 'carry-bags',
      link: '#project-elegant-paper-gift-bag'
    },
    {
      id: 8,
      category: 'Carry Bags',
      title: 'Luxury Shopping Tote',
      description: 'High-end branded shopping bags for retail boutiques.',
      type: 'carry-bags',
      link: '#project-luxury-shopping-tote'
    },
    {
      id: 9,
      category: 'Jewellery Boxes',
      title: 'Ring Presentation Box',
      description: 'Elegant box designed specifically for engagement rings.',
      type: 'jewellery-boxes',
      link: '#project-ring-presentation-box'
    },
    {
      id: 10,
      category: 'Jewellery Boxes',
      title: 'Multi-tier Jewelry Chest',
      description: 'Handcrafted wooden chest with multiple compartments.',
      type: 'jewellery-boxes',
      link: '#project-multi-tier-jewelry-chest'
    },
    {
      id: 11,
      category: 'Accessories',
      title: 'Custom Gift Tags',
      description: 'Personalized tags to complement your gift packaging.',
      type: 'accessories',
      link: '#project-custom-gift-tags'
    },
    {
      id: 12,
      category: 'Accessories',
      title: 'Premium Ribbon Collection',
      description: 'High-quality satin and grosgrain ribbons in various widths.',
      type: 'accessories',
      link: '#project-premium-ribbon-collection'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="animated-badge bg-burgundy/10 text-burgundy mb-4 inline-block">
            Our Creations
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Portfolio</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Explore our collection of handcrafted designs that have delighted our clients.
            Each piece tells a unique story of creativity and craftsmanship.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === filterItem.id
                  ? 'bg-burgundy text-white'
                  : 'bg-gray-100 text-charcoal hover:bg-gray-200'
              }`}
            >
              {filterItem.name}
            </button>
          ))}
        </div>
        
        <div 
          ref={portfolioRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              category={item.category}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
