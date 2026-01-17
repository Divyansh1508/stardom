import React from "react";
import HeroSlider from "../components/HeroSlider";
import { PRODUCTS, CATEGORIES } from "../constants";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // Get first 4 products for featured section
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />

      {/* Features Banner */}
      <div className="bg-white py-12 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center space-x-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-gold-600">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Free Premium Delivery
                </h3>
                <p className="text-sm text-gray-500">On all orders</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-gold-600">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Extended Warranty</h3>
                <p className="text-sm text-gray-500">
                  5-year coverage included
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-gold-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">24/7 Support</h3>
                <p className="text-sm text-gray-500">
                  Expert assistance anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collection */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-gold-600">
                Best Sellers
              </span>
              <h2 className="mt-2 font-serif text-4xl font-bold text-slate-900">
                Trending Now
              </h2>
            </div>
            <Link
              to="/products"
              className="group flex items-center font-semibold text-slate-900 hover:text-gold-600"
            >
              View All{" "}
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold text-slate-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat, idx) => (
              <Link
                to={`/products?cat=${cat}`}
                key={cat}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200"
              >
                <img
                  // Use actual product images from assets folder
                  src={
                    cat === "Fans"
                      ? "/assets/stardom product (1)-20250823T125051Z-1-001/stardom product (1)/fan/eagle blue/eagle-ultra-high-speed-24-inch-50-0-1-ceiling-fan-600-0-stardom-original-imah2ts2bvbhr6gp.jpg"
                      : cat === "Geysers"
                        ? "/assets/stardom product (1)-20250823T125051Z-1-001/stardom product (1)/geyser electric/Geyser main Image.jpg"
                        : cat === "Room Heaters"
                          ? "/assets/stardom product (1)-20250823T125051Z-1-001/stardom product (1)/room heater/Room-Heater-1.jpg"
                          : `https://picsum.photos/600/800?random=${idx + 10}`
                  }
                  alt={cat}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">{cat}</h3>
                  <span className="mt-2 inline-block text-sm font-medium text-gold-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Kitchen"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
            Upgrade Your Lifestyle
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-200">
            Join thousands of satisfied customers who have transformed their
            homes with Stardom Appliances.
          </p>
          <Link
            to="/products"
            className="inline-block rounded-none bg-gold-500 px-10 py-4 text-base font-bold uppercase tracking-widest text-slate-900 transition-transform hover:scale-105 hover:bg-gold-400"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
