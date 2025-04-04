'use client';

import { motion } from 'framer-motion';
import CofeeCup from "./deco/CofeeCup";

export default function Hero() {
    return (
        <section className="relative h-[65vh] md:h-[70vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 blur-xs" //[inset-0] = (t-0 r-0 l-0 b-0) = stretch and fill its entire parent.
                style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/70 z-0" />


            {/* Animated content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.6 }}
            >
                <motion.div
                    className="text-4xl md:text-5xl font-bold float"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                >
                    <span className="text-[#fab152] tracking-wide"
                        style={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.6))", }}>
                        Daily
                    </span>
                    <span className="text-white"
                        style={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.6))", }}>
                        Drip
                    </span>
                </motion.div>

                {/* Coffee Cup Icon */}
                <div className="absolute top-3 -right-9 opacity-85 rotate-25 drop-shadow-lg drop-shadow-black/35 scale">
                    <CofeeCup />
                </div>

                {/* Floating beans */}
                <div className="absolute top-4 -left-8 -rotate-70 floatCoffee">
                    <img src="/svg/coffee-beans2.png" alt="bean" className="w-5 h-5" />
                </div>
                <div className="absolute top-12 -left-2.5 -rotate-100 floatCoffee">
                    <img src="/svg/coffee-beans2.png" alt="bean" className="w-3 h-3" />
                </div>
                <div className="absolute top-3 -right-12 -rotate-10 floatCoffee">
                    <img src="/svg/coffee-beans1.png" alt="bean" className="w-6 h-6" />
                </div>

                {/* Subheadline */}
                <motion.h1
                    className="opacity-80 text-lg md:text-xl font-bold leading-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Coffee Cafe <em>in</em> CNX
                </motion.h1>

                {/* Footer link */}
                <motion.div
                    className="absolute mt-14 flex w-full text-sm italic justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div>Brought to you by</div>
                    <div className="hover-r ml-1">
                        <a
                            href="https://bossbsynth.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 underline hover:text-red-300 transition-colors duration-200"
                        >
                            BossBsynth
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}