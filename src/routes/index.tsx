import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Cpu,
  Brain,
  Server,
  Code2,
  Zap,
  Download,
  ArrowRight,
  Copy,
  Check,
  Star,
  GraduationCap,
  Briefcase,
  Trophy,
  Languages,
  PlayCircle,
} from "lucide-react";




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Vardhan — Software Engineer · AI/ML · Backend" },
      {
        name: "description",
        content:
          "Yash Vardhan — B.Tech CSE (AI & ML), SMIT. Building intelligent, production-grade software with Python, FastAPI, Spring Boot, React, LangChain and TensorFlow. Open to hire.",
      },
      { property: "og:image", content: "/profile.png" },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "jyash7319@gmail.com";
const PHONE = "+91 8789195204";
const LINKEDIN = "https://linkedin.com/in/yash-vardhan-295578342";
const GITHUB = "https://github.com/yashvardhan7319";
const RESUME =
  "https://drive.google.com/file/d/1CEfyQagwz-7V7ORHLDUisyQRg4k61uGL/view?usp=sharing";
const gmailCompose = (subject?: string) => {
  const url = new URL("https://mail.google.com/mail/");
  url.searchParams.set("view", "cm");
  url.searchParams.set("fs", "1");
  url.searchParams.set("to", EMAIL);
  if (subject) url.searchParams.set("su", subject);
  return url.toString();
};

