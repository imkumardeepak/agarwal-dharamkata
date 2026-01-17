import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, ThumbsUp } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        content: "We have been using Agarwal Dharamkata for 5 years. Their weight slips are accepted everywhere, and the staff is very honest. The best service in Amravati MIDC.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=f59e0b&color=fff&size=128&bold=true",
        highlight: "5+ Years of Trust"
    },
    {
        name: "Suresh Patil",
        content: "Raat ko 2 baje bhi jao toh khula rehta hai. Staff ache se baat karte hain aur weighing bohot fast hai. Parking ki suvidha bhi achi hai.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Suresh+Patil&background=22c55e&color=fff&size=128&bold=true",
        highlight: "24/7 Available"
    },
    {
        name: "Amit Deshmukh",
        content: "Accuracy is their biggest plus point. We never had any dispute with parties regarding weight when we weigh at Agarwal Dharamkata. Highly recommended.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Amit+Deshmukh&background=3b82f6&color=fff&size=128&bold=true",
        highlight: "100% Accuracy"
    },
    {
        name: "Vikram Singh",
        content: "Bahut acchi service hai. Digital parchi turant mil jaati hai aur staff ka behavior bhi bahut professional hai. MIDC mein sabse reliable dharamkata.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=ef4444&color=fff&size=128&bold=true",
        highlight: "Fast Service"
    },
    {
        name: "Pradeep Sharma",
        content: "We handle 50+ trucks daily and Agarwal Dharamkata never disappoints. Quick processing, accurate readings, and excellent record keeping.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Pradeep+Sharma&background=8b5cf6&color=fff&size=128&bold=true",
        highlight: "50+ Trucks Daily"
    }
];

const stats = [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" }
];

const TestimonialCard = ({ testimonial, isActive }) => (
    <motion.div
        className={`relative p-8 rounded-3xl transition-all duration-500 ${isActive
            ? 'bg-gradient-to-br from-industrial-blue/20 via-slate-800 to-slate-900 border-2 border-industrial-blue/50 scale-100'
            : 'bg-slate-800/30 border border-slate-700/30 scale-95 opacity-60'
            }`}
        layout
    >
        {/* Highlight Badge */}
        {isActive && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-3 left-8 bg-gradient-to-r from-industrial-blue to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
            >
                {testimonial.highlight}
            </motion.div>
        )}

        {/* Quote Icon */}
        <Quote className={`absolute top-6 right-6 w-12 h-12 transition-colors ${isActive ? 'text-industrial-blue/40' : 'text-slate-700/30'
            }`} />

        {/* Stars */}
        <div className="flex gap-1 mb-6 mt-2">
            {[...Array(testimonial.stars)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Star className={`w-5 h-5 ${isActive ? 'text-amber-400 fill-amber-400' : 'text-amber-400/50 fill-amber-400/50'}`} />
                </motion.div>
            ))}
        </div>

        {/* Content */}
        <p className={`text-lg leading-relaxed mb-8 transition-colors ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>
            "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
            <div className="relative">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-14 h-14 rounded-full object-cover transition-all ${isActive ? 'ring-4 ring-industrial-blue/50' : 'ring-2 ring-slate-600'
                        }`}
                />
                {isActive && (
                    <motion.div
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    />
                )}
            </div>
            <div>
                <h4 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {testimonial.name}
                </h4>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-industrial-blue/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-block text-industrial-blue font-bold text-sm uppercase tracking-widest mb-3 px-4 py-2 bg-industrial-blue/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                    >
                        ⭐ Customer Reviews
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-blue to-cyan-400">500+</span> Transporters
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Here's what fleet owners and drivers say about our services.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50"
                            whileHover={{ scale: 1.05, borderColor: 'rgba(0,174,239,0.5)' }}
                        >
                            <stat.icon className="w-8 h-8 text-industrial-blue" />
                            <div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-slate-400">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <motion.button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 w-12 h-12 bg-slate-800 hover:bg-industrial-blue rounded-full flex items-center justify-center border border-slate-700 hover:border-industrial-blue transition-all shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </motion.button>

                    <motion.button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 w-12 h-12 bg-slate-800 hover:bg-industrial-blue rounded-full flex items-center justify-center border border-slate-700 hover:border-industrial-blue transition-all shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </motion.button>

                    {/* Cards Container */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <TestimonialCard
                                testimonial={testimonials[currentIndex]}
                                isActive={true}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-8 bg-industrial-blue'
                                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
