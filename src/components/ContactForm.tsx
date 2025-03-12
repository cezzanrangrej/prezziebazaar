
import React, { useState } from 'react';
import { Gift, Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Gift Boxes',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: 'Gift Boxes',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
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
              Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you as soon as possible.
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
                  <p className="mt-1 text-charcoal/70">hello@prezziebazaar.com</p>
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
          
          <div className="lg:w-7/12 animate-on-scroll-right">
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-1">
                      Interested In
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                    >
                      <option value="Gift Boxes">Gift Boxes</option>
                      <option value="Organizers">Organizers</option>
                      <option value="Wedding Invitations">Wedding Invitations</option>
                      <option value="Brand Merchandise">Brand Merchandise</option>
                      <option value="Custom Cards">Custom Cards</option>
                      <option value="Other">Other / Custom Project</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-burgundy hover:bg-burgundy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