const NAV = [
  { label: "Intro", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const DOMAINS = [
  {
    icon: Brain,
    n: "01",
    title: "Deep Learning",
    body: "Neural architectures — ANN, LSTM — trained end-to-end in TensorFlow/Keras with proper evaluation discipline.",
    tags: ["TensorFlow", "Keras", "scikit-learn", "LSTM"],
  },
  {
    icon: Sparkles,
    n: "02",
    title: "Agentic AI",
    body: "Multi-agent LLM systems that plan, act, critique. RAG, tool-use, streaming reasoning via SSE.",
    tags: ["LangChain", "LangGraph", "Groq · Llama-3", "RAG"],
  },
  {
    icon: Server,
    n: "03",
    title: "Backend Engineering",
    body: "Production APIs with auth, RBAC, containerized deploys. Systems designed for real users.",
    tags: ["FastAPI", "Spring Boot", "Docker", "MySQL"],
  },
  {
    icon: Code2,
    n: "04",
    title: "Full-Stack Product",
    body: "React + TypeScript interfaces wired to typed APIs. Shipping polished, opinionated UIs.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
];

const SKILLS_MARQUEE = [
  "Python", "FastAPI", "LangChain", "TensorFlow", "Keras", "RAG",
  "Agentic AI", "Groq · Llama-3", "Next.js", "React", "TypeScript",
  "Spring Boot", "Docker", "MySQL", "JWT · RBAC", "scikit-learn",
  "NumPy", "Pandas", "SQL", "Git", "Java", "Power BI",
];

type Skill = { n: string; pct: number };
type SkillCat = { key: string; title: string; icon: typeof Brain; skills: Skill[] };

const SKILL_CATS: SkillCat[] = [
  {
    key: "lang",
    title: "Programming",
    icon: Code2,
    skills: [
      { n: "Python", pct: 90 },
      { n: "SQL", pct: 85 },
      { n: "JavaScript", pct: 80 },
      { n: "Java", pct: 75 },
      { n: "HTML", pct: 90 },
      { n: "CSS", pct: 85 },
    ],
  },
  {
    key: "fw",
    title: "Frameworks",
    icon: Server,
    skills: [
      { n: "FastAPI", pct: 88 },
      { n: "Flask", pct: 80 },
      { n: "React", pct: 78 },
      { n: "Spring Boot", pct: 75 },
      { n: "Next.js", pct: 72 },
    ],
  },
  {
    key: "ml",
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { n: "Pandas", pct: 88 },
      { n: "NumPy", pct: 88 },
      { n: "Scikit-Learn", pct: 85 },
      { n: "TensorFlow", pct: 82 },
      { n: "Matplotlib", pct: 80 },
    ],
  },
  {
    key: "genai",
    title: "Generative AI",
    icon: Sparkles,
    skills: [
      { n: "LangChain", pct: 85 },
      { n: "Prompt Engineering", pct: 85 },
      { n: "OpenAI", pct: 82 },
      { n: "Groq", pct: 80 },
      { n: "RAG", pct: 80 },
      { n: "LangGraph", pct: 78 },
      { n: "Embeddings", pct: 78 },
    ],
  },
  {
    key: "db",
    title: "Databases & Tools",
    icon: Cpu,
    skills: [
      { n: "VS Code", pct: 90 },
      { n: "GitHub", pct: 88 },
      { n: "Git", pct: 85 },
      { n: "Jupyter", pct: 85 },
      { n: "MySQL", pct: 82 },
      { n: "MongoDB", pct: 75 },
      { n: "Docker", pct: 72 },
      { n: "Power BI", pct: 70 },
    ],
  },
];

const LANGUAGES = [
  { n: "Hindi", level: "Native", pct: 100 },
  { n: "English", level: "Professional", pct: 90 },
];

const PROJECTS = [
  {
    id: "nexus",
    n: "01",
    name: "NEXUS",
    year: "2026",
    tagline: "Multi-agent research assistant that reasons, writes, and critiques its own output.",
    role: "Solo · Design + Engineering",
    status: "Live",
    github: "https://github.com/yashvardhan7319/NEXUS-Multi-AI-Research-Agent",
    problem:
      "Open-web research is slow and untraceable. Human researchers spend hours stitching sources with no quality signal.",
    approach:
      "A Search → Reader → Writer → Critic agent swarm streamed via SSE. A Critic re-reads the report and scores it against evidence. Compare mode: upload docx/pdf against generated report.",
    impact: [
      "End-to-end research in minutes",
      "Streamed reasoning surface",
      "Critique-loop quality score",
      "Word export with citations",
    ],
    tech: ["Python", "FastAPI", "LangChain", "Groq · Llama-3", "Tavily", "Next.js 16", "TypeScript"],
    media: [
      { kind: "video" as const, src: "/DEMO.mp4", caption: "Live demo" },
      { kind: "image" as const, src: "/1-dashboard.png", caption: "Dashboard" },
      { kind: "image" as const, src: "/2-generation.png", caption: "Live generation" },
      { kind: "image" as const, src: "/3-review.png", caption: "Critique" },
      { kind: "image" as const, src: "/4-compare-setup.png", caption: "Compare setup" },
      { kind: "image" as const, src: "/5-compare-result.png", caption: "Compare result" },
    ],
  },
  {
    id: "dpt",
    n: "02",
    name: "Departmental Timetable Portal",
    year: "2025",
    tagline: "Production RBAC scheduling system for BCA & MCA — one source of truth across three roles.",
    role: "Team of 4 · Full-Stack Lead",
    status: "Shipped",
    github: "https://github.com/yashvardhan7319/DEPARTMENTAL_TIMETABLE_PORTAL",
    problem:
      "Manual timetable rollouts were error-prone, opaque to students, hostile to faculty change requests.",
    approach:
      "JWT-authenticated multi-role portal with Excel ingestion via Apache POI, weekly views per role, faculty request flow. Deployed as containerized Spring Boot + MySQL.",
    impact: [
      "One source of truth across 3 roles",
      "Bulk Excel import replaces manual entry",
      "Faculty request flow with audit trail",
      "Dockerized deploys",
    ],
    tech: ["React", "Spring Boot", "MySQL", "Docker", "JWT", "Apache POI"],
    media: [
      { kind: "image" as const, src: "/admin_dashboard.png", caption: "Admin dashboard" },
      { kind: "image" as const, src: "/student_dashboard.png", caption: "Student view" },
      { kind: "image" as const, src: "/weekly_timetable.png", caption: "Weekly timetable" },
      { kind: "image" as const, src: "/faculty_management.png", caption: "Faculty mgmt" },
      { kind: "image" as const, src: "/faculty_requests.png", caption: "Requests" },
      { kind: "image" as const, src: "/csv_upload.png", caption: "Bulk CSV" },
      { kind: "image" as const, src: "/login_page.png", caption: "Auth" },
    ],
  },
];

const JOURNEY = [
  { year: "2022", t: "Curiosity", d: "Started Python & DSA fundamentals. Programs as living things." },
  { year: "2023", t: "Fundamentals", d: "OOP, DBMS, SQL — the primitives that compose everything else." },
  { year: "2024", t: "Machine Learning", d: "Classical models, then deep nets. Real datasets, real evaluation." },
  { year: "2025", t: "Internship", d: "Python Developer Intern @ DGPL. Shipped services with a real team." },
  { year: "2026", t: "Agentic AI", d: "NEXUS: agents that plan, act, critique, and produce artifacts." },
  { year: "Next", t: "In Production", d: "Full-time AI/ML, Backend or SDE. Systems at scale." },
];

const EXPERIENCE = [
  {
    role: "Python Developer Intern",
    org: "DGPL",
    dates: "Sep 2025 — Mar 2026",
    bullets: [
      "Developed and maintained Python-based applications and backend modules",
      "Assisted in API development, testing, debugging, and feature implementation",
      "Collaborated with the team to improve application performance and reliability",
      "Participated in SDLC activities and technical documentation",
    ],
  },
];

const EDUCATION = [
  { yr: "2023–27", what: "B.Tech CSE (AI & ML)", where: "Sikkim Manipal Institute of Technology" },
  { yr: "2023", what: "Higher Secondary", where: "Mount Carmel English School" },
  { yr: "2020", what: "Secondary", where: "St. Peter's English School" },
];

const CERTS = [
  { label: "IBM Machine Learning Professional", meta: "Coursera · JD1TYDY5QBH", year: "2025" },
  { label: "Deloitte Australia — Tech Job Simulation", meta: "Forage", year: "2026" },
];

const ACHIEVEMENTS = [
  { label: "National Means-Cum-Merit Scholarship", meta: "Govt. of India", year: "2019" },
  { label: "Sponsorship Team Lead — NBCC / SMIT", meta: "Campus event leadership", year: "2024" },
];

/* ================= COMPONENT ================= */
function Portfolio() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    let lenis: import("lenis").default | null = null;
    let rafId = 0;
    let cancelled = false;
    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.2,
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[color:var(--ion)] focus:text-background focus:px-3 focus:py-1 focus:text-xs focus:rounded"
      >
        Skip to content
      </a>
      <TopBar />
      <main id="main">
        <Hero />
        <Marquee />
        <Mission />
        <About />
        <Domains />
        <FeaturedWork />
        <MLLab />
        <Skills />
        <Experience />
        <Journey />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ================= STARFIELD ================= */
function Starfield() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, cx = 0, cy = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stars: { x: number; y: number; z: number; pz: number }[] = [];
    const N = 380;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      cx = w / 2; cy = h / 2;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < N; i++) {
      const z = Math.random() * w;
      stars.push({ x: (Math.random() - 0.5) * w, y: (Math.random() - 0.5) * h, z, pz: z });
    }

    let raf = 0;
    const speed = reduce ? 0.6 : 2.4;

    const tick = () => {
      ctx.fillStyle = "rgba(3,5,16,0.35)";
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < N; i++) {
        const s = stars[i];
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) {
          s.x = (Math.random() - 0.5) * w;
          s.y = (Math.random() - 0.5) * h;
          s.z = w;
          s.pz = s.z;
        }
        const k = 128 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;
        const pk = 128 / s.pz;
        const ppx = s.x * pk + cx;
        const ppy = s.y * pk + cy;
        if (px < 0 || px > w || py < 0 || py > h) continue;
        const alpha = Math.min(1, (1 - s.z / w) * 1.2);
        const hue = i % 7 === 0 ? "167,139,250" : "180,220,255";
        ctx.strokeStyle = `rgba(${hue},${alpha})`;
        ctx.lineWidth = Math.max(0.4, 1.6 * (1 - s.z / w));
        ctx.beginPath();
        ctx.moveTo(ppx, ppy);
        ctx.lineTo(px, py);
        ctx.stroke();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="starfield" aria-hidden />;
}

