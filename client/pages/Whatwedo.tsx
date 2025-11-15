import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useState, useRef, MouseEvent, useEffect } from "react";
import SplineBackground from "@/components/SplineBackground";
import RadialGlass from "@/components/RadialGlass";

function MouseGradientCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.2), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function WhatWeDoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };
    
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);
  
  const cards = [
    {
      title: "AI Strategy & Consulting",
      desc: "We guide UAE enterprises through readiness assessments, ROI planning, and responsible AI roadmaps that align with national innovation frameworks.",
      alt: "AI Strategy & Consulting"
    },
    {
      title: "Custom AI Development",
      desc: "Machine learning, deep learning, and generative AI solutions built to automate workflows, enhance decision-making, and accelerate growth.",
      alt: "Custom AI Development"
    },
    {
      title: "Natural Language & Conversational AI",
      desc: "Multilingual chatbots, voicebots, and document-intelligence systems that communicate fluently in English and Arabic.",
      alt: "Natural Language & Conversational AI"
    },
    {
      title: "Computer Vision Solutions",
      desc: "AI-powered image recognition, OCR, and video analytics for healthcare, logistics, surveillance, and sports performance.",
      alt: "Computer Vision Solutions"
    },
    {
      title: "AI Infrastructure and Data Engineering",
      desc: "Secure cloud or on-prem deployments, scalable data pipelines, and continuous MLOps monitoring for reliable, compliant AI systems.",
      alt: "AI Infrastructure and Data Engineering"
    },
    {
      title: "Business Process Automation",
      desc: "Smart AI tools for HR, marketing, finance, and supply chain — reducing manual effort, minimizing errors, and boosting ROI.",
      alt: "Business Process Automation"
    },
    {
      title: "Emerging Innovations",
      desc: "Exploring next-gen domains such as generative 3D design, AI-driven cybersecurity, sustainability analytics, and metaverse integration.",
      alt: "Emerging Innovations"
    }

  ];
  
  const maxIndex = Math.max(0, cards.length - cardsPerView);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  
  return (
    <div className="relative">
      {/* Cards Container */}
      <div className="overflow-hidden px-2 md:px-0">
        <div 
          className="flex gap-3 md:gap-5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView + (cardsPerView > 1 ? 0 : 0))}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 px-1 md:px-0" style={{ width: cardsPerView === 1 ? '100%' : `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 20 / cardsPerView}px)` }}>
              <MouseGradientCard className="h-full">
                <Card
                  title={card.title}
                  desc={card.desc}
                  variant="dark"
                  icon=""
                    
                />
              </MouseGradientCard>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      className="relative rounded-xl overflow-hidden flex flex-col h-[200px] bg-[#000000] text-white border border-white/20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.25), transparent 60%)`,
        }}
      />
      <div className="relative z-10 p-8 pb-6 flex-shrink-0">
        <h3 className="text-sm md:text-xl font-medium tracking-[0.15em] uppercase mb-4 text-white">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-white/80">
          {desc}
        </p>
      </div>
      <div className="relative z-10 flex-1 flex items-end justify-center overflow-hidden">
        <div className="text-primary w-full h-full flex items-end">{icon}</div>
      </div>
    </div>
  );
}

