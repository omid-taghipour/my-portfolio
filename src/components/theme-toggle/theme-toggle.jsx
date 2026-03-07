import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for user's previously saved theme or system preference
        const savedTheme = localStorage.getItem('theme');
        
        // Default to dark mode
        if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 backdrop-blur-md"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
    );
};

export default ThemeToggle;
