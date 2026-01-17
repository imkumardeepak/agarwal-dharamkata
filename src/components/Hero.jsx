import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Printer, CheckCircle2, Scale } from 'lucide-react';

const WeighbridgeAnimation = () => {
    const [phase, setPhase] = useState(0);
    const [weight, setWeight] = useState(0);
    const [showSlip, setShowSlip] = useState(false);
    const [truckKey, setTruckKey] = useState(0); // Key to force remount truck

    const truckColors = ['#f59e0b', '#ef4444', '#3b82f6', '#22c55e', '#8b5cf6', '#ec4899'];
    const currentColor = truckColors[truckKey % truckColors.length];

    useEffect(() => {
        let weightInterval;
        let isMounted = true;

        const runCycle = () => {
            if (!isMounted) return;

            // Reset for new truck
            setWeight(0);
            setShowSlip(false);
            setPhase(0);

            // Phase 1: Truck enters (after 300ms)
            setTimeout(() => {
                if (!isMounted) return;
                setPhase(1);
            }, 300);

            // Phase 2: Truck on scale, start weighing (after 2.5s)
            setTimeout(() => {
                if (!isMounted) return;
                setPhase(2);
                const targetWeight = 18000 + Math.floor(Math.random() * 12000);
                let current = 0;
                weightInterval = setInterval(() => {
                    current += Math.floor(Math.random() * 1800) + 600;
                    if (current >= targetWeight) {
                        current = targetWeight;
                        clearInterval(weightInterval);
                    }
                    setWeight(current);
                }, 80);
            }, 2500);

            // Phase 3: Weighing complete, show slip (after 5s)
            setTimeout(() => {
                if (!isMounted) return;
                setPhase(3);
                setShowSlip(true);
            }, 5000);

            // Phase 4: Truck exits right (after 7s)
            setTimeout(() => {
                if (!isMounted) return;
                setPhase(4);
                setShowSlip(false);
            }, 7000);

            // Start new cycle with new truck (after 9s)
            setTimeout(() => {
                if (!isMounted) return;
                setTruckKey(prev => prev + 1); // This triggers a new truck
            }, 9000);
        };

        runCycle();

        return () => {
            isMounted = false;
            clearInterval(weightInterval);
        };
    }, [truckKey]); // Re-run when truckKey changes (new truck)

    const getStatusText = () => {
        switch (phase) {
            case 0: return 'WAITING';
            case 1: return 'APPROACHING';
            case 2: return 'WEIGHING...';
            case 3: return 'COMPLETE ✓';
            case 4: return 'NEXT →';
            default: return 'READY';
        }
    };

    return (
        <div className="relative w-full h-full min-h-[480px] bg-gradient-to-b from-sky-200 via-sky-100 to-slate-200 overflow-hidden rounded-2xl shadow-2xl border border-slate-300">

            {/* Sky Background with Sun */}
            <div className="absolute top-4 right-8 w-16 h-16 bg-yellow-300 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.6)]" />
            <div className="absolute top-20 left-20 w-8 h-4 bg-white/80 rounded-full blur-sm" />
            <div className="absolute top-16 left-40 w-12 h-5 bg-white/60 rounded-full blur-sm" />

            {/* Header Sign */}
            <div className="absolute top-4 left-4 right-20 z-30">
                <div className="bg-industrial-blue text-white px-4 py-2 rounded-lg shadow-lg inline-flex items-center gap-2">
                    <Scale size={18} />
                    <span className="font-bold text-sm">AGARWAL DHARAMKATA - AMRAVATI</span>
                </div>
            </div>

            {/* Main Animation Scene */}
            <div className="absolute bottom-0 left-0 right-0 h-48">

                {/* Ground/Earth */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-800 to-amber-700" />

                {/* Road */}
                <div className="absolute bottom-10 left-0 right-0 h-16 bg-slate-700">
                    {/* Road markings */}
                    <div className="absolute top-1/2 left-0 right-0 h-1.5 flex gap-6 -translate-y-1/2 px-4">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-10 h-full bg-yellow-400/80" />
                        ))}
                    </div>
                    {/* Road edges */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50" />
                </div>

                {/* Weighbridge Platform */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40">
                    {/* Platform base */}
                    <motion.div
                        className="h-16 bg-gradient-to-t from-slate-500 to-slate-400 rounded-sm border-2 border-slate-600 relative"
                        animate={{
                            boxShadow: phase === 2
                                ? '0 0 20px rgba(239,68,68,0.6), inset 0 0 10px rgba(239,68,68,0.2)'
                                : phase === 3
                                    ? '0 0 20px rgba(34,197,94,0.6), inset 0 0 10px rgba(34,197,94,0.2)'
                                    : 'none'
                        }}
                    >
                        {/* Platform grid lines */}
                        <div className="absolute inset-2 border border-dashed border-slate-600/50" />
                        {/* Scale indicator lights */}
                        <motion.div
                            className="absolute -top-2 left-2 w-3 h-3 rounded-full"
                            animate={{
                                backgroundColor: phase === 2 ? '#ef4444' : phase === 3 ? '#22c55e' : '#00AEEF',
                                boxShadow: phase === 2 ? '0 0 8px #ef4444' : phase === 3 ? '0 0 8px #22c55e' : '0 0 8px #00AEEF'
                            }}
                        />
                        <motion.div
                            className="absolute -top-2 right-2 w-3 h-3 rounded-full"
                            animate={{
                                backgroundColor: phase === 2 ? '#ef4444' : phase === 3 ? '#22c55e' : '#00AEEF',
                                boxShadow: phase === 2 ? '0 0 8px #ef4444' : phase === 3 ? '0 0 8px #22c55e' : '0 0 8px #00AEEF'
                            }}
                        />
                        {/* SCALE text */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-700">WEIGHBRIDGE</div>
                    </motion.div>
                </div>

                {/* Operator Cabin */}
                <div className="absolute bottom-24 left-1/2 translate-x-16 w-14 h-20 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-lg border border-slate-500 shadow-lg">
                    {/* Window */}
                    <div className="absolute top-2 left-2 right-2 h-8 bg-sky-300/80 rounded border border-slate-500" />
                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-slate-500 rounded-t border border-slate-600" />
                </div>

                {/* Animated Truck - key forces remount for each new truck */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={truckKey}
                        className="absolute bottom-[26px] z-20"
                        initial={{ x: -200 }}
                        animate={{
                            x: phase === 0 ? -200 : phase === 4 ? 600 : 120
                        }}
                        exit={{ x: 600 }}
                        transition={{
                            duration: phase === 0 ? 0 : phase === 4 ? 1.8 : 2.2,
                            ease: "easeInOut"
                        }}
                        style={{ left: 0 }}
                    >
                        <svg width="140" height="70" viewBox="0 0 140 70" style={{ filter: 'drop-shadow(3px 3px 5px rgba(0,0,0,0.3))', transform: 'scaleX(-1)' }}>
                            {/* Truck Container */}
                            <rect x="45" y="10" width="90" height="40" rx="3" fill={currentColor} />
                            <rect x="48" y="13" width="84" height="34" rx="2" fill={currentColor} style={{ filter: 'brightness(1.1)' }} />
                            {/* Container ridges */}
                            {[60, 75, 90, 105, 120].map(x => (
                                <line key={x} x1={x} y1="13" x2={x} y2="47" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
                            ))}

                            {/* Cab */}
                            <path d="M5 50 L5 25 C5 20 10 15 15 15 L40 15 C45 15 45 20 45 25 L45 50 Z" fill={currentColor} style={{ filter: 'brightness(0.9)' }} />
                            {/* Windshield */}
                            <path d="M10 42 L10 28 C10 24 14 22 18 22 L34 22 C38 25 40 28 40 32 L40 42 Z" fill="#87CEEB" />
                            {/* Headlight */}
                            <rect x="5" y="38" width="4" height="6" rx="1" fill="#fbbf24" />
                            {/* Grill */}
                            <rect x="5" y="46" width="4" height="4" rx="1" fill="#1f2937" />

                            {/* Chassis */}
                            <rect x="3" y="50" width="132" height="6" rx="2" fill="#374151" />

                            {/* Wheels with rotation */}
                            <g>
                                <circle cx="28" cy="60" r="10" fill="#1f2937" />
                                <circle cx="28" cy="60" r="6" fill="#4b5563" />
                                <motion.g
                                    animate={{ rotate: (phase === 1 || phase === 4) ? 360 : 0 }}
                                    transition={{ duration: 0.4, repeat: (phase === 1 || phase === 4) ? Infinity : 0, ease: "linear" }}
                                    style={{ transformOrigin: '28px 60px' }}
                                >
                                    <line x1="28" y1="54" x2="28" y2="66" stroke="#6b7280" strokeWidth="2" />
                                    <line x1="22" y1="60" x2="34" y2="60" stroke="#6b7280" strokeWidth="2" />
                                </motion.g>
                            </g>
                            <g>
                                <circle cx="110" cy="60" r="10" fill="#1f2937" />
                                <circle cx="110" cy="60" r="6" fill="#4b5563" />
                                <motion.g
                                    animate={{ rotate: (phase === 1 || phase === 4) ? 360 : 0 }}
                                    transition={{ duration: 0.4, repeat: (phase === 1 || phase === 4) ? Infinity : 0, ease: "linear" }}
                                    style={{ transformOrigin: '110px 60px' }}
                                >
                                    <line x1="110" y1="54" x2="110" y2="66" stroke="#6b7280" strokeWidth="2" />
                                    <line x1="104" y1="60" x2="116" y2="60" stroke="#6b7280" strokeWidth="2" />
                                </motion.g>
                            </g>
                        </svg>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Digital Display Panel */}
            <div className="absolute top-16 right-4 w-52 z-20">
                <motion.div
                    className="bg-slate-900/95 backdrop-blur rounded-xl p-4 shadow-2xl border-2"
                    animate={{
                        borderColor: phase === 2 ? '#ef4444' : phase === 3 ? '#22c55e' : '#00AEEF'
                    }}
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-industrial-blue uppercase tracking-wider">Digital Scale</span>
                        <motion.div
                            className="w-2 h-2 rounded-full"
                            animate={{
                                backgroundColor: phase === 2 ? '#ef4444' : '#22c55e',
                                boxShadow: phase === 2 ? '0 0 8px #ef4444' : '0 0 8px #22c55e'
                            }}
                        />
                    </div>

                    {/* LED Display */}
                    <div className="bg-black p-3 rounded-lg mb-2 relative overflow-hidden">
                        <motion.div
                            className="font-mono text-3xl font-bold text-right"
                            animate={{
                                color: phase === 3 ? '#22c55e' : '#00AEEF',
                                textShadow: phase === 3 ? '0 0 10px #22c55e' : '0 0 8px #00AEEF'
                            }}
                        >
                            {(weight / 1000).toFixed(2)}
                            <span className="text-sm ml-1 opacity-60">TON</span>
                        </motion.div>
                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-20"
                            style={{ background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)' }} />
                    </div>

                    <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                        <span className="text-industrial-blue">{getStatusText()}</span>
                        <span>MIDC-444605</span>
                    </div>
                </motion.div>

                {/* Slip Notification */}
                <AnimatePresence>
                    {showSlip && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            className="mt-3 bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center gap-2 text-white">
                                <motion.div
                                    animate={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <Printer size={16} />
                                </motion.div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Slip Printed!</p>
                                    <p className="text-[10px] opacity-80">{(weight / 1000).toFixed(2)} TON</p>
                                </div>
                                <CheckCircle2 size={14} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-mono">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        LIVE
                    </span>
                    <span className="text-slate-500">|</span>
                    <span>24/7 SERVICE</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-industrial-blue">
                    <MapPin size={10} />
                    <span>AMRAVATI</span>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-20 flex flex-col lg:flex-row bg-slate-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-industrial-blue/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:pl-20 lg:pr-8 py-12 lg:py-0 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-industrial-blue/20 border border-industrial-blue/40 text-industrial-blue mb-6"
                        whileHover={{ scale: 1.03 }}
                    >
                        <MapPin size={14} />
                        <span className="text-xs font-semibold tracking-wide uppercase">Plot P-6, MIDC Amravati</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
                        Precision Weighing for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-blue via-cyan-400 to-industrial-blue bg-[length:200%_auto] animate-gradient">
                            India's Logistics
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
                        Government approved digital weighbridge with <span className="text-white font-medium">100% accuracy</span>.
                        Serving transporters 24/7 with instant computerized weight slips.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,174,239,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 bg-industrial-blue text-white rounded-lg font-bold text-sm shadow-lg flex items-center gap-2"
                        >
                            Get Directions <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.03, backgroundColor: 'rgba(0,174,239,0.15)' }}
                            whileTap={{ scale: 0.97 }}
                            href="tel:+916309593555"
                            className="px-6 py-3.5 bg-transparent border-2 border-industrial-blue/50 text-industrial-blue rounded-lg font-semibold text-sm flex items-center gap-2"
                        >
                            Call: +91 63095 93555
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Animation Container */}
            <div className="w-full lg:w-1/2 p-4 lg:p-6 flex items-center justify-center min-h-[520px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-full max-w-xl"
                >
                    <WeighbridgeAnimation />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
