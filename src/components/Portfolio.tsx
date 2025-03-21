import React, { useState, useEffect, useRef } from 'react';
import { initAnimations } from '@/utils/animations';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { ShoppingBag, Gift, Tag, ExternalLink, Image } from 'lucide-react';

interface PortfolioItemProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  externalLink?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ category, title, description, imageSrc, link, externalLink }) => {
  const [imageError, setImageError] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (externalLink) {
      e.preventDefault();
      window.open(externalLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Try multiple paths to find the correct image
  const getImageUrl = () => {
    // If it's already a full URL, return it directly
    if (imageSrc.startsWith('http')) {
      return imageSrc;
    }
    
    // Generate an array of possible paths with different prefixes
    const possiblePaths = [
      `/prezzie-porch/lovable-uploads/${imageSrc}`,
      `/lovable-uploads/${imageSrc}`,
      `/assets/${imageSrc}`,
      `/${imageSrc}`,
      imageSrc
    ];
    
    // For development purposes, return the first path as the default option
    return possiblePaths[0];
  };

  // Fallback to placeholder if image fails to load
  const getFallbackUrl = () => {
    return `https://via.placeholder.com/600x400/e11d48/ffffff?text=${title.replace(/\s+/g, '+')}`;
  };

  return (
    <div className="portfolio-item opacity-0 transform translate-y-8 transition-all duration-700 group cursor-pointer">
      <a href={link} onClick={handleClick} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-burgundy/5 mb-4 transition-all duration-300 group-hover:shadow-xl">
          {imageSrc && !imageError ? (
            <img 
              src={getImageUrl()} 
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              onError={handleImageError}
            />
          ) : (
            <div className="absolute inset-0 bg-burgundy/10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                {category === 'Carry Bags' && <ShoppingBag className="w-8 h-8 text-burgundy" />}
                {category === 'Boxes' && <Gift className="w-8 h-8 text-burgundy" />}
                {category === 'Accessories' && <Tag className="w-8 h-8 text-burgundy" />}
                {category === 'Wedding' && <Image className="w-8 h-8 text-burgundy" />}
                {(category === 'Gifts' || category === 'Gift') && <Gift className="w-8 h-8 text-burgundy" />}
                {!['Carry Bags', 'Boxes', 'Accessories', 'Wedding', 'Gifts', 'Gift'].includes(category) && (
                  <div className="w-10 h-10 flex items-center justify-center bg-burgundy/10 rounded-full">
                    <span className="text-burgundy font-bold text-lg">P</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-serif font-semibold">{title}</h3>
              <p className="text-sm mt-2">{description}</p>
              <span className="inline-block mt-3 px-4 py-2 border border-white/50 rounded-full text-sm">
                {externalLink ? 'Visit Instagram' : 'View Project'}
              </span>
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
    { id: 'gifts', name: 'Gifts' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'custom', name: 'Custom' },
    { id: 'carry-bags', name: 'Carry Bags' },
    { id: 'boxes', name: 'Boxes' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'Custom',
      title: 'Pamphlets,Tags & Stickers',
      description: 'Get your customised pamplets, tags & stickers for every purpose.',
      type: 'custom',
      imageSrc: '1.jpg',
      link: "https://drive.google.com/drive/folders/1zfncQHpmSfbypZ6DHjyNoGBdZLr_hMwh"
    },
    {
      id: 2,
      category: 'Wedding',
      title: 'Royal Wedding Invitation',
      description: 'Custom designed invitations for a royal-themed wedding.',
      type: 'wedding',
      imageSrc: 'WhatsApp Image 2025-03-15 at 00.08.01_4214b9f2.jpg',
      link: "https://drive.google.com/drive/folders/1KufJhzqWHo7DMl_cfUqeXqJZnkSfJDFv?usp=drive_link",
    },
    {
      id: 3,
      category: 'Gifts',
      title: 'Corporate Gift Package',
      description: 'Bespoke branded gifts for corporate clients.',
      type: 'gifts',
      imageSrc: 'WhatsApp Image 2025-03-15 at 00.10.28_11cc942f.jpg',
      link: "https://drive.google.com/drive/folders/1BOvD3DMQPgkmxknFFokse6U-BanWW9qh?usp=drive_link"
    },
    {
      id: 4,
      category: 'Gift',
      title: 'Gift Hampers',
      description: 'A specially crafted birthday gift box with compartments.',
      type: 'gifts',
      imageSrc: 'WhatsApp Image 2025-03-13 at 23.07.26_281ad9b2.jpg',
      link: "https://drive.google.com/drive/folders/1UToBW9PweebmEYqfmgU1xid27GIXK0VD"
    },
    {
      id: 5,
      category: 'Custom',
      title: 'Menu Cards',
      description: 'Elegant menu cards for your cafes & restaurent.',
      type: 'custom',
      imageSrc: 'WhatsApp Image 2025-03-15 at 00.04.29_18d3aa57.jpg',
      link: "https://drive.google.com/drive/folders/1LFrC-iwk4l0VHADtN8jUgzgBZHVRIzn4?usp=drive_link"
    },
    {
      id: 6,
      category: 'Custom',
      title: 'Personal Diaries & Planers',
      description: 'Custom memory box for preserving special moments.',
      type: 'custom',
      imageSrc: 'WhatsApp Image 2025-03-15 at 00.17.43_f88e5491.jpg',
      link: "https://drive.google.com/drive/folders/12h1rKBKIEaeLvg6-Z_lu0abx6VX5TO4t?usp=drive_link"
    },
    {
      id: 7,
      category: 'Boxes',
      title: 'Rigid Box',
      description: 'Premium paper gift bags with custom printing and handles.',
      type: 'boxes',
      imageSrc: 'WhatsApp Image 2025-03-15 at 00.35.52_2dd6ac79.jpg',
      link: "https://drive.google.com/drive/folders/177mp-Fz6XdnmO5jGdLxOiYNej883Dv7J"
    },
    {
      id: 8,
      category: 'Carry Bags',
      title: 'Paper Bags',
      description: 'High-end branded shopping bags for retail boutiques.',
      type: 'carry-bags',
      imageSrc: 'WhatsApp Image 2025-03-15 at 17.02.30_4002bc08.jpg',
      link: "https://drive.google.com/drive/folders/1AkCrAeAqfisAnZd9EP8kZAsz_kCO8qe0"
    },
    {
      id: 9,
      category: 'Boxes',
      title: 'Jewellery Boxes',
      description: 'Elegant box designed specifically for engagement rings.',
      type: 'boxes',
      imageSrc: 'WhatsApp Image 2025-03-15 at 05.03.28_78449e28.jpg',
      link: "https://drive.google.com/drive/folders/1km61MaFm5ZcUlh-MTiawMMNOsh6KqHN3"
    },
    {
      id: 10,
      category: 'Accessories',
      title: 'Accessories',
      description: 'Handcrafted wooden box for your accessories.',
      type: 'accessories',
      imageSrc: 'WhatsApp Image 2025-03-15 at 16.56.13_d4a7983c.jpg',
      link: "https://drive.google.com/drive/folders/1IG6OvJNtB3QfVNM_wrmexCen7Vfisndu?usp=drive_link"
    },
    {
      id: 11,
      category: 'Custom',
      title: 'Visiting Cards',
      description: 'Personalized tags to complement your gift packaging.',
      type: 'custom',
      imageSrc: 'WhatsApp Image 2025-03-15 at 19.59.07_c1a51fea.jpg',
      link: "https://drive.google.com/drive/folders/1vw8D1i3C94gv4xUp02Bu3tc-5tlZRFIA?usp=drive_link"
    },
    {
      id: 12,
      category: 'Gifts',
      title: 'Gift Envelopes',
      description: 'High-quality satin and grosgrain ribbons in various widths.',
      type: 'gifts',
      imageSrc: 'WhatsApp Image 2025-03-15 at 19.59.08_04c57302.jpg',
      link: "https://drive.google.com/drive/folders/1bsKobcyEl1O4O8zCgxucUJOHVqeDmoGc?usp=drive_link"
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
