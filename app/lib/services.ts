export type Service = {
    id: string;
    slug: string;
    title: string;
    category: 'BIM' | 'Solar' | 'Compliance';
    shortDescription: string;
    fullDescription: string;
    features: string[];
    iconName: string; // We'll map this to Lucide icons in the component
};

export const services: Service[] = [
    // BIM Services
    {
        id: 'bim-1',
        slug: 'architectural-bim-modeling',
        title: 'Architectural BIM Modeling',
        category: 'BIM',
        shortDescription: 'High-LOD Architectural models for visualization and documentation.',
        fullDescription: 'Our Architectural BIM Modeling service transforms 2D sketches and CAD drawings into information-rich 3D models. We specialize in LOD 300 to LOD 500 models that serve as the foundation for the entire project lifecycle, enabling better visualization, accurate documentation, and streamlined coordination.',
        features: [
            'Parametric Family Creation',
            '3D Visualization & Rendering',
            'Construction Documentation',
            'Facade Modeling',
            'Interior Design Modeling'
        ],
        iconName: 'Building'
    },
    {
        id: 'bim-2',
        slug: 'structural-bim-modeling',
        title: 'Structural BIM Modeling',
        category: 'BIM',
        shortDescription: 'Precise structural detailing and analysis models.',
        fullDescription: 'We provide comprehensive Structural BIM Modeling services that ensure the stability and integrity of your building projects. Our models include detailed structural components such as beams, columns, trusses, and foundations, perfectly coordinated with architectural and MEP elements.',
        features: [
            'Structural Steel Detailing',
            'Rebar Detailing & Scheduling',
            'Precast Concrete Modeling',
            'Structural Analysis Integration',
            'Quantity Take-offs (BOM)'
        ],
        iconName: 'Cuboid'
    },
    {
        id: 'bim-3',
        slug: 'mep-bim-coordination',
        title: 'MEP BIM (HVAC, Electrical, Plumbing)',
        category: 'BIM',
        shortDescription: 'Clash-free mechanical, electrical, and plumbing systems.',
        fullDescription: 'Our MEP BIM services bring complex building systems to life before construction begins. We model HVAC ducts, plumbing pipes, and electrical conduits with high precision, ensuring optimal routing and system efficiency.',
        features: [
            'HVAC Ductwork & Equipment Modeling',
            'Electrical Conduit & Tray Layouts',
            'Plumbing & Piping Fabrication Models',
            'Plant Room Detailing',
            'Spool Drawing Generation'
        ],
        iconName: 'Zap'
    },
    {
        id: 'bim-4',
        slug: 'clash-detection',
        title: 'Clash Detection & Coordination',
        category: 'BIM',
        shortDescription: 'Resolve interdisciplinary conflicts before they hit the site.',
        fullDescription: 'Using advanced tools like Navisworks, we perform rigorous clash detection across all disciplines. We identify and resolve hard and soft clashes, saving significant time and cost by preventing on-site rework.',
        features: [
            'Inter-disciplinary Clash Reports',
            'Constructability Reviews',
            'Coordination Meetings Support',
            'Resolution Tracking',
            '4D Construction Phasing'
        ],
        iconName: 'ShieldCheck'
    },
    {
        id: 'bim-5',
        slug: 'as-built-shop-drawings',
        title: 'As-Built & Shop Drawings',
        category: 'BIM',
        shortDescription: 'Accurate documentation for fabrication and facility management.',
        fullDescription: 'We generate precise Shop Drawings for fabrication and As-Built drawings that reflect the final constructed reality. These are essential for handovers, facility management, and future renovations.',
        features: [
            'Fabrication Shop Drawings',
            'As-Built Model Updates',
            'Red-line Markup Integration',
            'COBie Data Population',
            'Asset Tagging'
        ],
        iconName: 'FileText'
    },

    // Solar Services
    {
        id: 'solar-1',
        slug: 'commercial-solar-proposals',
        title: 'Residential & Commercial Proposals',
        category: 'Solar',
        shortDescription: 'Winning sales proposals with accurate production estimates.',
        fullDescription: 'Accelerate your sales cycle with our high-quality solar sales proposals. We provide photorealistic 3D designs, accurate production manufacturing estimates, and financial analysis that help you close more deals.',
        features: [
            '3D Roof Layout Design',
            'Shadow Analysis Integration',
            'Financial ROI & Payback Calculations',
            'Custom Branding',
            'Fast Turnaround (<24 Hours)'
        ],
        iconName: 'Sun'
    },
    {
        id: 'solar-2',
        slug: 'pv-system-design',
        title: 'PV System Design & Layouts',
        category: 'Solar',
        shortDescription: 'NEC-compliant engineering designs for permitting.',
        fullDescription: 'Our engineering team delivers full permit packages compliant with NEC and local AHJ requirements. We maximize energy yield while ensuring structural and electrical safety.',
        features: [
            'Single Line Diagrams (SLD)',
            'Wire Sizing & Conduit Schedules',
            'Stringing Layouts',
            'Inverter & Panel Compatibility Checks',
            'Load Calculations'
        ],
        iconName: 'Grid'
    },
    {
        id: 'solar-3',
        slug: 'shading-energy-analysis',
        title: 'Shading Analysis & Energy Yield',
        category: 'Solar',
        shortDescription: ' Optimize system performance with detailed environmental analysis.',
        fullDescription: 'We conduct detailed shading analysis using industry-standard software (Helioscope, PVsyst, Aurora) to predict accurate energy generation. We verify solar access values (SAV) and optimize panel placement.',
        features: [
            'Yearly & Monthly Production Reports',
            'Loss Diagram Analysis',
            'Horizon Shading Profiles',
            'P50/P90 Probability Analysis',
            'Performance Ratio Assessment'
        ],
        iconName: 'BarChart'
    },
    {
        id: 'solar-4',
        slug: 'ev-charging-stations',
        title: 'EV Charging Infrastructure',
        category: 'Solar',
        shortDescription: 'Design of integrated EV charging solutions.',
        fullDescription: 'Support the transition to electric mobility with our EV infrastructure design services. We design charging stations for residential complexes, commercial parking lots, and fleet depots.',
        features: [
            'Load Management Strategies',
            'Charger Station Layouts',
            'Electrical Infrastructure Upgrades',
            'Fleet Electrification Planning',
            'Grid Connection Reviews'
        ],
        iconName: 'BatteryCharging'
    },
    {
        id: 'solar-5',
        slug: 'battery-storage-design',
        title: 'Battery Storage Design',
        category: 'Solar',
        shortDescription: 'Resilient energy storage systems (ESS) for backup and arbitrage.',
        fullDescription: 'We design robust battery energy storage systems (BESS) for peak shaving, load shifting, and emergency backup. Our designs ensure safety and compatibility with existing solar arrays.',
        features: [
            'Battery Sizing & Technology Selection',
            'AC vs. DC Coupling Architecture',
            'Safety & Fire Code Compliance',
            'Microgrid Integration',
            'Hybrid Inverter Configuration'
        ],
        iconName: 'Battery'
    }
];
