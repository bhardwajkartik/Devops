"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/app/lib/services";
import {
  Layers,
  ArrowRight,
  Building,
  Cuboid,
  Zap,
  ShieldCheck,
  FileText,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building,
  Cuboid,
  Zap,
  ShieldCheck,
  FileText,
};

const colorMap: Record<string, { gradient: string; bg: string; border: string; accent: string }> = {
  Building: { gradient: "from-blue-500 to-blue-600", bg: "bg-blue-50", border: "border-blue-100", accent: "text-blue-600" },
  Cuboid: { gradient: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100", accent: "text-indigo-600" },
  Zap: { gradient: "from-cyan-500 to-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100", accent: "text-cyan-600" },
  ShieldCheck: { gradient: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", accent: "text-emerald-600" },
  FileText: { gradient: "from-violet-500 to-violet-600", bg: "bg-violet-50", border: "border-violet-100", accent: "text-violet-600" },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function BimServices() {
  const bimServices = services.filter((s) => s.category === "BIM");

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern glass architecture – BIM services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-blue-900/70 z-[1]" />

        {/* Animated blobs */}
        <div className="absolute inset-0 z-[2]">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, -35, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]"
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
              <Layers className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                BIM Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
            >
              Building Information{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Modeling
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
            >
              Integrated BIM solutions from concept to construction — architectural, structural,
              and MEP disciplines modeled with precision from LOD 100 to LOD 500.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {["Revit & Navisworks", "LOD 100–500", "Clash-Free Models"].map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
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
              Our BIM Capabilities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Click any service to explore the full scope of deliverables.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {bimServices.map((service, i) => {
              const Icon = iconMap[service.iconName] || Layers;
              const colors = colorMap[service.iconName] || colorMap.Building;

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
                    className="block h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:border-secondary/30 transition-all group"
                  >
                    {/* Icon + Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 uppercase tracking-wider">
                        BIM
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors">
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
                    <div className="flex items-center text-sm font-bold text-secondary group-hover:translate-x-1 transition-transform">
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
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-slate-600 hover:text-secondary border border-slate-200 hover:border-secondary/30 transition-all hover:shadow-md"
            >
              ← Back to All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
