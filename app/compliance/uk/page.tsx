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

const ukStandards = [
    { code: "BS 7671 (18th Edition + Am 2)", desc: "IET Wiring Regulations for all electrical installations including PV systems.", icon: Zap, detail: "Regulation 712 for solar PV; Part 7 special locations; earthing and bonding requirements" },
    { code: "G98 / G99", desc: "Engineering recommendations for grid-connected distributed generation — DNO application-ready designs.", icon: Globe, detail: "G98 for ≤16A/phase; G99 for >16A — full technical assessment pack ready" },
    { code: "Part L (Building Regulations)", desc: "Conservation of fuel and power — energy performance calculations and SAP compliance.", icon: Layers, detail: "Part L1A / L1B / L2A / L2B — new and existing, domestic and non-domestic" },
    { code: "PAS 1192 / ISO 19650", desc: "BIM information management — standardized data exchange, CDE workflows, and model federation.", icon: Layers, detail: "CDE naming conventions, IFC export standards, Uniclass classification, EIR/BEP documentation" },
    { code: "MCS Certification Standards", desc: "Microgeneration Certification Scheme — quality assurance for renewable energy installations.", icon: BadgeCheck, detail: "MCS 001 (PV), MCS 012 (battery storage), MCS 020 (heat pumps) — compliant designs & specs" },
    { code: "NAPIT / NICEIC Standards", desc: "Electrical competency schemes for approved contractors on UK PV and electrical systems.", icon: ShieldCheck, detail: "Part P Building Regulations notification, Competent Person Scheme compliance" },
];

const ukRegions = [
    { region: "England & Wales", notes: "Full Building Regulations Part L compliance, NHBC standards, EA guidelines" },
    { region: "Scotland", notes: "Scottish Building Regulations, Section 6 Energy, SEPA environmental compliance" },
    { region: "Northern Ireland", notes: "Technical Booklet F1 & F2, DNI Grid Code, NIEA environmental standards" },
    { region: "Republic of Ireland", notes: "ETCI National Rules for Electrical Installations, SEAI grant compliance" },
];

export default function UKCompliance() {
    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
            {/* HERO */}
            <section className="relative min-h-[48vh] sm:min-h-[52vh] md:min-h-[58vh] flex items-center overflow-hidden bg-slate-900">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="United Kingdom compliance" fill className="object-cover" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-cyan-900/75 z-[1]" />
                <div className="absolute inset-0 z-[2]">
                    <motion.div animate={{ x: [0, 40, 0], y: [0, 25, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
                    <motion.div animate={{ x: [0, -30, 0], y: [0, -40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-16 md:py-20">
                    <Link href="/compliance" className="inline-flex items-center text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors text-sm font-medium group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />All Compliance Regions
                    </Link>
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-5 sm:mb-6 backdrop-blur-sm">
                            <span className="text-2xl mr-2">🇬🇧</span><span className="text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase">United Kingdom</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-5 text-white">
                            UK Compliance &{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">British Standards</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
                            BS 7671, Building Regulations Part L, and DNO-ready designs for UK solar and BIM projects — from England to Northern Ireland.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="flex flex-wrap gap-3">
                            {["BS 7671 18th Ed.", "G98 / G99 DNO", "ISO 19650 BIM"].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm">
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />{tag}
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                            {ukStandards.map((std, i) => (
                                <motion.div key={i} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ x: 4 }} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md hover:shadow-lg hover:border-accent/30 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors">
                                            <std.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-accent transition-colors">{std.code}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-1">{std.desc}</p>
                                            <p className="text-xs text-slate-400 italic">{std.detail}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-cyan-50 rounded-xl border border-cyan-100"><Shield className="w-6 h-6 text-accent" /></div>
                                <span className="text-accent font-bold tracking-widest uppercase text-sm">UK Codes</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                                United Kingdom{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-500">Standards</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 text-justify">
                                Our UK deliverables comply with British Standards, Building Regulations, and DNO requirements. We follow ISO 19650 for information management and produce BIM Level 2 compliant models.
                            </p>
                            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6">
                                <Image src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" alt="UK engineering" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {ukRegions.map((r, i) => (
                                    <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                        <div className="flex items-center gap-2 mb-1">
                                            <BadgeCheck className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span className="text-sm font-bold text-slate-900">{r.region}</span>
                                        </div>
                                        <p className="text-xs text-slate-600">{r.notes}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DELIVERABLES */}
            <section className="py-14 sm:py-20 lg:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Deliver for UK Projects</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-accent to-emerald-500 mx-auto rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {[
                            "BS 7671-compliant electrical installation design",
                            "G98 / G99 DNO application technical pack",
                            "Single-line diagrams for grid-tied PV systems",
                            "Battery storage system design (MCS 012)",
                            "SAP energy calculations for Part L compliance",
                            "ISO 19650 BIM delivery — federated models",
                            "IFC-exported BIM models with correct LOD",
                            "Revit models with Uniclass classifications",
                            "Clash-free MEP coordination reports",
                            "As-built drawings to BS 8541 standards",
                        ].map((item, i) => (
                            <motion.div key={i} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 p-4 sm:p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-cyan-50 to-emerald-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-emerald-500" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-accent mr-2" />
                            <span className="text-sm font-bold text-slate-700">BS 7671 / ISO 19650 Compliant</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                            Need a UK-Compliant{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-500">Engineering Package?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                            From G99 DNO packs to ISO 19650 BIM delivery — we handle UK compliance end to end.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="group bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-accent/20 flex items-center justify-center hover:-translate-y-0.5">
                                Request UK Engineering Package<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/compliance" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-slate-700 bg-white border border-slate-200 hover:border-accent/40 transition-all flex items-center justify-center shadow-sm hover:shadow-md">
                                ← Other Regions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
