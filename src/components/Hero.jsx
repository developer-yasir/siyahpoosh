import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with subtle parallax or scale effect */}
            <div
                className="absolute inset-0 z-0 opacity-90 scale-105 animate-slow-zoom"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1516195851888-6f13b8a2f333?q=80&w=2674&auto=format&fit=crop')", // Cinematic black abaya/modest fashion
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
                <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 text-gray-300 border border-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                    New Collection 2024
                </span>

                <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-6 leading-tight">
                    Modern <span className="font-serif italic font-light">Modesty</span>
                </h1>

                <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl">
                    Experience the perfect blend of contemporary fashion and timeless elegance.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 min-w-[160px]">
                        Shop Collection
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300 min-w-[160px]">
                        Watch the Film
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
