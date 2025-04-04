'use client';
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const reviews = [
    {
        name: "Jane Smith",
        text: `“ DailyDrip serves not just amazing coffee, but a whole vibe. The espresso was bold and smooth, and the space is perfect for working or chilling out. ”`,
        image: '/images/reviews/review4.jpg',
        rating: 5,
    },
    {
        name: "Alex Tan",
        text: `“ I loved the iced Thai latte and how friendly the staff were! Will definitely come back next time I’m in Chiang Mai. ”`,
        image: "/images/reviews/review3.jpg",
        rating: 4,
    },
    {
        name: "Mira Patel",
        text: `“ Cozy atmosphere, local coffee beans, and the Dirty Matcha is next level. Highly recommended for digital nomads! ”`,
        image: "/images/reviews/review2.jpeg",
        rating: 5,
    },
];

export default function ReviewCard() {
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    const next = () =>
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

    const { name, text, image, rating } = reviews[current];

    return (
        <section className="px-4 py-10">
            <div className="max-w-2xl px-8 mx-auto relative">

                <h2 className="text-2xl md:text-3xl mb-2 text-center font-bold italic float">
                    Reviews
                </h2>

                <div className="relative rounded-md overflow-hidden shadow-lg">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-[350px] object-cover"
                    />
                    <div className="absolute inset-0 bg-white/60 p-10 md:p-14 flex flex-col justify-center">
                        <p className="text-lg italic font-semibold mb-4 max-w-xl">{text}</p>
                        <div className="flex items-center gap-1 mb-2 float">
                            {[...Array(rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>
                        <p className="italic font-semibold">— {name}</p>
                    </div>
                </div>

                <div className="absolute right-0 -bottom-5.5 w-22 h-22 rotate-12 float">
                    <img src="/gif/hot-coffee.gif" alt="Coffee Gif" className=""/>
                    <FaHeart className="text-red-400 absolute top-4 -rotate-30 w-5 float"/>
                    <FaHeart className="text-red-400 absolute top-0 left-3 -rotate-10 w-3 float"/>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 hover no-focus active:scale-70"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 hover no-focus active:scale-70"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}
