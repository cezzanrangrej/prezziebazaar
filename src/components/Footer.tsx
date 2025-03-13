import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-serif font-bold text-white">Prezzie</span>
              <span className="text-2xl font-serif font-bold text-gold">Bazaar</span>
            </div>
            <p className="text-gray-400 mb-6">
              Handcrafted with love and precision,
              we create beautiful keepsakes for 
              life's most cherished moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-burgundy transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-burgundy transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-burgundy transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Gift Boxes</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Organizers</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Wedding Invitations</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Brand Merchandise</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Custom Cards</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-gray-400">Address:</span>
                <span className="text-white ml-2">
                  Creative Hub, C-5, Raja Park, Jaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex">
                <span className="text-gray-400">Phone:</span>
                <a href="tel:+919876543210" className="text-white ml-2 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:prezziebazaar@gmail.com" className="text-white ml-2 hover:text-gold transition-colors">
                  prezziebazaar@gmail.com
                </a>
              </li>
              <li className="flex">
                <span className="text-gray-400">Hours:</span>
                <span className="text-white ml-2">
                  Mon - Sat: 10:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} Prezzie Bazaar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
