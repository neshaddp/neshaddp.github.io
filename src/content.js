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
// News / Updates (LinkedIn-style posts) — curated from news.txt
// Tip: keep images in /public/images/news/ and set image: "/images/news/<file>.jpg"
export const news = [
  {
    id: "news-2026-01-06-prc-ce-oslo",
    date: "2026-01-06",
    title: "First first-author Ph.D. paper published in Physical Review C",
    summary:
      "Published my first first-author Ph.D. paper in Physical Review C (Phys. Rev. C 113, 015801), introducing and validating the Charge-Exchange Oslo Method to constrain neutron-capture and weak-interaction rates from a single measurement.",
    images: [],
    details: [
      "Demonstrated the method using light-ion beam data with the S800 spectrometer and GRETINA in coincidence.",
      "Provides a new pathway for indirect constraints on (n,γ) and weak-interaction physics; future extensions include inverse kinematics (p,n+γ) with rare-isotope beams."
    ],
    links: []
  },
  {
    id: "news-2025-11-10-rcnp-pandroa",
    date: "2025-11-10",
    title: "Experiment campaign at RCNP (Osaka University) — PANDROA collaboration",
    summary:
      "Participated in the PANDROA experiment campaign at RCNP, gaining hands-on experience with large-scale experimental operations and collaboration workflows in an international team.",
    images: [],
    details: [
      "Contributed to campaign activities and strengthened familiarity with the experimental setup and analysis environment used by the collaboration.",
      "Travel supported through the Galonsky International Travel Award."
    ],
    links: []
  },
  {
    id: "news-2025-10-13-galonsky-award",
    date: "2025-10-13",
    title: "Awarded the Galonsky International Travel Award (MSU)",
    summary:
      "Received the Galonsky International Travel Award from the MSU Department of Physics & Astronomy to support international research travel and collaboration building.",
    images: [],
    details: [
      "Supports international engagement and strengthens long-term research collaborations.",
      "Enabled participation in major international experimental activities."
    ],
    links: []
  },
  {
    id: "news-2025-09-12-sigma-xi",
    date: "2025-09-12",
    title: "Elected to Sigma Xi — The Scientific Research Honor Society",
    summary:
      "Elected to Sigma Xi by nomination, recognizing research achievements and scholarly potential as part of an international multidisciplinary scientific community.",
    images: [],
    details: [
      "Membership recognizes scientific achievement and encourages continued research excellence.",
      "Provides access to professional resources and a broad research network."
    ],
    links: []
  },
  {
    id: "news-2025-08-19-frib-theory-alliance-school",
    date: "2025-08-19",
    title: "Selected for the FRIB Theory Alliance Summer School (MSU)",
    summary:
      "Selected to attend the FRIB Theory Alliance Summer School: “Emergence of Collective Motion in Atomic Nuclei” (Aug 19–22, 2025), strengthening theory foundations relevant to my experimental work.",
    images: [],
    details: [
      "Engaged with lectures and discussions connecting nuclear structure, reactions, and collective phenomena.",
      "Broadened perspective at the theory–experiment interface for ongoing research."
    ],
    links: []
  },
  {
    id: "news-2025-07-25-beaver-island-school-hackathon",
    date: "2025-07-25",
    title: "Summer school & hackathon on nuclear astrophysics tools (Beaver Island)",
    summary:
      "Participated in a summer school and hackathon on open questions and research tools in nuclear astrophysics, including hands-on work with reaction-network modeling.",
    images: [],
    details: [
      "Worked with the WinNet astrophysical reaction network and collaborated in team-based problem solving.",
      "Expanded scientific network and practical modeling skills."
    ],
    links: []
  },
  {
    id: "news-2025-07-01-oslo-visiting-scientist",
    date: "2025-07-01",
    title: "Completed Visiting Scientist Scholar stay at the University of Oslo",
    summary:
      "Completed a fully funded Visiting Scientist Scholar research stay at the University of Oslo (April–July), advancing major components of my Ph.D. thesis work and strengthening international collaborations.",
    images: [],
    details: [
      "Participated in experiments and advanced analysis during the visit.",
      "Built long-term collaborations with the Oslo Nuclear Research Group."
    ],
    links: []
  },
  {
    id: "news-2025-06-08-siren-italy",
    date: "2025-06-08",
    title: "Poster + short talk at the siREN International Conference (Italy)",
    summary:
      "Presented Oslo-method analysis of 92Nb at the siREN International Conference (June 8–13), connecting experimental nuclear inputs to astrophysical implications for nucleosynthesis.",
    images: [],
    details: [
      "Presented results from the 90Zr(α,d+γ) experiment at the Oslo Cyclotron Laboratory (SiRi + OSCAR).",
      "Extracted NLD and γSF of 92Nb and discussed how these constraints impact reaction modeling (e.g., TALYS) and 91Nb(n,γ)92Nb."
    ],
    links: []
  },
  {
    id: "news-2025-04-25-phi-kappa-phi",
    date: "2025-04-25",
    title: "Invited to Phi Kappa Phi Honor Society",
    summary:
      "Invited to the Phi Kappa Phi Honor Society in recognition of sustained academic excellence at Michigan State University.",
    images: [],
    details: [
      "Invitation-only honor society recognizing top academic performance across disciplines.",
      "Supports scholarly development through resources, awards, and networks."
    ],
    links: []
  },
  {
    id: "news-2024-12-13-hep-instrumentation-certificate",
    date: "2024-12-13",
    title: "Completed Graduate Certificate in Instrumentation in High Energy Physics (GPA 4.0)",
    summary:
      "Completed the MSU Graduate Certificate in Instrumentation in High Energy Physics (TRAIN-MI) with a 4.0 GPA, strengthening expertise in detectors, electronics, and DAQ systems.",
    images: [],
    details: [
      "Training included advanced sensors, particle/radiation detection, and instrumentation concepts.",
      "Broadened systems-level skills supporting experimental nuclear physics work."
    ],
    links: []
  },
  {
    id: "news-2024-11-03-argonne-campaign-gsf",
    date: "2024-11-03",
    title: "Experiment campaign at Argonne National Laboratory",
    summary:
      "Participated in an experiment campaign at Argonne National Laboratory, contributing to efforts connected to γ-ray strength function studies and experimental workflows.",
    images: [],
    details: [
      "Strengthened hands-on experience with campaign operations and collaboration execution.",
      "Expanded connections with collaborators working on γSF measurements and analysis."
    ],
    links: []
  },
  {
    id: "news-2024-10-16-pprocess-workshop-budapest",
    date: "2024-10-16",
    title: "Oral presentation at the 8th p-process Workshop (Budapest)",
    summary:
      "Gave an oral presentation at the 8th p-process Workshop, discussing future measurements and Charge-Exchange Oslo Method developments relevant to 92Nb studies.",
    images: [],
    details: [
      "Presented planned 92Zr(3He,t+γ)92Nb work and its connection to the 92Nb cosmochronometer.",
      "Discussed methodological advances enabling indirect constraints for nuclear astrophysics."
    ],
    links: []
  },
  {
    id: "news-2024-09-15-npa-xi-dresden",
    date: "2024-09-15",
    title: "Poster + short talk at Nuclear Physics in Astrophysics XI (Dresden)",
    summary:
      "Presented the Charge-Exchange Oslo Method at NPA-XI (TU Dresden), highlighting indirect neutron-capture constraints using coincidence data and Oslo-type analysis concepts.",
    images: [],
    details: [
      "Discussed the approach and validation strategy using S800 + GRETINA coincidence measurements.",
      "Engaged with the international nuclear astrophysics community and received valuable feedback."
    ],
    links: []
  },
  {
    id: "news-2024-09-08-npa-school-xi",
    date: "2024-09-08",
    title: "Attended Nuclear Physics in Astrophysics School XI (Stolpen)",
    summary:
      "Attended the Nuclear Physics in Astrophysics School XI as one of ~30 selected participants worldwide, broadening training across experiments, reactions, and astrophysical applications.",
    images: [],
    details: [
      "Participated in focused training days spanning nuclear astrophysics topics and methods.",
      "Expanded network and strengthened foundations supporting Ph.D. research."
    ],
    links: []
  },
  {
    id: "news-2024-09-03-peradeniya-panelist",
    date: "2024-09-03",
    title: "Invited panelist: Career opportunities with a physics degree (University of Peradeniya)",
    summary:
      "Invited panelist for the University of Peradeniya Department of Physics orientation program, sharing experiences on graduate study, research, and career pathways with students.",
    images: [],
    details: [
      "Discussed professional development and research opportunities in physics.",
      "Contributed as an alumnus to support student mentoring and outreach."
    ],
    links: []
  },
  {
    id: "news-2024-08-20-msu-travel-fellowship",
    date: "2024-08-20",
    title: "Awarded MSU Graduate School Travel Fellowship",
    summary:
      "Received a Graduate School Travel Fellowship from Michigan State University to support presenting research and participating in professional conferences.",
    images: [],
    details: [
      "Supports dissemination of ongoing research and professional networking.",
      "Enables engagement with the broader scientific community."
    ],
    links: []
  },
  {
    id: "news-2024-08-15-msc-physics",
    date: "2024-08-15",
    title: "Completed M.Sc. in Physics (GPA 4.0) during Ph.D.",
    summary:
      "Completed my M.Sc. in Physics at Michigan State University with a 4.0 GPA while progressing through my Ph.D. program and research at FRIB.",
    images: [],
    details: [
      "Graduate coursework strengthened theory foundations supporting experimental research.",
      "Milestone completed alongside ongoing Ph.D. research responsibilities."
    ],
    links: []
  },
  {
    id: "news-2024-07-14-ebss-argonne",
    date: "2024-07-14",
    title: "Poster presentation at the 21st Exotic Beam Summer School (EBSS2024)",
    summary:
      "Presented a poster at EBSS2024, combining lectures and hands-on rare-isotope beam training at Argonne National Laboratory.",
    images: [],
    details: [
      "Expanded exposure to rare-isotope beam science and instrumentation workflows.",
      "Strengthened connections with participants and instructors across the community."
    ],
    links: []
  },
  {
    id: "news-2024-05-27-oslo-nld-gsf-workshop",
    date: "2024-05-27",
    title: "Poster at the 9th Workshop on Nuclear Level Density and Gamma Strength (Oslo)",
    summary:
      "Presented a poster at the 9th Workshop on Nuclear Level Density and Gamma Strength at the University of Oslo, engaging with experts across experiment and theory.",
    images: [],
    details: [
      "Received feedback and insights that helped refine analysis directions.",
      "Strengthened professional connections in the Oslo-method community."
    ],
    links: []
  },
  {
    id: "news-2024-05-10-phd-candidacy",
    date: "2024-05-10",
    title: "Advanced to Ph.D. candidacy (GPA 4.0 milestone)",
    summary:
      "Advanced to Ph.D. candidacy at Michigan State University with a 4.0 GPA, marking a key academic milestone during my graduate training and research at FRIB.",
    images: [],
    details: [
      "Candidacy milestone reflects progress in coursework and research preparation.",
      "Grateful for support from my advisor, committee, and collaborators."
    ],
    links: []
  },
  {
    id: "news-2023-11-24-frib-fellowship-graham",
    date: "2023-11-24",
    title: "Awarded FRIB Laboratory Fellowship and Herbert T. Graham Scholarship",
    summary:
      "Received the FRIB Laboratory Fellowship and the Herbert T. Graham Scholarship, supporting graduate research progress and recognizing academic excellence.",
    images: [],
    details: [
      "Competitive funding and recognition to support research training and professional development.",
      "Strengthened capacity for research execution and community engagement."
    ],
    links: []
  },
  {
    id: "news-2023-09-01-irena-ukakuren-tokyo",
    date: "2023-09-01",
    title: "First Ph.D. poster presentation at IReNA-Ukakuren (Tokyo)",
    summary:
      "Presented my first Ph.D. poster at the IReNA-Ukakuren meeting in Tokyo, marking an early milestone in international scientific communication and networking.",
    images: [],
    details: [
      "Received feedback that helped shape early research direction and plans.",
      "Built connections with researchers across nuclear astrophysics and related fields."
    ],
    links: []
  },
  {
    id: "news-2023-05-21-cenam-irena",
    date: "2023-05-21",
    title: "CeNAM Frontiers Meeting + IReNA Frontiers Summer School (2023)",
    summary:
      "Participated in the CeNAM Frontiers Meeting and the IReNA Frontiers Summer School, building foundations in nuclear astrophysics and expanding my scientific network.",
    images: [],
    details: [
      "First conference and first summer school experience as part of early Ph.D. training.",
      "Engaged in lectures, discussions, and networking with the research community."
    ],
    links: []
  },
  {
    id: "news-2023-05-16-frib-gra-start",
    date: "2023-05-16",
    title: "Started as a Graduate Research Assistant at FRIB (MSU)",
    summary:
      "Began my Graduate Research Assistant position at the Facility for Rare Isotope Beams (FRIB), joining the charge-exchange nuclear astrophysics program under Prof. Remco Zegers.",
    images: [],
    details: [
      "Started research on experimental nuclear physics methods relevant to nucleosynthesis and weak-interaction applications.",
      "Joined a collaborative environment connecting experiments, analysis, and modeling."
    ],
    links: []
  },
  {
    id: "news-2023-05-07-bbc-documentary",
    date: "2023-05-07",
    title: "Invited for a BBC documentary interview",
    summary:
      "Invited to participate in a BBC documentary interview highlighting my academic journey and achievements, with gratitude to mentors and institutions that supported my path.",
    images: [],
    details: [
      "Opportunity to share personal academic and professional development story.",
      "Reflected on the importance of mentorship and community support."
    ],
    links: []
  },
  {
    id: "news-2022-08-27-started-phd-msu-frib",
    date: "2022-08-27",
    title: "Started Ph.D. in Nuclear Physics at Michigan State University / FRIB",
    summary:
      "Started my Ph.D. in Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams (FRIB), beginning graduate training and a new research chapter.",
    images: [],
    details: [
      "Launched Ph.D. research training within a leading rare-isotope facility environment.",
      "Began building expertise in experimental nuclear physics and nuclear astrophysics."
    ],
    links: []
  },
  {
    id: "news-2022-08-25-bsc-top-of-batch",
    date: "2022-08-25",
    title: "Graduated B.Sc. (Honours) in Physics — top of batch with multiple awards",
    summary:
      "Graduated from the University of Peradeniya with a B.Sc. (Honours) in Physics (First Class), ranked top of the batch, and received multiple awards and medals for academic excellence.",
    images: [],
    details: [
      "Overall GPA 3.90 with strong Physics and Mathematics GPAs (as noted in your post).",
      "Later received admission to multiple fully funded Ph.D. programs in the United States."
    ],
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
    title: "Supernova Post-Processing Nucleosynthesis Modeling",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/supernova.webp",
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
    title: "Extraction of Gamow–Teller and Fermi Strengths via Charge-Exchange Reactions",
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
