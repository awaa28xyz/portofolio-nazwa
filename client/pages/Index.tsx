import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROFILE_IMAGE = "https://api.builder.io/api/v1/image/assets/TEMP/f54259d43f826e06c165191dc9d37728b7a8065a?width=800";

const projects = [
  {
    title: "Website UMKM",
    description: "Membantu Branding UMKM agar lebih dikenal",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/514be43f4b5cc016e3f2101456ec4200a7d82564?width=720",
    tags: ["Web", "Branding"],
  },
  {
    title: "Website Karya Seniman",
    description: "Project UAS Pemprograman WEB",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9c8cd1675345900f852f043effe6024759f7d3ef?width=720",
    tags: ["Web", "PHP"],
  },
  {
    title: "Website Terintegrasi IoT",
    description: "Website x Sistem IoT",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/19e6c8a347b56e2ecf6096e3b059fbe9c06c3c7e?width=720",
    tags: ["IoT", "Web"],
  },
  {
    title: "Membuat Sistem Sekolah",
    description: "Sistem Informasi Sekolah",
    image: "https://cdn.builder.io/api/v1/image/assets%2F608dcd5e8d094967beb404e8680d8058%2F97d7a54a1e2c4467a98c5b5c6823fe79?width=720",
    tags: ["Web", "Laravel"],
  },
  {
    title: "LuxeCart Java Edition",
    description: "E-commerce berbasis Java – OOP",
    image: "https://cdn.builder.io/api/v1/image/assets%2F608dcd5e8d094967beb404e8680d8058%2Faf9f400f25cb4efe9e4e9a041b77621e?width=720",
    tags: ["Java", "OOP"],
  },
  {
    title: "Web Klasifikasi Sampah",
    description: "A web-based waste classification system built using Python that can automatically detect waste categories from uploaded images.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F608dcd5e8d094967beb404e8680d8058%2F3f049b651db2453d88ea872dd432d186?width=720",
    tags: ["Python", "Machine Learning", "Image Classification"],
  },
];

const experiences = [
  {
    company: "BPPM Fakultas Vokasi",
    role: "Web Content Administrator",
    tasks: [
      "Mengelola dan mengunggah konten ke website resmi menggunakan WordPress",
      "Mengelola konten media (publikasi & arsip digital)",
      "Melakukan pengarsipan dokumen administratif secara sistematis",
      "Digitalisasi dokumen melalui proses scanning (kontrak, arsip kegiatan, dll)",
      "Menata dan merapikan berkas untuk memudahkan pencarian dan distribusi data",
    ],
  },
  {
    company: "PT Funvita Indonesia",
    role: "Editor Video",
    tasks: [
      "Mengedit konten video profesional",
      "Menyesuaikan hasil editing dengan kebutuhan brand",
      "Berkontribusi dalam produksi media perusahaan",
    ],
  },
  {
    company: "Kehumasan Fakultas Vokasi",
    role: "Fotografi",
    tasks: [
      "Mendokumentasikan kegiatan resmi fakultas",
      "Menggunakan kamera DSLR untuk hasil profesional",
      "Mengelola file dokumentasi kegiatan",
    ],
  },
];

const achievements = [
  { title: "MC Bootcamp Fotografi", image: "https://api.builder.io/api/v1/image/assets/TEMP/cc44cb70c4da59264bd28367edc756a21b47af01?width=656" },
  { title: "LO Olivia X 2025 Universitas Brawijaya", image: "https://cdn.builder.io/api/v1/image/assets%2F608dcd5e8d094967beb404e8680d8058%2Ff36ca31f0204459e91d2132b84a9e252?width=656" },
  { title: "Sekretaris Himpunan Teknologi Informasi 2025", image: "https://cdn.builder.io/api/v1/image/assets%2F608dcd5e8d094967beb404e8680d8058%2Fa10764ddb5ac4da29084fc7cc0ef0cbe?width=656" },
  { title: "Sekretaris Ospek Maba Teknologi Informasi 2025", image: "https://api.builder.io/api/v1/image/assets/TEMP/cdb56a806211b7b160df2ef69e19b23732009ee6?width=656" },
  { title: "PJ Lomba Web Development Creamonic 2025", image: "https://api.builder.io/api/v1/image/assets/TEMP/1504a39dfd190e5b29317b0c32290af967d9c93c?width=624" },
  { title: "Pemateri Expo Campus 2024", image: "https://cdn.builder.io/api/v1/image/assets%2F608dcd5e8d094967beb404e8680d8058%2F62056010b61e4b4493fdcbab6166ebd8?width=656" },
  { title: "Sekretaris Ekstrakulikuler Fotografi 2022–2023", image: "https://api.builder.io/api/v1/image/assets/TEMP/0a726940478fa1e07e0124f3640eb5f27eab9f38?width=622" },
  { title: "PDD Volunteer Pengabdian Fakultas Vokasi 2025", image: "https://api.builder.io/api/v1/image/assets/TEMP/11828bc71b54d912568ebe7391159c066ad90180?width=606" },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Laravel",
  "Native PHP",
  "MySQL",
  "WordPress",
  "Figma",
  "Canva",
  "Adobe Photoshop",
  "Capcut",
  "Microsoft Office",
  "Photography",
];

