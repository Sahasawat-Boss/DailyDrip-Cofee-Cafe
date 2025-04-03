'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = ['Home', 'Menu', 'Gallery', 'Reservation', 'About', 'Contact'];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // hide logo after scrolling 50px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#111]/70 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto flex flex-col gap-2 items-center justify-between px-6 py-2">
                {/* Logo (hidden when scrolled) */}
                <div className={`text-white text-3xl font-bold transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-white">Daily</span><span className="text-red-500">Drip</span>
                </div>

                {/* Menu Items */}
                <ul className="flex space-x-6 text-sm text-white tracking-wide">
                    {menuItems.map((item) => {
                        const href = `#${item.toLowerCase()}`;
                        const isActive = pathname === href;
                        return (
                            <li key={item} className="relative group">
                                <Link href={href} className="hover:text-red-500 transition-colors">
                                    {item}
                                </Link>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
