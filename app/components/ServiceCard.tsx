"use client";

import Link from "next/link";
import { ArrowRight, Building, Cuboid, Zap, ShieldCheck, FileText, Sun, Grid, BarChart, BatteryCharging, Battery } from "lucide-react";
import { Service } from "@/app/lib/services";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building,
    Cuboid,
    Zap,
    ShieldCheck,
    FileText,
    Sun,
    Grid,
    BarChart,
    BatteryCharging,
    Battery
};

export default function ServiceCard({ service }: { service: Service }) {
    const Icon = iconMap[service.iconName] || Zap;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <Link href={`/services/${service.slug}`} className="group relative block h-full">
                <div className="h-full bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-300 flex flex-col">
                    <div className="mb-6 flex items-start justify-between">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                            <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${service.category === 'BIM' ? 'text-blue-700 bg-blue-50 border-blue-100' : 'text-amber-700 bg-amber-50 border-amber-100'}`}>
                            {service.category}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                        {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
                        {service.shortDescription}
                    </p>

                    <div className="flex items-center text-slate-400 font-bold text-sm group-hover:text-secondary transition-colors">
                        View Details <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
