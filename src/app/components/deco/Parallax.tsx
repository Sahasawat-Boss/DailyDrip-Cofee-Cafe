//Reusable Comps with props

'use client';

import { useEffect, useRef } from 'react';

type ParallaxImageProps = {
    imageUrl: string;
    height?: string;
    overlayText?: string;
};

export default function ParallaxImage({ imageUrl, height = 'h-[70vh]', overlayText }: ParallaxImageProps) {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            const offset = window.scrollY;
            imageRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={imageRef}
            className={`relative ${height} bg-cover bg-center bg-fixed`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {overlayText && (
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                    <h2 className="text-white text-xl md:text-2xl drop-shadow-xl text-center px-4 tracking-wider italic">
                        {overlayText}
                    </h2>
                </div>
            )}
        </div>
    );
}

{/* 
    
Usage:
<ParallaxImage imageUrl="/images/hero-bg.jpg" overlayText="Welcome to DailyDrip" />

*/}