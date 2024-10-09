"use client"
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcherBtn() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={toggleTheme} className='text-cyan-500 dark:text-cyan-300'>
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    );
}