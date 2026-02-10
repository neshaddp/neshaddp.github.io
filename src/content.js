export const profile = {
  name: "Neshad D. Pathirana",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",
  location: "East Lansing, MI, USA",
  title: "Nuclear Experimental Physics • Nuclear Astrophysics • Neutrino Physics",
  subtitle: [
    "I am a Ph.D. candidate in Experimental Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams, and a former visiting scholar at the University of Oslo. I earned both my M.Sc. in Physics and a Graduate Certificate in Instrumentation for High Energy Physics from Michigan State University, and I received my B.Sc. (Honours) in Physics (First Class) from the University of Peradeniya.",
    "My research is centered on experimental nuclear physics and its applications to both nuclear astrophysics and neutrino physics. I use precision measurements and modern detector techniques to constrain the nuclear data needed to model how elements are synthesized in astrophysical environments and to improve predictions for neutrino–nucleus interactions relevant to laboratory and cosmic settings."
  ],
  email: "devanes1@msu.edu",
  phone: "+1 (517) 974-7964",
  address: "Facility for Rare Isotope Beams (FRIB),\nMichigan State University,\n640 S Shaw Lane,\nEast Lansing, MI 48824, USA",

 
  // Files in /public
  cvUrl: "/cv.pdf",
  headshotUrl: "/images/profile.webp"
};

// Header navigation
export const nav = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" }
];

