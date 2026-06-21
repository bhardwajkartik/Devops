import { services } from "@/app/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Layers,
    Zap,
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
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building,
    Cuboid,
    Zap,
    ShieldCheck,
    FileText,
    Sun,
    Grid: Grid3x3,
    BarChart: BarChart3,
    BatteryCharging,
    Battery,
};

/* ─── Service-specific hero images (all unique — not used elsewhere on the site) ─── */
const heroImages: Record<string, string> = {
    "architectural-bim-modeling":
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    "structural-bim-modeling":
        "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1920&q=80",
    "mep-bim-coordination":
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1920&q=80",
    "clash-detection":
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=80",
    "as-built-shop-drawings":
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
    "commercial-solar-proposals":
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80",
    "pv-system-design":
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1920&q=80",
    "shading-energy-analysis":
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80",
    "ev-charging-stations":
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80",
    "battery-storage-design":
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
};

/* ─── Category-specific color configs ─── */
const categoryConfig = {
    BIM: {
        badge: "bg-blue-50 border-blue-100 text-blue-700",
        heroOverlay: "from-slate-900/95 via-slate-900/85 to-blue-900/70",
        accentGradient: "from-secondary to-accent",
        pillBg: "bg-blue-50",
        pillBorder: "border-blue-100",
        pillText: "text-blue-600",
        checkColor: "text-secondary",
        ctaBtn: "bg-secondary hover:bg-secondary/90 shadow-secondary/20 hover:shadow-secondary/40",
        backPage: "/bim-services",
        backLabel: "BIM Services",
        tagColor: "text-cyan-400",
        tagBadgeBg: "bg-white/10 border-white/10",
        tagTextColor: "text-cyan-300",
    },
    Solar: {
        badge: "bg-amber-50 border-amber-100 text-amber-700",
        heroOverlay: "from-slate-900/95 via-slate-900/80 to-amber-900/60",
        accentGradient: "from-amber-400 to-orange-400",
        pillBg: "bg-amber-50",
        pillBorder: "border-amber-100",
        pillText: "text-amber-600",
        checkColor: "text-amber-500",
        ctaBtn: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-500/20 hover:shadow-amber-500/40",
        backPage: "/solar-services",
        backLabel: "Solar Services",
        tagColor: "text-amber-400",
        tagBadgeBg: "bg-white/10 border-white/10",
        tagTextColor: "text-amber-300",
    },
    Compliance: {
        badge: "bg-emerald-50 border-emerald-100 text-emerald-700",
        heroOverlay: "from-slate-900/95 via-slate-900/85 to-emerald-900/70",
        accentGradient: "from-emerald-400 to-cyan-400",
        pillBg: "bg-emerald-50",
        pillBorder: "border-emerald-100",
        pillText: "text-emerald-600",
        checkColor: "text-emerald-500",
        ctaBtn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 hover:shadow-emerald-500/40",
        backPage: "/services",
        backLabel: "All Services",
        tagColor: "text-emerald-400",
        tagBadgeBg: "bg-white/10 border-white/10",
        tagTextColor: "text-emerald-300",
    },
};

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const config = categoryConfig[service.category] || categoryConfig.BIM;
    const Icon = iconMap[service.iconName] || Layers;
    const heroImg = heroImages[service.slug] || heroImages["architectural-bim-modeling"];

    /* Related services — same category, exclude self */
    const related = services
        .filter((s) => s.category === service.category && s.slug !== service.slug)
        .slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden bg-slate-900">
                <Image
                    src={heroImg}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${config.heroOverlay} z-[1]`} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-16 md:py-20">
                    {/* Back link */}
                    <Link
                        href={config.backPage}
                        className="inline-flex items-center text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        {config.backLabel}
                    </Link>

                    <div className="max-w-3xl">
                        {/* Category badge */}
                        <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${config.tagBadgeBg} border mb-4 sm:mb-5 backdrop-blur-sm`}>
                            <Icon className={`w-4 h-4 ${config.tagColor} mr-2`} />
                            <span className={`${config.tagTextColor} text-xs sm:text-sm font-bold tracking-wider uppercase`}>
                                {service.category} Service
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-5 text-white">
                            {service.title}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                            {service.shortDescription}
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══ CONTENT SECTION ═══ */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

                        {/* ── Left: Full Description ── */}
                        <div className="lg:col-span-3 space-y-8 sm:space-y-10">
                            {/* About this service */}
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-5">
                                    About This Service
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed text-justify">
                                    {service.fullDescription}
                                </p>
                            </div>

                            {/* Key Deliverables */}
                            <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-100">
                                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${config.accentGradient} flex items-center justify-center shadow-md`}>
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                                        Key Deliverables & Features
                                    </h3>
                                </div>

                                <ul className="space-y-3 sm:space-y-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className={`w-5 h-5 sm:w-6 sm:h-6 ${config.checkColor} flex-shrink-0 mr-3 sm:mr-4 mt-0.5`} />
                                            <span className="text-sm sm:text-base md:text-lg text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/contact"
                                    className={`group ${config.ctaBtn} text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center hover:-translate-y-0.5`}
                                >
                                    Get a Quote for This Service
                                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-800 transition-all flex items-center justify-center"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>

                        {/* ── Right: Sidebar ── */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Service image card */}
                            <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={heroImg}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full ${config.badge} border text-xs font-bold`}>
                                        {service.category}
                                    </span>
                                </div>
                            </div>

                            {/* Quick info card */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md">
                                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">Quick Info</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Category</span>
                                        <span className={`font-bold ${config.pillText}`}>{service.category}</span>
                                    </div>
                                    <div className="h-px bg-slate-100" />
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Deliverables</span>
                                        <span className="font-bold text-slate-900">{service.features.length} items</span>
                                    </div>
                                    <div className="h-px bg-slate-100" />
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Standards</span>
                                        <span className="font-bold text-slate-900">
                                            {service.category === "BIM" ? "ISO 19650" : "NEC / BS 7671"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Related services */}
                            {related.length > 0 && (
                                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md">
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">Related Services</h4>
                                    <div className="space-y-3">
                                        {related.map((rel) => {
                                            const RelIcon = iconMap[rel.iconName] || Layers;
                                            return (
                                                <Link
                                                    key={rel.slug}
                                                    href={`/services/${rel.slug}`}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                                >
                                                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${config.accentGradient} flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                        <RelIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-bold text-slate-900 truncate group-hover:text-secondary transition-colors">
                                                            {rel.title}
                                                        </p>
                                                        <p className="text-xs text-slate-500 truncate">
                                                            {rel.shortDescription}
                                                        </p>
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
