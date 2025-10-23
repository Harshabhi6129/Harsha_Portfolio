'use client';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileText, Rocket, Cpu, Sparkles, ArrowRightCircle, GraduationCap, BookOpen, PenTool, Server, Brain, Award, Code2, Database, Cloud, Wrench } from "lucide-react";

// ---------- DATA ----------
const DATA = {
  name: "Harsha K",
  motto: "Design • Build • Solve • Repeat",
  email: "harshabku.work@gmail.com",
  phone: "(916) 545-5339",
  location: "USA",
  links: {
    github: "https://github.com/Harshabhi6129/",
    linkedin: "https://www.linkedin.com/in/harsha-abhinav/",
    resume: "https://drive.google.com/file/d/14GU4ES4sRr4HspjUHnl2xBfZGtXolcAS/view",
    medium: "https://medium.com/@harsha6129abhi",
    research: "https://link.springer.com/chapter/10.1007/978-981-97-6318-4_28",
  },
  skills: [
    "Java", "Spring Boot", "React.js", "Node.js", "Python", "FastAPI", "Kafka", "Redis", "PostgreSQL", "MongoDB",
    "Docker", "Kubernetes", "AWS", "CI/CD", "gRPC", "OAuth2", "RBAC", "Microservices", "LLM Apps", "HuggingFace",
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "C#", "Python", "Java", "R", "Rust", "JavaScript", "Go", "PHP", "Shell Scripting"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "TypeScript", "jQuery", "Bootstrap", "React", "Node.js", "Leptos", "Django", "Flask", "WebSockets"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Cassandra", "Redis", "DynamoDB", "Neo4j"],
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS (Aurora, Redshift, EC2, S3, SQS, CloudWatch, Lambda)", "Azure (SQL DB, Data Factory, Blob Storage)"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Apache Kafka", "RabbitMQ", "Linux", "Git", "Jenkins", "Docker", "Kubernetes", "Terraform", "Postman", "Jest", "Chai", "Mocha", "Prometheus", "Grafana", "WebRTC", "Maven", "Gradle", "SonarQube", "Kibana", "OpenTelemetry"],
    },
    {
      category: "Core Competencies",
      skills: ["System Design", "Microservices", "CI/CD", "Distributed Systems", "Cloud Storage", "Unit Testing", "Debugging"],
    },
  ],
  projects: [
    {
      title: "No-Code NLP Model Training Platform",
      blurb: "Built a no-code ML/NLP trainer enabling dataset upload, task setup, guided model selection, dynamic hyperparameters, live metrics dashboards, and exportable artifacts—reducing setup time from hours to minutes.",
      tools: ["FastAPI", "PyTorch", "HuggingFace", "React", "WebSockets"],
    },
    {
      title: "Prompt Refinement & AI Chat Application",
      blurb: "Full-stack prompt designer that converts naive input into structured prompts via option-driven forms (length, format, theme, document parsing) with MongoDB storage and real-time chat interface.",
      tools: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    },
    {
      title: "PINTOS Operating System Development",
      blurb: "Enhanced Pintos (C, x86) with priority donation, MLFQ, and sync primitives; refactored 5K+ LOC, raised test coverage above 90%, and improved multithreaded throughput by 30%.",
      tools: ["C", "x86 Assembly", "Operating Systems"],
    },
    {
      title: "AI Prompt Refinement App",
      blurb: "Cost-efficient LLM pipeline that turns messy requests into optimized prompts; cuts tokens ~30% while improving relevance.",
      tools: ["Python", "Streamlit", "OpenAI API"],
      code: "https://github.com/Harshabhi6129/Optimized-prompt-generator",
      demo: "https://optimized-prompt-generator-db2srwwomp3ogctwqcondz.streamlit.app/",
    },
    {
      title: "Real-Time AI Virtual Mouse",
      blurb: "Hands-free cursor control with CV + DL; precise gesture recognition and virtual keyboard for accessibility.",
      tools: ["Python", "OpenCV", "Deep Learning"],
      code: "https://github.com/Harshabhi6129/Real-Time-AI-Virtual-Mouse-System-Using-Deep-Learning",
    },
    {
      title: "Persona AI",
      blurb: "Conversational agent with memory + context retrieval (ChromaDB) and adaptive tone. Streamlit-based UI.",
      tools: ["OpenAI", "ChromaDB", "Python", "Streamlit"],
      code: "https://github.com/Harshabhi6129/Persona_AI",
      demo: "https://personaai-eypmjae...streamlit.app/",
    },
    {
      title: "Next-Word Prediction (LSTM-GRU)",
      blurb: "Sequence model for next-word prediction with Streamlit demo.",
      tools: ["Python", "LSTM", "GRU", "Streamlit"],
      code: "https://github.com/Harshabhi6129/Next-Word-Prediction-using-LSTM-GRU",
      demo: "https://next-word-prediction-using-lstm-gru-bsm7yqdjbzsbc4hz4mezz t.streamlit.app/",
    },
    {
      title: "Time-Series Forecasting (RNN/LSTM)",
      blurb: "PyTorch notebook demonstrating robust forecasting with industry-standard metrics.",
      tools: ["PyTorch", "Pandas", "TensorBoard"],
      code: "https://github.com/Harshabhi6129/Time-Series-Forecasting-with-RNN-LSTM-using-PyTorch",
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      org: "JPMorgan Chase",
      time: "May 2025 – Sep 2025",
      points: [
        "Implemented idempotency keys and transactional publish/consume in posting path; brought error rate under 0.1% with improved p95 stability.",
        "Tuned Kafka consumer batching and backpressure after profiling, reducing p95 latency by ~18% during peak settlement windows.",
        "Expanded structured logs and refined alert thresholds, improving incident detection and handoff times by ~25%.",
        "Co-authored safer configuration templates and CI/CD guards, cutting release rollbacks by ~30%.",
      ],
    },
    {
      role: "Software Developer",
      org: "Bajaj FinServ",
      time: "Aug 2022 – Jul 2024",
      points: [
        "Built Spring Boot decision service with Redis caching and parallel partner reads, improving median credit decision times by ~35%.",
        "Designed anomaly views and event-driven webhook routing, reducing manual reviews by ~22%.",
        "Integrated Aadhaar eKYC and PAN verification with retry logic, cutting resubmissions by ~28%.",
        "Partnered with DBA and SRE to tune queries and add indexes, reducing database hotspot incidents from 7 to 2 per quarter.",
      ],
    },
    {
      role: "Software Developer Intern",
      org: "Wells Fargo",
      time: "Apr 2021 – Sep 2021",
      points: [
        "Built alert-preferences API with validation and PII masking, cutting median update time under 2 seconds.",
        "Implemented scheduled recovery job for dead-letter Kafka events, improving reprocessing by 25% in staging.",
        "Added JUnit and Testcontainers coverage with Jenkins smoke tests to improve feedback loops.",
      ],
    },
  ],
  education: {
    school: "University at Buffalo",
    program: "MS in Computer Science",
    time: "Aug 2024 – Dec 2025",
    focus: ["Distributed Systems", "Operating Systems", "AI/ML", "Software Engineering"],
  },
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      icon: "award",
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      icon: "award",
    },
  ],
};

