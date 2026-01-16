import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-4 text-gray-600">We'd love to hear from you. Please send us a message or visit our showroom.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
          
          {/* Form Section */}
          <div className="p-8 md:p-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="name" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastname" className="mb-2 block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastname" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="flex w-full items-center justify-center space-x-2 rounded-md bg-slate-900 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="relative bg-slate-900 p-8 text-white md:p-12">
            <div className="absolute inset-0 z-0 opacity-20">
               {/* Pattern overlay or image could go here */}
               <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop" className="h-full w-full object-cover" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              <p className="text-slate-300">
                Our support team is available Monday through Friday, 9am to 6pm EST.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="mt-1 text-slate-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-400">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="mt-1 text-slate-300">support@stardom.com</p>
                    <p className="text-sm text-slate-400">Online 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Headquarters</h3>
                    <p className="mt-1 text-slate-300">123 Innovation Blvd<br />Tech District, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;