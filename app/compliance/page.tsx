"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Shield,
    BookOpen,
    UserCheck,
    CheckCircle2,
    ArrowRight,
    FileCheck,
    Scale,
    BadgeCheck,
    Gauge,
    ClipboardCheck,
    Globe,
    ShieldCheck,
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

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const qaSteps = [
    {
        step: "01",
        title: "Senior Drafter",
        subtitle: "Initial Creation",
        desc: "Experienced drafters build models and drawings from client inputs using standardized templates and checklists. Every dimension, annotation, and detail is created to specification.",
        icon: UserCheck,
        color: "from-blue-500 to-blue-600",
    },
    {
        step: "02",
        title: "Design Engineer",
        subtitle: "Technical Review",
        desc: "Licensed engineers verify code compliance, validate load calculations, review system specifications, and ensure design efficiency. No detail goes unchecked.",
        icon: BookOpen,
        color: "from-secondary to-accent",
    },
    {
        step: "03",
        title: "QC Manager",
        subtitle: "Final Approval",
        desc: "Our Quality Control team performs a final standards check — reviewing aesthetics, consistency, and compliance before any deliverable reaches the client.",
        icon: Shield,
        color: "from-emerald-500 to-emerald-600",
    },
];

const regions = [
    {
        flag: "🇺🇸",
        title: "United States",
        subtitle: "US Codes & AHJ",
        href: "/compliance/us",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
        accent: "secondary",
        accentClasses: "bg-blue-50 border-blue-200 text-blue-700",
        btnClasses: "bg-secondary hover:bg-secondary/90 shadow-secondary/20",
        gradientClasses: "from-blue-600/80 to-blue-900/90",
        standards: ["NEC 2020 / 2023", "ASCE 7-16 / 7-22", "IBC / IRC", "IFC", "AHJ Requirements"],
        desc: "Comprehensive NEC-compliant solar permit packages and BIM deliverables customized for every US jurisdiction.",
        tagColor: "text-blue-400",
        tagBadge: "bg-white/10 border-white/10",
    },
    {
        flag: "🇬🇧",
        title: "United Kingdom",
        subtitle: "British Standards",
        href: "/compliance/uk",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        accent: "accent",
        accentClasses: "bg-cyan-50 border-cyan-200 text-cyan-700",
        btnClasses: "bg-accent hover:bg-accent/90 shadow-accent/20",
        gradientClasses: "from-cyan-700/80 to-slate-900/90",
        standards: ["BS 7671 (18th Ed.)", "G98 / G99", "Part L", "PAS 1192 / ISO 19650", "MCS Certification"],
        desc: "BS 7671, Building Regulations, and DNO-ready designs for UK solar and BIM projects.",
        tagColor: "text-cyan-400",
        tagBadge: "bg-white/10 border-white/10",
    },
    {
        flag: "🌏",
        title: "Asia Pacific",
        subtitle: "Regional Standards",
        href: "/compliance/asia",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
        accent: "vibrant",
        accentClasses: "bg-amber-50 border-amber-200 text-amber-700",
        btnClasses: "bg-amber-500 hover:bg-amber-600 shadow-amber-500/20",
        gradientClasses: "from-amber-700/80 to-slate-900/90",
        standards: ["IEC 62446", "AS / NZS 3000", "IS 16221 (India)", "CNS / GB Standards", "Local DNRE Codes"],
        desc: "Region-specific solar PV and BIM compliance across India, Australia, Singapore, and East Asia.",
        tagColor: "text-amber-400",
        tagBadge: "bg-white/10 border-white/10",
    },
];

