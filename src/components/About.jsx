import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import truckImage from '../assets/Gemini_Generated_Image_f14p9rf14p9rf14p (1).png';

const features = [
    { text: "Government Approved & Certified", icon: Award },
    { text: "High Precision Digital Sensors", icon: CheckCircle },
    { text: "Located in MIDC Industrial Hub", icon: Users },
    { text: "Trusted by 500+ Transporters", icon: Clock }
];

const stats = [
    { value: "24", suffix: "/7", label: "Open Hours" },
    { value: "500", suffix: "+", label: "Happy Clients" },
    { value: "100", suffix: "%", label: "Accuracy" },
    { value: "10", suffix: "+", label: "Years Experience" }
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-blue/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industrial-blue/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(0,174,239,0.5)' }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-industrial-blue">
                                {stat.value}<span className="text-cyan-400">{stat.suffix}</span>
                            </div>
                            <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            {/* Glowing Border Animation */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-industrial-blue via-cyan-400 to-industrial-blue rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ backgroundSize: '200% 200%' }}
                            />

                            <motion.img
                                src={truckImage}
                                alt="Indian Truck on Weighbridge"
                                className="relative rounded-2xl shadow-2xl z-10 ring-2 ring-industrial-blue/50 w-full object-cover"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Decorative Glow elements */}
                            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-industrial-blue/30 rounded-full blur-3xl z-0 animate-pulse" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl z-0" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-industrial-blue/10 rounded-2xl blur-xl z-0" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-industrial-blue font-bold text-sm uppercase tracking-widest">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                            Why Choose <span className="text-industrial-blue">Agarwal Dharamkata?</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Located at <span className="font-semibold text-white">Plot No. P-6, M.I.D.C. Amravati 444605</span>,
                            we have established ourselves as the benchmark for accuracy and trust in the region.
                            We understand that in the transport business, every kilogram counts.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Our core values are built on <span className="font-bold text-industrial-blue">"Bharosa" (Trust)</span>, Speed, and Precision.
                            We ensure your vehicle is weighed quickly and accurately so you can get back on the road without delay.
                        </p>

                        <ul className="space-y-4">
                            {features.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5, borderColor: 'rgba(0,174,239,0.3)' }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-industrial-blue/20 flex items-center justify-center">
                                        <item.icon className="text-industrial-blue" size={20} />
                                    </div>
                                    <span className="text-slate-300 font-medium">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