// Affiliation logos shown on the Home section
export const affiliationLogos = [
  { name: "Michigan State University", src: "/images/logos/MSU.jpg", href: "https://pa.msu.edu", variant: "light" },
  { name: "Facility for Rare Isotope Beams (FRIB)", src: "/images/logos/FRIB_removed.png", href: "https://frib.msu.edu", variant: "light" },
  { name: "NuGrid", src: "/images/logos/NuGrid.png", href: "https://nugrid.github.io", variant: "light" },
  { name: "IReNA", src: "/images/logos/IReNA.png", href: "https://www.irenaweb.org", variant: "light" },
  { name: "CeNAM", src: "/images/logos/CeNAM.png", href: "https://www.cenamweb.org", variant: "light" },
  { name: "JINA-CEE", src: "/images/logos/JINA.png", href: "https://jinaweb.org", variant: "light" },
  { name: "University of Oslo", src: "/images/logos/UiO.png", href: "https://www.mn.uio.no/fysikk/english/", variant: "light" },
  { name: "Norwegian Nuclear Research Centre (NNRC)", src: "/images/logos/NNRC.svg", href: "https://www.nnrc.uio.no/english/", variant: "light" }
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
    href: "https://scholar.google.com/citations?user=t-ZDjaoAAAAJ&hl=en",
    icon: "scholar"
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0002-4451-4874",
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
    href: "https://www.instagram.com/neshad1996?igsh=N21uNmxxNjloZXQ5&utm_source=qr",
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
      "Published my first first-author Ph.D. paper in Physical Review C (Phys. Rev. C 113, 015801), introducing the Charge-Exchange Oslo Method to extract neutron-capture cross sections and weak-interaction information from a single measurement.",
    images: ["/images/news/CEOslopaper.jpg"],
    details: [
      "Paper: “Extraction of Neutron Capture Cross Section on 92Zr Using the Charge-Exchange Oslo Method” (Phys. Rev. C 113, 015801).",
      "Project was completed ~1.5 years earlier (before my Ph.D. oral exam) and later finalized through full collaboration and publication workflow.",
      "Introduces the Charge-Exchange Oslo Method, enabling extraction of both neutron-capture cross sections and weak-interaction rates in one measurement.",
      "Builds on and complements established indirect techniques: γ-ray strength method, surrogate reactions, Oslo Method, β-Oslo, and inverse-Oslo.",
      "Experiment performed at NSCL (predecessor of FRIB) using a light-ion beam in coincidence with the S800 spectrometer and the GRETINA γ-ray detector.",
      "Outlook: extend to (p,n+γ) reactions in inverse kinematics with rare-isotope beams to access broader astrophysical cases where direct measurements are not feasible."
    ],
    links: []
  },

  {
    id: "news-2025-11-10-rcnp-pandroa",
    date: "2025-11-10",
    title: "PANDROA experiment campaign at RCNP (Osaka University)",
    summary:
      "Participated in the PANDROA experiment campaign at RCNP (Osaka University), contributing to hands-on preparation and gaining experience with large-scale detector, DAQ, and collaboration analysis workflows.",
    images: ["/images/news/pandora.jpg"],
    details: [
      "Hands-on involvement in experiment preparation and operations during a multi-experiment campaign at RCNP.",
      "Worked in the Grand Raiden spectrometer environment and with LaBr3 detector arrays and associated systems.",
      "Large international collaboration (~50 participants) spanning multiple continents; I participated as the only attendee from FRIB for this campaign.",
      "Gained practical experience with detector environments, analysis systems, and DAQ systems used in campaign operations.",
      "Travel supported by the Galonsky International Travel Award."
    ],
    links: []
  },

  {
    id: "news-2025-10-13-galonsky-award",
    date: "2025-10-13",
    title: "Awarded the Galonsky International Travel Award (MSU)",
    summary:
      "Received the Galonsky International Travel Award from the MSU Department of Physics & Astronomy, supporting longer research stays with international collaborators and strengthening global scientific connections.",
    images: ["/images/news/MSU.jpg"],
    details: [
      "Award supports research visits to international collaborators and extended stays to strengthen scientific collaboration.",
      "Recognizes research momentum and supports international engagement tied to my Ph.D. program."
    ],
    links: []
  },

  {
    id: "news-2025-09-12-sigma-xi",
    date: "2025-09-12",
    title: "Elected to Sigma Xi — The Scientific Research Honor Society",
    summary:
      "Selected as a member of Sigma Xi, a nomination-based, international research honor society recognizing demonstrated research achievements and potential.",
    images: ["/images/news/sigmaXi.jpg"],
    details: [
      "Sigma Xi is an international, multidisciplinary research honor society founded in 1886.",
      "Membership is by nomination and recognizes research achievements or strong research potential.",
      "This selection is a meaningful professional milestone and motivates my continued contributions to research and scientific community-building."
    ],
    links: []
  },

  {
    id: "news-2025-08-19-frib-theory-alliance-school",
    date: "2025-08-19",
    title: "Participated in the FRIB Theory Alliance Summer School (MSU)",
    summary:
      "Selected for the FRIB Theory Alliance Summer School “Emergence of Collective Motion in Atomic Nuclei” (Aug 19–22, 2025), expanding my nuclear theory foundation alongside experimental research.",
    images: ["/images/news/fribTA.jpg"],
    details: [
      "Opportunity to collaborate with theorists and deepen understanding of nuclear structure and collective phenomena.",
      "Strengthened theory–experiment perspective relevant to reactions, structure inputs, and astrophysical applications."
    ],
    links: []
  },

  {
    id: "news-2025-07-25-beaver-island-hackathon",
    date: "2025-07-25",
    title: "Summer school & hackathon: Open Questions and Research Tools in Nuclear Astrophysics (Beaver Island)",
    summary:
      "Attended the “Open Questions and Research Tools in Nuclear Astrophysics” summer school and hackathon (July 21–25, 2025), combining lectures on open problems with a team-based hackathon on real research challenges.",
    images: ["/images/news/hackthon.jpg"],
    details: [
      "My 4th summer school during the Ph.D.; a major step in shaping my research direction through intensive community engagement.",
      "Hands-on highlight: training with the WinNet astrophysical reaction network, directly supporting my Ph.D. modeling work.",
      "Hackathon component emphasized collaboration, networking, and rapid problem-solving on research-grade tasks."
    ],
    links: []
  },

  {
    id: "news-2025-07-01-uio-visiting-scientist",
    date: "2025-07-01",
    title: "Completed fully funded Visiting Scientist Scholar stay at the University of Oslo",
    summary:
      "Completed a fully funded Visiting Scientist Scholar stay at the University of Oslo (April–July 2025), participating in experiments and advancing a major part of my Ph.D. thesis analysis toward publication.",
    images: ["/images/news/oslo2.jpg"],
    details: [
      "Participated in experiments and analyzed a major component of my Ph.D. thesis, with results planned for an upcoming paper.",
      "Built long-term scientific connections and gained valuable experience working within the Oslo nuclear-research ecosystem.",
      "Had the rare opportunity to work with Prof. Peter von Neumann-Cosel during overlapping visits, which was scientifically enriching."
    ],
    links: []
  },

  {
    id: "news-2025-06-08-siren-italy",
    date: "2025-06-08",
    title: "Poster + 5-minute talk at the siREN International Conference (Giulianova, Italy)",
    summary:
      "Presented my 5th Ph.D. poster and delivered a 5-minute talk at the siREN International Conference (June 8–13, 2025), sharing Oslo-method constraints and TALYS rate implications for the 92Nb cosmochronometer puzzle.",
    images: ["/images/news/siREN.jpg"],
    details: [
      "Conference gathered experts across nuclear physics (experiment/theory) and nuclear astrophysics.",
      "Presented research connected to solving the long-standing puzzle of 92Nb production sites (cosmochronometer).",
      "Analyzed 90Zr(α,d+γ) data taken with a 30 MeV α beam at the Oslo Cyclotron Laboratory in coincidence with SiRi (particle) and OSCAR (γ) arrays.",
      "Applied the Oslo Method to extract nuclear level density and γ-ray strength function of 92Nb for the first time from this dataset.",
      "Used these experimental constraints as TALYS inputs to constrain the 91Nb(n,γ)92Nb reaction rate (not experimentally known).",
      "Key implication: results indicate a significantly lower 92Nb destruction rate than previously estimated, motivating updated CCSN and SNe Ia modeling studies."
    ],
    links: []
  },

  {
    id: "news-2025-04-25-phi-kappa-phi",
    date: "2025-04-25",
    title: "Invited to Phi Kappa Phi Honor Society",
    summary:
      "Invited to join Phi Kappa Phi, the oldest, largest, and most selective all-discipline honor society in the United States (founded in 1897), recognizing sustained academic excellence and scholarly distinction.",
    images: ["/images/news/phikappaphi.jpg"],
    details: [
      "Invitation-only membership recognizing top academic ranking (top 7.5% juniors; top 10% seniors/graduate students) or exceptional scholarly distinction.",
      "At MSU, faculty officers recognized my sustained academic record and progress.",
      "Membership provides access to major awards, career resources, and a broad network of scholars and professionals."
    ],
    links: []
  },

  {
    id: "news-2024-12-13-hep-instrumentation-certificate",
    date: "2024-12-13",
    title: "Graduated with the Graduate Certificate in Instrumentation in High Energy Physics (GPA 4.0)",
    summary:
      "Completed MSU’s Graduate Certificate in “Instrumentation in High Energy Physics” (TRAIN-MI) with a cumulative GPA of 4.0 (Dec 13, 2024), expanding expertise in sensors, electronics/DAQ, and complex detector systems.",
    images: ["/images/news/highenergy.jpg"],
    details: [
      "Program areas: (1) advanced sensors for particle/radiation detection (including quantum devices), (2) application-specific front-end electronics and data acquisition, (3) systems design/engineering for extreme environments (radiation, temperature, low-background).",
      "Completed this HEP-focused program while specializing in Nuclear Physics, strengthening instrumentation breadth for modern experiments.",
      "Note: I did not participate in the graduation ceremony."
    ],
    links: []
  },

  {
    id: "news-2024-11-03-argonne-campaign",
    date: "2024-11-03",
    title: "Participated in an experiment campaign at Argonne National Laboratory",
    summary:
      "Participated in an experiment campaign at Argonne National Laboratory focused on investigating low-energy enhancement behavior in γ-ray strength functions.",
    images: ["/images/news/argonne.jpg"],
    details: [
      "Campaign specifically targeted low-energy enhancement features in γ-ray strength functions.",
      "Strengthened practical experience with campaign operations and collaboration workflows relevant to γSF-focused research."
    ],
    links: []
  },

  {
    id: "news-2024-10-16-pprocess-workshop",
    date: "2024-10-16",
    title: "Oral talk at the 8th p-process Workshop (Konkoly Observatory, Budapest)",
    summary:
      "Delivered my 2nd Ph.D. oral talk at the 8th p-process Workshop (Oct 16–18, 2024), presenting upcoming RCNP measurements and Charge-Exchange Oslo Method plans to constrain rates relevant to 92Nb cosmochronometry and neutrino physics.",
    images: ["/images/news/pprocess.jpg"],
    details: [
      "Presented upcoming FRIB group work at RCNP (Japan): measurement of the 92Zr(3He,t+γ)92Nb reaction to derive rates relevant to the nuclear cosmochronometer 92Nb.",
      "Motivation: 92Nb is linked to p-process nucleosynthesis due to stability of neighboring isotopes, making its production/destruction pathways especially informative.",
      "Planned analysis: apply the Charge-Exchange Oslo Method and validate using fine-structure analysis.",
      "Broader impact: experiment also provides insight into neutrino charge-current reaction rates relevant to neutrino physics.",
      "Preliminary tests of the Charge-Exchange Oslo Method using existing data showed promising results and were described as upcoming/publishable."
    ],
    links: []
  },

  {
    id: "news-2024-09-15-npa-xi",
    date: "2024-09-15",
    title: "Poster + short talk at Nuclear Physics in Astrophysics XI (TU Dresden)",
    summary:
      "Presented my 4th Ph.D. poster and a short talk at NPA-XI (Sep 15–20, 2024), introducing promising tests of the Charge-Exchange Oslo Method to indirectly constrain neutron-capture cross sections using S800 + GRETINA coincidence data.",
    images: ["/images/news/NPA.jpg"],
    details: [
      "Conference hosted 300+ scientists spanning experiments, theory, astrophysics, and astronomy; part of the biennial NPA conference series under the European Physical Society.",
      "Presented development of the Charge-Exchange Oslo Method to indirectly constrain neutron-capture cross sections.",
      "Key firsts emphasized: applying Oslo-type analysis to charge-exchange reactions for indirect (n,γ) constraints, and deriving cross sections using S800 in coincidence with GRETINA at FRIB.",
      "Presented results via poster and short talk, with direct feedback from international experts."
    ],
    links: []
  },

  {
    id: "news-2024-09-08-npa-school",
    date: "2024-09-08",
    title: "Attended Nuclear Physics in Astrophysics School XI (Stolpen, Germany)",
    summary:
      "Selected as one of 30 participants worldwide for the Nuclear Physics in Astrophysics School XI (Sep 8–15, 2024), covering nuclear experiments, reactions, theory, simulations, and multi-messenger astrophysics, plus multiple hands-on facility activities.",
    images: ["/images/news/NPAschool.jpg"],
    details: [
      "Lectures spanned experimental nuclear physics, nuclear reactions, nuclear theory, galactic archaeology, and multi-messenger astronomy taught by international experts.",
      "Hands-on activities included: DZA Day (German Center for Astrophysics focus), Experimental Hands-on Day (HAMSTER AMS, gELBE bremsstrahlung, Felsenkeller underground lab), and a Nuclear Astrophysics Masterclasses training day.",
      "Participation was limited to 30 worldwide; selection provided intensive training and high-value networking in nuclear astrophysics."
    ],
    links: []
  },

  {
    id: "news-2024-09-03-uop-panelist",
    date: "2024-09-03",
    title: "Invited panelist: Career Opportunities with a Physics Degree (University of Peradeniya)",
    summary:
      "Invited panelist for the University of Peradeniya Physics Department orientation program, discussing postgraduate opportunities, postdoctoral pathways, and diverse physics careers alongside professionals from major institutions across the USA/UK/Canada.",
    images: ["/images/news/peraTalk.jpg"],
    details: [
      "Participated as an alumnus panelist for the session “Career Opportunities with a Physics Degree” for the 2022 batch.",
      "Panel included professionals representing organizations and institutions such as Intel, Amazon, Stanford University, and others.",
      "Session aimed to share insights on postgraduate study, postdoctoral research, and broad career pathways in physics."
    ],
    links: []
  },

  {
    id: "news-2024-08-20-msu-travel-fellowship",
    date: "2024-08-20",
    title: "Awarded MSU Graduate School Travel Fellowship",
    summary:
      "Received the MSU Graduate School Travel Fellowship to support travel for presenting my research at professional conferences.",
    images: ["/images/news/MSU.jpg"],
    details: [
      "Fellowship supports dissemination of research at conferences and professional meetings.",
      "Recognizes academic progress and supports broader scientific engagement."
    ],
    links: []
  },

  {
    id: "news-2024-08-15-msc-physics",
    date: "2024-08-15",
    title: "Completed M.Sc. in Physics (GPA 4.0) during my Ph.D.",
    summary:
      "Completed my M.Sc. in Physics at Michigan State University with a cumulative GPA of 4.0 while pursuing my Ph.D., finishing just before the end of my second Ph.D. year.",
    images: ["/images/news/MSc.jpg"],
    details: [
      "Completed 21 credits of theory coursework and 14 credits of research as part of the M.Sc. program.",
      "Milestone achieved while continuing full-time FRIB-based Ph.D. research.",
      "Note: I did not apply for the graduation ceremony."
    ],
    links: []
  },

  {
    id: "news-2024-07-14-ebss2024",
    date: "2024-07-14",
    title: "Poster at the 21st Exotic Beam Summer School (EBSS2024, Argonne National Laboratory)",
    summary:
      "Presented my 3rd Ph.D. poster at EBSS2024 (July 14–20, 2024) at Argonne National Laboratory, combining expert lectures with hands-on laboratory sessions using state-of-the-art instrumentation for rare-isotope beam science.",
    images: ["/images/news/EBSS.jpg"],
    details: [
      "Brought together early-career nuclear researchers worldwide focused on rare-isotope beam science.",
      "Mornings: lectures from leading experts; afternoons: hands-on lab activities applying advanced techniques and instrumentation with radioactive beams.",
      "Strengthened preparation for next-generation rare-isotope programs and facilities."
    ],
    links: []
  },

  {
    id: "news-2024-05-27-oslo-nld-gsf-workshop",
    date: "2024-05-27",
    title: "Poster at the 9th Workshop on Nuclear Level Density and Gamma Strength (University of Oslo)",
    summary:
      "Presented my 2nd Ph.D. poster at the 9th Workshop on Nuclear Level Density and Gamma Strength (May 27, 2024) at the University of Oslo, engaging with experimental and theoretical experts across NLD and γSF research.",
    images: ["/images/news/oslo1.jpg"],
    details: [
      "Conference brought together experimentalists and theorists to discuss cutting-edge research in nuclear level density and γ-ray strength.",
      "The discussions and insights were directly valuable for my Ph.D. analysis direction and methodological decisions."
    ],
    links: []
  },

  {
    id: "news-2024-05-10-phd-candidacy",
    date: "2024-05-10",
    title: "Advanced to Ph.D. candidacy (GPA 4.0 milestone)",
    summary:
      "Advanced to Ph.D. candidacy in Nuclear Physics with a cumulative GPA of 4.0 (30 credits) in 1 year and 9 months, while also nearing completion of my M.Sc. requirements and progressing an ongoing research paper.",
    images: ["/images/news/phdoral.jpg"],
    details: [
      "Achieved candidacy milestone within the globally top-ranked Nuclear Physics program at Michigan State University.",
      "Completed 30 credits with a 4.0 cumulative GPA at the time of candidacy.",
      "Committee listed in the original note: Prof. Artemis Spyrou, Prof. Chloe Hebborn, Prof. Laura Chomiuk, and Prof. Sophie Berkman.",
      "Also credited the FRIB Charge-Exchange group and SuN group as part of the support ecosystem mentioned in the original post."
    ],
    links: []
  },

  {
    id: "news-2023-11-24-frib-fellowship-graham",
    date: "2023-11-24",
    title: "Awarded FRIB Laboratory Fellowship and the Herbert T. Graham Scholarship",
    summary:
      "Awarded a Fellowship from the Facility for Rare Isotope Beams (FRIB) Laboratory and the Herbert T. Graham Scholarship at Michigan State University, supporting my graduate research and training.",
    images: ["/images/news/pandora.jpg"],
    details: [
      "Recognized with FRIB Laboratory Fellowship support and the Herbert T. Graham Scholarship at MSU.",
      "These awards support continued research progress and professional development."
    ],
    links: []
  },

  {
    id: "news-2023-09-01-irena-ukakuren",
    date: "2023-09-01",
    title: "First Ph.D. poster at the inaugural IReNA–Ukakuren conference (Tokyo, Japan)",
    summary:
      "Presented my first Ph.D. research poster at the inaugural IReNA–Ukakuren conference in Tokyo (Sep 1, 2023), focused on advancing professional development in nuclear astrophysics and beyond.",
    images: ["/images/news/ukakuren.jpg"],
    details: [
      "Major first milestone for communicating my Ph.D. research to an international audience.",
      "Conference theme emphasized professional development and scientific networking in nuclear astrophysics."
    ],
    links: []
  },

  {
    id: "news-2023-05-21-cenam-frontiers",
    date: "2023-05-21",
    title: "First conference + first summer school: CeNAM Frontiers Meeting & IReNA Summer School (2023)",
    summary:
      "Participated in my first conference (CeNAM Frontiers in Nuclear Astrophysics Meeting 2023) and my first summer school (IReNA Frontiers in Nuclear Astrophysics 2023), gaining foundational community connections early in my Ph.D. journey.",
    images: ["/images/news/frontiers.jpg"],
    details: [
      "Participated successfully in both the CeNAM Frontiers meeting and the IReNA Frontiers summer school.",
      "This pair of events provided a strong entry point into the broader nuclear astrophysics community."
    ],
    links: []
  },

  {
    id: "news-2023-05-16-started-frib-gra",
    date: "2023-05-16",
    title: "Started as a Graduate Research Assistant at FRIB (Charge-Exchange Nuclear Astrophysics)",
    summary:
      "Started a Graduate Research Assistant position at the Facility for Rare Isotope Beams (FRIB) in the Charge-Exchange Nuclear Astrophysics group under Prof. Remco Zegers.",
    images: ["/images/news/RAstart.jpg"],
    details: [
      "Began FRIB-based graduate research in charge-exchange reactions and nuclear astrophysics applications.",
      "This role launched my core Ph.D. research program in experimental nuclear astrophysics."
    ],
    links: []
  },

  {
    id: "news-2023-05-07-bbc-documentary",
    date: "2023-05-07",
    title: "Invited for a BBC documentary interview",
    summary:
      "Invited for a BBC documentary interview highlighting my academic journey and accomplishments—an important personal and professional milestone.",
    images: ["/images/news/BBC.jpg"],
    details: [
      "Invitation recognized milestones in my academic path and broader accomplishments.",
      "The original note explicitly referenced appreciation for Kawanthissa Maha Vidyalaya (Ampara), Dharmaraja College, University of Peradeniya, Michigan State University, and FRIB as part of the journey context."
    ],
    links: []
  },

  {
    id: "news-2022-08-27-started-phd",
    date: "2022-08-27",
    title: "Started my Ph.D. in Nuclear Physics at Michigan State University / FRIB",
    summary:
      "Started my Ph.D. in Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams (FRIB).",
    images: ["/images/news/phdstart.jpg"],
    details: [
      "Began Ph.D. training and research at MSU and FRIB focused on experimental nuclear physics with astrophysics connections."
    ],
    links: []
  },

  {
    id: "news-2022-08-25-uop-top-of-batch-awards",
    date: "2022-08-25",
    title: "Graduated B.Sc. (Honours) in Physics — top of batch with medals, prizes, and major awards",
    summary:
      "Graduated from the University of Peradeniya with a B.Sc. (Honours) in Physics (First Class), ranked top of the batch with a 0.15 GPA advantage, and received the full set of departmental medals/prizes/awards associated with the General Convocation 2020.",
    images: ["/images/news/bscgraduate.jpg"],
    details: [
      "Degree: B.Sc. (Honours) in Physics, First Class Honors; ranked Top of the Batch (0.15 GPA advantage over second position).",
      "GPAs: Overall GPA 3.90; Physics GPA 3.93; Mathematics GPA 4.00.",
      "Department of Physics (General Convocation 2020) awards (Two Gold Medals, Three Prizes, Two Awards):",
      "• Prof. Lakshman Dissanayake Gold Medal for Excellence in Physics.",
      "• Prof. George Dissanaike Memorial Gold Medal for Physics.",
      "• Dr. C. A. Hevavitharana Memorial Prize for Physics.",
      "• Prof. A. W. Wolfendale Prize for Physics.",
      "• University Award for Academic Excellence.",
      "• Eramudugolla Dunuwila Prize for Mathematics.",
      "• Merit Award.",
      "• Faculty Award.",
      "• Dean’s List in all four years.",
      "Selected into five Ph.D. programs in Nuclear/Particle Physics in the USA with full scholarships, without standardized tests (GRE/IELTS/TOEFL), based on transcript and recommendations.",
      "Universities selected: Michigan State University (noted as World Ranking No. 1 Nuclear Physics Program), Stony Brook University (noted as World Ranking No. 3 Nuclear Physics Program), Brown University, University of Florida, University of Virginia.",
      "Chose the Ph.D. in Nuclear Physics at Michigan State University; as the first Sri Lankan graduate student directly selected to that program.",
      "Undergraduate pathway described: studied Physics, Pure Mathematics, and Applied Mathematics in the first two years; achieved highest GPA option in both subjects (Mathematics GPA 4.00/4.00 and Physics GPA 3.99/4.00), then specialized in Physics to build a strong math foundation while pursuing the goal of becoming a scientist."
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



export const contactForm = {
  endpoint: "https://formspree.io/f/mqedkpqz",
  emailTo: "devanes1@msu.edu",
  subjectPrefix: "Website message"
};
