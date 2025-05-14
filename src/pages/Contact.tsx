
import React, { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "gaming.support@dell.com",
      link: "mailto:gaming.support@dell.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "1-800-DELL-GAMING",
      link: "tel:18003355746"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      content: "Dell HQ, Round Rock, TX",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <main className="pt-24 pb-20 bg-gaming-dark bg-grid">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block font-orbitron text-sm md:text-base tracking-[0.2em] bg-gaming-accent/50 text-neon-blue px-4 py-1 rounded-full mb-4">
              GET IN TOUCH
            </h2>
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              CONTACT <span className="text-gradient">SUPPORT</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our gaming experts are ready to assist you with any questions about 
              Dell gaming laptops, technical support, or purchasing advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            <div>
              <div className="bg-gaming-darker rounded-lg border border-gaming-accent p-6 md:p-8 mb-8">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-white">
                  Send Us a Message
                </h3>
                
                {submitted ? (
                  <div className="bg-neon-blue/10 border border-neon-blue rounded-lg p-6 text-center">
                    <div className="inline-block p-3 bg-neon-blue/20 rounded-full mb-4">
                      <Send size={28} className="text-neon-blue" />
                    </div>
                    <h4 className="text-xl font-orbitron font-bold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-300">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-gaming-dark border border-gaming-accent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-gaming-dark border border-gaming-accent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full bg-gaming-dark border border-gaming-accent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Warranty Claim">Warranty Claim</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-gaming-dark border border-gaming-accent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn-neon w-full py-3 font-medium flex items-center justify-center gap-2"
                      >
                        <Send size={18} />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-gaming-darker rounded-lg border border-gaming-accent p-6 md:p-8 mb-8">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-gaming-accent/50 p-3 rounded-lg text-neon-blue group-hover:bg-neon-blue/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">{info.title}</h4>
                        <p className="text-gray-400 group-hover:text-neon-blue transition-colors">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gaming-darker rounded-lg border border-gaming-accent p-6 md:p-8">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-white">
                  Support Hours
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-neon-blue font-medium">7AM - 11PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-neon-blue font-medium">9AM - 9PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-neon-blue font-medium">10AM - 6PM EST</span>
                  </div>
                  
                  <p className="text-sm text-gray-400 border-t border-gaming-accent pt-4 mt-4">
                    Priority support available for Alienware Premium customers 24/7.
                  </p>
                </div>
              </div>
              
              <div className="bg-gaming-accent/20 border border-neon-blue/30 rounded-lg p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-neon-blue/20 p-2 rounded-full">
                    <Phone size={20} className="text-neon-blue" />
                  </div>
                  <h4 className="font-orbitron text-lg font-bold text-white">Need urgent assistance?</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Our premium support team is available to help you immediately with any technical issues.
                </p>
                <a href="tel:18003355746" className="btn-neon inline-flex items-center gap-2">
                  <Phone size={16} />
                  <span>Call Premium Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gaming-darker py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="font-orbitron text-xl font-bold tracking-wider text-white">
                  DELL
                </span>
                <span className="text-xs tracking-widest text-neon-blue">
                  GAMING
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Engineered for the ultimate gaming experience
              </p>
            </div>
            
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Dell Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
