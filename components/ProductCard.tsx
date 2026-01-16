import React from "react";
import { Product } from "../types";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-900/90 p-4 transition-transform duration-300 group-hover:translate-y-0">
          <button className="flex w-full items-center justify-center gap-2 rounded bg-gold-500 py-2 text-sm font-bold text-slate-900 transition-colors hover:bg-gold-400">
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {product.category}
        </div>
        <h3 className="mb-2 font-serif text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1">
          <Star size={14} className="fill-gold-400 text-gold-400" />
          <span className="text-sm font-medium text-slate-700">
            {product.rating}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            ₹{product.price.toLocaleString()}
          </span>
          <button className="text-sm font-medium text-gold-600 underline decoration-2 underline-offset-4 transition-colors hover:text-gold-700">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
