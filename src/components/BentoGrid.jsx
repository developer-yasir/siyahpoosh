import React from 'react';

const BentoGrid = () => {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-medium mb-4 text-primary tracking-tight">
                        Curated Collections
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto font-light">
                        Discover our meticulously designed pieces for every occasion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {/* Large Featured Item (Span 2 cols) */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer">
                        <img
                            src="https://images.pexels.com/photos/7945934/pexels-photo-7945934.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
                            alt="Summer Collection"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                            <span className="text-xs font-medium tracking-widest uppercase mb-2 text-gray-300">New Season</span>
                            <h3 className="text-3xl font-medium mb-2">Summer Elegance</h3>
                            <p className="text-gray-200 font-light hidden group-hover:block transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                Breathable fabrics designed for comfort and style.
                            </p>
                        </div>
                    </div>

                    {/* Tall Item (Span 1 col, 2 rows implicitly if expanded, but here just standard) */}
                    <div className="relative group overflow-hidden rounded-3xl cursor-pointer bg-surface">
                        <img
                            src="https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Accessories"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        <div className="absolute top-0 left-0 p-8">
                            <h3 className="text-2xl font-medium text-white mb-1">Accessories</h3>
                            <span className="text-sm text-white/80">Complete the brightness</span>
                        </div>
                    </div>

                    {/* Standard Item */}
                    <div className="relative group overflow-hidden rounded-3xl cursor-pointer bg-white">
                        <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#fbfbfd]">
                            <img
                                src="https://images.pexels.com/photos/6069002/pexels-photo-6069002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Evening Wear"
                                className="w-full h-full object-cover rounded-2xl shadow-sm transition-transform duration-500 group-hover:-translate-y-2"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                            <h3 className="text-lg font-medium text-primary">Evening Wear</h3>
                        </div>
                    </div>

                    {/* Wide Item (Span 2 cols) */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer bg-black text-white flex items-center">
                        <div className="w-1/2 p-10 z-10">
                            <span className="text-xs font-medium tracking-widest uppercase mb-2 text-gray-400">Limited Edition</span>
                            <h3 className="text-3xl font-medium mb-4">The Black Velvet</h3>
                            <p className="text-gray-400 font-light mb-6">
                                A masterpiece of texture and form. Available exclusively online.
                            </p>
                            <button className="text-sm font-medium border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                                Learn more
                            </button>
                        </div>
                        <div className="absolute right-0 top-0 w-2/3 h-full">
                            <img
                                src="https://images.pexels.com/photos/8839883/pexels-photo-8839883.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
                                alt="Velvet Detail"
                                className="w-full h-full object-cover mask-gradient-left opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
