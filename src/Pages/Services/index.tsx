'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Image, TrendingUp, Hash, Search, Laptop, Speaker } from 'lucide-react';

const services = [
    {
        id: 0,
        title: "Graphic Design",
        icon: <Image />,
        description: "Our graphic design services aim to create visually appealing designs that effectively communicate your brand's message.",
        items: [
            "Logo design",
            "Brand identity development",
            "Print design (brochures, business cards)",
            "Social media graphics",
            "Infographics",
            "Packaging design"
        ]
    },
    {
        id: 1,
        title: "Digital Marketing",
        icon: <TrendingUp />,
        description: "Our digital marketing services are designed to help you reach your target audience and achieve your business goals.",
        items: ["PPC advertising", "Email marketing", "Content marketing", "Social media marketing"]
    },
    {
        id: 2,
        title: "Social Media Management",
        icon: <Hash />,
        description: "Our social media management services are designed to help you build a strong online presence and engage with your audience.",
        items: ["Social media optimization", "Social media advertising", "Content creation", "Engagement and community management"]
    },
    {
        id: 3,
        title: "SEO",
        icon: <Search />,
        description: "Our SEO services are designed to help you improve your website's search engine ranking and drive more traffic to your site.",
        items: ["On-page optimization", "Off-page optimization", "Technical SEO", "Local SEO"]
    },
    {
        id: 4,
        title: "Website Development",
        icon: <Laptop />,
        description: "Our website development services are designed to help you create a stunning website that converts.",
        items: ["Custom website design", "Website redesign", "E-commerce solutions", "Website maintenance"]
    },
    {
        id: 5,
        title: "PR Handling",
        icon: <Speaker />,
        description: "Our PR handling services are designed to help you manage your reputation and communicate effectively with your audience.",
        items: ["Media relations", "Crisis communication", "Reputation management", "Event planning"]
    }
];

export default function Services() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 mb-12"
                >
                    Our Services
                </motion.h1>

                <motion.p variants={itemVariants} className="text-cyan-100 text-lg md:text-xl text-center mb-16">
                    We offer a range of services designed to help businesses like yours succeed.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="bg-white bg-opacity-10 rounded-xl p-6 shadow-xl cursor-pointer overflow-hidden" // Add overflow-hidden here
                            onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-4xl text-cyan-400 mr-4">{service.icon}</div>
                                <h2 className="text-2xl font-bold text-cyan-200">{service.title}</h2>
                            </div>
                            <p className="text-cyan-100 mb-4">{service.description}</p>
                            <AnimatePresence>
                                {expandedId === service.id && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-cyan-100 ml-6 list-disc"
                                    >
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="mb-2">{item}</li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
