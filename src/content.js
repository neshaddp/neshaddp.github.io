export const profile = {
  name: "Neshad D. Pathirana",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",
  location: "East Lansing, MI, USA",
  title: "Ph.D. Candidate • Nuclear Physics • Astrophysics • Neutrino Physics",
  subtitle: [
    "I am a Ph.D. candidate in Experimental Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams, and a former visiting scholar at the University of Oslo. I earned both my M.Sc. in Physics and a Graduate Certificate in Instrumentation for High Energy Physics from Michigan State University, and I received my B.Sc. (Honours) in Physics (First Class) from the University of Peradeniya with a 3.90 GPA. My graduate studies at Michigan State University, including my Ph.D., have been completed with a 4.0 GPA.",
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
    id: "nb92",
    title: "Cosmochronometer 92Nb Production Sites",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB / MSU)",
    image: "/images/92nb.webp",
    tags: ["charge-exchange", "Gamow–Teller", "nucleosynthesis"],
    summary:
      "Extracting astrophysical reaction rates relevant to 92Nb via charge-exchange data and Gamow–Teller strength.",
    bullets: [
      "Uses 92Zr(3He,t) experimental data",
      "Targets key nuclear inputs shaping 92Nb production/destruction pathways"
    ],
    links: []
  },
  {
    id: "ceoslo",
    title: "CE-Oslo Method for (n,γ) Constraints",
    timeframe: "Published + ongoing extensions",
    role: "Method development + first applications",
    image: "/images/ce-oslo.webp",
    tags: ["Oslo method", "charge-exchange", "(n,γ)"],
    summary:
      "Developed the Charge-Exchange Oslo (CE-Oslo) method and applied it to constrain neutron-capture cross sections.",
    bullets: [
      "First application toward 92Zr(n,γ)93Zr constraints",
      "Bridges charge-exchange information with statistical properties"
    ],
    links: []
  },
  {
    id: "pb208",
    title: "Neutrino–208Pb Charged-Current Cross Sections",
    timeframe: "Ongoing",
    role: "GT strength extraction from charge-exchange data",
    image: "/images/neutrino-pb.webp",
    tags: ["neutrinos", "charge-exchange", "208Pb"],
    summary:
      "Determining neutrino–208Pb CC cross sections by extracting Gamow–Teller strength from charge-exchange reactions.",
    bullets: ["Based on 208Pb(3He,t)208Bi reaction data", "Supports neutrino detection / nuclear response applications"],
    links: []
  },
  {
    id: "lenda",
    title: "LENDA Detector Upgrade & Testing",
    timeframe: "Ongoing",
    role: "Detector development",
    image: "/images/lenda.webp",
    tags: ["instrumentation", "neutrons", "scintillators"],
    summary:
      "Contributing to LENDA upgrade work by testing and evaluating scintillator materials for improved neutron detection.",
    bullets: ["Hands-on testing & evaluation", "Supports experimental campaigns at FRIB"],
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
    venue: "Physical Review C (PRC)",
    status: "Published",
    links: ["https://doi.org/10.1103/qdsh-ygry"]
  },
  {
    title: "Single-nucleon transfer unveils NiCu cycle in astrophysical X-ray bursts",
    venue: "Physical Review Letters (PRL)",
    status: "Submitted",
    links: [{href:"https://doi.org/10.21203/rs.3.rs-7660136/v1"}]
    /*links: [{ label: "Preprint", href: "https://doi.org/10.21203/rs.3.rs-7660136/v1" }]*/
  },
  {
    title: "Determination of proton and neutron contributions to the 0+gs →2+1 excitations in 42Si and 44S using inelastic proton scattering in inverse kinematics and intermediate energy Coulomb excitation",
    venue: "Physical Review C (PRC)",
    status: "Published",
    links: ["https://doi.org/10.1103/b8xj-ycqk"]
  },
  {
    title: "Construction of an Ionization Chamber to Detect Alpha and Beta Particles",
    venue: "Research Congress (RESCON 2021)",
    status: "Published",
    links: ["http://www.pgis.pdn.ac.lk/rescon2021/abstracts/PS/134.pdf"]
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
