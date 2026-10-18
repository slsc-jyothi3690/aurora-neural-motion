import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, ArrowUp, Brain, ShieldCheck, Workflow, Code2, Mail, Phone, MapPin, Linkedin, Award, Languages, Menu, X, GraduationCap, FileText } from "lucide-react";
import { Background } from "@/components/portfolio/Background";
import { AICore } from "@/components/portfolio/AICore";
import { Reveal, spotlight, tilt, untilt } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sishtu Lalitha Sri Chandra Jyothi — GenAI Testing & QA Automation" },
      { name: "description", content: "IT Analyst at Cognizant specialising in Generative AI chatbot testing, LLM prompt validation, UI/API testing and Playwright automation." },
      { property: "og:title", content: "Sishtu Lalitha Sri Chandra Jyothi — AI Quality Engineer" },
      { property: "og:description", content: "GenAI chatbot testing, LLM validation, healthcare QA and Playwright automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** Set to a real file path (e.g. "/resume.pdf" in public/) once the resume is added. */
const RESUME_URL: string | null = null;
const LINKEDIN = "https://www.linkedin.com/in/sishtu-lalitha-sri-chandra-jyothi";

const nav = ["Home", "About", "Experience", "Skills", "Projects", "Certifications", "Contact"];

const experience = [
  {
    role: "Analyst", company: "Cognizant", place: "Hyderabad", dates: "11 June 2026 – Present", current: true,
    points: [
      "Test spending-account and Identity and Access Management (IAM) workflows through UI and API testing.",
      "Perform account and IAM regression testing across web and mobile environments using BrowserStack.",
      "Validate user stories against acceptance criteria and document test evidence.",
      "Use Cursor with a GitHub repository to run Playwright specification files and datasets for failure analysis.",
      "Investigate automation script issues, make necessary code changes, and push updates to the relevant branch.",
      "Use the CSA tool to retrieve user details and perform IAM account actions, including user unregistering and MFA-related troubleshooting when authorized.",
    ],
    tools: ["Playwright", "Cursor", "GitHub", "BrowserStack", "CSA tool", "API Testing"],
  },
  {
    role: "Analyst Trainee", company: "Cognizant", place: "Coimbatore", dates: "10 June 2025 – 10 June 2026", current: false,
    points: [
      "Validated customer data in Aetna/CVS and Meritain healthcare workflows.",
      "Identified data discrepancies, raised defects, and closed cases when the data was correct.",
      "Performed manual testing and supported selected tool-based automation scenarios.",
      "Tested a Cigna healthcare claims chatbot by validating prompts and responses against expected outcomes.",
      "Covered positive and negative scenarios and functional and non-functional chatbot behavior.",
      "Created test scenarios from user stories, logged defects in Jira, retested fixes, and performed regression testing.",
      "Used LangSmith for exposure to chatbot-response failure analysis and Microsoft Copilot to assist with test scenarios and defect documentation.",
    ],
    tools: ["Jira", "LangSmith", "Microsoft Copilot", "Manual Testing", "Regression"],
  },
];

const skills = [
  { title: "AI & LLM Testing", icon: Brain, items: ["Generative AI chatbot testing", "LLM prompt testing", "Expected-response validation", "Positive and negative scenarios", "Functional and non-functional testing", "LangSmith exposure"] },
  { title: "Quality Assurance", icon: ShieldCheck, items: ["UI testing", "API testing", "Web and mobile testing", "Regression testing", "Defect reporting and retesting", "Test scenario design", "Test evidence documentation"] },
  { title: "Automation & Tools", icon: Workflow, items: ["Playwright", "Cursor AI", "GitHub", "Jira", "BrowserStack", "Microsoft Copilot", "CSA tool"] },
  { title: "Programming", icon: Code2, items: ["Python — Intermediate", "R Programming — Intermediate", "C — Basic", "HTML/CSS — Basic"] },
];

const projects = [
  { n: "01", title: "Data Analysis Using R", desc: "Applied statistical methods using R for academic data analysis and prepared reports and visual presentations.", tags: ["R Programming", "Statistical Analysis", "Data Visualization"], outcome: "Reported project outcome: 20% improvement in data insights", motif: "data" },
  { n: "02", title: "Bluetooth-Controlled Car Using Arduino", desc: "Developed a team mini-project involving Bluetooth-based car control, programming movement and control functionality using C and Arduino IDE.", tags: ["Arduino", "C", "Bluetooth", "Arduino IDE"], outcome: "Reported project outcome: 10% reduction in response time", motif: "circuit" },
  { n: "03", title: "Vision Assist Lens", desc: "Prepared a presentation covering the prototype design methodology, functionality, and specifications.", tags: ["Prototype Concept", "Presentation", "Assistive Technology"], outcome: null, motif: "lens" },
] as const;

const certs = [
  ["TCS iON Career Edge — Young Professional", "TCS iON"],
  ["Pearson MePro English", "Pearson"],
  ["Generative AI", "LinkedIn Learning · Google Cloud"],
  ["AI and Machine Learning Fundamentals", "Infosys Springboard"],
  ["Programming Essentials in C", "Cisco Networking Academy / LearnTube by Career Ninja"],
  ["Python and AI Bootcamp", "Microsoft Learn Student Ambassador Program"],
];

const education = [
  ["Artificial Intelligence and Robotics (McsAIR)", "Aditya Degree College for Women, Rajahmundry", "2022–2025 · 9 CGPA"],
  ["Intermediate — MPC", "Sri Chaitanya Junior College, Rajahmundry", "2020–2022 · 89%"],
  ["SSC", "The Bodhi School, Rajahmundry", "2019–2020 · 98%"],
];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 shadow-[var(--glow-violet)]" aria-label="Main">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-violet/50 font-display text-sm font-bold text-gradient">SLJ</span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:block">AI QUALITY ENGINEER</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="nav-link" data-active={active === n.toLowerCase()}>{n}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={RESUME_URL ?? "#contact"} {...(RESUME_URL ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="btn-ghost !px-4 !py-2 text-sm">Resume <ArrowUpRight className="h-4 w-4" /></a>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="glass mx-auto mt-3 max-w-6xl space-y-1 p-4 lg:hidden animate-in fade-in slide-in-from-top-2">
          {nav.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground">{n}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal><p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 px-3 py-1 font-mono text-xs tracking-[0.2em] text-cyan"><span className="status-dot h-2 w-2 rounded-full bg-cyan" /> IT ANALYST @ COGNIZANT</p></Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Testing <span className="text-gradient">Intelligence.</span><br />Building <span className="text-gradient">Trust.</span><br />Exploring AI.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-display text-xl font-medium">Sishtu Lalitha Sri Chandra Jyothi</p>
            <p className="mt-1 font-mono text-sm text-cyan">IT Analyst · GenAI Testing · QA Automation</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">I explore the intersection of software quality and artificial intelligence — validating AI-generated responses, investigating failures, and helping build more reliable digital experiences.</p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore My Work <ArrowDown className="h-4 w-4" /></a>
            <a href="#contact" className="btn-ghost">Let's Connect <ArrowUpRight className="h-4 w-4" /></a>
          </Reveal>
          <Reveal delay={400} className="mt-8 flex flex-wrap gap-2">
            {["LLM & Chatbot Testing", "UI / API Quality Assurance", "Playwright Automation"].map((s) => <span key={s} className="tag">{s}</span>)}
          </Reveal>
        </div>
        <Reveal delay={250}><AICore /></Reveal>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground sm:flex" aria-label="Scroll to About">
        SCROLL
        <span className="flex h-9 w-5 justify-center rounded-full border border-muted-foreground/40 pt-1.5"><span className="scroll-cue h-1.5 w-1 rounded-full bg-cyan" /></span>
      </a>
    </section>
  );
}

