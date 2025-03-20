
import React, { useEffect } from 'react';
import { Gift, Mail, Package, ShoppingBag, Tag } from 'lucide-react';
import { initAnimations } from '@/utils/animations';

interface ProductCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  link: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ icon, title, description, index, link }) => {
  return (
    <a 
      href={link}
      className="stagger-item opacity-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group block"
    >
      <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center text-burgundy mb-4 group-hover:bg-burgundy group-hover:text-white transform transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-burgundy transition-colors">{title}</h3>
      <p className="text-charcoal/70 text-sm">{description}</p>
    </a>
  );
};

const ProductCategories: React.FC = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  const categories = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Gift Boxes",
      description: "Handcrafted gift boxes for special occasions, designed with love and attention to detail.",
      link: "#gift-boxes"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Organizers",
      description: "Beautifully designed organizers to keep your precious items safe and well-arranged."

    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Wedding Invitations",
      description: "Elegant, customized wedding invitations that reflect your unique love story.",
      link: "#wedding-invitations"
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Brand Merchandise",
      description: "Bespoke brand merchandise that elevates your corporate identity.",
      link: "#brand-merchandise"
    },
    {
      icon: <Tag className="h-6 w-6" />,
      title: "Custom Cards",
      description: "Personalized cards for birthdays, anniversaries, and special moments in life.",
      link: "#custom-cards"
    }
  ];

  return (
    <section id="products" className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="animated-badge bg-burgundy/10 text-burgundy mb-4 inline-block px-4 py-2 rounded-full">
            <span className="text-xs sm:text-sm font-medium">Our Offerings</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Exquisite Handmade Products</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Each piece is meticulously crafted with premium materials and artistic finesse, 
            ensuring a touch of elegance for every occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
          {categories.map((category, index) => (
            <ProductCategory 
              key={index}
              index={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
