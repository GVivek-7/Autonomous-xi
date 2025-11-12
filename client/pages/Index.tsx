import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PlusButton from "@/components/PlusButton";

function CountUp({
  target,
  className,
  duration = 1200,
}: {
  target: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>("0");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const match = target.match(/^-?\d+(?:\.\d+)?/);
    const numPart = match ? match[0] : "0";
    const suffix = target.slice(numPart.length);
    const to = parseFloat(numPart);
    const decimals = (numPart.split(".")[1] || "").length;

    let raf: number;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      const val = (to * eased).toFixed(decimals);
      setDisplay(`${val}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function Stat({
  value,
  heading,
  desc,
}: {
  value: string;
  heading: string;
  desc: string;
}) {
  return (
    <div className="px-4 md:px-6 text-center md:text-left flex-1">
      <div className="mb-4">
        <CountUp
          target={value}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-primary"
        />
      </div>
      <h4 className="text-xs tracking-[0.15em] uppercase text-white font-medium mb-3">
        {heading}
      </h4>
      <p className="text-xs leading-relaxed text-white/60 max-w-xs mx-auto md:mx-0">
        {desc}
      </p>
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
  variant = "dark",
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <div className="group perspective-1000 min-h-[320px]">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Front of card - Icon and Title */}
        <div
          className={`absolute inset-0 rounded-xl p-8 backface-hidden flex flex-col ${
            variant === "light"
              ? "bg-[#E8E4DC] text-black"
              : "bg-[#1A1A1A]"
          }`}
        >
          <h3 className={`text-sm font-medium tracking-[0.15em] uppercase mb-auto ${
            variant === "light" ? "text-black" : "text-white"
          }`}>
            {title}
          </h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-primary">{icon}</div>
          </div>
        </div>

        {/* Back of card - Content */}
        <div className={`absolute inset-0 rounded-xl p-8 backface-hidden rotate-y-180 flex flex-col ${
          variant === "light"
            ? "bg-[#E8E4DC] text-black"
            : "bg-[#E8E4DC] text-black"
        }`}>
          <h3 className="text-sm font-medium tracking-[0.15em] uppercase mb-4">
            {title}
          </h3>
          <p className="text-[11px] leading-relaxed text-black/80 flex-1">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section pt-14 md:pt-24 pb-16 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            className="absolute -top-24 right-0 h-[320px] w-[720px] blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--primary)/0.55), transparent)",
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
          <div className="max-w-4xl">
            <h1 className="mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight uppercase">
              <span className="block">INTELLIGENCE</span>
              <span className="block">
                THAT MOVES THE <span className="text-primary">FUTURE</span>
              </span>
            </h1>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <PlusButton to="/contact" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section py-16 md:py-20">
        <div className="relative bg-black border border-white/10 rounded-2xl p-12 md:p-16 lg:p-20">
          {/* Top-left corner accent */}
          <div className="absolute top-6 left-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-primary"
            >
              <path
                d="M 0 20 L 0 0 L 20 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Top-left glow */}
          <div
            className="absolute -top-8 -left-8 w-24 h-24 rounded-full blur-2xl opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
            }}
          />

          {/* Center radial glow behind text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)",
            }}
          />

          {/* Content */}
          <p className="text-base md:text-lg text-center text-white/80 relative z-10 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-primary font-semibold">Autonomous AI</span>, we build systems that think, learn, and evolve. From predictive
            analytics to generative intelligence, we empower <span className="text-primary font-semibold">UAE businesses</span> to automate,
            innovate, and scale with precision.
          </p>

          {/* Bottom-right corner accent */}
          <div className="absolute bottom-6 right-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-primary"
            >
              <path
                d="M 40 20 L 40 40 L 20 40"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Bottom-right glow */}
          <div
            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
            }}
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="section py-16">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            <span className="block text-white">THE FUTURE, POWERED BY</span>
            <span className="block text-primary font-normal tracking-wide">
              AUTONOMOUS AI
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/60 max-w-2xl">
            Integrating Intelligence Seamlessly Across Software, Data, And
            Operations To Shape The Future Of How Businesses Evolve.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card
            title="AI-ENABLED SOFTWARE SERVICES"
            desc="Autonomous AI Delivers End-To-End Solutions—From AI Strategy And Consulting To Full-Scale Deployment. We Help Organizations Integrate Computer Vision, NLP, And Automation Into Their Workflows While Ensuring Compliance And Responsible AI Governance."
            variant="dark"
            icon={
              <img 
                src="/card-icon-1.png" 
                alt="Neural Network" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            }
          />
          <Card
            title="AI INFRASTRUCTURE & DATA SERVICES"
            desc="We architect and deploy scalable AI infrastructure—cloud-native platforms, MLOps pipelines, and data engineering solutions that power intelligent systems at enterprise scale."
            variant="dark"
            icon={
              <img 
                src="/card-icon-3.png" 
                alt="Infrastructure" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            }
          />
          <Card
            title="AI-POWERED BUSINESS EVOLUTION"
            desc="Transform operations with intelligent automation, predictive analytics, and AI-driven decision systems that evolve with your business needs."
            variant="dark"
            icon={
              <img 
                src="/card-icon-2.png" 
                alt="Business Evolution" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            }
          />
          <Card
            title="EMERGING INNOVATIONS"
            desc="Pioneering next-generation AI capabilities through research and development in advanced machine learning, neural architectures, and cognitive systems."
            variant="dark"
            icon={
              <img 
                src="/card-icon-4.png" 
                alt="Emerging Innovations" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            }
          />
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section py-16 md:py-20 relative">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-12 md:mb-16">
          <span className="text-primary">NUMBERS</span> <span className="text-white">THAT SPEAK</span>
        </h3>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Left image placeholder */}
          <div className="hidden lg:flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
            <img
              src="/number-image-2.png"
              alt="Decoration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Stats container */}
          <div className="flex-1 max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            <Stat
              value="2M+"
              heading="CLIENT GROWTH IMPACT"
              desc="Achieved Through Automation And Intelligence."
            />
            <div className="hidden md:block w-px h-24 bg-primary/30 mx-6 lg:mx-8" />
            <Stat
              value="5+"
              heading="AI+ PROJECTS DELIVERED"
              desc="Including Saim.AI, GoGuard.AI, Raqeeb.AI, And ADNOC AI."
            />
            <div className="hidden md:block w-px h-24 bg-primary/30 mx-6 lg:mx-8" />
            <Stat
              value="2+"
              heading="YEARS IN AI EXCELLENCE"
              desc="Advancing UAE Innovation Through Real-World AI."
            />
          </div>

          {/* Right image placeholder */}
          <div className="hidden lg:flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
            <img
              src="/number-image-1.png"
              alt="Decoration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Our certifications & standards
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { num: 1, title: "ISO 27001:2022", desc: "Information Security Management For AI And Data Systems" },
            { num: 2, title: "ISO 9001:2015", desc: "Quality Management System For AI Development" },
            { num: 3, title: "UAE Artificial Intelligence Accreditation (MOAI) ", desc: "Alignment with UAE’s National AI Strategy 2031" },
            { num: 4, title: "GDPR & UAE Data Residency Compliance Compliant", desc: "Full adherence to privacy and ethical AI practices" },
            { num: 5, title: "AWS & Azure AI Partner Certification", desc: "Authorized deployment on major cloud infrastructures" },
            { num: 6, title: "Responsible AI Framework Certification", desc: "Ensuring transparency, bias control,and ethical governance" },
          ].map((cert) => (
            <div
              key={cert.num}
              className="bg-black border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              {/* Certification Image */}
              <div className="w-full h-32 md:h-40 mb-6 flex items-center justify-center bg-white/5 rounded-lg p-4">
                <img
                  src={`/cert-${cert.num}.png`}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Certification Title */}
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                {cert.title}
              </h3>
              
              {/* Certification Description */}
              <p className="text-sm text-white/60 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="section py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide">
            <span className="text-white">SPOTLIGHT </span>
            <span className="text-primary">ON</span>
            <span className="text-white"> OUR WORK</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* SAIM.AI */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-10 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light">
                <span className="text-primary">SAIM.AI</span>
              </h3>
              <h4 className="text-xl md:text-2xl font-light text-white">
                AI BUSINESS ASSISTANT
              </h4>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mt-8">
              A Multi-Agent Business Intelligence Platform That Automates
              Workflows, Analyzes Communication, And Generates Insights —
              Reducing Manual Reporting Time By 70%.
            </p>
          </div>

          {/* SAIM.AI Image */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden min-h-[280px]">
            <img
              src="/spotlight-image-1.png"
              alt="SAIM.AI"
              className="w-full h-full object-cover"
            />
          </div>

          {/* GOGUARD.AI Image */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden min-h-[280px]">
            <img
              src="/spotlight-image-2.png"
              alt="GOGUARD.AI"
              className="w-full h-full object-cover"
            />
          </div>

          {/* GOGUARD.AI */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-10 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light">
                <span className="text-primary">GOGUARD.AI</span>
              </h3>
              <h4 className="text-xl md:text-2xl font-light text-white">
                AI VISION FOR SAFETY & SPORTS
              </h4>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mt-8">
              An AI-Powered Video Analytics System Using Computer Vision To
              Track Player Movements, Predict Injuries, And Enhance Safety
              Compliance In Industrial And Athletic Settings.
            </p>
          </div>

          {/* RAQEEB.AI */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-10 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light">
                <span className="text-primary">RAQEEB.AI</span>
              </h3>
              <h4 className="text-xl md:text-2xl font-light text-white">
                REGTECH & COMPLIANCE AUTOMATION
              </h4>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mt-8">
              A Regulatory Intelligence Solution Built For Financial
              Institutions, Detecting Fraud, Ensuring KYC/AML Compliance, And
              Automating Policy Audits With Explainable AI.
            </p>
          </div>

          {/* RAQEEB.AI Image */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden min-h-[280px]">
            <img
              src="/spotlight-image-3.png"
              alt="RAQEEB.AI"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ADNOC Image */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden min-h-[280px]">
            <img
              src="/Spotlight-image-4.png"
              alt="ADNOC AI Initiative"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ADNOC AI INITIATIVE */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-10 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light">
                <span className="text-primary">ADNOC AI INITIATIVE</span>
              </h3>
              <h4 className="text-xl md:text-2xl font-light text-white">
                OPERATIONAL INTELLIGENCE FOR ENERGY
              </h4>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mt-8">
              AI-Powered Predictive Analytics Integrated Into ADNOC Workflows
              To Optimize Maintenance Schedules, Energy Consumption, And Risk
              Management In Real-Time.
            </p>
          </div>
        </div>

        {/* Discover More Button */}
        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="text-sm tracking-widest uppercase">
              DISCOVER MORE
            </span>
            <span className="text-xl">+</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-16">
        <div className="relative bg-black border border-white/10 rounded-2xl p-12 md:p-16 overflow-hidden">
          <div className="flex items-center justify-center gap-8">
            {/* Left image placeholder */}
            <div className="hidden md:flex items-center justify-center w-24 h-24 flex-shrink-0">
              <img
                src="/number-image-2.png"
                alt="Decoration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Center content */}
            <div className="flex-1 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
                <span className="text-white">READY TO TRANSFORM</span>
                <br />
                <span className="text-white">WITH </span>
                <span className="text-primary">AUTONOMOUS INTELLIGENCE</span>
                <span className="text-white">?</span>
              </h2>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/30 rounded-full px-8 py-4 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="text-sm tracking-[0.2em] uppercase text-white font-medium">
                  LET'S CONNECT
                </span>
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="text-primary text-xl font-light">+</span>
                </div>
              </Link>
            </div>

            {/* Right image placeholder */}
            <div className="hidden md:flex items-center justify-center w-24 h-24 flex-shrink-0">
              <img
                src="/number-image-1.png"
                alt="Decoration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
