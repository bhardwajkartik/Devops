"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Layers,
    Zap,
    CheckCircle,
    Building,
    Cuboid,
    ShieldCheck,
    FileText,
    Sun,
    Grid3x3,
    BarChart3,
    BatteryCharging,
    Battery,
    Sparkles,
    Globe,
    ClipboardCheck,
    Ruler,
    Lightbulb,
    Target,
    Users,
    Trophy,
    Gauge,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ─── BIM Services Data ─── */
const bimServices = [
    {
        slug: "architectural-bim-modeling",
        title: "Architectural BIM",
        desc: "High-LOD architectural models for visualization, documentation, and coordination.",
        icon: Building,
        features: ["3D Visualization", "Construction Docs", "Facade Modeling"],
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        accent: "text-blue-600",
    },
    {
        slug: "structural-bim-modeling",
        title: "Structural BIM",
        desc: "Precise structural detailing — steel, rebar, precast — fully coordinated.",
        icon: Cuboid,
        features: ["Steel Detailing", "Rebar Scheduling", "Quantity Take-offs"],
        color: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        accent: "text-indigo-600",
    },
    {
        slug: "mep-bim-coordination",
        title: "MEP Coordination",
        desc: "Clash-free HVAC, electrical, and plumbing routing with fabrication-ready output.",
        icon: Zap,
        features: ["Duct & Pipe Layouts", "Plant Room Design", "Spool Drawings"],
        color: "from-cyan-500 to-cyan-600",
        bg: "bg-cyan-50",
        border: "border-cyan-100",
        accent: "text-cyan-600",
    },
    {
        slug: "clash-detection",
        title: "Clash Detection",
        desc: "Navisworks-powered clash detection across all disciplines before construction.",
        icon: ShieldCheck,
        features: ["Hard & Soft Clashes", "Coordination Reports", "4D Phasing"],
        color: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        accent: "text-emerald-600",
    },
    {
        slug: "as-built-shop-drawings",
        title: "As-Built & Shop Drawings",
        desc: "Fabrication-ready shop drawings and as-built documentation for handovers.",
        icon: FileText,
        features: ["Shop Drawings", "As-Built Updates", "COBie Data"],
        color: "from-violet-500 to-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-100",
        accent: "text-violet-600",
    },
];

/* ─── Solar Services Data ─── */
const solarServices = [
    {
        slug: "commercial-solar-proposals",
        title: "Solar Proposals",
        desc: "Winning sales proposals with 3D layouts, production estimates, and ROI analysis.",
        icon: Sun,
        features: ["3D Roof Layouts", "Financial Analysis", "<24h Turnaround"],
        color: "from-amber-500 to-orange-500",
        bg: "bg-amber-50",
        border: "border-amber-100",
        accent: "text-amber-600",
    },
    {
        slug: "pv-system-design",
        title: "PV System Design",
        desc: "NEC-compliant full permit packages with SLDs, wire sizing, and stringing layouts.",
        icon: Grid3x3,
        features: ["Single Line Diagrams", "Stringing Layouts", "Load Calcs"],
        color: "from-yellow-500 to-amber-500",
        bg: "bg-yellow-50",
        border: "border-yellow-100",
        accent: "text-yellow-600",
    },
    {
        slug: "shading-energy-analysis",
        title: "Shading & Energy Analysis",
        desc: "Detailed shading and energy yield analysis using Helioscope, PVsyst, and Aurora.",
        icon: BarChart3,
        features: ["Production Reports", "P50/P90 Analysis", "Loss Diagrams"],
        color: "from-orange-500 to-red-500",
        bg: "bg-orange-50",
        border: "border-orange-100",
        accent: "text-orange-600",
    },
    {
        slug: "ev-charging-stations",
        title: "EV Charging Design",
        desc: "Integrated EV charging infrastructure for commercial, residential, and fleet depots.",
        icon: BatteryCharging,
        features: ["Load Management", "Station Layouts", "Grid Connection"],
        color: "from-lime-500 to-green-500",
        bg: "bg-lime-50",
        border: "border-lime-100",
        accent: "text-lime-600",
    },
    {
        slug: "battery-storage-design",
        title: "Battery Storage",
        desc: "BESS design for peak shaving, backup, and microgrid integration.",
        icon: Battery,
        features: ["Battery Sizing", "AC/DC Coupling", "Hybrid Inverters"],
        color: "from-teal-500 to-emerald-500",
        bg: "bg-teal-50",
        border: "border-teal-100",
        accent: "text-teal-600",
    },
];

/* ─── Workflow Steps ─── */
const workflow = [
    {
        step: "01",
        title: "Consultation",
        desc: "We listen. You share your project goals, site data, and requirements. We respond with a custom scope.",
        icon: Users,
        color: "from-blue-500 to-blue-600",
    },
    {
        step: "02",
        title: "Analysis",
        desc: "Detailed feasibility study — site assessment, code review, and technical planning.",
        icon: Target,
        color: "from-secondary to-accent",
    },
    {
        step: "03",
        title: "Design & Model",
        desc: "Precision engineering using Revit, AutoCAD, Helioscope, and Navisworks.",
        icon: Ruler,
        color: "from-emerald-500 to-emerald-600",
    },
    {
        step: "04",
        title: "QA & Delivery",
        desc: "3-tier review, compliance verification, and ready-to-submit deliverables.",
        icon: Trophy,
        color: "from-amber-500 to-orange-500",
    },
];