function About() {
  const steps = ["Prompt", "Model Response", "Validation", "Defect Analysis", "Retest"];
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="01 / About" title="Curious by nature. Precise by practice." />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5 leading-relaxed text-muted-foreground">
            <p>I am an IT Analyst at Cognizant with experience across healthcare-domain quality assurance, customer-data validation, and Generative AI chatbot testing. My work includes validating prompts and LLM responses, preparing positive and negative scenarios, testing UI and APIs, conducting regression testing, and investigating automation failures.</p>
            <p>I have also worked with Cursor and GitHub to run Playwright specification files and datasets, analyze failures, update scripts when needed, and push changes to the relevant branch.</p>
            <p>I am interested in growing further into Generative AI quality assurance and AI-assisted test automation.</p>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={120}>
              <div className="glass hover-card p-6" onPointerMove={spotlight}>
                <p className="eyebrow mb-5 !text-muted-foreground">Validation workflow</p>
                <ol className="relative space-y-3">
                  <span aria-hidden className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet via-sky to-cyan" />
                  {steps.map((s, i) => (
                    <li key={s} className="relative flex items-center gap-4">
                      <span className="z-10 grid h-6 w-6 place-items-center rounded-full border border-cyan/50 bg-background font-mono text-[10px] text-cyan">{i + 1}</span>
                      <span className="text-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <dl className="glass grid grid-cols-2 gap-5 p-6 text-sm">
                {[["Current company", "Cognizant"], ["Current role", "Analyst"], ["Education", "Artificial Intelligence and Robotics (McsAIR)"], ["Graduation year", "2025"]].map(([k, v]) => (
                  <div key={k}><dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="02 / Experience" title="Where quality meets real-world systems." />
        <div className="relative space-y-10 pl-8 sm:pl-12">
          <span aria-hidden className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-violet via-sky to-transparent sm:left-4" />
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 120} className="relative">
              <span aria-hidden className={`absolute -left-[30px] top-7 h-3 w-3 rounded-full sm:-left-[38px] ${e.current ? "bg-violet shadow-[var(--glow-violet)]" : "bg-muted-foreground"}`} />
              <article className={`glass hover-card p-6 sm:p-8 ${e.current ? "border-violet/40 shadow-[var(--glow-violet)]" : ""}`} onPointerMove={spotlight}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{e.role} <span className="text-muted-foreground">— {e.company}</span></h3>
                  {e.current && <span className="rounded-full bg-violet/15 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-violet">CURRENT</span>}
                </div>
                <p className="mt-1 font-mono text-xs text-cyan">{e.place} | {e.dates}</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />{p}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">{e.tools.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="03 / Capabilities" title="Tools I work with. Problems I investigate." />
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="glass hover-card h-full p-7" onPointerMove={spotlight}>
                <s.icon className="h-7 w-7 text-cyan" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{s.items.map((it) => <li key={it} className="tag">{it}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Motif({ kind }: { kind: "data" | "circuit" | "lens" }) {
  if (kind === "data")
    return (
      <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={10 + i * 21} y={90 - (20 + ((i * 37) % 60))} width="12" height={20 + ((i * 37) % 60)} rx="2" fill="var(--violet)" opacity={0.25 + (i % 3) * 0.2} />)}
        <polyline points="16,70 37,50 58,60 79,30 100,42 121,22 142,35 163,18 184,28" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
      </svg>
    );
  if (kind === "circuit")
    return (
      <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden fill="none" stroke="var(--cyan)" strokeWidth="1" opacity=".8">
        <path d="M10 50 H60 V20 H110 V50 H190" /><path d="M30 80 H90 V60 H150 V85" stroke="var(--violet)" />
        <rect x="80" y="35" width="40" height="30" rx="3" stroke="var(--sky)" />
        {[[60, 20], [110, 50], [90, 60], [150, 85], [190, 50]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" fill="var(--cyan)" />)}
      </svg>
    );
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden fill="none">
      {[45, 34, 24, 14].map((r, i) => <circle key={r} cx="100" cy="50" r={r} stroke={i % 2 ? "var(--cyan)" : "var(--violet)"} opacity={0.3 + i * 0.18} />)}
      <circle cx="100" cy="50" r="6" fill="var(--cyan)" />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="04 / Selected Work" title="Ideas turned into experiments." />
        <div className="grid gap-6 lg:grid-cols-6">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 110} className={i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : "lg:col-span-6"}>
              <article tabIndex={0} className="glass hover-card group flex h-full flex-col overflow-hidden" onPointerMove={tilt} onPointerLeave={untilt}>
                <div className="relative h-36 border-b border-border bg-gradient-to-br from-violet/10 via-transparent to-cyan/10 p-4 transition-opacity duration-500 group-hover:opacity-100 sm:h-44">
                  <Motif kind={p.motif} />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="font-mono text-xs text-cyan">PROJECT {p.n}</span>
                  <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  {p.outcome && <p className="mt-3 font-mono text-[11px] text-muted-foreground/80">{p.outcome}</p>}
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="05 / Learning" title="Always learning. Always evolving." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map(([name, issuer], i) => (
            <Reveal key={name} delay={i * 70}>
              <div className="glass hover-card flex h-full gap-4 p-5" onPointerMove={spotlight}>
                <Award className="h-6 w-6 shrink-0 text-violet" />
                <div><h3 className="font-semibold leading-snug">{name}</h3><p className="mt-1 font-mono text-[11px] text-muted-foreground">{issuer}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead eyebrow="06 / Education" title="The foundation behind the curiosity." />
        <div className="grid gap-5 md:grid-cols-3">
          {education.map(([d, s, m], i) => (
            <Reveal key={d} delay={i * 100}>
              <div className="glass hover-card h-full p-6" onPointerMove={spotlight}>
                <GraduationCap className="h-6 w-6 text-cyan" />
                <h3 className="mt-4 text-lg font-semibold">{d}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s}</p>
                <p className="mt-3 font-mono text-xs text-cyan">{m}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal><div className="glass hover-card h-full p-6" onPointerMove={spotlight}><p className="eyebrow mb-3 flex items-center gap-2"><Award className="h-4 w-4" />Achievement</p><p>Participated in Cognizant's vibe-coding event.</p></div></Reveal>
          <Reveal delay={100}><div className="glass hover-card h-full p-6" onPointerMove={spotlight}><p className="eyebrow mb-3 flex items-center gap-2"><Languages className="h-4 w-4" />Languages</p><ul className="flex flex-wrap gap-2">{["English", "Telugu", "Hindi — basic conversational"].map((l) => <li key={l} className="tag">{l}</li>)}</ul></div></Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "lscjyothisishtu@gmail.com", href: "mailto:lscjyothisishtu@gmail.com" },
    { icon: Phone, label: "8919566148", href: "tel:+918919566148" },
    { icon: Linkedin, label: "LinkedIn", href: LINKEDIN, ext: true },
    { icon: MapPin, label: "Rajahmundry, Andhra Pradesh" },
  ];
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="glass relative overflow-hidden p-8 text-center sm:p-14">
            <div aria-hidden className="aurora-blob aurora-1 !h-80 !w-80 !opacity-25" />
            <p className="eyebrow mb-5">07 / Contact</p>
            <h2 className="text-4xl font-bold sm:text-6xl">Have an <span className="text-gradient">interesting</span> challenge?</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">I'm interested in opportunities involving Generative AI testing, software quality assurance, and QA automation. Let's connect.</p>
            <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {items.map((it) => {
                const inner = <><it.icon className="h-5 w-5 shrink-0 text-cyan" /><span className="truncate">{it.label}</span></>;
                return it.href ? (
                  <a key={it.label} href={it.href} {...(it.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="glass hover-card flex items-center gap-3 !rounded-xl px-5 py-4 text-sm" onPointerMove={spotlight}>{inner}</a>
                ) : <div key={it.label} className="glass flex items-center gap-3 !rounded-xl px-5 py-4 text-sm">{inner}</div>;
              })}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:lscjyothisishtu@gmail.com" className="btn-primary">Send an Email <ArrowUpRight className="h-4 w-4" /></a>
              {RESUME_URL ? (
                <a href={RESUME_URL} download className="btn-ghost"><FileText className="h-4 w-4" /> Download Resume</a>
              ) : (
                <span className="btn-ghost cursor-not-allowed opacity-60" aria-disabled="true"><FileText className="h-4 w-4" /> Resume available on request</span>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-gradient">SLJ</span>
          <div><p className="text-foreground">Sishtu Lalitha Sri Chandra Jyothi</p><p className="font-mono text-[11px]">IT Analyst · GenAI Testing · QA Automation</p></div>
        </div>
        <div className="flex items-center gap-6">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
          <span>© {new Date().getFullYear()}</span>
          <a href="#home" className="nav-link inline-flex items-center gap-1">Back to top <ArrowUp className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <Hero /><About /><Experience /><Skills /><Projects /><Certifications /><Education /><Contact />
      </main>
      <Footer />
    </>
  );
}