// ---------- HELPERS ----------
const Section: React.FC<{ id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }>= ({ id, title, icon, children }) => (
  <section id={id} className="relative scroll-mt-24 py-20">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex items-center gap-3 text-3xl font-bold tracking-tight text-white/90"
      >
        <span className="inline-grid place-items-center rounded-xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
          {icon}
        </span>
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }>= ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-[conic-gradient(at_10%_10%,#22d3ee33,transparent_30%,#a78bfa33_60%,transparent_90%)] blur-xl" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const Badge: React.FC<{ children: React.ReactNode }>= ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20">
    {children}
  </span>
);

// ---------- MAIN COMPONENT ----------
export default function Portfolio() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0b0d17] text-white">
      {/* Global FX */}
      <BackgroundFX />

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 mx-auto w-full backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#home" className="group flex items-center gap-3">
            <span className="inline-grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/40 to-fuchsia-400/40 ring-1 ring-white/20">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold tracking-wider text-white/80 group-hover:text-white">
              {DATA.name}
            </span>
          </a>
          <div className="hidden items-center gap-4 md:flex">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Certifications", "certifications"],
              ["Research", "research"],
              ["Blog", "blog"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              
                key={id}
                href={`#${id}`}
                className="rounded-full px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href={DATA.links.github} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href={DATA.links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={`mailto:${DATA.email}`} className="rounded-full p-2 hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
      {/* HERO */}
      <header id="home" className="relative flex min-h-screen items-center">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-28 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20">
              <Rocket className="h-4 w-4" />
              Building delightful, high‑impact software
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {DATA.name}
            </h1>
            <p className="mt-3 text-lg text-white/70">{DATA.motto}</p>
            <p className="mt-4 max-w-xl text-white/70">
              I design robust backends, craft intuitive interfaces, and wire AI into real products. Good software should feel like
              magic — fast, reliable, and a little bit bold.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={DATA.links.resume} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white">
                <FileText className="h-4 w-4" /> View Resume
              </a>
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">
                <ArrowRightCircle className="h-4 w-4" /> Explore Projects
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {DATA.skills.slice(0, 10).map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
              {DATA.skills.length > 10 && <Badge>+ more</Badge>}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Hero Visual */}
            <div className="relative aspect-square w-full max-w-[520px] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 p-1 shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)]">
              <div className="relative h-full w-full rounded-[2rem] bg-black/40 p-6 ring-1 ring-white/10 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(120px_80px_at_20%_10%,#22d3ee22,transparent),radial-gradient(160px_120px_at_80%_80%,#a78bfa22,transparent)]" />
                <div className="relative z-10 grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto mb-4 w-16 rounded-2xl bg-white/10 p-3 ring-1 ring-white/20">
                      <Cpu className="mx-auto h-10 w-10" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Engineer • Builder • Explorer</p>
                    <p className="mt-2 text-white/70">Java • Spring • React • FastAPI • AWS • K8s</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="About" icon={<PenTool className="h-5 w-5" />}> 
        <GlassCard>
          <p className="text-white/80">
            I'm a software engineer who loves turning ideas into shippable, reliable systems. From backend services and event‑driven
            architectures to AI‑powered apps, I obsess over performance, clarity, and developer experience. When tools don't exist,
            I build them. When constraints appear, I design around them. And when the release hits prod, it should just feel right.
          </p>
        </GlassCard>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Technical Skills" icon={<Code2 className="h-5 w-5" />}> 
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DATA.skillCategories.map((cat) => (
            <GlassCard key={cat.category}>
              <div className="mb-4 flex items-center gap-2">
                {cat.category.includes("Programming") && <Code2 className="h-5 w-5 text-cyan-400" />}
                {cat.category.includes("Web") && <Cpu className="h-5 w-5 text-fuchsia-400" />}
                {cat.category.includes("Database") && <Database className="h-5 w-5 text-emerald-400" />}
                {cat.category.includes("Cloud") && <Cloud className="h-5 w-5 text-blue-400" />}
                {cat.category.includes("Tools") && <Wrench className="h-5 w-5 text-amber-400" />}
                {cat.category.includes("Competencies") && <Brain className="h-5 w-5 text-violet-400" />}
                <h3 className="font-semibold text-white/90">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" icon={<Server className="h-5 w-5" />}> 
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.experience.map((job) => (
            <GlassCard key={job.org}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-white/70">{job.org}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/20">{job.time}</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-400/70 shadow-[0_0_10px_2px_#22d3ee99]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="mt-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5" />
            <div>
              <p className="font-semibold">{DATA.education.program}</p>
              <p className="text-white/70">{DATA.education.school} • {DATA.education.time}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {DATA.education.focus.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" icon={<Brain className="h-5 w-5" />}> 
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.projects.map((pr) => (
            <GlassCard key={pr.title}>
              <h3 className="text-xl font-semibold">{pr.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {pr.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
              <p className="mt-3 text-white/80">{pr.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {pr.code && (
                  <a href={pr.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-black hover:bg-white">
                    <Github className="h-4 w-4" /> Code <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {pr.demo && (
                  <a href={pr.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/90 hover:bg-white/10">
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" title="Certifications" icon={<Award className="h-5 w-5" />}> 
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.certifications.map((cert) => (
            <GlassCard key={cert.title}>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-400/20 p-3 ring-1 ring-amber-400/30">
                  <Award className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-white/70">{cert.issuer}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research" title="Research & Publication" icon={<BookOpen className="h-5 w-5" />}> 
        <GlassCard>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">IoT‑Based Estimation of Daily Evapotranspiration</h3>
              <p className="text-white/70">Performance Evaluation & Optimization for Sustainable Crop Water Management • DoSCI‑2024</p>
            </div>
            <a href={DATA.links.research} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white">
              Read Publication <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-white/80">
            Presented at an international symposium, this work evaluates methods for accurate daily ET prediction to optimize irrigation
            strategies — blending domain models with practical IoT workflows.
          </p>
        </GlassCard>
      </Section>

      {/* BLOG */}
      <Section id="blog" title="Writing" icon={<PenTool className="h-5 w-5" />}> 
        <GlassCard>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Occasional notes on engineering, AI, and shipping well‑crafted software</h3>
              <p className="text-white/70">Posts are hosted on Medium.</p>
            </div>
            <a href={DATA.links.medium} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
              Visit Medium <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </GlassCard>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" icon={<Mail className="h-5 w-5" />}> 
        <GlassCard>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Let's build something people love</h3>
              <p className="mt-2 text-white/80">
                Open to software engineering roles, research collaborations, and tinkering on ambitious ideas. Drop a note — I reply.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white">
                  <Mail className="h-4 w-4" /> {DATA.email}
                </a>
                <a href={DATA.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={DATA.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(120px_80px_at_20%_10%,#22d3ee22,transparent),radial-gradient(160px_120px_at_80%_80%,#a78bfa22,transparent)]" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
                <p className="text-sm text-white/70">Quick intro</p>
                <p className="mt-2 text-white/80">
                  I care about code quality, meaningful abstractions, and shipping. My favorite pull requests are the ones that remove
                  more code than they add.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Design with intent</Badge>
                  <Badge>Ship with confidence</Badge>
                  <Badge>Measure & iterate</Badge>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-10 text-center text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm">© {new Date().getFullYear()} {DATA.name}. Built with React, Tailwind & Framer Motion.</p>
        </div>
      </footer>

      {/* EXTRA STYLES */}
      <style>{`
        .noise {background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.04"/></svg>');}
        .shine {background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);}
        @keyframes floaty {0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)}}
        .floaty {animation: floaty 6s ease-in-out infinite;}
      `}</style>
    </div>
  );
}

// ---------- BACKGROUND FX ----------
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* gradient glow blobs */}
      <div className="absolute -left-24 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-[-10%] h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/20 blur-[120px]" />
      {/* angled grid */}
      <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute -left-40 -top-40 h-[200%] w-[200%] rotate-[18deg] bg-[linear-gradient(to_right,transparent_49%,rgba(255,255,255,0.35)_50%,transparent_51%)] bg-[length:24px_24px]" />
      </div>
      {/* stars */}
      <div className="noise absolute inset-0" />
      {/* soft spotlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.2),transparent)]" />
    </div>
  );
}
