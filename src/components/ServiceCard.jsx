import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
            }}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden group perspective-1000"
        >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-industrial-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-industrial-blue">
                <Icon className="w-7 h-7 text-safety-yellow group-hover:text-white transition-colors duration-300" />
            </div>

            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-safety-yellow transition-colors">
                {title}
            </h4>

            <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-200 transition-colors">
                {description}
            </p>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-safety-yellow/20" />
        </motion.div>
    );
};

export default ServiceCard;
