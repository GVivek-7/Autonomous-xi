import Layout from "@/components/Layout";
import { Link } from "lucide-react";

export default function Whatwedo() {
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
              <div className="max-w-4xl">
                <h1 className="mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight uppercase">
                  <span className="block">EMPOWERING THE FUTURE</span>
                  <span className="block">
                    WITH INTELLIGENT<span className="text-primary"> SYSTEMS</span>
                  </span>
                </h1>
              </div>
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

      {/* OUR INTELLIGENT STACK */}
      <section className="section py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-center mb-4 md:mb-6">
            <span className="text-white">OUR INTELLIGENT </span>
            <span className="text-primary">STACK</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1 - AI Strategy & Consulting */}
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-1.png"
                alt="AI Strategy & Consulting"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              AI STRATEGY & CONSULTING
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
              We Guide UAE Enterprises Through Readiness Assessments, ROI Planning, And Responsible AI Roadmaps That Align With National Innovation Frameworks.
            </p>
          </div>

          {/* Card 2 - Custom AI Development */}
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-2.png"
                alt="Custom AI Development"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              CUSTOM AI DEVELOPMENT
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
              From Multi-Agent Systems To Computer Vision And NLP Solutions, We Build Tailored AI Applications That Integrate Seamlessly Into Your Operations.
            </p>
          </div>

          {/* Card 3 - Natural Language AI */}
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-3.png"
                alt="Natural Language AI"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              NATURAL LANGUAGE AND CONVERSATIONAL AI
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
              Multilingual chatbots, voicebots, and document-intelligence systems that communicate fluently in English and Arabic.
            </p>
          </div>

          {/* Card 4 - Computer Vision */}
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-4.png"
                alt="Computer Vision Solutions"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              COMPUTER VISION SOLUTIONS
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
              AI-powered image recognition, OCR, and video analytics for healthcare, logistics, surveillance, and sports performance.
            </p>
          </div>

          {/* Card 5 - AI Infrastructure */}
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-5.png"
                alt="AI Infrastructure"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              AI INFRASTRUCTURE & DATA ENGINEERING
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
              Secure cloud or on-prem deployments, scalable data pipelines, and continuous MLOps monitoring for reliable, compliant AI systems.
            </p>
          </div>

          {/* Card 6 - Business Process Automation */}
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-6.png"
                alt="Business Process Automation"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              BUSINESS PROCESS AUTOMATION
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
               Smart AI tools for HR, marketing, finance, and supply chain — reducing manual effort, minimizing errors, and boosting ROI..
            </p>
          </div>
        </div>

        {/* Centered Card */}
        <div className="mt-8 flex justify-center">
          <div className="bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors max-w-md w-full group">
            <div className="relative flex items-center justify-center mb-4 md:mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src="/www-7.png"
                alt="Emerging Innovations"
                className="w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-light text-white mb-4 text-center">
              EMERGING INNOVATIONS
            </h3>
            <p className="text-sm text-white/60 leading-relaxed text-center">
              Exploring next-gen domains such as generative 3D design, AI-driven cybersecurity, sustainability analytics, and metaverse integration.
            </p>
          </div>
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

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Hexagon diagram container */}
          <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
            {/* Center hexagon image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/flow-hexagon.png"
                alt="AI Flow Hexagon"
                className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
              />
            </div>

            {/* Top Left - Discovery & Strategy */}
            <div className="absolute top-[15%] md:top-[20%] left-0 max-w-[200px] md:max-w-[280px] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-sm md:text-base lg:text-xl font-light text-white mb-2 md:mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                DISCOVERY<br />& STRATEGY
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Define Objectives, Identify High-Impact Use Cases, And Align Stakeholders Around An Actionable AI Vision.
              </p>
            </div>

            {/* Top Right - Data Strategy & Engineering */}
            <div className="absolute top-[15%] md:top-[20%] right-0 max-w-[200px] md:max-w-[280px] text-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-sm md:text-base lg:text-xl font-light text-white mb-2 md:mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                DATA STRATEGY<br />& ENGINEERING
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Collect, Clean, And Structure Datasets With Full Governance And Compliance To UAE Standards.
              </p>
            </div>

            {/* Middle Left - Model Development */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 max-w-[200px] md:max-w-[280px] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-sm md:text-base lg:text-xl font-light text-white mb-2 md:mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                MODEL<br />DEVELOPMENT
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Design, Train, And Validate Machine-Learning Models Tailored To Your Business And Industry.
              </p>
            </div>

            {/* Middle Right - Testing & Deployment */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[200px] md:max-w-[280px] text-right animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-sm md:text-base lg:text-xl font-light text-white mb-2 md:mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
                TESTING<br />& DEPLOYMENT
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                Validate Accuracy, Security, And Performance Before Deployment On UAE Or Global Cloud Platforms.
              </p>
            </div>

            {/* Bottom Center - Monitoring & Scaling */}
            <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 max-w-[240px] md:max-w-[320px] text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-sm md:text-base lg:text-xl font-light text-white mb-2 md:mb-3 transition-colors duration-300 hover:text-primary uppercase tracking-wide">
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
                  
                  <Link to="/contact" className="inline-flex items-center gap-3 border border-white/30 rounded-full px-8 py-4 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 group">
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

    </section>
    
    
    </Layout>
  );
}