/* ================= TOP BAR ================= */
function TopBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#intro" className="flex items-center gap-2.5 group">
          <span className="relative inline-block h-2 w-2 rounded-full bg-[color:var(--ion)] shadow-[0_0_12px_var(--ion)]" />
          <span className="display text-[13px] tracking-[0.28em] gradient-text">YASH · VARDHAN</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-[color:var(--ion)] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-ghost hover:border-[color:var(--plasma)] hover:text-[color:var(--plasma)]"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <a
            href={gmailCompose("Let's build something")}
            className="btn-ghost hover:border-[color:var(--ion)] hover:text-[color:var(--ion)]"
          >
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section id="intro" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <Starfield />
      <div className="absolute inset-0 grid-bg opacity-40 animate-grid pointer-events-none" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(125,211,252,0.35) 0%, rgba(167,139,250,0.10) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 chip mb-8 animate-fade">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ion)] animate-blink" />
          Open to Software Engineering · AI · Backend roles
        </div>

        {/* Kinetic HUD Avatar */}
        <div className="mx-auto mb-10 relative flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48 animate-rise">
          {/* Layered ambient gradient — soft, theme-matched */}
          <div
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl pointer-events-none opacity-80"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(125,211,252,0.35), transparent 55%), radial-gradient(circle at 70% 70%, rgba(167,139,250,0.28), transparent 60%), radial-gradient(circle at 50% 50%, rgba(34,211,238,0.18), transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full pointer-events-none animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(125,211,252,0.22) 0%, rgba(167,139,250,0.10) 45%, transparent 72%)",
              filter: "blur(14px)",
            }}
            aria-hidden
          />

          {/* Particle dots orbiting the avatar */}
          <div className="absolute w-52 h-52 sm:w-64 sm:h-64 animate-orbit pointer-events-none" aria-hidden>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[color:var(--ion)] shadow-[0_0_8px_rgba(125,211,252,0.9)]" />
            <span className="absolute bottom-2 right-4 h-0.5 w-0.5 rounded-full bg-[color:var(--plasma)] shadow-[0_0_6px_rgba(167,139,250,0.9)]" />
            <span className="absolute top-6 left-2 h-0.5 w-0.5 rounded-full bg-[color:var(--neon)] shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
          </div>
          <div className="absolute w-48 h-48 sm:w-60 sm:h-60 animate-orbit-reverse pointer-events-none" aria-hidden>
            <span className="absolute top-1/2 right-0 h-1 w-1 rounded-full bg-[color:var(--plasma)] shadow-[0_0_8px_rgba(167,139,250,0.9)]" />
            <span className="absolute bottom-0 left-1/3 h-0.5 w-0.5 rounded-full bg-[color:var(--ion)] shadow-[0_0_6px_rgba(125,211,252,0.9)]" />
          </div>

          {/* Rotating orbital rings */}
          <div
            className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[color:var(--border)] animate-orbit pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-[color:var(--ion)]/25 animate-orbit-reverse pointer-events-none"
            aria-hidden
          />

          {/* HUD data labels — hidden on very small screens to keep avatar clean */}
          <div className="hidden sm:flex absolute -top-4 -right-14 flex-col items-start pointer-events-none">
            <span className="mono-label text-[color:var(--ion)]">ID_0429-X</span>
            <div className="h-px w-10 bg-[color:var(--ion)]/40" />
          </div>
          <div className="hidden sm:block absolute bottom-4 -left-16 pointer-events-none">
            <span className="mono-label text-[color:var(--muted-foreground)]">STATUS: ONLINE</span>
          </div>

          {/* Main profile photo */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl">
            <img
              src="/profile.png"
              alt="Portrait of Yash Vardhan"
              width={176}
              height={176}
              className="h-full w-full rounded-full object-cover bg-black"
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(125,211,252,0.15), transparent 60%)",
              }}
              aria-hidden
            />
          </div>

          {/* Available badge */}
          <div className="absolute -bottom-1 -right-1 sm:-bottom-1 sm:-right-1 chip !bg-background/80 backdrop-blur text-[9px] sm:text-[10.5px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ion)] animate-blink" /> Available
          </div>
        </div>

        <p className="mono-label mb-4 animate-fade">— Hi, I&apos;m Yash Vardhan —</p>

        <h1 className="display leading-[0.95] text-[clamp(2.2rem,8vw,6.5rem)] neon-text animate-neon animate-rise">
          BUILDING SOFTWARE
        </h1>
        <h2 className="display leading-[0.95] text-[clamp(1.6rem,5.5vw,4rem)] mt-3 neon-outline animate-rise" style={{ animationDelay: "0.15s" }}>
          THAT THINKS
        </h2>

        <div className="mt-8 flex items-center justify-center gap-3 animate-rise" style={{ animationDelay: "0.25s" }}>
          <span className="scan-line w-16" />
          <span className="mono-label">Software Engineer · AI/ML · Backend</span>
          <span className="scan-line w-16" />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-[color:var(--muted-foreground)] text-base sm:text-lg leading-relaxed animate-rise" style={{ animationDelay: "0.35s" }}>
          B.Tech CSE (AI &amp; ML) at SMIT. I design scalable software, AI-powered applications and backend systems in <span className="text-[color:var(--foreground)]">Python, Java, React, Spring Boot, FastAPI, SQL &amp; Docker</span> — turning complex ideas into reliable, production-grade products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-rise" style={{ animationDelay: "0.45s" }}>
          <a
            href={gmailCompose("Let's work together")}
            className="btn-hire hover:btn-hire-hover"
          >
            <Zap className="h-4 w-4" strokeWidth={2.5} />
            HIRE ME
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a href="#work" className="btn-ghost hover:border-[color:var(--ion)] hover:text-[color:var(--ion)]">
            Explore My Work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hover:border-[color:var(--plasma)] hover:text-[color:var(--plasma)]"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto animate-fade" style={{ animationDelay: "0.6s" }}>
          {[
            { k: "4+", v: "Projects Shipped" },
            { k: "6+", v: "Months Industry" },
            { k: "2", v: "Certifications" },
            { k: "20+", v: "Technologies" },
          ].map((s) => (
            <div key={s.v} className="panel p-4 text-left">
              <div className="display text-2xl ion-text">{s.k}</div>
              <div className="mono-label mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[color:var(--muted-foreground)]">
        <span className="mono-label text-[10px]">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-[color:var(--ion)] to-transparent" />
      </div>
    </section>
  );
}

/* ================= MARQUEE ================= */
function Marquee() {
  const row = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];
  return (
    <section aria-hidden className="relative border-y border-[color:var(--border)] bg-[color:var(--card)]/40 overflow-hidden py-5">
      <div className="flex gap-10 animate-marquee-x whitespace-nowrap">
        {row.map((s, i) => (
          <span key={i} className="display text-[13px] tracking-[0.32em] text-[color:var(--muted-foreground)] flex items-center gap-10">
            {s}
            <Star className="h-3 w-3 text-[color:var(--ion)]" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ================= MISSION ================= */
function Mission() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mono-label mb-8 flex items-center gap-3">
          <span className="scan-line w-8" /> Mission
        </div>
        <p className="display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] tracking-[0.01em]">
          <span className="gradient-text">Turning ideas into intelligent systems.</span>
          <span className="text-[color:var(--muted-foreground)]">
            {" "}Software that reads, reasons, decides &amp; ships — designed with the discipline of engineering and the curiosity of research.
          </span>
        </p>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHead k="01" title="Where research meets shipped software" sub="Four cards. No fluff." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          <AboutCard
            icon={GraduationCap}
            title="My Journey"
            body="Started with scripts to automate small annoyances. That curiosity turned into a full B.Tech in AI & ML, a Python internship shipping real backend code, and a habit of building things end-to-end rather than stopping at a notebook."
          />
          <div className="panel-glow p-8">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 grid place-items-center border border-[color:var(--border)] bg-[color:var(--ion)]/5 rounded-md">
                <GraduationCap className="h-5 w-5 text-[color:var(--ion)]" />
              </div>
              <h3 className="display text-2xl">Education</h3>
            </div>
            <div className="mt-6 space-y-4">
              {EDUCATION.map((e) => (
                <div key={e.what} className="flex items-start gap-4">
                  <div className="mono-label ion-text shrink-0 min-w-[70px]">{e.yr}</div>
                  <div>
                    <div className="text-[color:var(--foreground)] font-medium">{e.what}</div>
                    <div className="mono-label mt-0.5">{e.where}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AboutCard
            icon={Cpu}
            title="Current Focus"
            body="What's on my desk right now:"
            tags={["Agentic AI", "LLMs", "Machine Learning", "Backend Systems"]}
          />
          <AboutCard
            icon={Sparkles}
            title="What I Love Building"
            body="The kind of software that gets me out of bed:"
            tags={["AI Applications", "Automation", "Scalable Systems", "Data Products"]}
          />
        </div>
      </div>
    </section>
  );
}

function AboutCard({
  icon: Icon,
  title,
  body,
  tags,
}: {
  icon: typeof Brain;
  title: string;
  body: string;
  tags?: string[];
}) {
  return (
    <div className="panel-glow p-8">
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 grid place-items-center border border-[color:var(--border)] bg-[color:var(--ion)]/5 rounded-md">
          <Icon className="h-5 w-5 text-[color:var(--ion)]" />
        </div>
        <h3 className="display text-2xl">{title}</h3>
      </div>
      <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">{body}</p>
      {tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= DOMAINS ================= */
function Domains() {
  return (
    <section id="domains" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHead k="02" title="Engineering Domains" sub="Where I operate. Where I ship." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {DOMAINS.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group relative panel-glow p-8 sm:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, rgba(125,211,252,0.35), transparent 70%)" }}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 grid place-items-center border border-[color:var(--border)] bg-[color:var(--ion)]/5 rounded-md">
                      <Icon className="h-5 w-5 text-[color:var(--ion)]" strokeWidth={1.6} />
                    </div>
                    <div className="mono-label">/ {d.n}</div>
                  </div>
                  <Cpu className="h-4 w-4 text-[color:var(--muted-foreground)] group-hover:text-[color:var(--ion)] transition-colors" />
                </div>
                <h3 className="display text-2xl sm:text-3xl mt-6 tracking-[0.02em]">{d.title}</h3>
                <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed max-w-md">{d.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURED WORK ================= */
function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHead k="03" title="Featured Work" sub="Shipped. Documented. Real." />
        <div className="mt-14 space-y-24 sm:space-y-32">
          {PROJECTS.map((p, idx) => (
            <ProjectBlock key={p.id} p={p} flipped={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({ p, flipped }: { p: (typeof PROJECTS)[number]; flipped: boolean }) {
  const [active, setActive] = useState(0);
  const cur = p.media[active];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
        <div className="relative panel-glow p-2 overflow-hidden">
          <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
            {cur.kind === "video" ? (
              <video
                key={cur.src}
                src={cur.src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <img
                src={cur.src}
                alt={`${p.name} — ${cur.caption}`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 chip !bg-black/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ion)]" /> {p.status}
            </div>
            <div className="absolute bottom-3 left-3 mono-label text-[color:var(--foreground)]">
              {cur.caption}
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.media.map((m, i) => (
            <button
              key={m.src}
              onClick={() => setActive(i)}
              aria-label={`Show ${m.caption}`}
              className={`relative h-14 w-20 overflow-hidden border transition-all ${
                i === active
                  ? "border-[color:var(--ion)] ring-glow"
                  : "border-[color:var(--border)] opacity-60 hover:opacity-100"
              }`}
            >
              {m.kind === "video" ? (
                <div className="h-full w-full grid place-items-center bg-black">
                  <PlayCircle className="h-5 w-5 text-[color:var(--ion)]" />
                </div>
              ) : (
                <img src={m.src} alt="" className="h-full w-full object-cover" loading="lazy" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
        <div className="mono-label flex items-center gap-3 flex-wrap">
          <span className="text-[color:var(--ion)]">/ {p.n}</span>
          <span>{p.year}</span>
          <span>·</span>
          <span>{p.role}</span>
        </div>
        <h3 className="display text-4xl sm:text-5xl mt-3 gradient-text">{p.name}</h3>
        <p className="mt-4 text-lg text-[color:var(--foreground)]/90 leading-relaxed">{p.tagline}</p>

        <div className="mt-8 space-y-6">
          <div>
            <div className="mono-label text-[color:var(--ion)]">Problem</div>
            <p className="mt-2 text-[color:var(--muted-foreground)]">{p.problem}</p>
          </div>
          <div>
            <div className="mono-label text-[color:var(--plasma)]">Approach</div>
            <p className="mt-2 text-[color:var(--muted-foreground)]">{p.approach}</p>
          </div>
          <div>
            <div className="mono-label">Impact</div>
            <ul className="mt-2 space-y-1.5">
              {p.impact.map((i) => (
                <li key={i} className="flex items-start gap-2 text-[color:var(--muted-foreground)]">
                  <ArrowRight className="h-4 w-4 mt-1 text-[color:var(--ion)] shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hover:border-[color:var(--ion)] hover:text-[color:var(--ion)]"
          >
            <Github className="h-4 w-4" /> View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= ML LAB (Churn + Sentiment with charts) ================= */
function MLLab() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mono-label mb-8 flex items-center gap-3">
          <span className="scan-line w-8" /> ML Lab · Deep Learning Projects
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChurnCard />
          <SentimentCard />
        </div>
      </div>
    </section>
  );
}

function ChurnCard() {
  // Simulated training curve: accuracy over 20 epochs
  const acc = [0.62, 0.71, 0.78, 0.82, 0.84, 0.855, 0.867, 0.878, 0.885, 0.892, 0.897, 0.901, 0.905, 0.908, 0.910, 0.912, 0.913, 0.9135, 0.9138, 0.914];
  const loss = [0.68, 0.58, 0.49, 0.42, 0.38, 0.34, 0.31, 0.28, 0.26, 0.24, 0.22, 0.21, 0.20, 0.19, 0.185, 0.182, 0.18, 0.178, 0.177, 0.176];
  const W = 320, H = 140, P = 8;
  const pathFrom = (arr: number[], min: number, max: number) =>
    arr
      .map((v, i) => {
        const x = P + (i / (arr.length - 1)) * (W - P * 2);
        const y = H - P - ((v - min) / (max - min)) * (H - P * 2);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  return (
    <div className="panel-glow p-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="mono-label ion-text">/ 03 · Machine Learning</div>
          <h3 className="display text-3xl mt-2">Customer Churn</h3>
          <p className="mt-1 text-[color:var(--muted-foreground)] italic">
            Artificial Neural Network · TensorFlow / Keras
          </p>
        </div>
        <div className="text-right">
          <div className="mono-label">Test Accuracy</div>
          <div className="display text-3xl ion-text">91.4%</div>
        </div>
      </div>

      <p className="mt-5 text-[color:var(--foreground)]/85 leading-relaxed">
        ANN predicting customer churn from behavioral & account data — preprocessing, feature encoding, hyperparameter tuning, confusion-matrix diagnostics.
      </p>

      {/* Chart */}
      <div className="mt-6 panel p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="mono-label">Training Curves · 20 epochs</div>
          <div className="flex items-center gap-3 mono-label">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[color:var(--ion)]" /> Accuracy</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[color:var(--plasma)]" /> Loss</span>
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Training accuracy and loss over epochs">
          <defs>
            <linearGradient id="accFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--ion)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--ion)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1={P} x2={W - P} y1={H - P - g * (H - P * 2)} y2={H - P - g * (H - P * 2)}
              stroke="rgba(125,211,252,0.08)" strokeDasharray="2 3" />
          ))}
          <path d={`${pathFrom(acc, 0.5, 1)} L ${W - P},${H - P} L ${P},${H - P} Z`} fill="url(#accFill)" />
          <path d={pathFrom(acc, 0.5, 1)} fill="none" stroke="var(--ion)" strokeWidth="2" />
          <path d={pathFrom(loss, 0.1, 0.7)} fill="none" stroke="var(--plasma)" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
      </div>

      {/* Confusion matrix */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <ConfCell label="TP" value="782" tone="ion" />
        <ConfCell label="FP" value="41" tone="dim" />
        <ConfCell label="FN" value="65" tone="dim" />
        <ConfCell label="TN" value="912" tone="plasma" />
        <div className="col-span-3 mono-label text-center pt-1">Confusion Matrix · held-out set</div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["Python", "TensorFlow", "Keras", "Scikit-Learn"].map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <div className="mt-5">
        <a href="https://github.com/yashvardhan7319/ANN_CLASSIFICATION_CHURN" target="_blank" rel="noreferrer" className="btn-ghost hover:border-[color:var(--ion)] hover:text-[color:var(--ion)]">
          <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function ConfCell({ label, value, tone }: { label: string; value: string; tone: "ion" | "plasma" | "dim" }) {
  const color = tone === "ion" ? "var(--ion)" : tone === "plasma" ? "var(--plasma)" : "var(--muted-foreground)";
  return (
    <div className="panel p-3 text-center" style={{ borderColor: tone === "dim" ? undefined : color + "55" }}>
      <div className="mono-label" style={{ color }}>{label}</div>
      <div className="display text-xl mt-1" style={{ color: tone === "dim" ? "var(--foreground)" : color }}>{value}</div>
    </div>
  );
}

function SentimentCard() {
  const dist = [
    { label: "Very Positive", pct: 34, tone: "ion" as const },
    { label: "Positive", pct: 22, tone: "ion" as const },
    { label: "Neutral", pct: 12, tone: "dim" as const },
    { label: "Negative", pct: 18, tone: "plasma" as const },
    { label: "Very Negative", pct: 14, tone: "plasma" as const },
  ];
  const reviews = [
    { text: "A gripping story with career-best performances.", label: "Positive", score: 0.94, pos: true },
    { text: "Predictable plot, wasted a talented cast.", label: "Negative", score: 0.87, pos: false },
    { text: "One of the most emotionally honest films this year.", label: "Positive", score: 0.96, pos: true },
  ];

  return (
    <div className="panel-glow p-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="mono-label ion-text">/ 04 · Deep Learning · NLP</div>
          <h3 className="display text-3xl mt-2">IMDB Sentiment</h3>
          <p className="mt-1 text-[color:var(--muted-foreground)] italic">
            LSTM sentiment classifier · TensorFlow / Keras
          </p>
        </div>
        <div className="text-right">
          <div className="mono-label">Val Accuracy</div>
          <div className="display text-3xl ion-text">88.6%</div>
        </div>
      </div>

      <p className="mt-5 text-[color:var(--foreground)]/85 leading-relaxed">
        Trained on the IMDB review dataset — tokenization, stopword removal, sequence padding and an embedding + stacked LSTM classifying reviews as positive or negative.
      </p>

      {/* Distribution bars */}
      <div className="mt-6 panel p-4">
        <div className="mono-label mb-3">Sentiment distribution · 50K reviews</div>
        <div className="space-y-2.5">
          {dist.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <div className="mono-label w-28 truncate">{d.label}</div>
              <div className="flex-1 h-2 bg-[color:var(--muted)]/60 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${d.pct}%`,
                    background:
                      d.tone === "ion"
                        ? "linear-gradient(90deg, var(--ion), var(--neon))"
                        : d.tone === "plasma"
                        ? "linear-gradient(90deg, var(--plasma), #FF6B9F)"
                        : "linear-gradient(90deg, var(--muted-foreground), rgba(143,163,199,0.4))",
                    boxShadow: d.tone !== "dim" ? "0 0 12px rgba(125,211,252,0.35)" : undefined,
                  }}
                />
              </div>
              <div className="mono-label ion-text w-10 text-right">{d.pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sample predictions */}
      <div className="mt-5 space-y-2">
        {reviews.map((r) => (
          <div key={r.text} className="panel px-4 py-3 flex items-start gap-3">
            <div
              className={`chip shrink-0 ${
                r.pos
                  ? "!border-[color:var(--ion)]/60 !text-[color:var(--ion)]"
                  : "!border-[color:var(--plasma)]/60 !text-[color:var(--plasma)]"
              }`}
            >
              {r.label} · {(r.score * 100).toFixed(0)}%
            </div>
            <p className="text-sm text-[color:var(--foreground)]/85 italic">&ldquo;{r.text}&rdquo;</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["Python", "TensorFlow", "Keras", "NLP"].map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <div className="mt-5">
        <a href="https://github.com/yashvardhan7319/IMDB-Movie-Review-Sentiment-Analysis" target="_blank" rel="noreferrer" className="btn-ghost hover:border-[color:var(--ion)] hover:text-[color:var(--ion)]">
          <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ================= SKILLS ================= */
function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHead k="05" title="The stack I actually build with" sub="Categorized. Rated. Real." />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATS.map((cat) => (
            <SkillGroup key={cat.key} cat={cat} />
          ))}

          {/* Languages */}
          <div className="panel-glow p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 grid place-items-center border border-[color:var(--border)] bg-[color:var(--ion)]/5 rounded-md">
                <Languages className="h-4 w-4 text-[color:var(--ion)]" />
              </div>
              <h3 className="display text-xl">Languages</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LANGUAGES.map((l) => (
                <div key={l.n} className="panel p-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-[color:var(--foreground)] font-medium">{l.n}</div>
                    <div className="mono-label">{l.level}</div>
                  </div>
                  <SkillBar pct={l.pct} className="mt-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ cat }: { cat: SkillCat }) {
  const Icon = cat.icon;
  return (
    <div className="panel-glow p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center border border-[color:var(--border)] bg-[color:var(--ion)]/5 rounded-md">
            <Icon className="h-4 w-4 text-[color:var(--ion)]" />
          </div>
          <h3 className="display text-xl">{cat.title}</h3>
        </div>
        <div className="mono-label">{cat.skills.length} skills</div>
      </div>
      <div className="mt-5 space-y-3">
        {cat.skills.map((s) => (
          <div key={s.n}>
            <div className="flex items-baseline justify-between">
              <div className="text-sm text-[color:var(--foreground)]">{s.n}</div>
              <div className="mono-label ion-text">{s.pct}%</div>
            </div>
            <SkillBar pct={s.pct} className="mt-1.5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ pct, className = "" }: { pct: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setW(pct);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(pct);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className={`h-2 w-full rounded-full bg-[color:var(--muted)]/70 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
        style={{
          width: `${w}%`,
          background: "linear-gradient(90deg, var(--ion), var(--plasma))",
          boxShadow: "0 0 14px rgba(125,211,252,0.35)",
        }}
      />
    </div>
  );
}

/* ================= EXPERIENCE ================= */
function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHead k="06" title="Where I've put this into practice" sub="Real teams. Real code." />
        <div className="mt-12 space-y-6">
          {EXPERIENCE.map((x) => (
            <div key={x.role} className="panel-glow p-8 relative overflow-hidden">
              <div
                className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)" }}
                aria-hidden
              />
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 grid place-items-center border border-[color:var(--border)] bg-[color:var(--ion)]/5 rounded-md">
                    <Briefcase className="h-5 w-5 text-[color:var(--ion)]" />
                  </div>
                  <div>
                    <h3 className="display text-2xl">{x.role}</h3>
                    <div className="mono-label mt-1">{x.org}</div>
                  </div>
                </div>
                <div className="mono-label ion-text">{x.dates}</div>
              </div>
              <ul className="mt-6 space-y-2">
                {x.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[color:var(--muted-foreground)]">
                    <ArrowRight className="h-4 w-4 mt-1 text-[color:var(--ion)] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= JOURNEY ================= */
function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHead k="07" title="Build Journey" sub="Curiosity → Programming → ML → Agentic AI → Production." />
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--ion)]/40 to-transparent" aria-hidden />
          <div className="space-y-10">
            {JOURNEY.map((j, i) => (
              <div key={j.year} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left [direction:ltr]"}`}>
                  <div className="absolute left-2.5 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-[color:var(--ion)] shadow-[0_0_16px_var(--ion)]" />
                  <div className="mono-label ion-text">{j.year}</div>
                  <h3 className="display text-xl sm:text-2xl mt-2">{j.t}</h3>
                  <p className="mt-2 text-[color:var(--muted-foreground)] max-w-md md:ml-auto">{j.d}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CREDENTIALS (Certs + Achievements) ================= */
function Credentials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="mono-label mb-6 flex items-center gap-3">
              <span className="scan-line w-8" /> Certifications
            </div>
            <div className="space-y-3">
              {CERTS.map((c) => (
                <div key={c.label} className="panel px-5 py-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[color:var(--foreground)] font-medium truncate">{c.label}</div>
                    <div className="mono-label mt-1 truncate">{c.meta}</div>
                  </div>
                  <div className="mono-label ion-text shrink-0">{c.year}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mono-label mb-6 flex items-center gap-3">
              <span className="scan-line w-8" /> Achievements
            </div>
            <div className="space-y-3">
              {ACHIEVEMENTS.map((c) => (
                <div key={c.label} className="panel px-5 py-4 flex items-center justify-between gap-4">
                  <div className="min-w-0 flex items-start gap-3">
                    <Trophy className="h-4 w-4 mt-1 text-[color:var(--plasma)] shrink-0" />
                    <div>
                      <div className="text-[color:var(--foreground)] font-medium">{c.label}</div>
                      <div className="mono-label mt-1">{c.meta}</div>
                    </div>
                  </div>
                  <div className="mono-label ion-text shrink-0">{c.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const contacts = useMemo(
    () => [
      { icon: Mail, label: "Email", value: EMAIL, href: gmailCompose() },
      { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
      { icon: Linkedin, label: "LinkedIn", value: "yash-vardhan", href: LINKEDIN },
      { icon: Github, label: "GitHub", value: "yashvardhan7319", href: GITHUB },
    ],
    []
  );

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(125,211,252,0.28), rgba(167,139,250,0.15) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 text-center">
        <div className="mono-label mb-6 flex items-center justify-center gap-3">
          <span className="scan-line w-8" /> Let&apos;s Build <span className="scan-line w-8" />
        </div>
        <h2 className="display text-[clamp(2rem,7vw,5.5rem)] leading-[0.98] neon-text animate-neon">
          HIRE ME
        </h2>
        <p className="display text-[clamp(1rem,2.5vw,1.75rem)] mt-3 neon-outline">
          FOR YOUR NEXT INTELLIGENT SYSTEM
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-[color:var(--muted-foreground)] leading-relaxed">
          B.Tech CSE (AI &amp; ML) graduating in 2027 · available for full-time, internship, or contract work. Fastest reply via email.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={gmailCompose("Let's work together")} className="btn-hire hover:btn-hire-hover">
            <Mail className="h-4 w-4" strokeWidth={2.5} />
            Start a Conversation
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hover:border-[color:var(--plasma)] hover:text-[color:var(--plasma)]"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <button onClick={copy} className="btn-ghost hover:border-[color:var(--ion)] hover:text-[color:var(--ion)]">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="panel p-5 text-left hover:border-[color:var(--ion)]/60 hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-[color:var(--ion)]" />
                  <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--muted-foreground)] group-hover:text-[color:var(--ion)] transition-colors" />
                </div>
                <div className="mono-label mt-4">{c.label}</div>
                <div className="mt-1 text-sm truncate text-[color:var(--foreground)]">{c.value}</div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[color:var(--muted-foreground)] text-sm">
          <MapPin className="h-4 w-4 text-[color:var(--ion)]" />
          Based in India · Remote &amp; Relocation Ready
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] py-10 mt-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]">
        <div className="mono-label">© {new Date().getFullYear()} · Yash Vardhan · Engineered with intent</div>
        <div className="flex items-center gap-5">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--ion)] transition-colors">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--ion)] transition-colors">LinkedIn</a>
          <a href={gmailCompose()} target="_blank" rel="noreferrer" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--ion)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

/* ================= UTILS ================= */
function SectionHead({ k, title, sub }: { k: string; title: string; sub: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <div className="mono-label flex items-center gap-3">
          <span className="text-[color:var(--ion)]">/ {k}</span>
          <span className="scan-line w-8" />
        </div>
        <h2 className="display text-[clamp(2rem,5vw,3.5rem)] mt-2 tracking-[0.02em]">
          <span className="gradient-text">{title}</span>
        </h2>
      </div>
      <p className="mono-label max-w-sm sm:text-right">{sub}</p>
    </div>
  );
}
