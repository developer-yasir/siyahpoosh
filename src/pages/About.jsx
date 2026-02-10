import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-medium mb-6">Our Story</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Redefining modest fashion with contemporary elegance and timeless design
                    </p>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                        <img
                            src="https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
                            alt="Our Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-medium mb-6">Modern Modesty</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            At Siyahpoosh, we believe that modesty and style are not mutually exclusive.
                            Our mission is to create fashion that empowers women to express their identity
                            while honoring their values.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Every piece is thoughtfully designed with premium fabrics, meticulous craftsmanship,
                            and attention to detail that reflects our commitment to quality and elegance.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <h2 className="text-3xl font-medium text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-medium mb-4">Quality</h3>
                            <p className="text-gray-600">
                                Premium materials and exceptional craftsmanship in every piece
                            </p>
                        </div>
                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-2xl">🌿</span>
                            </div>
                            <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                            <p className="text-gray-600">
                                Committed to ethical production and environmental responsibility
                            </p>
                        </div>
                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-2xl">💫</span>
                            </div>
                            <h3 className="text-xl font-medium mb-4">Empowerment</h3>
                            <p className="text-gray-600">
                                Fashion that celebrates individuality and confidence
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gray-50 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-medium mb-4">Join Our Journey</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Be part of a community that values elegance, quality, and authenticity
                    </p>
                    <a
                        href="/shop"
                        className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        Explore Collection
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
