import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X, Star } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "About Us", path: "#" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img
              src="./logo.png"
              alt="Stardom Appliances Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors hover:text-gold-600 ${
                      isActive ? "text-gold-600" : "text-slate-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="relative p-2 text-slate-700 hover:text-gold-600">
              <ShoppingBag size={24} />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-white">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-gray-100 bg-white`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-slate-50 text-gold-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-gold-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
