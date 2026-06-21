"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isComplianceOpen, setIsComplianceOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 text-slate-800 shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-heading font-bold text-2xl tracking-wider text-primary-900 group flex items-center gap-2">
                            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">SOLTIC</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="font-medium hover:text-secondary transition-colors relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                        </Link>

                        <Link href="/about" className="font-medium hover:text-secondary transition-colors relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 font-medium hover:text-secondary transition-colors focus:outline-none"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                onMouseEnter={() => setIsServicesOpen(true)}
                            >
                                <Link href="/services">Services</Link>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white border border-gray-100 focus:outline-none transition-all duration-200 transform origin-top-left ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100'}`}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <div className="p-2">
                                    <Link href="/services" className="block px-4 py-3 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors font-semibold">
                                        All Services
                                    </Link>
                                    <div className="h-px bg-gray-100 my-1"></div>
                                    <Link href="/bim-services" className="block px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary transition-colors">
                                        BIM Services
                                    </Link>
                                    <Link href="/solar-services" className="block px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary transition-colors">
                                        Solar Engineering
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Compliance Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 font-medium hover:text-secondary transition-colors focus:outline-none"
                                onClick={() => setIsComplianceOpen(!isComplianceOpen)}
                                onMouseEnter={() => setIsComplianceOpen(true)}
                            >
                                <Link href="/compliance">Compliance</Link>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <div
                                className={`absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-gray-100 focus:outline-none transition-all duration-200 transform origin-top-left ${isComplianceOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100'}`}
                                onMouseLeave={() => setIsComplianceOpen(false)}
                            >
                                <div className="p-2">
                                    <Link href="/compliance" className="block px-4 py-3 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors font-semibold">
                                        All Regions
                                    </Link>
                                    <div className="h-px bg-gray-100 my-1"></div>
                                    <Link href="/compliance/us" className="block px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary transition-colors">
                                        🇺🇸 United States
                                    </Link>
                                    <Link href="/compliance/uk" className="block px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary transition-colors">
                                        🇬🇧 United Kingdom
                                    </Link>
                                    <Link href="/compliance/asia" className="block px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary transition-colors">
                                        🌏 Asia Pacific
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-secondary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-800 hover:text-secondary focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down shadow-xl absolute w-full">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link
                            href="/"
                            className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <div className="pl-4 border-l-2 border-gray-100 ml-4 space-y-1">
                            <Link
                                href="/bim-services"
                                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-secondary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                BIM Services
                            </Link>
                            <Link
                                href="/solar-services"
                                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-secondary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Solar Services
                            </Link>
                        </div>
                        <Link
                            href="/compliance"
                            className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Compliance
                        </Link>
                        <div className="pl-4 border-l-2 border-gray-100 ml-4 space-y-1">
                            <Link href="/compliance/us" className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>🇺🇸 United States</Link>
                            <Link href="/compliance/uk" className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>🇬🇧 United Kingdom</Link>
                            <Link href="/compliance/asia" className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>🌏 Asia Pacific</Link>
                        </div>
                        <Link
                            href="/contact"
                            className="block px-4 py-3 mt-4 text-center rounded-lg text-base font-bold bg-secondary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
