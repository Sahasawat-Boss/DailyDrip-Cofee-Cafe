
import BeanFloatAroundR from './deco/BeanFloatAroundR';
import ParallaxImage from './deco/Parallax';
import Link from 'next/link';
import BeanFloat from "./deco/BeanFloat";
import CoffeeCup from './deco/CoffeeCup';
import { FaRegClock, FaHeart } from "react-icons/fa";

export default function About() {
    return (
        <section className="px-8 sm:px-12 py-10 md:py-14 relative">

            <div className='opacity-80 absolute -top-4 fade-right2 -rotate-4'>
                <BeanFloatAroundR />
            </div>

            <div className="max-w-3xl mx-auto relative">
                <div className="flex text-2xl md:text-4xl font-bold italic mb-4 fade-right2">
                    <div>DailyDrip</div>
                    <div className="ml-1.5 mt-0.5 text-sm text-amber-900/65"><FaRegClock /></div>
                </div>

                <section className='fade-in'>
                    <p className="mb-3 leading-relaxed indent-5 ">
                        Located in the heart of Chiang Mai, DailyDrip is a cozy spot for coffee
                        lovers, creatives, and travelers. We brew with locally sourced beans from
                        Northern Thailand, roasted fresh in small batches.
                    </p>
                    <Link
                        href="/pages/history"
                        className="inline-block border px-6 py-2 mb-6 uppercase tracking-wide bg-white text-black 
                            shadow-lg hover-r active:scale-70 rounded"
                    >
                        Our History
                    </Link>


                    <div className="my-1">
                        <ParallaxImage
                            imageUrl="/images/pallalax/pallalax2.jpg"
                            overlayText="One Cup, Infinite Stories."
                            height="h-[35vh]"
                        />
                    </div>

                </section>
                <div className="absolute -bottom-7 -left-9 rotate-35 scale-125">
                    <div className='float'>
                        <CoffeeCup />
                    </div>
                    <FaHeart className="text-red-400 absolute -top-5.5 right-3.5 -rotate-12 w-2.5 float" />
                    <FaHeart className="text-red-400 absolute -top-2 right-1 rotate-30 w-2 float" />
                </div>

            </div>
            <div className="absolute -bottom-16 -right-4 opacity-70 rotate-slow">
                <BeanFloat />
            </div>
        </section>
    );
}
