'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/X' },
    { label: 'Gallery', href: '/X' },
    { label: 'History', href: '/pages/history' },
    { label: 'Contact', href: '/X' },
];

export default function Navbar() {
    const [isShrunk, setIsShrunk] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md transition-all duration-300 ${isShrunk ? 'py-2' : 'py-4'
                }`}
        >
            <div
                className={`max-w-7xl mx-auto flex flex-col items-center justify-between px-6 transition-all duration-300 ${isShrunk ? 'gap-0' : 'gap-2'
                    }`}
            >

                {/* Logo */}
                <Link href="/" className="text-xl font-bold transition-all duration-300 no-underline">
                    <div
                        className={`transition-all duration-300 tracking-wide ${isShrunk ? 'opacity-0 h-0 scale-95' : 'opacity-100 h-auto'
                            }`}
                        style={{
                            filter:
                                'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))',
                        }}
                    >
                        <span className="text-[#fab152] ">Daily</span>
                        <span className="text-white">Drip</span>
                    </div>
                </Link>


                {/* Menu Items */}
                <ul className="flex space-x-4 text-sm md:text-base">
                    {menuItems.map(({ label, href }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={label} className="relative group">
                                <Link
                                    href={href}
                                    className={`transition-colors ${isActive ? 'text-yellow-600' : 'hover:text-yellow-600'}`}
                                >
                                    {label}
                                </Link>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-600 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </nav>
    );
}
