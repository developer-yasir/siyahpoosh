import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      name: "The Velvet Midnight",
      price: 129.00,
      image: "https://images.unsplash.com/photo-1510672054238-66236b28a8d0?q=80&w=1800&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1510672054238-66236b28a8d0?q=80&w=1800&auto=format&fit=crop" // ideally a back view
    },
    {
      id: 2,
      name: "Sapphire Grace",
      price: 145.00,
      image: "https://images.unsplash.com/photo-1579606829774-7221051fa8a3?q=80&w=1800&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1579606829774-7221051fa8a3?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Dusty Rose Ensemble",
      price: 89.00,
      image: "https://images.unsplash.com/photo-1588693246237-674b93198544?q=80&w=1800&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1588693246237-674b93198544?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Ivory Silk",
      price: 199.00,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop"
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <Hero />

      <BentoGrid />

      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-secondary block mb-2">Latest Drops</span>
            <h2 className="text-3xl md:text-4xl font-medium text-primary">New Arrivals</h2>
          </div>
          <a href="#" className="hidden md:block text-sm font-medium text-primary hover:text-secondary transition-colors mt-4 md:mt-0">
            View All Products &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            View All Products &rarr;
          </a>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 text-secondary py-20 text-xs">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="text-primary font-medium mb-4">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">New Arrivals</a></li>
                <li><a href="#" className="hover:underline">Bestsellers</a></li>
                <li><a href="#" className="hover:underline">Abayas</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-4">About</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Our Story</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                <li><a href="#" className="hover:underline">Size Guide</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <p className="mb-4 md:mb-0">&copy; 2024 Siyahpoosh. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary hover:text-secondary">Instagram</a>
              <a href="#" className="text-primary hover:text-secondary">Twitter</a>
              <a href="#" className="text-primary hover:text-secondary">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
