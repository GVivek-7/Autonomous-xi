import Layout from "@/components/Layout";
import PlusButton from "@/components/PlusButton";
import { Link } from "lucide-react";


export default function Solutions() {
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
                  <span className="block">AUTONOMOUS BY NATURE</span>
                  <span className="block">
                    INTELLIGENT BY <span className="text-primary">DESIGN</span>
                  </span>
                </h1>
              </div>
               {/* INTRO */}
      <section className="section py-12 md:py-16 lg:py-20">
        <div className="relative bg-black border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Top-left corner accent */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              className="text-primary md:w-10 md:h-10"
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="mb-8 md:mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            <span className="block text-white">THE LAB WHERE IDEAS GO</span>
            <span className="block text-primary font-normal tracking-wide">
              AUTONOMOUS
            </span>
          </h2>
        
        </div>

          {/* Bottom-right corner accent */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              className="text-primary md:w-10 md:h-10"
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
            </section>

      {/* SAIM.AI SHOWCASE */}
      <section className="section py-16">
        <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Image with animation */}
          <img
            src="/saim-showcase.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* SAIM.AI FEATURES */}
      <section className="section py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Title and Description */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              <span className="text-primary">SAIM.AI</span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white">
              AI BUSINESS ASSISTANT
            </h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
              A Multi-Agent AI System That Automates Executive Workflows,
              Generates Insights From Enterprise Data, And Acts As A Real-Time
              Digital Assistant For Businesses.
            </p>
          </div>

          {/* Right side - Features */}
          <div className="space-y-4 md:space-y-5">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-1.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Multi-agent orchestration for task automation,
                  summarization, and insight generation.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-2.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Multilingual (English + Arabic) Communication
                  And Policy-Based Approval Flows.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-3.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Integrated Retrieval Across Mail, CRM, And
                  Documents For Unified Knowledge Access.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-4.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Reduced Manual Report Preparation Time By
                  70% And Boosted Decision Speed By 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOGUARD.AI SHOWCASE */}
      <section className="section py-16">
        <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Image with animation */}
          <img
            src="/goguard-showcase.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* SAIM.AI FEATURES */}
      <section className="section py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-primary">GOGUARD.AI</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-white">
              VISION ANALYTICS FOR SAFETY & SPORTS
            </h3>
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              A computer-vision platform that uses AI to track movement, 
              detect risk patterns, and enhance human performance and safety.
            </p>
          </div>

          {/* Right side - Features */}
          <div className="space-y-5">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-5.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Smart Vision Models Built on YOLO for Detection
                  and Pose Tracking
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-6.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  AI-Powered Predictive
                  Injury Alerts and Near-Miss Detection
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-7.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Used in Industrial Safety, Construction, and Sports Analytics
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-8.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Reduced manual report preparation time by 70 %
                  and boosted decision speed by 30 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAQEEB.AI SHOWCASE */}
      <section className="section py-16">
        <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Image with animation */}
          <img
            src="/raqeeb-showcase.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
          />
        </div>
      </section>
      
      {/* RAQEEB.AI FEATURES */}
      <section className="section py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-primary">RAQEEB.AI</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-white">
              INTELLIGENT REGTECH AUTOMATION
            </h3>
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              An explainable AI platform for the financial sector 
              that automates AML, KYC, and fraud-risk operations.
            </p>
          </div>

          {/* Right side - Features */}
          <div className="space-y-5">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-9.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Graph-based Anomaly Detection and Entity Resolution
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-10.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  AI-Driven Policy Summarization and Compliance Alerts
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-11.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Reduces false positives by up to 50 % and 
                  shortens investigation time by 35 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADNOC.AI SHOWCASE */}
      <section className="section py-16">
        <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Image with animation */}
          <img
            src="/smartcity-showcase.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
          />
        </div>
      </section>
      
      {/* SMARTCITY.AI FEATURES */}
      <section className="section py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-primary">SMART CITY VISION AI</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-white">
              DARB IN ABU DHABI (WITH Q_MOBILITY)
            </h3>
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              A collaborative initiative between Autonomous AI and Q-Mobility to transform 
              Abu Dhabi’s smart-mobility infrastructure under the DARBin program.
            </p>

            {/* PROJECT INTENT */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-2xl md:text-3xl font-light text-primary mb-6">
                PROJECT INTENT
              </h4>
              <p className="text-base text-white/60 leading-relaxed">
                Upgrade existing roadside camera systems to
                AI-based vision sensors capable of real-time
                analytics for traffic, safety, and urban planning.
              </p>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-5">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-12.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Firmware re-engineering of legacy
                  camera systems to integrate AI vision.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-13.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Imported and customized the Python package
                  RT Dter (Real-Time Detector) for edge inference.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-14.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Developed adaptive firmware modules enabling in-camera object detection and event
                  classification.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-15.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Integrated with DARBin’s data platform for cross-road analytics 
                  and live traffic feeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT & COMPLIANCE */}
      <section className="section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Impact Card */}
          <div className="bg-black border border-white/10 rounded-xl p-10">
            <h4 className="text-2xl font-light text-primary mb-6">
              IMPACT
            </h4>
            <p className="text-base text-white/60 leading-relaxed">
              Transformed static CCTV units into smart vision nodes capable of detecting vehicles,
              pedestrians, congestion, and incidents in real time.
            </p>
          </div>

          {/* Compliance Card */}
          <div className="bg-black border border-white/10 rounded-xl p-10">
            <h4 className="text-2xl font-light text-primary mb-6">
              DEPLOYMENT
            </h4>
            <p className="text-base text-white/60 leading-relaxed">
              Rollout across multiple Abu Dhabi smart-mobility zones under Q-Mobility supervision.
            </p>
          </div>
        </div>
      </section>

      {/* ADNOC.AI SHOWCASE */}
      <section className="section py-16">
        <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Image with animation */}
          <img
            src="/adnoc-showcase.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* ADNOC.AI FEATURES */}
      <section className="section py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-primary">ADNOC PIPELINE INTEGRITY AI</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-white">
              GAS PIPELINE THICKNESS ANALYSIS
            </h3>
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              A specialized AI system that assists ADNOC gas-line inspectors in 
              assessing the health and remaining life of critical pipeline infrastructure.
            </p>

            {/* PROJECT INTENT */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-2xl md:text-3xl font-light text-primary mb-6">
                PROJECT INTENT
              </h4>
              <p className="text-base text-white/60 leading-relaxed">
                To Automatically Analyze Pipeline-Thickness Data
                Gathered From Ultrasonic And Magnetic Sensors,
                And Help Inspectors Decide Whether To Repair,
                Replace, Or Maintain Gas Pipelines.
              </p>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-5">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-16.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Sensor data ingestion from IoT
                  and NDT (non-destructive testing) devices.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-17.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Feature extraction of wall-thickness variation,
                  corrosion depth, and temperature impact.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-18.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  XGBoost-based predictive model to 
                  estimate degradation trends and classify risk levels.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
            src="/ow-19.png"
            alt="Saim.ai - Future of AI SAIM"
            className="w-full h-auto object-cover animate-fade-in-up transform transition-all duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Visualization dashboard displaying probability-of-failure
                  and recommended action (retain / replace / reinspect).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT & COMPLIANCE */}
      <section className="section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Impact Card */}
          <div className="bg-black border border-white/10 rounded-xl p-10">
            <h4 className="text-2xl font-light text-primary mb-6">
              IMPACT
            </h4>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl md:text-7xl font-light text-white">92%</span>
            </div>
            <p className="text-base text-white/60 leading-relaxed">
              Improvement In Inspection
              Accuracy Compared To Manual
              Assessments.
            </p>
          </div>

          {/* Compliance Card */}
          <div className="bg-black border border-white/10 rounded-xl p-10">
            <h4 className="text-2xl font-light text-primary mb-6">
              COMPLIANCE
            </h4>
            <p className="text-base text-white/60 leading-relaxed">
              Deployed On ADNOC's Secure On-Prem
              Infrastructure With Full UAE Data Residency.
            </p>
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
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
                className="inline-flex items-center gap-3 border border-white/30 rounded-full px-8 py-4 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group bg-white/5"
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
