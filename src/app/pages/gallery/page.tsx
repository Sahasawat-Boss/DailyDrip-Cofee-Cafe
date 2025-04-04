'use client';

import { motion } from 'framer-motion';
import { GrGallery } from "react-icons/gr";

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
        <section className="px-8 sm:px-12 pt-26 pb-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-center text-2xl md:text-4xl font-bold italic mb-3 float">
                    <div className="relative fade-up2">
                        Gallery
                        <div className="absolute top-2 -right-6  text-base text-amber-700/50"><GrGallery /></div>
                    </div>
                </div>

                <p className="max-w-xl mb-6 mx-auto indent-5 fade-in2">
                    Step into our world through the lens — from rich espresso pours to cozy corners and warm lighting.
                    This gallery captures the soul of DailyDrip: where every cup tells a story, and every moment is worth sharing.
                </p>


                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 ">
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
                                className="w-full h-60 md:h-72 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
