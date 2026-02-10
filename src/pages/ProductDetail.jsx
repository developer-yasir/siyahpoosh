import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
                    <a href="/shop" className="text-sm text-gray-600 hover:text-black">
                        Return to Shop
                    </a>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart({ ...product, selectedSize, quantity });
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <img src={product.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <img src={product.hoverImage} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <img src={product.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:pt-8">
                        <h1 className="text-4xl font-medium mb-4">{product.name}</h1>
                        <p className="text-3xl font-light mb-8">${product.price.toFixed(2)}</p>

                        <div className="mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                Experience the perfect blend of contemporary fashion and timeless elegance.
                                Crafted with premium materials for ultimate comfort and style.
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-medium">Size</label>
                                <button className="text-sm text-gray-600 hover:text-black">Size Guide</button>
                            </div>
                            <div className="flex gap-3">
                                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 rounded-lg border-2 text-sm font-medium transition-all ${selectedSize === size
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-300 hover:border-black'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-8">
                            <label className="text-sm font-medium block mb-4">Quantity</label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full border border-gray-300 hover:border-black transition-colors"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full border border-gray-300 hover:border-black transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mb-4"
                        >
                            Add to Cart
                        </button>

                        {/* Product Details */}
                        <div className="border-t border-gray-200 pt-8 space-y-4">
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="font-medium">Product Details</span>
                                    <span className="transition group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-gray-600 mt-4 text-sm">
                                    Premium quality fabric with elegant draping. Machine washable.
                                    Made with sustainable materials.
                                </p>
                            </details>
                            <details className="group border-t border-gray-200 pt-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="font-medium">Shipping & Returns</span>
                                    <span className="transition group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-gray-600 mt-4 text-sm">
                                    Free shipping on orders over $100. 30-day return policy.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
