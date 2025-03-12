
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, rating }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm relative border border-gray-100 flex flex-col h-full">
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`inline h-5 w-5 ${
              i < rating ? 'text-gold fill-gold' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-lg italic text-charcoal/80 mb-6 flex-grow">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy mr-3">
          <span className="font-serif">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-medium text-charcoal">{author}</div>
          <div className="text-sm text-charcoal/60">{position}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      quote: "Prezzie Bazaar crafted the most beautiful wedding invitations for us. Their attention to detail and understanding of our vision was impeccable.",
      author: "Priya Sharma",
      position: "Bride",
      rating: 5
    },
    {
      quote: "The custom gift boxes created for our corporate event were absolutely stunning. Our clients were impressed with the quality and craftsmanship.",
      author: "Rajat Singhania",
      position: "Marketing Director",
      rating: 5
    },
    {
      quote: "I ordered a personalized memory box for my parents' anniversary, and it exceeded all my expectations. The design was elegant and the quality outstanding.",
      author: "Ananya Gupta",
      position: "Customer",
      rating: 5
    },
    {
      quote: "Their brand merchandising solutions helped our boutique stand out. The attention to detail and quality of materials used are exceptional.",
      author: "Vikram Malhotra",
      position: "Boutique Owner",
      rating: 4
    }
  ];
  
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialGroups.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialGroups.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="animated-badge bg-burgundy/10 text-burgundy mb-4 inline-block">
            Client Experiences
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            We take pride in delivering exceptional craftsmanship and service. 
            Here's what some of our clients have to say about their experience with Prezzie Bazaar.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {testimonialGroups[currentIndex]?.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-sm border border-gray-100 text-charcoal hover:text-burgundy transition-colors"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonialGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-burgundy' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-sm border border-gray-100 text-charcoal hover:text-burgundy transition-colors"
              aria-label="Next testimonials"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
