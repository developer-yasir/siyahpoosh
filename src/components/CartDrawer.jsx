import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-medium">Shopping Cart</h2>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="text-gray-400 hover:text-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p className="text-lg">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                                        <p className="text-gray-600 text-sm mb-2">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-gray-200">
                        <div className="flex justify-between mb-4">
                            <span className="text-lg font-medium">Total</span>
                            <span className="text-lg font-medium">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
