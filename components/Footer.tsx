import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white text-2xl font-heading font-bold mb-4 tracking-wider">SOLTIC</h3>
                        <p className="text-sm leading-relaxed mb-6">
                            Precision Engineering for the US & UK Construction Sectors. Specialized in BIM Modeling & Solar PV Design.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/bim-services" className="hover:text-accent transition-colors">BIM Services</Link></li>
                            <li><Link href="/solar-services" className="hover:text-accent transition-colors">Solar Engineering</Link></li>
                            <li><Link href="/compliance" className="hover:text-accent transition-colors">Compliance & Quality</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Our Expertise</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/architectural-bim-modeling" className="hover:text-accent transition-colors">Architectural BIM</Link></li>
                            <li><Link href="/services/structural-bim-modeling" className="hover:text-accent transition-colors">Structural BIM</Link></li>
                            <li><Link href="/services/mep-bim-coordination" className="hover:text-accent transition-colors">MEP Coordination</Link></li>
                            {/* <li><Link href="/services/solar-pv-system-design" className="hover:text-accent transition-colors">Solar PV Design</Link></li> */}
                            {/* <li><Link href="/services/energy-yield-analysis" className="hover:text-accent transition-colors">Energy Yield Reports</Link></li> */}
                            <li><Link href="/services/battery-storage-design" className="hover:text-accent transition-colors">Battery Storage (ESS)</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span>
                                    3 Stanley Hall, 129-145 Botchergate,<br />
                                    Carlisle CA1 1RZ
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                                <a href="mailto:info@solticsolutions.com" className="hover:text-white">info@solticsolutions.com</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span>+44 7436 900601</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Soltic Pvt Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
