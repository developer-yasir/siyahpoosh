import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = ({ products }) => {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    const categories = ['all', 'abayas', 'hijabs', 'accessories'];

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category?.toLowerCase() === filter);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
    });

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-medium mb-4">Shop All</h1>
                    <p className="text-gray-600">Discover our complete collection of modest fashion</p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b border-gray-200">
                    {/* Category Filter */}
                    <div className="flex gap-4 flex-wrap">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {sortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* No Results */}
                {sortedProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No products found in this category</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
