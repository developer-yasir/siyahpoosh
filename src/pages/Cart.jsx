import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center py-20">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-medium mb-4">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8">Start adding some beautiful pieces to your collection</p>
                        <Link
                            to="/shop"
                            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-medium mb-12">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex gap-6 pb-6 border-b border-gray-200">
                                <Link to={`/product/${item.id}`} className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-2">
                                        <Link to={`/product/${item.id}`} className="font-medium hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="w-12 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex justify-between font-medium text-lg">
                                    <span>Total</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                            </div>
                            <Link
                                to="/checkout"
                                className="block w-full bg-black text-white text-center py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mb-4"
                            >
                                Proceed to Checkout
                            </Link>
                            <Link
                                to="/shop"
                                className="block w-full text-center py-4 text-sm text-gray-600 hover:text-black transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
