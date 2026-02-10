import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ProductCard from '../components/ProductCard';

const Home = ({ products }) => {
    return (
        <>
            <Hero />
            <BentoGrid />

            <main className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
                    <div>
                        <span className="text-xs font-medium tracking-widest uppercase text-secondary block mb-2">Latest Drops</span>
                        <h2 className="text-3xl md:text-4xl font-medium text-primary">New Arrivals</h2>
                    </div>
                    <a href="/shop" className="hidden md:block text-sm font-medium text-primary hover:text-secondary transition-colors mt-4 md:mt-0">
                        View All Products &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
