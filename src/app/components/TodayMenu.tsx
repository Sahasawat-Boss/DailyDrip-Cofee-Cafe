'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import BeanFloatAround from "./deco/BeanFloatAround";

const menuItems = [
    {
        title: "Iced Thai Latte",
        price: "40 Bath",
        image: "/images/menu/menu5.jpg",
        description: "Chilled Thai coffee with creamy sweetness.",
        tag: "Best Seller",
    },
    {
        title: "Cofee Matcha",
        price: "55 Bath",
        image: "/images/menu/menu6.jpg",
        description: "Matcha and espresso blend — earthy and bold.",
        tag: "Best Seller",
    },
    {
        title: "Mocha Delight",
        price: "60 Bath",
        image: "/images/menu/menu4.jpg",
        description: "Chocolate and espresso in a creamy blend.",
    },
    {
        title: "Coconut Latte",
        price: "55 Bath",
        image: "/images/menu/menu10.jpg",
        description: "Espresso with smooth coconut milk and tropical notes.",
        tag: "New",
    },
];

export default function TodayMenu() {
    return (
        <section className=" px-6 pt-14 pb-2 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold italic mb-3 float">
                        Today's Menu
                    </h2>
                    <p className="max-w-xl mx-auto">
                        Explore our handcrafted selection of coffee drinks — each brewed
                        with beans sourced from local farms in Northern Thailand.
                    </p>
                </motion.div>

                {/* Menu Cards */}
                <div className="grid px-8 sm:px-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex gap-4 lg:flex-col p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover-r"
                        >
                            {/* Tag Badge */}
                            {item.tag && (
                                <span className="absolute top-1 -left-4 bg-yellow-300/85 text-black text-[11px] font-semibold px-1.5 py-0.5 rounded shadow-md z-10 float">
                                    {item.tag}
                                </span>
                            )}

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-30 h-30 object-cover rounded-md"
                            />

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="font-semibold mt-1.5 mb-2 bg-black/12 w-fit rounded-2xl px-3 shadow-2xl">
                                    {item.price}
                                </p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Menu Button */}
                <motion.div
                    className="flex justify-center items-center mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Link
                        href="/pages/menu"
                        className="inline-block border px-6 py-2 mb-2 uppercase tracking-wide bg-white text-black 
                            shadow-lg hover-r active:scale-70 rounded transition-all duration-200"
                    >
                        View Menu
                    </Link>
                </motion.div>
            </div>

            <div className='opacity-65 absolute fade-right2'>
                <BeanFloatAround />
            </div>
        </section>
    );
}
