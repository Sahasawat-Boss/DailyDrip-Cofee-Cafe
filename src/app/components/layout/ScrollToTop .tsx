'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 p-2 bg-white text-[#ddb578] rounded-full shadow-lg z-50 hover active:scale-70"
                    aria-label="Scroll to Top"
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    );
}
