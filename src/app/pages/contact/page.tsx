'use client';

import { motion } from 'framer-motion';
import ParallaxImage from "@/app/components/deco/Parallax";
import BeanFloat from "@/app/components/deco/BeanFloat";
import { MdOutlineContactSupport } from "react-icons/md";

export default function Contact() {
    return (
        <section className="px-8 sm:px-12 pt-26 pb-12">
            <div className="max-w-4xl mx-auto relative ">
                {/* Title */}
                <div className="flex justify-center text-2xl md:text-4xl font-bold italic float ">
                    <div className="relative fade-up2">
                        Contact
                        <div className="absolute top-0.5 -right-5 text-base text-amber-600/50 rotate-10">
                            <MdOutlineContactSupport />
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="grid md:grid-cols-2 gap-8 bg-white/60 p-6 rounded-lg shadow-md fade-in2">
                    {/* DailyDrip Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">DailyDrip</h4>
                        <p>
                            A cozy coffee space in the heart of Chiang Mai, brewing locally sourced beans and delivering bold flavors with warm vibes.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">CONTACT INFORMATION</h4>
                        <ul className="space-y-2 text-sm">
                            <li>📍 123 Nimmanhaemin Road,</li>
                            <li>Chiang Mai, Thailand 50200</li>
                            <li>📞 +66 86 868 4466</li>
                            <li>📧 info@bossbsynth.com</li>
                            <li>
                                🌐{' '}
                                <a
                                    href="https://bossbsynth.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-blue-500 hover:text-blue-800 transition"
                                >
                                    bossbsynth.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-10 aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
                    <iframe
                        title="DailyDrip Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8616501341157!2d98.96295707493586!3d18.796454282407607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a7d0d93b5%3A0xc7d2fa169c1f4b29!2sNimmanhaemin%20Rd%2C%20Tambon%20Su%20Thep%2C%20Amphoe%20Mueang%20Chiang%20Mai%2C%20Chang%20Wat%20Chiang%20Mai%2050200%2C%20Thailand!5e0!3m2!1sen!2sth!4v1683716713000!5m2!1sen!2sth"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Floating bean */}
                <div className="absolute -bottom-12 -right-4 opacity-60 rotate-slow">
                    <BeanFloat />
                </div>

                <div className="my-8">
                    <ParallaxImage
                        imageUrl="/images/hero/cafe2.jpeg"
                        overlayText="See you later."
                        height="h-[50vh]"
                    />
                </div>
            </div>
        </section>
    );
}
