"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Layers,
  Zap,
  Send,
  Upload,
} from "lucide-react";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" as const },
  }),
};

const serviceOptions = [
  "Solar PV Permit Package",
  "Solar Sales Proposal",
  "Architectural BIM (LOD 300+)",
  "MEP Coordination",
  "Structural Modeling",
  "Clash Detection",
  "As-Built / Shop Drawings",
  "EV Charging Design",
  "Battery Storage Design",
  "Other",
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"quote" | "partner">("quote");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo form. In production, this would send an email.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <section className="relative min-h-[42vh] sm:min-h-[48vh] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
          alt="Engineering planning and contact support"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.22),_transparent_36%)] z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.18),_transparent_32%)] z-20" />

        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="uppercase tracking-[0.22em] font-semibold">Contact Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            >
              Right decisions, early.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-200"
            >
              Tell us about your project and we&apos;ll connect you with our UK & US engineering team. Faster quotes, clearer plans, and support from concept to compliance.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0}
                className="rounded-3xl bg-slate-950 border border-slate-800 p-8 shadow-2xl shadow-slate-900/30"
              >
                <div className="flex items-center gap-3 text-slate-100 mb-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-3">
                    <Layers className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Let&apos;s Talk</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">Tell Us About Your Project</h2>
                  </div>
                </div>
                <p className="text-slate-400 leading-7">
                  Complete the form and we&apos;ll respond within 24 hours with a tailored proposal or next step for BIM, solar, or compliance services.
                </p>
              </motion.div>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@solticsolutions.com",
                  href: "mailto:info@solticsolutions.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+44 7436 900601",
                  href: "tel:+447436900601",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "3 Stanley Hall, 129-145 Botchergate, Carlisle CA1 1RZ",
                },
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "Typically within 24 hours",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                    </div>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-base font-semibold text-slate-900 hover:text-secondary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-slate-900">{item.value}</p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={fadeInUp}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-6"
              >
                <p className="text-sm uppercase tracking-[0.24em] font-semibold text-slate-500 mb-3">Stay Ahead</p>
                <p className="text-sm text-slate-600 leading-7">
                  Subscribe for news, updates, and early access to project checklists from our engineering team.
                </p>
                <form className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                  />
                  <button type="button" className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-secondary/90">
                    Sign up
                  </button>
                </form>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="rounded-[2rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 overflow-hidden"
              >
                <div className="bg-slate-950 px-6 py-8 sm:px-8 sm:py-10">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 font-semibold">Book a Meeting</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">We&apos;re just a click away.</h2>
                    <p className="max-w-xl text-slate-300 leading-7">
                      Share your requirements and we&apos;ll provide a clear timeline, project scope, and next step recommendation.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8 sm:py-10 space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="space-y-2 text-sm text-slate-700">
                        <span className="font-semibold">First Name *</span>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                        />
                      </label>
                      <label className="space-y-2 text-sm text-slate-700">
                        <span className="font-semibold">Last Name *</span>
                        <input
                          type="text"
                          required
                          placeholder="Smith"
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="space-y-2 text-sm text-slate-700">
                        <span className="font-semibold">Company Name *</span>
                        <input
                          type="text"
                          required
                          placeholder="Soltic Solutions"
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                        />
                      </label>
                      <label className="space-y-2 text-sm text-slate-700">
                        <span className="font-semibold">Email *</span>
                        <input
                          type="email"
                          required
                          placeholder="hello@company.com"
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="space-y-2 text-sm text-slate-700">
                        <span className="font-semibold">Phone Number</span>
                        <input
                          type="tel"
                          placeholder="+44 7436 900601"
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                        />
                      </label>
                      <label className="space-y-2 text-sm text-slate-700">
                        <span className="font-semibold">What are you inquiring about? *</span>
                        <select
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10"
                          required
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <label className="space-y-2 text-sm text-slate-700">
                      <span className="font-semibold">Tell us about your project *</span>
                      <textarea
                        rows={5}
                        required
                        placeholder="Project type, timeline, location, and any compliance goals..."
                        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-secondary/40 focus:ring-2 focus:ring-secondary/10 resize-none"
                      />
                    </label>

                    <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="rounded-2xl bg-slate-100 p-3 text-slate-600">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Upload files or share a link</p>
                          <p className="text-slate-500">PDF, DWG, RVT or Dropbox/Drive link for large projects.</p>
                        </div>
                      </div>
                      <button type="button" className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        <Upload className="w-4 h-4" />
                        Attach files
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-secondary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-secondary/95"
                    >
                      Submit Request
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
