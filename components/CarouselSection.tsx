"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const carouselSlides = [
    {
        title: "Commercial BIM Coordination",
        subtitle: "Multi-Discipline Federation",
        desc: "Full BIM coordination for a 12-storey mixed-use tower — Architectural, Structural & MEP models federated with zero clashes on site.",
        tag: "BIM",
        stats: "120+ Clashes Resolved",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
    },
    {
        title: "Residential Solar Permit Package",
        subtitle: "NEC-Compliant Engineering",
        desc: "Complete permit-ready package including SLD, site plan, electrical details, and structural attachments for a 12.4kW rooftop PV system.",
        tag: "Solar",
        stats: "24h Turnaround",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80",
    },
    {
        title: "MEP Clash Detection",
        subtitle: "Navisworks Coordination",
        desc: "Inter-disciplinary clash detection across HVAC, plumbing, and electrical systems — actionable reports with resolution tracking.",
        tag: "BIM",
        stats: "98% First-Pass Resolution",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    },
    {
        title: "500kW Commercial Solar Array",
        subtitle: "Helioscope Design & Analysis",
        desc: "Flat-roof commercial solar system with optimized string sizing, inverter placement, and P50/P90 energy yield analysis.",
        tag: "Solar",
        stats: "680 MWh/yr Estimated",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1400&q=80",
    },
    {
        title: "Healthcare Facility As-Builts",
        subtitle: "Shop Drawings & FM Handover",
        desc: "Fabrication-ready shop drawings and as-built models for a hospital renovation — COBie data populated for facility management.",
        tag: "BIM",
        stats: "200+ Sheets Delivered",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80",
    },
];

export default function CarouselSection() {
    const [activeSlide, setActiveSlide] = useState(0);
    const slideCount = carouselSlides.length;

    // Auto-advance every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slideCount);
        }, 5000);
        return () => clearInterval(interval);
    }, [slideCount]);

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slideCount);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);

    return (
        <section className="relative bg-slate-900 h-screen">
            {/* Slide container */}
            <div className="relative w-full h-full overflow-hidden">
                {carouselSlides.map((slide, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                            x: i === activeSlide ? "0%" : i < activeSlide ? "-100%" : "100%",
                            opacity: i === activeSlide ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {/* Background image */}
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority={i === 0}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

                        {/* Slide content */}
                        <div className="relative z-10 h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                                <div className="max-w-2xl">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={i === activeSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.2 }}
                                        className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${slide.tag === "BIM"
                                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                            }`}
                                    >
                                        {slide.tag}
                                    </motion.span>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={i === activeSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight"
                                    >
                                        {slide.title}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={i === activeSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-lg sm:text-xl text-blue-200/80 font-medium mb-6"
                                    >
                                        {slide.subtitle}
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={i === activeSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
                                    >
                                        {slide.desc}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={i === activeSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.6 }}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                                            <CheckCircle className="w-5 h-5" />
                                            {slide.stats}
                                        </div>
                                        <Link
                                            href="/services"
                                            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Section header */}
            <div className="absolute top-8 left-0 right-0 z-20 text-center pointer-events-none">
                <p className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">
                    Our Work in Action
                </p>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                    {carouselSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            className={`rounded-full transition-all duration-300 ${i === activeSlide
                                    ? "w-8 h-2 bg-white"
                                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <span className="text-white/50 text-sm font-mono">
                    {String(activeSlide + 1).padStart(2, "0")} /{" "}
                    {String(slideCount).padStart(2, "0")}
                </span>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Previous slide"
            >
                <ChevronRight className="w-6 h-6 rotate-180" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </section>
    );
}
