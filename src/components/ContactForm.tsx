
import React from 'react';
import { Gift, Mail, Phone, Wand2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12 animate-on-scroll-left">
            <div className="animated-badge bg-burgundy/10 text-burgundy mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Create Something Beautiful Together</h2>
            <p className="text-charcoal/70 mb-8">
              Have a project in mind? We'd love to hear about it. Contact us and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 w-10 h-10 flex-shrink-0 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-charcoal">Phone</h3>
                  <p className="mt-1 text-charcoal/70">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 w-10 h-10 flex-shrink-0 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-charcoal">Email</h3>
                  <p className="mt-1 text-charcoal/70">prezziebazaar@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 w-10 h-10 flex-shrink-0 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <Gift className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-charcoal">Workshop</h3>
                  <p className="mt-1 text-charcoal/70">
                    Creative Hub, C-5<br />
                    Raja Park, Jaipur<br />
                    Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 animate-on-scroll-right flex items-center justify-center">
            <div className="w-full max-w-md">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a 
                    href="#" 
                    className="group block w-full transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => e.preventDefault()} // Remove this when you add your link
                  >
                    <div className="bg-cream hover:bg-gold/20 rounded-2xl p-8 shadow-md hover:shadow-xl border border-gold/20 transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 rounded-full bg-gold/10 flex items-center justify-center text-burgundy group-hover:bg-gold/30 transition-all duration-300">
                          <Wand2 className="h-10 w-10 group-hover:text-gold group-hover:scale-110 transition-all duration-300" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-3 text-charcoal group-hover:text-burgundy transition-colors duration-300">
                          Customize Your Own Happiness
                        </h3>
                        <p className="text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
                          Create a unique, personalized gift experience tailored just for you or your loved ones.
                        </p>
                        <Button 
                          className="mt-6 bg-burgundy hover:bg-burgundy-light text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group-hover:scale-105"
                        >
                          Start Customizing
                        </Button>
                      </div>
                    </div>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-6 bg-cream border border-gold/20 shadow-lg">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium text-burgundy">Personalize Your Gift</h4>
                      <p className="text-sm text-charcoal/70">
                        Choose materials, colors, designs, and add personal messages to create something truly special.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
