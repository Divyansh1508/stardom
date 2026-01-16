import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('cat');
  
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam as any)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('All');
    }
  }, [categoryParam]);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-slate-900">Our Collection</h1>
          <p className="text-gray-600">Discover premium appliances for every corner of your home.</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 border-b border-gray-200 pb-6">
           <button 
             onClick={() => setActiveCategory('All')}
             className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
               activeCategory === 'All' 
                 ? 'bg-slate-900 text-white shadow-md' 
                 : 'bg-white text-slate-600 hover:bg-gray-100'
             }`}
           >
             All Products
           </button>
           {CATEGORIES.map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                 activeCategory === cat
                   ? 'bg-slate-900 text-white shadow-md' 
                   : 'bg-white text-slate-600 hover:bg-gray-100'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center text-gray-500">
            <Filter size={48} className="mb-4 text-gray-300" />
            <p className="text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;