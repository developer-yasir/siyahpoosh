import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "The Velvet Midnight",
      price: 129.00,
      category: "abayas",
      image: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverImage: "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Sapphire Grace",
      price: 145.00,
      category: "hijabs",
      image: "https://images.pexels.com/photos/7945934/pexels-photo-7945934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverImage: "https://images.pexels.com/photos/7945934/pexels-photo-7945934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Noir Elegance",
      price: 189.00,
      category: "abayas",
      image: "https://images.pexels.com/photos/8839883/pexels-photo-8839883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverImage: "https://images.pexels.com/photos/8839883/pexels-photo-8839883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Ivory Silk",
      price: 199.00,
      category: "accessories",
      image: "https://images.pexels.com/photos/6069002/pexels-photo-6069002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverImage: "https://images.pexels.com/photos/6069002/pexels-photo-6069002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  return (
    <CartProvider>
      <Router>
        <div className="bg-background min-h-screen">
          <Header />

          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