export default function Whatwedo() {
  return (
    <Layout>
       {/* HERO */}
            <section className="relative overflow-hidden bg-black w-full" style={{ height: '870px' }}>
              <SplineBackground />
              <RadialGlass />
              <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                  className="absolute -top-24 right-0 h-[320px] w-[720px] blur-3xl opacity-0"
                  style={{
                    background:
                      "radial-gradient(closest-side, hsl(var(--primary)/0.55), transparent)",
                  }}
                />
              </div>
              <div className="section pt-14 md:pt-24 pb-16 md:pb-28 h-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
                <div className="max-w-4xl relative z-20">
                  <h1 className="mt-0 text-2xl md:text-5xl font-normal leading-tight uppercase" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                    <span className="block">EMPOWERING THE FUTURE</span>
                    <span className="block">
                      WITH INTELLIGENT<span className="text-primary"> SYSTEMS</span>
                    </span>
                  </h1>
                </div>
                {/* <div className="flex-shrink-0 mt-4 md:mt-0">
                  <PlusButton to="/contact" />
                </div> */}
              </div>
            </section>
      {/* INTRO */}
      <section className="section py-16 md:py-20">
        <div className="relative bg-black border border-white/10 rounded-[20px] p-12 md:p-16 lg:p-20">
          {/* Top-left corner accent */}
          <div className="absolute top-0 left-0">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="text-primary"
            >
              <path
                d="M 0 60 Q 0 0 60 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
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
          <p className="text-xs md:text-[30px] text-center text-white/80 relative z-10 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-primary font-semibold">Autonomous AI</span>, we build systems that think, learn, and evolve. From predictive
            analytics to generative intelligence, we empower <span className="text-primary font-semibold">UAE businesses</span> to automate,
            innovate, and scale with precision.
          </p>

          {/* Bottom-right corner accent */}
          <div className="absolute bottom-0 right-0">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="text-primary"
            >
              <path
                d="M 60 0 Q 60 60 0 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
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
        
        <WhatWeDoCarousel />
      </section>

      {/* OUR INTELLIGENT STACK */}
      {/* <section className="section py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-center mb-4 md:mb-6">
            <span className="text-white">OUR INTELLIGENT </span>
            <span className="text-primary">STACK</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"> */}
          {/* Card 1 - AI Strategy & Consulting */}
          {/* <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon1.png"
                  alt="AI Strategy & Consulting"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                AI STRATEGY & CONSULTING
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                We Guide UAE Enterprises Through Readiness Assessments, ROI Planning, And Responsible AI Roadmaps That Align With National Innovation Frameworks.
              </p>
            </div>
          </div> */}

          {/* Card 2 - Custom AI Development */}
          {/* <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon2.png"
                  alt="Custom AI Development"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                CUSTOM AI DEVELOPMENT
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                From Multi-Agent Systems To Computer Vision And NLP Solutions, We Build Tailored AI Applications That Integrate Seamlessly Into Your Operations.
              </p>
            </div>
          </div> */}

          {/* Card 3 - Natural Language AI */}
          {/* <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon3.png"
                  alt="Natural Language AI"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                NATURAL LANGUAGE AND CONVERSATIONAL AI
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                Multilingual chatbots, voicebots, and document-intelligence systems that communicate fluently in English and Arabic.
              </p>
            </div>
          </div>

          {/* Card 4 - Computer Vision */}
          {/* <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon4.png"
                  alt="Computer Vision Solutions"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                COMPUTER VISION SOLUTIONS
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                AI-powered image recognition, OCR, and video analytics for healthcare, logistics, surveillance, and sports performance.
              </p>
            </div>
          </div> */}

          {/* Card 5 - AI Infrastructure */}
          {/* <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon5.png"
                  alt="AI Infrastructure"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                AI INFRASTRUCTURE & DATA ENGINEERING
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                Secure cloud or on-prem deployments, scalable data pipelines, and continuous MLOps monitoring for reliable, compliant AI systems.
              </p>
            </div>
          </div> */}

          {/* Card 6 - Business Process Automation */}
          {/* <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon6.png"
                  alt="Business Process Automation"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                BUSINESS PROCESS AUTOMATION
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                 Smart AI tools for HR, marketing, finance, and supply chain — reducing manual effort, minimizing errors, and boosting ROI..
              </p>
            </div>
          </div>
        </div> */}

        {/* Centered Card */}
        {/*<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group overflow-hidden sm:col-start-2 lg:col-start-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/intelicon7.png"
                  alt="Emerging Innovations"
                  className="w-1/2 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                EMERGING INNOVATIONS
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed text-center">
                Exploring next-gen domains such as generative 3D design, AI-driven cybersecurity, sustainability analytics, and metaverse integration.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CERTIFICATIONS */}
      <section className="section py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-12 md:mb-16">
          <span className="text-white">OUR </span>
          <span className="text-primary">CERTIFICATIONS</span>
          <span className="text-white"> & </span>
          <span className="text-primary">STANDARDS</span>
        </h2>
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
              className="bg-black border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
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
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*FLOW OF INNOVATION*/}
      <section className="section py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-center mb-6 md:mb-8">
            <span className="text-white">THE FLOW OF </span>
            <span className="text-primary">INNOVATION</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-center text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
            We Follow A Proven Five-Phase Framework To Deliver Clarity, Control, And Measurable Outcomes At Every Step.
          </p>
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="md:hidden space-y-8 px-4">
          <div className="flex justify-center mb-8">
            <img
              src="/hexreplace.png"
              alt="AI Flow Hexagon"
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
          
          <div className="space-y-6 max-w-md mx-auto">
            <div className="text-center">
              <h3 className="text-sm font-light text-white mb-2 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                DISCOVERY & STRATEGY
              </h3>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Define Objectives, Identify High-Impact Use Cases, And Align Stakeholders Around An Actionable AI Vision.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-sm font-light text-white mb-2 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                DATA STRATEGY & ENGINEERING
              </h3>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Collect, Clean, And Structure Datasets With Full Governance And Compliance To UAE Standards.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-sm font-light text-white mb-2 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                MODEL DEVELOPMENT
              </h3>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Design, Train, And Validate Machine-Learning Models Tailored To Your Business And Industry.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-sm font-light text-white mb-2 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                TESTING & DEPLOYMENT
              </h3>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Validate Accuracy, Security, And Performance Before Deployment On UAE Or Global Cloud Platforms.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-sm font-light text-white mb-2 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                MONITORING & SCALING
              </h3>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Implement Feedback Loops, Retraining Pipelines, And Optimization For Long-Term Scalability And Innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Hexagonal Layout */}
        <div className="hidden md:block relative max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-center min-h-[700px] lg:min-h-[800px]">
            {/* Center hexagon image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/hexreplace.png"
                alt="AI Flow Hexagon"
                className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
              />
            </div>

            {/* Top Left - Discovery & Strategy */}
            <div className="absolute top-[20%] left-0 max-w-[280px] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-base lg:text-xl font-light text-white mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                DISCOVERY<br />& STRATEGY
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Define Objectives, Identify High-Impact Use Cases, And Align Stakeholders Around An Actionable AI Vision.
              </p>
            </div>

            {/* Top Right - Data Strategy & Engineering */}
            <div className="absolute top-[20%] right-0 max-w-[280px] text-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-base lg:text-xl font-light text-white mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                DATA STRATEGY<br />& ENGINEERING
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Collect, Clean, And Structure Datasets With Full Governance And Compliance To UAE Standards.
              </p>
            </div>

            {/* Middle Left - Model Development */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 max-w-[280px] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-base lg:text-xl font-light text-white mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                MODEL<br />DEVELOPMENT
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Design, Train, And Validate Machine-Learning Models Tailored To Your Business And Industry.
              </p>
            </div>

            {/* Middle Right - Testing & Deployment */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[280px] text-right animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-base lg:text-xl font-light text-white mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                TESTING<br />& DEPLOYMENT
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Validate Accuracy, Security, And Performance Before Deployment On UAE Or Global Cloud Platforms.
              </p>
            </div>

            {/* Bottom Center - Monitoring & Scaling */}
            <div className="absolute bottom-0 left-0.25 -translate-x-1/2 max-w-[360px] text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-base lg:text-xl font-light text-white mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                MONITORING & SCALING
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Implement Feedback Loops, Retraining Pipelines, And Optimization For Long-Term Scalability And Innovation.
              </p>
            </div>
          </div>
        </div>
    </section>
          {/* CTA */}
          <section className="section py-16">
            <div className="relative bg-black border border-white/10 rounded-2xl p-12 md:p-16 overflow-hidden">
              <div className="flex items-center justify-center gap-8">
                {/* Left image placeholder */}
                {/* <div className="hidden md:flex items-center justify-center w-24 h-24 flex-shrink-0">
                  <img
                    src="/number-image-2.png"
                    alt="Decoration"
                    className="w-full h-full object-contain"
                  />
                </div> */}
    
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
                    className="inline-flex items-center gap-3 border-2 rounded-full px-8 py-4 hover:border-primary hover:bg-white/20 transition-all duration-300 group"
                    style={{ 
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span 
                      className="text-sm tracking-[0.2em] uppercase font-semibold"
                      style={{ color: '#FFFFFF' }}
                    >
                      LET'S CONNECT
                    </span>
                  </Link>
                </div>
    
                {/* Right image placeholder */}
                {/* <div className="hidden md:flex items-center justify-center w-24 h-24 flex-shrink-0">
                  <img
                    src="/number-image-1.png"
                    alt="Decoration"
                    className="w-full h-full object-contain"
                  />
                </div> */}
              </div>
            </div>
          </section>
    
    </Layout>
  );
}
