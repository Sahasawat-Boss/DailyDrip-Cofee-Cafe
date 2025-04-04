'use client';

import { motion } from 'framer-motion';
import { CiCoffeeBean } from "react-icons/ci";

const galleryImages = [
    "/images/reviews/review4.jpg",
    "/images/pallalax/pallalax2.jpg",
    "/images/gal/about1.jpg",
    "/images/pallalax/pallalax.jpg",
    "/images/gal/about2.jpg",
    "/images/gal/about3.jpg",
    "/images/gal/about4.jpg",
    "/images/gal/coffee.jpg",
    "/images/gal/cafe2.jpeg",
    "/images/reviews/review3.jpg",
    "/images/reviews/review2.jpeg",
    "/images/hero/hero.jpg",
];

export default function GalleryPage() {
    return (
        <section className="px-6 pt-24 pb-10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-center text-2xl md:text-4xl font-bold italic mb-4 float">
                    <div className="relative fade-up2">
                        Gallery
                        <div className="absolute top-0 -right-6  text-base text-amber-700"><CiCoffeeBean /></div>
                        <div className="absolute top-3 -right-7.5 text-base rotate-30 text-amber-700"><CiCoffeeBean /></div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
