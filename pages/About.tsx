import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Office" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl font-bold text-white">About Stardom</h1>
            <p className="text-xl text-gray-300">Redefining excellence in home appliances since 1995.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto text-gray-600">
          <h2 className="font-serif text-3xl font-bold text-slate-900">Our Mission</h2>
          <p>
            At Stardom Appliances, we believe that the home is the center of life. Our mission is to enhance your daily rituals through appliances that combine cutting-edge technology with timeless design. We don't just sell machines; we sell experiences that make your life easier, more efficient, and more enjoyable.
          </p>
          <p>
            From the kitchen to the laundry room, every product in our collection is curated for performance, durability, and aesthetic appeal.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <Award size={32} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Quality First</h3>
            <p className="text-sm text-gray-500">We partner with top-tier manufacturers to ensure every appliance meets rigorous standards.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <Users size={32} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Customer Focus</h3>
            <p className="text-sm text-gray-500">Your satisfaction is our priority. Our support team is here to guide you every step of the way.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <Heart size={32} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Eco-Friendly</h3>
            <p className="text-sm text-gray-500">We prioritize energy-efficient appliances that save you money and protect the planet.</p>
          </div>
        </div>
      </div>
      
      {/* Team Image Banner */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
             <h2 className="mb-12 font-serif text-3xl font-bold text-slate-900">Meet The Team</h2>
             <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                 {[1,2,3,4].map((i) => (
                     <div key={i} className="group overflow-hidden rounded-lg">
                         <img 
                            src={`https://picsum.photos/400/500?random=${i+20}`} 
                            alt="Team Member" 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                     </div>
                 ))}
             </div>
        </div>
      </div>
    </div>
  );
};

export default About;