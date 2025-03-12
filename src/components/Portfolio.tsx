
import React, { useState, useEffect } from 'react';
import { initAnimations } from '@/utils/animations';

interface PortfolioItemProps {
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ category, title, description, imageSrc }) => {
  return (
    <div className="stagger-item opacity-0 group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-burgundy/5 mb-4">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xl font-serif text-burgundy">PB</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-burgundy/70 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-all duration-300">
          <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
          </p>
        </div>
      </div>
      <div>
        <span className="text-xs uppercase tracking-wider text-burgundy font-medium">{category}</span>
        <h3 className="text-lg font-serif font-semibold mt-1">{title}</h3>
        <p className="text-sm text-charcoal/70 mt-1">{description}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    initAnimations();
  }, [filter]);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'gift-boxes', name: 'Gift Boxes' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'custom', name: 'Custom' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'Gift Boxes',
      title: 'Luxury Anniversary Box',
      description: 'A handcrafted box for a 25th wedding anniversary gift.',
      type: 'gift-boxes',
      imageSrc: '/lovable-uploads/987aa27c-989e-4bed-a52e-a7f81090c42b.png'
    },
    {
      id: 2,
      category: 'Wedding',
      title: 'Royal Wedding Invitation',
      description: 'Custom designed invitations for a royal-themed wedding.',
      type: 'wedding'
    },
    {
      id: 3,
      category: 'Custom',
      title: 'Corporate Gift Package',
      description: 'Bespoke branded gifts for corporate clients.',
      type: 'custom'
    },
    {
      id: 4,
      category: 'Gift Boxes',
      title: 'Birthday Surprise Box',
      description: 'A specially crafted birthday gift box with compartments.',
      type: 'gift-boxes'
    },
    {
      id: 5,
      category: 'Wedding',
      title: 'Wedding Favor Boxes',
      description: 'Elegant favor boxes for wedding guests.',
      type: 'wedding'
    },
    {
      id: 6,
      category: 'Custom',
      title: 'Personalized Memory Box',
      description: 'Custom memory box for preserving special moments.',
      type: 'custom'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              category={item.category}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
