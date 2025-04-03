'use client';

import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Attempt to play after user interaction
        const playOnInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch((err) => {
                    console.log("Autoplay blocked:", err);
                });
            }
            window.removeEventListener('click', playOnInteraction);
        };

        // Autoplay may be blocked — wait for user click
        window.addEventListener('click', playOnInteraction);
        return () => window.removeEventListener('click', playOnInteraction);
    }, [isPlaying]);

    return (
        <>
            <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="auto" />
            {/* Optional control button */}
            <button
                onClick={() => {
                    if (audioRef.current) {
                        if (isPlaying) {
                            audioRef.current.pause();
                            setIsPlaying(false);
                        } else {
                            audioRef.current.play();
                            setIsPlaying(true);
                        }
                    }
                }}
                className="fixed bottom-4 left-4 p-2 bg-white text-black rounded shadow z-50"
            >
                {isPlaying ? '⏸ Pause Music' : '▶ Play Music'}
            </button>
        </>
    );
}
