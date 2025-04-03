'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // On mount: check theme from localStorage or system preference
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = stored || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme as 'light' | 'dark');
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="z-50 fixed top-4 right-4 p-0.5 rounded-full shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white text-sm transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}
