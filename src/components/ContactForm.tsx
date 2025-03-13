
import React, { useState } from 'react';
import { Gift, Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  product: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      product: "Gift Boxes",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Create a formatted email body 
      const emailBody = `
        Name: ${values.name}
        Email: ${values.email}
        Phone: ${values.phone || 'Not provided'}
        Interested In: ${values.product}
        Message: ${values.message}
      `;
      
      // Use EmailJS or similar service to send email
      const response = await fetch('https://formsubmit.co/ajax/prezziebazaar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          _subject: `New Inquiry about ${values.product} from ${values.name}`,
          message: emailBody,
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Inquiry Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        form.reset();
        setShowDialog(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          
          <div className="lg:w-7/12 animate-on-scroll-right">
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-semibold mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-charcoal">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-charcoal">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-charcoal">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your phone number" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="product"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-charcoal">Interested In</FormLabel>
                          <FormControl>
                            <select
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                              {...field}
                            >
                              <option value="Gift Boxes">Gift Boxes</option>
                              <option value="Organizers">Organizers</option>
                              <option value="Wedding Invitations">Wedding Invitations</option>
                              <option value="Brand Merchandise">Brand Merchandise</option>
                              <option value="Custom Cards">Custom Cards</option>
                              <option value="Other">Other / Custom Project</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-charcoal">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Tell us about your project..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
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
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Thank You!</DialogTitle>
            <DialogDescription>
              Your message has been sent successfully. We'll get back to you as soon as possible at the email address you provided.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button 
              onClick={() => setShowDialog(false)}
              className="w-full bg-burgundy hover:bg-burgundy-light"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
