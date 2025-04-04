'use client';

import { useEffect, useRef, useState } from 'react';
import { FaMusic } from "react-icons/fa";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const playOnInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch((err) => {
                    console.log("Autoplay blocked:", err);
                });
            }
            window.removeEventListener('click', playOnInteraction);
        };

        window.addEventListener('click', playOnInteraction);
        return () => window.removeEventListener('click', playOnInteraction);
    }, []);

    // Sync UI state with audio events
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="auto" />
            <button
                onClick={() => {
                    if (!audioRef.current) return;
                    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
                }}
                className="fixed top-3 right-3 p-1.5 bg-white/70 text-[#ddb578] rounded-full shadow z-50 no-focus hover:cursor-pointer active:scale-70"
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                <FaMusic className={isPlaying ? '' : 'opacity-40'} />
            </button>
        </>
    );
}
