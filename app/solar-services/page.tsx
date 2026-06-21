"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/app/lib/services";
import {
    Zap,
    ArrowRight,
    Sun,
    Grid3x3,
    BarChart3,
    BatteryCharging,
    Battery,
    CheckCircle,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Sun,
    Grid: Grid3x3,
    BarChart: BarChart3,
    BatteryCharging,
    Battery,
};

const colorMap: Record<string, { gradient: string; bg: string; border: string; accent: string }> = {
    Sun: { gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50", border: "border-amber-100", accent: "text-amber-600" },
    Grid: { gradient: "from-yellow-500 to-amber-500", bg: "bg-yellow-50", border: "border-yellow-100", accent: "text-yellow-600" },
    BarChart: { gradient: "from-orange-500 to-red-500", bg: "bg-orange-50", border: "border-orange-100", accent: "text-orange-600" },
    BatteryCharging: { gradient: "from-lime-500 to-green-500", bg: "bg-lime-50", border: "border-lime-100", accent: "text-lime-600" },
    Battery: { gradient: "from-teal-500 to-emerald-500", bg: "bg-teal-50", border: "border-teal-100", accent: "text-teal-600" },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

export default function SolarServices() {
    const solarServices = services.filter((s) => s.category === "Solar");

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
            {/* ═══ HERO ═══ */}
            <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden bg-slate-900">
                <Image
                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1920&q=80"
                    alt="Solar panel array – Solar engineering services"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-amber-900/60 z-[1]" />

                {/* Animated blobs */}
                <div className="absolute inset-0 z-[2]">
                    <motion.div
                        animate={{ x: [0, 45, 0], y: [0, 20, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, -35, 0], y: [0, -30, 0] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm"
                        >
                            <Zap className="w-4 h-4 text-amber-400 mr-2" />
                            <span className="text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                                Solar Engineering
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
                        >
                            Solar PV{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Engineering
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.7 }}
                            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
                        >
                            Comprehensive PV design, analysis, and permit engineering — ensuring NEC compliance,
                            optimal energy yield, and first-pass AHJ approval.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap gap-3"
                        >
                            {["NEC Compliant", "Helioscope & PVsyst", "Permit-Ready"].map((tag, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                    {tag}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══ SERVICES GRID ═══ */}
            <section className="py-14 sm:py-20 lg:py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Our Solar Capabilities
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
                        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Click any service to explore the full scope of deliverables.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {solarServices.map((service, i) => {
                            const Icon = iconMap[service.iconName] || Zap;
                            const colors = colorMap[service.iconName] || colorMap.Sun;

                            return (
                                <motion.div
                                    key={service.id}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="block h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:border-amber-300/40 transition-all group"
                                    >
                                        {/* Icon + Category */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 uppercase tracking-wider">
                                                Solar
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Short desc */}
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                                            {service.shortDescription}
                                        </p>

                                        {/* Feature pills */}
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                            {service.features.slice(0, 3).map((f, fi) => (
                                                <span key={fi} className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${colors.bg} ${colors.border} border text-[10px] sm:text-xs font-medium ${colors.accent}`}>
                                                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                                    {f}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center text-sm font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                                            View Details <ArrowRight className="ml-1 w-4 h-4" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Back to Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-10 sm:mt-14"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-slate-600 hover:text-amber-600 border border-slate-200 hover:border-amber-300/40 transition-all hover:shadow-md"
                        >
                            ← Back to All Services
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
