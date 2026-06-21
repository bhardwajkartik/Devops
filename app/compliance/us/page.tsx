"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Shield,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Zap,
    Scale,
    Layers,
    AlertTriangle,
    ClipboardCheck,
    FileCheck,
    ShieldCheck,
    BadgeCheck,
    BookOpen,
    Globe,
    Sparkles,
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const usaStandards = [
    {
        code: "NEC 2020 / 2023",
        desc: "National Electrical Code compliance for all photovoltaic system designs, including wiring, grounding, and overcurrent protection.",
        icon: Zap,
        detail: "Article 690 PV systems, Article 705 interconnected systems, Article 706 energy storage",
    },
    {
        code: "ASCE 7-16 / 7-22",
        desc: "Minimum Design Loads — wind, snow, and seismic load calculations for structural mounting systems.",
        icon: Scale,
        detail: "Wind uplift, dead loads, live loads, and snow accumulation analysis for all US climate zones",
    },
    {
        code: "IBC / IRC",
        desc: "International Building & Residential Code compliance for structural integrity and occupant safety.",
        icon: Layers,
        detail: "Roof penetration details, structural attachment design, and code-compliant framing documentation",
    },
    {
        code: "IFC",
        desc: "International Fire Code — fire access pathways, setback requirements, and rapid shutdown compliance.",
        icon: AlertTriangle,
        detail: "NEC 2020 §690.12 rapid shutdown, 3-ft pathways, ridge setbacks per local AHJ",
    },
    {
        code: "AHJ Requirements",
        desc: "Local Authority Having Jurisdiction — customized permit packages that meet county- and city-specific requirements.",
        icon: ClipboardCheck,
        detail: "County-level customization across all 50 US states — from California to Florida to Texas",
    },
];

const stateHighlights = [
    { state: "California", notes: "Title 24 energy compliance, CPUC interconnection, PG&E / SCE / SDG&E rules" },
    { state: "Texas", notes: "ERCOT grid requirements, IRC residential, PUCT regulations" },
    { state: "Florida", notes: "High-velocity hurricane zone structural loads, FBC compliance" },
    { state: "New York", notes: "NYSERDA incentives, Con Edison interconnection, NYC building dept." },
    { state: "New Jersey", notes: "BPU compliance, SRP permit specs, PSE&G interconnection" },
    { state: "Nevada / Arizona", notes: "NV Energy / APS rules, desert climate zone design" },
];

export default function USCompliance() {
    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

            {/* ═══ HERO ═══ */}
            <section className="relative min-h-[48vh] sm:min-h-[52vh] md:min-h-[58vh] flex items-center overflow-hidden bg-slate-900">
                <Image
                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
                    alt="United States compliance standards"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-blue-900/75 z-[1]" />

                <div className="absolute inset-0 z-[2]">
                    <motion.div
                        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-16 md:py-20">
                    <Link
                        href="/compliance"
                        className="inline-flex items-center text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors text-sm font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        All Compliance Regions
                    </Link>

                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-5 sm:mb-6 backdrop-blur-sm"
                        >
                            <span className="text-2xl mr-2">🇺🇸</span>
                            <span className="text-blue-300 text-xs sm:text-sm font-bold tracking-wider uppercase">United States</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-5 text-white"
                        >
                            US Compliance &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Code Standards
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.7 }}
                            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6"
                        >
                            NEC-compliant solar PV permit packages and BIM deliverables, fully customized
                            for every US jurisdiction — from California to New York.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap gap-3"
                        >
                            {["NEC 2020 / 2023", "All 50 States", "First-Pass AHJ"].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                                    {tag}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══ STANDARDS SECTION ═══ */}
            <section className="py-14 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100">
                                    <Shield className="w-6 h-6 text-secondary" />
                                </div>
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm">US Codes</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                                United States{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                    Engineering Standards
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 text-justify">
                                Our solar PV permit packages and BIM deliverables comply with all major US building,
                                electrical, and fire codes. We customize every package to meet your AHJ&apos;s specific
                                requirements across all 50 states.
                            </p>

                            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                                    alt="Solar panels on US rooftop"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Right: Standards */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {usaStandards.map((std, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ x: 4 }}
                                    className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md hover:shadow-lg hover:border-secondary/30 transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                            <std.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-secondary transition-colors">
                                                {std.code}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-1">{std.desc}</p>
                                            <p className="text-xs text-slate-400 italic">{std.detail}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ STATE HIGHLIGHTS ═══ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-50">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-14"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            State-Level Expertise
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
                        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                            We tailor every permit package to the exact requirements of your jurisdiction.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {stateHighlights.map((s, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md hover:shadow-lg hover:border-secondary/20 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                        <BadgeCheck className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">{s.state}</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">{s.notes}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ WHAT WE DELIVER ═══ */}
            <section className="py-14 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-14"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What We Deliver for US Projects
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {[
                            "Site plan with racking layout and dimensions",
                            "Electrical single-line & three-line diagrams",
                            "Structural attachment / roof penetration details",
                            "Load calculations (wind, snow, seismic)",
                            "NEC code annotations and notes block",
                            "Placard / label requirements per NEC 690.54",
                            "Rapid shutdown compliance drawings",
                            "Energy storage system (ESS) diagrams",
                            "Conduit / wire sizing schedules",
                            "AHJ-specific title block and format",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-4 sm:p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-secondary/20 transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-secondary mr-2" />
                            <span className="text-sm font-bold text-slate-700">AHJ First-Pass Guaranteed</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                            Need a US-Compliant{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Permit Package?
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                            Tell us your jurisdiction and we&apos;ll deliver a fully code-compliant package tailored to your local AHJ.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group bg-secondary hover:bg-secondary/90 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 flex items-center justify-center hover:-translate-y-0.5"
                            >
                                Request US Permit Package
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/compliance"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-slate-700 bg-white border border-slate-200 hover:border-secondary/40 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                ← Other Regions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
