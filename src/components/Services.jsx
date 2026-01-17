import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Clock, Truck, FileText } from 'lucide-react';

const services = [
    {
        title: 'Digital Weighing',
        description: 'High-precision computerized weighing for 6-wheelers to massive trailers. Calibrated regularly for pinpoint accuracy.',
        icon: Scale,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: '24/7 Availability',
        description: 'We are open day and night to serve your transport needs. No matter when you arrive, we are ready.',
        icon: Clock,
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Parking Facility',
        description: 'Spacious and secure parking area specifically designed for heavy trucks to rest while waiting.',
        icon: Truck,
        color: 'from-orange-500 to-amber-500'
    },
    {
        title: 'Report Generation',
        description: 'Instant printed weight slips (parchi) with digital records. Valid for all commercial and legal requirements.',
        icon: FileText,
        color: 'from-purple-500 to-pink-500'
    },
];

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 overflow-hidden"
        >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />

            {/* Icon container */}
            <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <service.icon className="w-7 h-7 text-white" />
            </motion.div>

            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-blue transition-colors">
                {service.title}
            </h4>

            <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                {service.description}
            </p>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute top-0 right-0 w-28 h-28 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-full blur-xl`} />
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-industrial-blue/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-industrial-blue font-bold text-sm uppercase tracking-widest">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Premium Weighbridge Facilities</h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-transparent via-industrial-blue to-transparent mx-auto mt-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
