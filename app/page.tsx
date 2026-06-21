"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Globe, Zap, Cpu, Layers, Building2, Sun, CheckCircle, ChevronRight, Shield, FileCheck } from "lucide-react";
import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
import CarouselSection from "@/components/CarouselSection";

// Rotating words for the typewriter effect
const rotatingWords = ["BIM Modeling", "Solar Design", "MEP Coordination", "Permit Packages", "Clash Detection"];


export default function Home() {
  const bimServices = services.filter(s => s.category === 'BIM');
  const solarServices = services.filter(s => s.category === 'Solar');

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background image plus animated objects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-services.png"
            alt="Solar and BIM engineering hero background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/55" />

          <motion.div
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-amber-200/25 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-100/20 rounded-full blur-[100px]"
          />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left text-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 border border-white/10 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-white/90 mr-2 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-100">Engineering Intelligence - UK & USA</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold leading-tight mb-6 text-white"
              >
                Your Trusted Partner for
                <span
                  className="block relative overflow-hidden mt-1"
                  style={{ height: "1.25em", paddingBottom: "0.15em" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-x-0 top-0 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-lg md:text-xl text-slate-100 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                We deliver precision-driven <strong className="text-white">BIM Modeling</strong> and <strong className="text-white">Solar PV Engineering</strong> services, helping construction firms across the <strong className="text-white">US & UK</strong> build faster, smarter, and code-compliant.
              </motion.p>

              {/* Quick Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-10 text-sm text-slate-200"
              >
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-300" /> NEC & IBC Compliant</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-300" /> 24h Turnaround</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-300" /> LOD 300-500</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/contact"
                  className="group bg-secondary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-xl font-bold text-lg text-slate-700 bg-white border border-slate-200 hover:border-secondary/40 hover:text-secondary transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                >
                  View Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right: Animated Visual */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Illustration Container */}
                <div className="relative aspect-square">
                  {/* Glowing ring behind */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 to-amber-50 opacity-60 blur-2xl" />

                  {/* Central isometric card stack */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* BIM Card */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-64 h-44 bg-white rounded-2xl shadow-2xl shadow-blue-200/50 border border-blue-100 p-5 -rotate-6 -translate-x-4 -translate-y-8"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">BIM Modeling</div>
                          <div className="text-[11px] text-slate-400">LOD 300-500</div>
                        </div>
                      </div>
                      {/* Mini wireframe illustration */}
                      <svg viewBox="0 0 200 80" className="w-full h-auto opacity-80">
                        {/* Building wireframe */}
                        <rect x="20" y="20" width="50" height="55" fill="none" stroke="#3B82F6" strokeWidth="1.5" rx="2" />
                        <rect x="30" y="30" width="12" height="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.8" />
                        <rect x="48" y="30" width="12" height="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.8" />
                        <rect x="30" y="48" width="12" height="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.8" />
                        <rect x="48" y="48" width="12" height="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.8" />
                        <rect x="38" y="62" width="14" height="13" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="0.8" />
                        {/* Structural lines */}
                        <line x1="80" y1="25" x2="80" y2="75" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="90" y1="20" x2="90" y2="75" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="100" y1="30" x2="100" y2="75" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" />
                        {/* Connection dots */}
                        <circle cx="80" cy="25" r="2.5" fill="#3B82F6" />
                        <circle cx="90" cy="20" r="2.5" fill="#3B82F6" />
                        <circle cx="100" cy="30" r="2.5" fill="#3B82F6" />
                        {/* MEP pipes */}
                        <path d="M 115 30 Q 130 30, 130 45 Q 130 60, 150 60" fill="none" stroke="#06B6D4" strokeWidth="1.5" />
                        <path d="M 115 40 Q 140 40, 140 50 Q 140 65, 160 65" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                        <path d="M 115 50 Q 135 50, 135 55 Q 135 70, 170 70" fill="none" stroke="#10B981" strokeWidth="1.5" />
                        {/* Labels */}
                        <circle cx="155" cy="60" r="3" fill="#06B6D4" />
                        <circle cx="165" cy="65" r="3" fill="#F59E0B" />
                        <circle cx="175" cy="70" r="3" fill="#10B981" />
                      </svg>
                    </motion.div>

                    {/* Solar Card */}
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute w-64 h-44 bg-white rounded-2xl shadow-2xl shadow-amber-200/50 border border-amber-100 p-5 rotate-3 translate-x-8 translate-y-12"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                          <Sun className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">Solar PV Design</div>
                          <div className="text-[11px] text-slate-400">NEC Compliant</div>
                        </div>
                      </div>
                      {/* Solar panel illustration */}
                      <svg viewBox="0 0 200 80" className="w-full h-auto opacity-80">
                        {/* Roof shape */}
                        <path d="M 10 60 L 100 15 L 190 60" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                        {/* Solar panels - row 1 */}
                        <rect x="40" y="28" width="22" height="13" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(-12 51 34)" />
                        <rect x="65" y="23" width="22" height="13" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(-8 76 29)" />
                        <rect x="90" y="22" width="22" height="13" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(-2 101 28)" />
                        <rect x="115" y="24" width="22" height="13" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(5 126 30)" />
                        <rect x="140" y="30" width="22" height="13" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(10 151 36)" />
                        {/* Solar panels - row 2 */}
                        <rect x="35" y="44" width="22" height="13" fill="#FDE68A" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(-10 46 50)" />
                        <rect x="60" y="40" width="22" height="13" fill="#FDE68A" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(-6 71 46)" />
                        <rect x="85" y="39" width="22" height="13" fill="#FDE68A" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(0 96 45)" />
                        <rect x="110" y="41" width="22" height="13" fill="#FDE68A" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(6 121 47)" />
                        <rect x="135" y="46" width="22" height="13" fill="#FDE68A" stroke="#D97706" strokeWidth="1" rx="1" transform="rotate(10 146 52)" />
                        {/* Sun rays */}
                        <circle cx="175" cy="12" r="6" fill="#FCD34D" opacity="0.7" />
                        <line x1="175" y1="2" x2="175" y2="0" stroke="#FCD34D" strokeWidth="1.5" opacity="0.5" />
                        <line x1="185" cy="12" x2="188" y2="12" stroke="#FCD34D" strokeWidth="1.5" opacity="0.5" />
                        <line x1="182" y1="5" x2="185" y2="2" stroke="#FCD34D" strokeWidth="1.5" opacity="0.5" />
                      </svg>
                    </motion.div>

                    {/* Floating badges */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute top-4 right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2"
                    >
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold text-slate-700">100% Compliant</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      className="absolute bottom-8 left-0 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2"
                    >
                      <FileCheck className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-bold text-slate-700">Permit Ready</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute bottom-2 right-8 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold text-slate-700">24h Turnaround</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive engineering services tailored for US & UK markets.
            </p>
          </motion.div>

          {/* BIM Category */}
          <div className="mb-24">
            <div className="flex items-center mb-10">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">BIM Services</h3>
                <p className="text-slate-500">Architectural, Structural & MEP Coordination</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bimServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Solar Category */}
          <div>
            <div className="flex items-center mb-10">
              <div className="p-3 bg-amber-100 rounded-xl mr-4">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">Solar Engineering</h3>
                <p className="text-slate-500">PV Design, Analysis & Storage Solutions</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solarServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Globe Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 opacity-50 z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Globe, val: "2+", label: "Major Markets (US & UK)", color: "text-secondary", bg: "bg-blue-50" },
              { icon: Cpu, val: "24h", label: "Proposal Turnaround", color: "text-accent", bg: "bg-cyan-50" },
              { icon: Zap, val: "100%", label: "NEC / IBC Compliance", color: "text-success", bg: "bg-emerald-50" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">{stat.val}</div>
                <p className="text-slate-500 uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Expertise - Scroll-Hijacking Carousel */}
      <CarouselSection />

      {/* Inline Contact Form */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-amber-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Together</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you need a quick solar permit package or a full BIM coordination project, we&apos;re ready to deliver. Get in touch and receive a quote within 24 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Free project consultation" },
                  { icon: CheckCircle, text: "24-hour quote turnaround" },
                  { icon: CheckCircle, text: "NEC & IBC compliant deliverables" },
                  { icon: CheckCircle, text: "Dedicated project manager" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700">
                    <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you within 24 hours."); }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 space-y-5"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Inquiry</h3>
                <p className="text-sm text-slate-500 mb-4">Fill in the form below and we&apos;ll reach out shortly.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all text-sm text-slate-700">
                    <option>Solar PV Permit Package</option>
                    <option>Architectural BIM (LOD 300+)</option>
                    <option>MEP Coordination</option>
                    <option>Structural Modeling</option>
                    <option>Clash Detection</option>
                    <option>Shop Drawings / As-Builts</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Brief Description</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-2 text-base"
                >
                  Send Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