/* ─── Why Choose Us ─── */
const whyChoose = [
    { title: "First-Pass AHJ Approval", desc: "Our permit packages pass review on the first submission.", icon: ShieldCheck },
    { title: "Dual US & UK Expertise", desc: "Fluent in NEC, IBC, BS 7671, and ISO 19650 standards.", icon: Globe },
    { title: "24-Hour Turnaround", desc: "Rapid delivery on revisions and urgent project needs.", icon: Gauge },
    { title: "100+ Projects Delivered", desc: "Trusted by contractors, EPCs, and architects across two continents.", icon: ClipboardCheck },
    { title: "Dedicated Project Teams", desc: "Every project gets a senior drafter, design engineer, and QC manager.", icon: Users },
    { title: "Innovative Approach", desc: "We push design boundaries while keeping every detail code-compliant.", icon: Lightbulb },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

            {/* ═══════════════════════════════════════════════════ */}
            {/* HERO SECTION */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden bg-slate-900">
                {/* Background image */}
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
                    alt="Modern construction and engineering"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-blue-900/70 z-[1]" />

                {/* Animated blobs */}
                <div className="absolute inset-0 z-[2]">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, -35, 0] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px]"
                    />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                                Our Services
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
                        >
                            Engineering{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Excellence
                            </span>
                            , Delivered with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Precision
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.7 }}
                            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
                        >
                            We deliver precision-driven BIM modeling and Solar Engineering solutions
                            that define the future of construction — from concept to compliance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <Link
                                href="#bim-services"
                                className="group bg-white text-slate-900 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center hover:-translate-y-0.5"
                            >
                                <Layers className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                BIM Services
                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#solar-services"
                                className="group px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center"
                            >
                                <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                                Solar Engineering
                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* BIM SERVICES */}
            {/* ═══════════════════════════════════════════════════ */}
            <section id="bim-services" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
                            <Layers className="w-4 h-4 text-secondary mr-2" />
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">BIM Services</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            Building Information{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Modeling</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive BIM services from LOD 100 to LOD 500 — architectural, structural,
                            and MEP disciplines fully coordinated.
                        </p>
                    </motion.div>

                    {/* BIM Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {bimServices.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/services/${svc.slug}`}
                                    className="block h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:border-secondary/30 transition-all group"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                            <svc.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-secondary transition-colors">
                                            {svc.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {svc.features.map((f, fi) => (
                                            <span key={fi} className={`inline-flex items-center px-2.5 py-1 rounded-full ${svc.bg} ${svc.border} border text-xs font-medium ${svc.accent}`}>
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-sm font-bold text-secondary group-hover:translate-x-1 transition-transform">
                                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* BIM CTA */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mt-10 sm:mt-14"
                    >
                        <Link
                            href="/bim-services"
                            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5"
                        >
                            View All BIM Services
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* SOLAR SERVICES */}
            {/* ═══════════════════════════════════════════════════ */}
            <section id="solar-services" className="py-14 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden scroll-mt-20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-4">
                            <Zap className="w-4 h-4 text-amber-600 mr-2" />
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Solar Engineering</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            Solar PV{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Engineering</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            End-to-end solar design — from rooftop proposals to utility-scale permits,
                            EV charging, and battery storage systems.
                        </p>
                    </motion.div>

                    {/* Solar Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {solarServices.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/services/${svc.slug}`}
                                    className="block h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:border-amber-300/40 transition-all group"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                            <svc.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                            {svc.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {svc.features.map((f, fi) => (
                                            <span key={fi} className={`inline-flex items-center px-2.5 py-1 rounded-full ${svc.bg} ${svc.border} border text-xs font-medium ${svc.accent}`}>
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-sm font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Solar CTA */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mt-10 sm:mt-14"
                    >
                        <Link
                            href="/solar-services"
                            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
                        >
                            View All Solar Services
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* OUR WORKFLOW */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                            How We Work
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            Our Engineering Workflow
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                            From first consultation to final delivery — a streamlined process engineered for quality.
                        </p>
                    </motion.div>

                    {/* Workflow Steps */}
                    <div className="relative">
                        {/* Connector line — desktop */}
                        <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 via-emerald-200 to-amber-200 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 relative">
                            {workflow.map((item, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6 }}
                                    className="relative z-10"
                                >
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4`}>
                                            <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>
                                        <span className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">{item.step}</span>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>

                                    {/* Arrow between steps on mobile */}
                                    {i < workflow.length - 1 && (
                                        <div className="flex justify-center mt-3 sm:hidden">
                                            <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                                                <ArrowRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* WHY CHOOSE US */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
                <motion.div
                    animate={{ x: [0, 40, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -30, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Why Choose Soltic</h2>
                        <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                            We combine deep technical expertise with a commitment to quality that sets us apart.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {whyChoose.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors">
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════ */}
            {/* CTA SECTION */}
            {/* ═══════════════════════════════════════════════════ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-amber-500" />

                <motion.div
                    animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 w-[200px] h-[200px] bg-blue-200/20 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, -12, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-amber-200/20 rounded-full blur-[80px]"
                />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <Sparkles className="w-4 h-4 text-secondary mr-2" />
                            <span className="text-sm font-bold text-slate-700">Ready to Start?</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                            Need a Custom{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Engineering Solution
                            </span>
                            ?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            Whether it&apos;s a complex BIM coordination project or a solar permit package,
                            we&apos;re ready to engineer the solution you need.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group bg-secondary hover:bg-secondary/90 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 flex items-center justify-center hover:-translate-y-0.5"
                            >
                                Talk to an Engineer
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/compliance"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-slate-700 bg-white border border-slate-200 hover:border-secondary/40 hover:text-secondary transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                View Compliance Standards
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