const navLinks = ["About", "Project", "Experience", "Achievement", "Contact"];

const contactInfo = [
  {
    label: "Email",
    value: "nazwaauliaa81@gmail.com",
    href: "mailto:nazwaauliaa81@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "083148051304",
    href: "https://wa.me/6283148051304",
  },
  {
    label: "Instagram",
    value: "@nazwarhmaulia",
    href: "https://instagram.com/nazwarhmaulia",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function FloatingBlob({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none animate-pulse ${className}`}
      style={{
        animation: "float 8s ease-in-out infinite",
      }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = () => setScrolled(window.scrollY > 20);
  
  if (typeof window !== "undefined") {
    if (!scrolled) {
      window.addEventListener("scroll", handleScroll, { once: false });
    }
  }

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030e21]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      style={{
        animation: "slideDown 0.7s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <span
          className="font-poppins font-bold text-xl lg:text-2xl text-white tracking-tight cursor-pointer hover:text-blue-300 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portofolio
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-poppins text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#030e21]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="w-full text-left px-6 py-3 text-white/70 hover:text-white font-medium transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingBlob className="w-[600px] h-[600px] bg-blue-600/20 -left-32 top-0" />
      <FloatingBlob className="w-[500px] h-[500px] bg-purple-700/20 right-0 top-20" />
      <FloatingBlob className="w-[400px] h-[400px] bg-pink-700/10 left-1/3 bottom-0" />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="font-poppins font-semibold text-[#868490] text-lg lg:text-2xl mb-3"
            >
              Teknologi Informasi
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="w-24 h-1.5 bg-[#F8E7A1] rounded-full mb-6" />
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6"
            >
              Nazwa Rahma Aulia Noer P.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="font-poppins text-[#D5D3E0] text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Mahasiswa aktif D3 Teknologi Informasi Universitas Brawijaya yang memiliki pengalaman dalam organisasi, magang, serta pengelolaan media dan dokumentasi. Memiliki ketertarikan dalam pengembangan web, produksi konten digital, serta sistem berbasis teknologi.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 mb-10">
              {[
                { label: "Organization Experience", value: "3" },
                { label: "Complete Project", value: "6+" },
                { label: "Internship Experience", value: "3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm min-w-[110px] hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
                >
                  <span className="font-poppins font-bold text-4xl text-white leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="font-poppins text-[#868490] text-xs text-center leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={5}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 font-poppins font-medium text-[#F8E7A1] text-lg border-b border-[#F8E7A1]/40 pb-1 hover:border-[#F8E7A1] transition-all duration-300 group hover:scale-105"
            >
              Let's talk
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M14.43 5.93L20.5 12L14.43 18.07" stroke="#F8E7A1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.5 12H20.33" stroke="#F8E7A1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl scale-110"
                style={{ animation: "glow 6s ease-in-out infinite" }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 scale-[1.02]" />
              <div className="relative w-72 sm:w-80 lg:w-96 xl:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/40">
                <img
                  src={PROFILE_IMAGE}
                  alt="Nazwa Rahma Aulia Noer P."
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030e21]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const gradients = [
    "from-blue-900/60 to-indigo-900/60",
    "from-purple-900/60 to-blue-900/60",
    "from-indigo-900/60 to-cyan-900/60",
    "from-slate-800/80 to-blue-900/60",
    "from-violet-900/60 to-slate-900/60",
    "from-blue-900/60 to-slate-900/60",
  ];

  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.5}
      initial="hidden"
      animate="visible"
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#091427]/60 backdrop-blur-sm cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center`}>
            <div className="text-center text-white/40">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-poppins">Project</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-5 bg-[#101B2E]/50 backdrop-blur-sm">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-blue-300/80 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-poppins font-semibold text-white text-lg mb-1">{project.title}</h3>
        <p className="font-poppins text-[#868490] text-sm">{project.description}</p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}

function ProjectsSection() {
  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="project" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingBlob className="w-[500px] h-[500px] bg-purple-800/15 right-0 top-1/4" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl text-white">
            Our Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          variants={projectsVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className="border border-white/10 rounded-xl bg-[#091427]/80 backdrop-blur-md overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 lg:px-10 py-6 lg:py-8 flex items-center justify-between gap-4 group hover:bg-white/5 transition-colors"
      >
        <div>
          <h3 className="font-poppins font-semibold text-white text-xl lg:text-2xl xl:text-3xl mb-1">
            {exp.company}
          </h3>
          <p className="font-poppins text-[#868490] font-medium text-base lg:text-lg">{exp.role}</p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-white/40 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="px-6 lg:px-10 pb-8 space-y-3">
              {exp.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-white font-poppins text-sm lg:text-base">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ExperienceSection() {
  const experienceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingBlob className="w-[400px] h-[400px] bg-blue-700/20 -left-20 top-1/3" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl text-white">
            Pengalaman Magang
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          variants={experienceVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }: { item: typeof achievements[0]; index: number }) {
  const gradients = [
    "from-blue-900 to-indigo-800",
    "from-purple-900 to-blue-800",
    "from-indigo-900 to-violet-800",
    "from-slate-800 to-blue-900",
    "from-violet-900 to-indigo-800",
    "from-blue-800 to-cyan-900",
    "from-slate-900 to-blue-800",
    "from-indigo-800 to-purple-900",
  ];

  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.3}
      initial="hidden"
      animate="visible"
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#091427]/60 cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center`}>
            <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
        <p className="font-poppins font-medium text-white text-sm text-center leading-snug">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

function AchievementsSection() {
  const achievementVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <section id="achievement" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingBlob className="w-[500px] h-[500px] bg-purple-700/15 right-0 bottom-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl text-white">
            Achievement
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          variants={achievementVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingBlob className="w-[400px] h-[400px] bg-blue-600/15 left-1/4 top-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
            Skills & Tools
          </h2>
          <p className="font-poppins text-[#D5D3E0] text-lg max-w-2xl mx-auto">
            Technologies and tools I've mastered to deliver exceptional digital solutions
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>
        <motion.div
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 lg:gap-5 mt-12"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              variants={fadeUp}
              custom={idx * 0.05}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <span
                className="relative font-poppins font-medium text-sm lg:text-base text-white px-6 lg:px-7 py-2.5 lg:py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:border-blue-400/60 hover:bg-blue-500/15 transition-all duration-300 cursor-default block whitespace-nowrap"
                style={{
                  boxShadow: "0 0 0 0 rgba(96, 165, 250, 0.1)",
                }}
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingBlob className="w-[500px] h-[500px] bg-blue-600/15 right-0 bottom-1/3" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
            Get In Touch
          </h2>
          <p className="font-poppins text-[#D5D3E0] text-lg">
            Ada proyek atau kolaborasi yang menarik? Hubungi saya melalui salah satu kontak berikut!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactInfo.map((contact, i) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group relative p-8 rounded-2xl border border-white/10 bg-[#091427]/60 backdrop-blur-md hover:border-blue-400/40 hover:bg-[#091427]/80 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300 border border-white/10 group-hover:border-blue-400/30">
                  {contact.label === "Email" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  {contact.label === "WhatsApp" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.994 1.523 9.868 9.868 0 001.34 19.246h.008a9.864 9.864 0 005.154-1.558 9.868 9.868 0 00-1.508-19.211" />
                    </svg>
                  )}
                  {contact.label === "Instagram" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-pink-400">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                </div>

                <h3 className="font-poppins font-semibold text-white text-xl mb-2">
                  {contact.label}
                </h3>

                <p className="font-poppins text-[#D5D3E0] text-base break-all">
                  {contact.value}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                    {contact.label === "Email" ? "Send Email" : contact.label === "WhatsApp" ? "Open Chat" : "Visit Profile"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-poppins text-[#868490] text-sm">
            Respon cepat dijamin untuk setiap pertanyaan dan inquiry bisnis
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Gmail",
      href: "mailto:nazwa@example.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#091427] border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-poppins font-bold text-xl text-white mb-1">Portofolio</p>
            <p className="font-poppins text-[#868490] text-sm">Nazwa Rahma Aulia Noer P.</p>
          </div>
          <div>
            <p className="font-poppins font-medium text-white text-base mb-4 text-center md:text-left">Follow us</p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white/70 hover:text-blue-400 transition-all duration-200 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-400/40 hover:bg-blue-500/10 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/[0.06] text-center">
          <p className="font-poppins text-[#868490] text-xs">
            © {new Date().getFullYear()} Nazwa Rahma Aulia Noer P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-[#030E21] font-poppins">
      <style>{`
        .font-poppins { font-family: 'Poppins', sans-serif; }
        ::selection { background: rgba(96,165,250,0.3); color: white; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #030E21; }
        ::-webkit-scrollbar-thumb { background: rgba(96,165,250,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(96,165,250,0.5); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
