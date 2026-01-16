import React from "react";
import {
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star size={24} className="text-gold-400" fill="currentColor" />
              <span className="font-serif text-2xl font-bold">STARDOM</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Elevating home living with premium appliances that blend
              innovation, style, and performance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-gold-400"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-gold-400"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-gold-400"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-slate-300 hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-slate-300 hover:text-white"
                >
                  Shop Collection
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-slate-300 hover:text-white"
                >
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-slate-300 hover:text-white"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold-400">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/products?cat=Fans"
                  className="text-slate-300 hover:text-white"
                >
                  Fans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?cat=Geysers"
                  className="text-slate-300 hover:text-white"
                >
                  Geysers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?cat=Room Heaters"
                  className="text-slate-300 hover:text-white"
                >
                  Room Heaters
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold-400">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-0.5 shrink-0 text-gold-500"
                />
                <span>
                  123 Innovation Blvd,
                  <br />
                  Tech District, NY 10012
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold-500" />
                <span>support@stardom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Stardom Appliances. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
