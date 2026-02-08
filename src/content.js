export const profile = {
  name: "Neshad D. Pathirana",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",
  location: "East Lansing, MI, USA",
  title: "Ph.D. Candidate • Nuclear Physics • Astrophysics • Neutrino Physics",
  subtitle: [
    "I am a Ph.D. candidate in Experimental Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams, and a former visiting scholar at the University of Oslo. I earned both my M.Sc. in Physics and a Graduate Certificate in Instrumentation for High Energy Physics from Michigan State University, and I received my B.Sc. (Honours) in Physics (First Class) from the University of Peradeniya.",
    "My research is centered on experimental nuclear physics and its applications to both nuclear astrophysics and neutrino physics. I use precision measurements and modern detector techniques to constrain the nuclear data needed to model how elements are synthesized in astrophysical environments and to improve predictions for neutrino–nucleus interactions relevant to laboratory and cosmic settings."
  ],
  email: "devanes1@msu.edu",


  // Files in /public
  cvUrl: "/cv.pdf",
  headshotUrl: "/images/profile.webp"
};

// Header navigation
export const nav = [
  { id: "home", label: "Home" },
  { id: "news", label: "News" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" }
];

// Social links (icons rendered in Contact section)
// You can update URLs later here only.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neshad1996?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: "linkedin"
  },
  {
    label: "Google Scholar",
    href: "#",
    icon: "scholar"
  },
  {
    label: "ORCID",
    href: "#",
    icon: "orcid"
  },
  {
    label: "GitHub",
    href: "https://github.com/neshad1996",
    icon: "github"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18pC7PkZM7/?mibextid=wwXIfr",
    icon: "facebook"
  },
  {
    label: "Instagram",
    href: "#",
    icon: "instagram"
  }
];

// NEWS (edit this list in the future)
export const news = [
  {
    id: "news-2026-02-06",
    date: "2026-02-06",
    title: "Website launched",
    summary: "New personal academic website is live with research portfolio and publications.New personal academic website is live with research portfolio and publications.New personal academic website is live with research portfolio and publications.",
    images: [],
    details: ["React + Vite site deployed on GitHub Pages.", "News items are expandable to keep the page concise."],
    links: []
  }
];

// Research projects
export const projects = [
  {
    id: "oslomethod",
    title: "Experimental Extraction of Nuclear Statistical Properties",
    timeframe: "Published + Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/statistical.jpg",
    tags: ["Oslo Method", "CE-Oslo Method", "NLD", "γSF"],
    summary:
      "Extracting nuclear statistical properties with the Oslo Method to provide experimental constraints and reduce uncertainties in reaction modeling.",
    bullets: [
      "Targets key statistical inputs in nuclei where experimental constraints are scarce or unavailable",
      "Performs experiments using transfer and charge-exchange (CE) reactions across multiple systems",
      "Extracts nuclear level densities (NLDs) and γ-ray strength functions (γSFs) using Oslo-method techniques",
      "Develops and applies the CE-Oslo method to extend Oslo-type extractions to charge-exchange reactions"
    ],
    links: []
  },
  {
    id: "neutron",
    title: "Indirect Constraints on Neutron-Capture Reaction Rates",
    timeframe: "Published + Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/neutron.webp",
    tags: ["Hauser–Feshbach", "TALYS", "NLD", "γSF"],
    summary:
      "Constraining astrophysical (n,γ) rates by incorporating experimentally extracted statistical inputs into Hauser–Feshbach calculations.",
    bullets: [
      "Focuses on neutron-capture rates relevant to nucleosynthesis and cosmochronometry",
      "Combines experimentally extracted NLD and γSF with model systematics to reduce reaction-rate uncertainties",
      "Performs Hauser–Feshbach calculations using TALYS and evaluates the impact of nuclear-input variations"
    ],
    links: []
  },
  {
    id: "astro",
    title: "Core-Collapse and Thermonuclear Supernova Nucleosynthesis Modeling",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/supernova.png",
    tags: ["NuGrid", "PPN", "WinNet", "p-process"],
    summary:
      "Simulating nucleosynthesis in core-collapse and thermonuclear supernova environments using experimentally constrained reaction rates in post-processing networks.",
    bullets: [
      "Propagates experimentally constrained neutron-capture rates into nucleosynthesis calculations",
      "Runs post-processing simulations using NuGrid (PPN) and WinNet across CCSN and SNe Ia trajectories",
      "Quantifies how nuclear-physics constraints shift predicted p-process yields and addresses key model discrepancies"
    ],
    links: []
  },
  {
    id: "mda",
    title: "Extraction of Gamow–Teller and Fermi Strength via Charge-Exchange Reactions",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/charge_exchange.png",
    tags: ["Charge-Exchange", "Multipole Decomposition Analysis", "DWBA", "Gamow–Teller"],
    summary:
      "Extracting Gamow–Teller and Fermi transition strengths from charge-exchange data using multipole decomposition analysis (MDA) to reduce theoretical uncertainties.",
    bullets: [
      "Targets weak-interaction nuclear inputs relevant to neutrino physics and nuclear astrophysics",
      "Performs charge-exchange measurements and constructs angular-distribution observables",
      "Applies MDA with DWBA-based templates to isolate isovector transition components",
      "Extracts Gamow–Teller and Fermi strengths for use in neutrino–nucleus cross-section calculations"
    ],
    links: []
  },
  {
    id: "neutrino",
    title: "Indirect Constraints on Charged-Current Neutrino–Nucleus Cross Sections",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/neutrino.png",
    tags: ["Gamow–Teller", "Fermi", "Charged-Current", "MARLEY"],
    summary:
      "Constraining charged-current neutrino–nucleus cross sections using experimentally extracted transition strengths to improve predictions for detectors and astrophysical applications.",
    bullets: [
      "Uses experimentally extracted Gamow–Teller and Fermi strengths as key nuclear inputs",
      "Computes charged-current neutrino–nucleus cross sections (including low-momentum-transfer limits) using MARLEY",
      "Benchmarks and updates cross-section inputs for applications in neutrino detection and astrophysical modeling"
    ],
    links: []
  },
  {
    id: "lenda",
    title: "LENDA Detector Upgrade and Performance Testing",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/lenda.jpg",
    tags: ["Instrumentation", "Neutrons", "Scintillators"],
    summary:
      "Contributing to the LENDA upgrade through detector testing and performance characterization to improve neutron-detection capabilities for upcoming experiments.",
    bullets: [
      "Leads hands-on testing and evaluation of detector components and scintillator performance",
      "Supports commissioning and readiness for experimental campaigns at FRIB"
    ],
    links: []
  }
];


