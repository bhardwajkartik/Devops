"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Users,
    Target,
    ShieldCheck,
    Globe,
    ArrowRight,
    Building2,
    Sun,
    Zap,
    Layers,
    CheckCircle,
    Award,
    Clock,
    Lightbulb,
    Handshake,
    TrendingUp,
    MapPin,
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// Timeline data
const milestones = [
    {
        year: "2023",
        title: "Foundation",
        desc: "Soltic was founded with a vision to bridge the gap between traditional engineering and digital intelligence.",
        icon: Lightbulb,
    },
    {
        year: "2024",
        title: "UK & US Expansion",
        desc: "Expanded operations to serve construction firms across the United Kingdom and the United States.",
        icon: Globe,
    },
    {
        year: "2024",
        title: "50+ Projects Milestone",
        desc: "Delivered over 50 BIM coordination and Solar PV engineering projects with 100% client satisfaction.",
        icon: Award,
    },
    {
        year: "2025",
        title: "Full-Service Studio",
        desc: "Evolved into a full-service engineering studio offering end-to-end BIM, Solar, and compliance solutions.",
        icon: TrendingUp,
    },
];

// Core values
const values = [
    {
        icon: Target,
        title: "Precision First",
        desc: "Every model, every calculation, every drawing is executed with zero-tolerance for errors. Our LOD 300–500 deliverables speak for themselves.",
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        icon: ShieldCheck,
        title: "Code Compliance",
        desc: "Strict adherence to NEC, IBC, and local AHJ requirements. Every permit package we deliver is built to pass on the first submission.",
        color: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
    {
        icon: Handshake,
        title: "True Partnership",
        desc: "We don't just deliver files — we integrate with your workflow, your standards, and your timeline as an extension of your team.",
        color: "from-amber-500 to-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
    },
    {
        icon: Clock,
        title: "Speed & Reliability",
        desc: "24-hour proposal turnaround. Rapid project delivery without cutting corners. Your deadlines are our deadlines.",
        color: "from-cyan-500 to-cyan-600",
        bg: "bg-cyan-50",
        border: "border-cyan-100",
    },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* ═══════════════════════════════════════════════════ */}
            {/* HERO SECTION */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-slate-900">
                {/* Background image */}
                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
                    alt="Modern construction and engineering"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-800/80 z-[1]" />

                {/* Animated background elements */}
                <div className="absolute inset-0 z-[2]">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-amber-500/8 rounded-full blur-[100px]"
                    />
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
                                <span className="text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                                    About Soltic
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.7 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
                            >
                                Engineering the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    Future
                                </span>{" "}
                                of Construction
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.7 }}
                                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mb-6 sm:mb-8 leading-relaxed"
                            >
                                We are a team of dedicated BIM engineers and solar energy specialists,
                                committed to transforming how the world builds — one model, one system,
                                one project at a time.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="flex flex-wrap gap-3 sm:gap-4"
                            >
                                <Link
                                    href="/contact"
                                    className="group bg-white text-slate-900 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center hover:-translate-y-0.5"
                                >
                                    Work With Us
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white border border-white/20 hover:bg-white/10 transition-all flex items-center"
                                >
                                    Our Services
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right: Animated stats cards — desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="hidden lg:grid grid-cols-2 gap-4"
                        >
                            {[
                                { val: "50+", label: "Projects Delivered", icon: Building2, delay: 0 },
                                { val: "100%", label: "Client Satisfaction", icon: CheckCircle, delay: 0.1 },
                                { val: "2+", label: "Global Markets", icon: Globe, delay: 0.2 },
                                { val: "24h", label: "Response Time", icon: Clock, delay: 0.3 },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + stat.delay, duration: 0.5 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                                >
                                    <stat.icon className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Mobile/tablet: Compact stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden"
                        >
                            {[
                                { val: "50+", label: "Projects" },
                                { val: "100%", label: "Satisfaction" },
                                { val: "2+", label: "Markets" },
                                { val: "24h", label: "Response" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 text-center"
                                >
                                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.val}</div>
                                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* WHO WE ARE */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left: Visual element */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative">
                                {/* Main card */}
                                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-100 shadow-xl">
                                    <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                        {/* BIM capability */}
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-slate-100"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                                <Building2 className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1">BIM Experts</h4>
                                            <p className="text-xs text-slate-500">LOD 300–500 Revit models</p>
                                        </motion.div>

                                        {/* Solar capability */}
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-slate-100"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                                                <Sun className="w-6 h-6 text-amber-600" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1">Solar PV</h4>
                                            <p className="text-xs text-slate-500">NEC-compliant packages</p>
                                        </motion.div>

                                        {/* MEP */}
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-slate-100"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                                                <Zap className="w-6 h-6 text-cyan-600" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1">MEP Systems</h4>
                                            <p className="text-xs text-slate-500">Full coordination</p>
                                        </motion.div>

                                        {/* Clash Detection */}
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-slate-100"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                                                <Layers className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1">Coordination</h4>
                                            <p className="text-xs text-slate-500">Zero conflicts on site</p>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-lg border border-slate-100 px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-800">Trusted by</div>
                                        <div className="text-[10px] text-slate-500">UK & US Firms</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
                                Who We Are
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                                Your Engineering Partner for the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                    Digital Age
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                                Soltic is a specialized engineering firm that sits at the intersection of
                                <strong className="text-slate-800"> Building Information Modeling (BIM)</strong> and{" "}
                                <strong className="text-slate-800">Solar Photovoltaic Engineering</strong>. We serve
                                architects, general contractors, EPCs, and developers across the United States and
                                United Kingdom.
                            </p>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                                Our team transforms complex construction challenges into precise, code-compliant
                                digital solutions — from federated Revit models and clash-free coordination to
                                permit-ready solar packages delivered in 24 hours.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: MapPin, text: "UK & US Markets" },
                                    { icon: ShieldCheck, text: "NEC/IBC Compliant" },
                                    { icon: Clock, text: "24h Turnaround" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700"
                                    >
                                        <item.icon className="w-4 h-4 text-secondary" />
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* OUR STORY — TIMELINE */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-amber-500" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
                            Our Journey
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            The Story So Far
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                            From a small team with a big vision to a growing engineering studio serving global markets.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Mobile: Left border line */}
                        <div className="block md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-amber-500" />
                        {/* Desktop: Center line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-amber-500 -translate-x-1/2" />

                        <div className="space-y-8 md:space-y-0">
                            {milestones.map((milestone, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className={`relative pl-10 md:pl-0 md:flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        } md:mb-16`}
                                >
                                    {/* Content card */}
                                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                                        <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                                                    <milestone.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                                                        {milestone.year}
                                                    </span>
                                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">{milestone.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{milestone.desc}</p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    {/* Mobile dot — on left line */}
                                    <div className="block md:hidden absolute left-2.5 top-6 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-secondary shadow-md z-10" />
                                    {/* Desktop dot — on center line */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-secondary shadow-md z-10" />

                                    {/* Empty space for the other side */}
                                    <div className="md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* CORE VALUES */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
                            What Drives Us
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            Our Core Values
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className={`${value.bg} border ${value.border} rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all hover:shadow-xl group`}
                            >
                                <div className="flex items-start gap-3 sm:gap-5">
                                    <div
                                        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                                    >
                                        <value.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{value.title}</h3>
                                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* STATS BAND */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
                {/* Animated blobs */}
                <motion.div
                    animate={{ x: [0, 30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Our Impact in Numbers</h2>
                        <p className="text-slate-400 text-sm sm:text-base lg:text-lg">Measurable results that speak louder than words.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                        {[
                            { value: "2+", label: "Years of Excellence", icon: Award },
                            { value: "50+", label: "Projects Delivered", icon: Building2 },
                            { value: "100%", label: "Client Satisfaction", icon: CheckCircle },
                            { value: "24h", label: "Support Coverage", icon: Clock },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                    <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400" />
                                </div>
                                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1 sm:mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-slate-400 uppercase tracking-wider text-[10px] sm:text-xs md:text-sm">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* WHY CHOOSE US */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left: Text */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
                                Why Soltic
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
                                Built for Modern{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                    Construction
                                </span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Dual Expertise",
                                        desc: "Unlike single-focus firms, we combine BIM and Solar PV under one roof — saving you coordination time and cost.",
                                    },
                                    {
                                        title: "US & UK Market Knowledge",
                                        desc: "We understand the permitting, compliance, and construction standards specific to both American and British markets.",
                                    },
                                    {
                                        title: "End-to-End Delivery",
                                        desc: "From initial concept modeling to permit-ready documentation, we handle the full pipeline so you can focus on building.",
                                    },
                                    {
                                        title: "Responsive & Reliable",
                                        desc: "Quotes within 24 hours. Dedicated project managers. No ghosting, no delays — just consistent, professional delivery.",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        custom={i}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                                <CheckCircle className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Visual card */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
                                {/* Background glow */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6">Our Toolbox</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {[
                                            "Autodesk Revit",
                                            "Navisworks",
                                            "AutoCAD",
                                            "Helioscope",
                                            "SketchUp",
                                            "Bluebeam",
                                            "PVsyst",
                                            "BIM 360",
                                        ].map((tool, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-center gap-2 text-sm text-slate-300"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                {tool}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <Globe className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">Markets We Serve</div>
                                                <div className="text-xs text-slate-400">United States • United Kingdom</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <Users className="w-5 h-5 text-amber-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">Clients</div>
                                                <div className="text-xs text-slate-400">Architects • GCs • EPCs • Developers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* CTA SECTION */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-amber-500" />

                {/* Background elements */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 w-[250px] h-[250px] bg-blue-200/20 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-cyan-200/20 rounded-full blur-[80px]"
                />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <Handshake className="w-4 h-4 text-secondary mr-2" />
                            <span className="text-sm font-bold text-slate-700">Let&apos;s Work Together</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                            Ready to Build{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Smarter
                            </span>
                            ?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            Whether you need a quick solar permit package or a full BIM coordination project,
                            our team is ready to deliver. Get in touch and receive a quote within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group bg-secondary hover:bg-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center hover:-translate-y-0.5"
                            >
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-slate-700 bg-white border border-slate-200 hover:border-secondary/40 hover:text-secondary transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