export default function Compliance() {
    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

            {/* ═══ HERO ═══ */}
            <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden bg-slate-900">
                <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
                    alt="Engineering compliance and quality"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-emerald-900/70 z-[1]" />

                <div className="absolute inset-0 z-[2]">
                    <motion.div
                        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"
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
                            <Shield className="w-4 h-4 text-emerald-400 mr-2" />
                            <span className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                                Compliance & Quality
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
                        >
                            Built on{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                Standards
                            </span>
                            , Delivered with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                Precision
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.7 }}
                            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
                        >
                            Every model we build complies with the strictest engineering codes across
                            three global regions — US, UK, and Asia Pacific.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                { icon: ShieldCheck, text: "NEC / IBC Certified" },
                                { icon: BadgeCheck, text: "BS 7671 Compliant" },
                                { icon: Globe, text: "Asia Pacific Ready" },
                                { icon: FileCheck, text: "First-Pass Approval" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm"
                                >
                                    <item.icon className="w-3.5 h-3.5 text-emerald-400" />
                                    {item.text}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══ REGIONAL COMPLIANCE CARDS ═══ */}
            <section className="py-14 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
                            <Sparkles className="w-4 h-4 text-emerald-600 mr-2" />
                            <span className="text-emerald-700 text-xs sm:text-sm font-bold tracking-wider uppercase">Global Coverage</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Select Your Region
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-accent mx-auto rounded-full" />
                        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            We maintain dedicated compliance expertise for three global markets.
                            Choose your region to explore the specific standards we adhere to.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {regions.map((region, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                    {/* Image */}
                                    <div className="relative h-44 sm:h-52 overflow-hidden">
                                        <Image
                                            src={region.image}
                                            alt={region.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${region.gradientClasses}`} />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-2xl">{region.flag}</span>
                                                <span className="text-white/80 text-xs font-bold tracking-widest uppercase">{region.subtitle}</span>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white">{region.title}</h3>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-5 sm:p-6">
                                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                                            {region.desc}
                                        </p>

                                        {/* Standards list */}
                                        <ul className="space-y-2 mb-5">
                                            {region.standards.map((std, si) => (
                                                <li key={si} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                                    {std}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={region.href}
                                            className={`group/btn ${region.btnClasses} text-white w-full py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5`}
                                        >
                                            View {region.title} Compliance
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ 3-TIER QA PROCESS ═══ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-accent to-secondary" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3 block">Quality Assurance</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            3-Tier QA Process
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-accent mx-auto rounded-full" />
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                            Every deliverable goes through three independent review stages before it reaches you.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute top-[3.5rem] left-16 right-16 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-emerald-200 z-0" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
                            {qaSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8 }}
                                    className="relative z-10"
                                >
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                            </div>
                                            <span className="text-4xl sm:text-5xl font-bold text-slate-100">{step.step}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                                            <p className="text-sm font-semibold text-secondary mb-3">{step.subtitle}</p>
                                            <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                        {i < qaSteps.length - 1 && (
                                            <div className="flex justify-center mt-4 md:hidden">
                                                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ WHAT SETS US APART ═══ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <motion.div
                    animate={{ x: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -25, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px]"
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">What Sets Our QC Apart</h2>
                        <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                            We don&apos;t just check boxes — we engineer confidence into every deliverable.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { title: "Code-First Design", desc: "We start with compliance requirements, not retrofit them. Every design is code-native from the first sketch.", icon: FileCheck },
                            { title: "AHJ-Specific Packages", desc: "Each permit package is customized to the local Authority Having Jurisdiction — not a generic template.", icon: ClipboardCheck },
                            { title: "Version-Controlled Revisions", desc: "Every revision is tracked, timestamped, and documented. Full audit trail from concept to final delivery.", icon: BookOpen },
                            { title: "Zero-Tolerance Errors", desc: "Our 3-tier QA catches issues before they reach site. We maintain a near-zero error rate across all projects.", icon: Shield },
                            { title: "Rapid Compliance Updates", desc: "When codes update (NEC 2023, BS 7671 Am 2), our team certifies on the latest standards within weeks.", icon: Gauge },
                            { title: "Cross-Market Expertise", desc: "US, UK & Asia compliance knowledge means we navigate all systems fluently — no translation needed.", icon: Globe },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-accent to-secondary" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2" />
                            <span className="text-sm font-bold text-slate-700">Compliance Guaranteed</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                            Need a Permit Package That{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-accent">
                                Passes First Time
                            </span>
                            ?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            Whether it&apos;s NEC-compliant solar permits for the US, BS 7671 packages for the UK,
                            or regional standards across Asia — we engineer submissions that pass on the first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center hover:-translate-y-0.5"
                            >
                                Request Compliance Review
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-slate-700 bg-white border border-slate-200 hover:border-emerald-400/40 hover:text-emerald-700 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
