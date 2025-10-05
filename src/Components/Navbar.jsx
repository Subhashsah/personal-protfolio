import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ThemeProvider, useTheme} from '../context/ThemeContext';
import {motion} from 'framer-motion';
export default function Navbar() {
      const [open, setOpen] = useState(false);
      const { theme, toggleTheme } = useTheme();
    return (
        <>
            <nav className="backdrop-blur-sm sticky top-0 z-40 bg-opacity-40" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="font-semibold text-xl">Subhash</Link>
                    <div className="hidden md:flex gap-6 items-center">
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-accent' : ''}>Projects</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-accent' : ''}>About</NavLink>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-lg border"
                        >
                            {ThemeProvider === 'light' ? '🌞' : '🌙'}
                        </button>
                    </div>

                    {/* mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(o => !o)} className="p-2">{open ? '✖' : '☰'}</button>
                    </div>
                </div>

                {open && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden px-4 pb-4">
                        <Link to="/projects" onClick={() => setOpen(false)} className="block py-2">Projects</Link>
                        <Link to="/about" onClick={() => setOpen(false)} className="block py-2">About</Link>
                    </motion.div>
                )}
            </nav>
        </>
    )
}