export const publications = [
  {
    title: "Solving the puzzle of the cosmochronometer 92Nb production using the Oslo method",
    venue: "TBD",
    status: "Ongoing",
    links: []
  },
  {
    title:
      "Experimental study on supernova neutrino-induced nucleosynthesis of 92Nb",
    venue: "Physical Review Letters (PRL)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Charged-current neutrino-208Pb cross sections via the 208Pb(3He,t) charge-exchange reaction",
    venue: "Physical Review C (PRC)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Extraction of neutron capture cross sections on 92Zr using the charge-exchange Oslo method",
    venue: "N.D. Pathirana et. al (2026)",
    status: "Published",
    links: [{ label: "Phys. Rev. C 113, 015801", href:"https://doi.org/10.1103/qdsh-ygry"}]
  },
  {
    title: "Single-nucleon transfer unveils NiCu cycle in astrophysical X-ray bursts",
    venue: "O'Shea et. al (2026)",
    status: "Submitted",
    links: [{ label: "Physical Review Letters (PRL)", href: "https://doi.org/10.21203/rs.3.rs-7660136/v1" }]
  },
  {
    title: "Determination of proton and neutron contributions to the 0+gs →2+1 excitations in 42Si and 44S using inelastic proton scattering in inverse kinematics and intermediate energy Coulomb excitation",
    venue: "L.A. Riley et al. (2025)",
    status: "Published",
    links: [{ label: "Phys. Rev. C 112, 014331", href:"https://doi.org/10.1103/b8xj-ycqk"}]
  },
  {
    title: "Construction of an Ionization Chamber to Detect Alpha and Beta Particles",
    venue: "N.D. Pathirana et. al (2021)",
    status: "Published",
    links: [{ label: "Research Congress (RESCON 2021)", href:"http://www.pgis.pdn.ac.lk/rescon2021/abstracts/PS/134.pdf"}]
  },
];

export const teaching = [
  {
    place: "Michigan State University",
    timeframe: "Aug 2022 – Dec 2024",
    items: [
      "Instructor in charge: PHY 252 — Introductory Physics Laboratory II",
      "Instructor in charge: ISP 205L — Visions of the Laboratory",
      "Tutor in charge: PHY 415 — Mathematical Modeling in Physics"
    ]
  },
  {
    place: "University of Peradeniya",
    timeframe: "Aug 2021 - Jul 2022",
    items: [
      "Instructor in charge: Nuclear Physics Laboratory ",
      "Instructor in charge: Advanced Level Physics Laboratory",
      "Tutor in charge: PH 430 — Quantum Mechanics I",
      "Tutor in charge: PH 431 — Quantum Mechanics II",
      "Tutor in charge: PH 458 — General Relativity"
    ]
  }
];

export const awards = [
  "Galonsky International Travel Award",
  "Norwegian Nuclear Research Center Scholarship",
  "FRIB Fellowships",
  "Herbert T. Graham Scholarship",
  "Graduate School Travel Fellowship",
  "Prof. Lakshman Dissanayake Gold Medal for Excellence in Physics",
  "Prof. George Dissanaike Memorial Gold Medal in Physics",
  "Dr. C.A. Hevavitharana Memorial Prize in Physics",
  "Prof. A.W. Wolfendale Prize in Physics",
  "University of Peradeniya Award for Academic Excellence",
  "Eramudugolla Dunuwila Prize in Mathematics",
  "Merit Award in SURS Symposium"
];

export const service = [
  "Galonsky International Travel Award"
];



export const contactForm = {
  endpoint: "https://formspree.io/f/mqedkpqz",
  emailTo: "devanes1@msu.edu",
  subjectPrefix: "Website message"
};
