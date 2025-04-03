import ParallaxImage from './deco/Parallax';
import Link from 'next/link';
import BeanFloat from "./deco/BeanFloat";
import { FaRegClock } from "react-icons/fa";

export default function About() {
    return (
        <section className="px-8 sm:px-12 py-10 md:py-14">
            <div className="max-w-5xl mx-auto relative">
                <div className="flex text-2xl md:text-4xl font-bold italic mb-4">
                    <div>DailyDrip</div>
                    <div className="ml-1.5 mt-0.5 text-sm text-amber-900/65"><FaRegClock  /></div>
                </div>
                <p className="mb-3 leading-relaxed indent-5">
                    Located in the heart of Chiang Mai, DailyDrip is a cozy spot for coffee
                    lovers, creatives, and travelers. We brew with locally sourced beans from
                    Northern Thailand, roasted fresh in small batches.
                </p>

                <Link href="/pages/history" className="inline-block border px-6 py-2 mb-2 uppercase tracking-wide hover-r">
                    Our History
                </Link>

                <div className="my-1">
                    <ParallaxImage
                        imageUrl="/images/pallalax/pallalax2.jpg"
                        overlayText="One Cup, Infinite Stories."
                        height="h-[35vh]"
                    />
                </div>

                <div className="absolute -bottom-16 -right-4 opacity-70 rotate-slow">
                    <BeanFloat />
                </div>

            </div>
        </section>
    );
}
