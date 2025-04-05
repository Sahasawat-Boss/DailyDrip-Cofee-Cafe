'use client';

import { useEffect, useRef, useState } from 'react';

type ParallaxImageProps = {
    imageUrl: string;
    height?: string;
    overlayText?: string;
};

export default function ParallaxImage({
    imageUrl,
    height = 'h-[70vh]',
    overlayText,
}: ParallaxImageProps) {
    const imageRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect if it's a mobile device (viewport width under 768px)
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            if (!imageRef.current) return;
            const offset = window.scrollY;
            imageRef.current.style.backgroundPositionY = `${offset * 0.8}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <div
            ref={imageRef}
            className={`relative ${height} bg-cover bg-center ${isMobile ? 'bg-scroll' : 'bg-fixed'}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Blur Layer */}
            <div
                className="absolute inset-0 backdrop-blur-[2px] bg-white/40"
                aria-hidden="true"
            />

            {/* Overlay Text */}
            {overlayText && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-black text-shadow-xs text-shadow-white font-semibold text-xl md:text-2xl drop-shadow-xl text-center px-4 tracking-wider italic">
                        {overlayText}
                    </h2>
                </div>
            )}
        </div>

    );
}
