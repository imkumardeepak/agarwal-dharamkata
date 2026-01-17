import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Scale } from 'lucide-react';
import logo from '../assets/logoagrwal.png';

const Navbar = ({ scrolled }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-800'
                : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src={logo}
                            alt="Agarwal Dharamkata Logo"
                            className="w-12 h-12 object-contain"
                        />
                        <span className="text-xl font-bold text-white">
                            Agarwal <span className="text-industrial-blue">Dharamkata</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-industrial-blue font-medium transition-colors text-sm tracking-wide relative group"
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-industrial-blue group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                        <motion.a
                            href="tel:+916309593555"
                            className="bg-industrial-blue text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold text-sm shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,174,239,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Phone size={16} />
                            Call Now
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 rounded-lg bg-slate-800"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-800 overflow-hidden"
            >
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-industrial-blue transition-colors font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+916309593555"
                        className="block w-full text-center bg-industrial-blue text-white px-5 py-3 rounded-lg font-bold mt-4"
                    >
                        Call: +91 63095 93555
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
