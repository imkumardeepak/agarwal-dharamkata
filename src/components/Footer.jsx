import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 relative overflow-hidden">
            {/* Top gradient line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-industrial-blue to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Agarwal <span className="text-industrial-blue">Dharamkata</span>
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Trusted digital weighing services for all types of heavy commercial vehicles.
                            Serving the transport industry with honesty and precision.
                        </p>
                        <div className="flex gap-3">
                            <motion.a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-industrial-blue hover:text-white transition-all"
                                whileHover={{ y: -3 }}
                            >
                                <Facebook size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-industrial-blue hover:text-white transition-all"
                                whileHover={{ y: -3 }}
                            >
                                <Instagram size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-industrial-blue/20 transition-colors">
                                    <MapPin className="text-industrial-blue" size={18} />
                                </div>
                                <div>
                                    <span className="text-sm">
                                        Plot No. P-6, M.I.D.C.,<br />
                                        Amravati - 444605, Maharashtra
                                    </span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-industrial-blue/20 transition-colors">
                                    <Phone className="text-industrial-blue" size={18} />
                                </div>
                                <a href="tel:+916309593555" className="hover:text-industrial-blue transition-colors">
                                    +91 63095 93555
                                </a>
                            </li>
                            <li className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-industrial-blue/20 transition-colors">
                                    <Mail className="text-industrial-blue" size={18} />
                                </div>
                                <a href="mailto:agarwaldharamkata@gmail.com" className="hover:text-industrial-blue transition-colors text-sm">
                                    agarwaldharamkata@gmail.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'About Us', 'Contact'].map((link, i) => (
                                <motion.li key={i} whileHover={{ x: 5 }}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '')}`}
                                        className="flex items-center gap-2 text-slate-400 hover:text-industrial-blue transition-colors group"
                                    >
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold text-white mb-6">Working Hours</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <Clock className="text-industrial-blue" size={24} />
                                <div>
                                    <p className="font-bold text-white">24/7 Open</p>
                                    <p className="text-sm text-slate-400">All Days of the Week</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                We understand logistics never stops. That's why we're available round the clock for your weighing needs.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Agarwal Dharamkata. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-600">
                        Designed for excellence in weighing services.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
