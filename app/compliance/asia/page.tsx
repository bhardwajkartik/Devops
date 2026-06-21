"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Shield, ArrowLeft, ArrowRight, CheckCircle2,
    Zap, Layers, Globe, BadgeCheck, ShieldCheck, Sparkles,
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } } };

const asiaStandards = [
    {
        code: "IEC 62446 (Solar PV Systems)",
        desc: "International standard for photovoltaic systems — documentation, commissioning tests, and inspection.",
        icon: Zap,
        detail: "Grid-connected and off-grid PV systems; test reports, string analysis, labelling requirements",
    },
    {
        code: "AS / NZS 3000 (Australia)",
        desc: "Australian/New Zealand Wiring Rules — the primary standard for all electrical installations.",
        icon: Layers,
        detail: "Clean Energy Council (CEC) approved design guidelines; DNSP interconnection requirements",
    },
    {
        code: "IS 16221 (India Solar)",
        desc: "Indian standard for solar photo-voltaic energy systems, parts 1–3 covering components and system design.",
        icon: Globe,
        detail: "MNRE grid-connected rooftop guidelines; CERC interconnection; DISCOM approval packages",
    },
    {
        code: "CNS / GB Standards (East Asia)",
        desc: "Chinese National Standards and Taiwan CNS for PV systems and BIM information modelling.",
        icon: BadgeCheck,
        detail: "GB/T 19939 (grid-connected PV); GB 50007 structural foundation; GB 50011 seismic design",
    },
    {
        code: "SS 553 / CP 5 (Singapore)",
        desc: "Singapore Standards for electrical installations and code of practice for solar PV systems.",
        icon: ShieldCheck,
        detail: "EMA licensing requirements; BCA Green Mark compliance; HDB / URA planning guidelines",
    },
    {
        code: "ASEAN Building Codes",
        desc: "Regional engineering standards across ASEAN member states for solar and construction projects.",
        icon: Globe,
        detail: "Philippines PEC / DOE; Thailand MEA / PEA; Vietnam EVNNPT interconnection standards",
    },
];

const asiaCountries = [
    { country: "🇮🇳 India", standards: "MNRE, CEA, IS 16221, CERC", color: "border-orange-200 bg-orange-50" },
    { country: "🇦🇺 Australia", standards: "AS/NZS 3000, CEC, DNSP", color: "border-yellow-200 bg-yellow-50" },
    { country: "🇸🇬 Singapore", standards: "SS 553, EMA, BCA Green Mark", color: "border-red-200 bg-red-50" },
    { country: "🇨🇳 China", standards: "GB/T 19939, CNS, MOHURD BIM", color: "border-amber-200 bg-amber-50" },
    { country: "🇯🇵 Japan", standards: "JIS C 8960, METI FIT guidelines", color: "border-pink-200 bg-pink-50" },
    { country: "🇵🇭 🇹🇭 🇻🇳 SE Asia", standards: "PEC, MEA/PEA, EVNNPT standards", color: "border-teal-200 bg-teal-50" },
];

export default function AsiaCompliance() {
    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

            {/* HERO */}
            <section className="relative min-h-[48vh] sm:min-h-[52vh] md:min-h-[58vh] flex items-center overflow-hidden bg-slate-900">
                <Image
                    src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80"
                    alt="Asia Pacific compliance standards"
                    fill className="object-cover" sizes="100vw" priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-amber-900/75 z-[1]" />
                <div className="absolute inset-0 z-[2]">
                    <motion.div animate={{ x: [0, 40, 0], y: [0, 25, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
                    <motion.div animate={{ x: [0, -30, 0], y: [0, -40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-16 md:py-20">
                    <Link href="/compliance" className="inline-flex items-center text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors text-sm font-medium group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />All Compliance Regions
                    </Link>
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-5 sm:mb-6 backdrop-blur-sm">
                            <span className="text-2xl mr-2">🌏</span>
                            <span className="text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase">Asia Pacific</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-5 text-white">
                            Asia Pacific Compliance &{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Regional Standards</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
                            Region-specific solar PV and BIM compliance across India, Australia, Singapore, China, Japan, and Southeast Asia.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="flex flex-wrap gap-3">
                            {["IEC 62446", "AS/NZS 3000", "IS 16221 India", "IEA Ready"].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />{tag}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* STANDARDS */}
            <section className="py-14 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        {/* Left: Header + Image + Countries */}
                        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-100"><Shield className="w-6 h-6 text-amber-600" /></div>
                                <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Asia Pacific Codes</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                                Multi-Country Regional{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Compliance</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 text-justify">
                                Our Asia Pacific expertise spans solar PV permit documentation, BIM deliverables, and
                                engineering designs compliant with each country&apos;s grid and building authority requirements.
                                We adapt to each nation&apos;s unique regulatory framework.
                            </p>
                            <div className="relative w-full h-[200px] sm:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6">
                                <Image src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80" alt="Solar panels Asia" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                            </div>
                            {/* Country grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {asiaCountries.map((c, i) => (
                                    <div key={i} className={`rounded-xl p-4 border ${c.color}`}>
                                        <p className="text-sm font-bold text-slate-900 mb-1">{c.country}</p>
                                        <p className="text-xs text-slate-600">{c.standards}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Standards */}
                        <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                            {asiaStandards.map((std, i) => (
                                <motion.div key={i} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ x: 4 }} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md hover:shadow-lg hover:border-amber-400/30 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                                            <std.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">{std.code}</h3>
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

            {/* DELIVERABLES */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Deliver for Asia Pacific Projects</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-400 mx-auto rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {[
                            "IEC 62446-compliant PV system documentation",
                            "CEC-approved design reports (Australia)",
                            "MNRE / DISCOM grid-connected rooftop packages (India)",
                            "EMA / SS 553 electrical installation drawings (Singapore)",
                            "GB/T-compliant PV system documentation (China)",
                            "METI FIT application support drawings (Japan)",
                            "Seismic load analysis for Asia Pacific zones",
                            "Revit / BIM models in local delivery format",
                            "String sizing, inverter selection, and SLD diagrams",
                            "Multi-language title blocks on request",
                        ].map((item, i) => (
                            <motion.div key={i} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 p-4 sm:p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-400/20 transition-all">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-amber-600 mr-2" />
                            <span className="text-sm font-bold text-slate-700">Asia Pacific Compliant Designs</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                            Need a Region-Compliant{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Engineering Package?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                            Tell us your country and grid authority — we&apos;ll deliver compliant solar PV and BIM packages tailored to your local regulations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="group bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center hover:-translate-y-0.5">
                                Request Asia Pacific Package<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/compliance" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-slate-700 bg-white border border-slate-200 hover:border-amber-400/40 transition-all flex items-center justify-center shadow-sm hover:shadow-md">
                                ← Other Regions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
