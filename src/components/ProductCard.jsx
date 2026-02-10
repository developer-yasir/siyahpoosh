import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link to={`/product/${product.id}`} className="group cursor-pointer block">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4">
                {/* Main Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Image (Back View) */}
                <img
                    src={product.hoverImage}
                    alt={`${product.name} Back View`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                />

                {/* Quick Add Button - Appears on hover */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    <button
                        onClick={handleQuickAdd}
                        className="w-full bg-white/90 backdrop-blur-md text-primary py-3 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors shadow-lg"
                    >
                        Quick Add
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="font-medium text-sm text-primary mb-1 group-hover:text-black transition-colors">{product.name}</h3>
                <p className="text-sm text-secondary font-light">${product.price.toFixed(2)}</p>
                {/* Color Swatches (Fake for now) */}
                <div className="flex space-x-1 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-full bg-[#f6e6d9]"></div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
