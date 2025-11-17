import Layout from "@/components/Layout";
import { useRef, useState, MouseEvent } from "react";
import SplineBackground from "@/components/SplineBackground";
import RadialGlass from "@/components/RadialGlass";
import emailjs from '@emailjs/browser';

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
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.15), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'COMPUTER VISION',
    message: '',
    agreeToPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      const templateParams = {
        to_email: 'info@autonomous.ae',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: 'COMPUTER VISION',
        message: '',
        agreeToPrivacy: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black w-full h-[500px] md:h-[800px]">
        <SplineBackground />
        <RadialGlass />
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            className="absolute -top-24 right-0 h-[320px] w-[720px] blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--primary)/0.55), transparent)",
            }}
          />
        </div>
        <div className="section pt-6 md:pt-24 pb-0 md:pb-28 h-full flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between gap-0 md:gap-8 relative z-20 md:z-auto">
          <div className="max-w-4xl relative">
            <h1 className="mt-0 text-2xl md:text-5xl font-normal leading-tight uppercase" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <span className="block">LET'S BUILD THE</span>
              <span className="block">
                FUTURE <span className="text-primary">TOGETHER</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground" style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 500 }}>
              Ready to transform your business with AI? Get in touch with our team to discuss your project and explore how we can help you achieve your goals.
            </p>
          </div>
          {/* <div className="flex-shrink-0 mt-4 md:mt-0">
            <PlusButton to="/contact" />
          </div> */}
        </div>
      </section>
      {/* INTRO */}
      <section className="section py-16 md:py-20">
        <div className="relative bg-black rounded-[20px] p-12 md:p-16 lg:p-20">
          {/* Top-left corner accent */}
          <div className="absolute top-0 left-0">
            {/* <svg
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
            </svg> */}
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
            At <span className="text-primary font-semibold">Autonomous AI</span>, we At Autonomous AI, we believe collaboration fuels innovation Whether you’re exploring AI for your business or scaling existing systems, our team is ready to assist.
            We work across the <span className="text-primary font-semibold">UAE - from Abu Dhabi to Dubai</span> and beyond — delivering customized AI solutions that align with your goals and the nation’s innovation vision.
          </p>

          {/* Bottom-right corner accent */}
          <div className="absolute bottom-0 right-0">
            {/* <svg
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
            </svg> */}
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

      {/* WHY PARTNER WITH AUTONOMOUS AI */}
      <section className="section py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start mb-6 md:mb-8">
          {/* Left side - Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              <span className="block text-white">WHY PARTNER</span>
              <span className="block text-white">WITH <span className="text-primary">AUTONOMOUS AI</span>?</span>
            </h2>
          </div>

          {/* Right side - Card */}
          <MouseGradientCard className="bg-black border border-white/10 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Discuss Your AI Strategy, Project Ideas, Or Technical Challenges.
            </p>
          </MouseGradientCard>
        </div>

        {/* Three Cards Below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1 */}
          <MouseGradientCard className="bg-black border border-white/10 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Partner With A UAE-Based Team Trusted By Enterprises, Startups, And Government Entities.
            </p>
          </MouseGradientCard>

          {/* Card 2 */}
          <MouseGradientCard className="bg-black border border-white/10 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Get Expert Insights Into Machine Learning, Computer Vision, NLP, And Automation.
            </p>
          </MouseGradientCard>

          {/* Card 3 */}
          <MouseGradientCard className="bg-black border border-white/10 rounded-xl p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Request A Consultation, Demo, Or Proposal Tailored To Your Industry.
            </p>
          </MouseGradientCard>
        </div>
      </section>

      {/* THE PROMISE WE KEEP */}
      <section className="section py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Promise and Contact Info */}
          <div>
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                <span className="text-white">THE </span>
                <span className="text-primary">PROMISE WE KEEP</span>
              </h2>
              <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-white/70 max-w-4xl leading-relaxed">
                Every Inquiry Is Handled With <span className="text-white font-medium">Confidentiality And Care</span>. Our Experts Will Review Your Message And Respond Within One Business Day (Sunday–Thursday).
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-1">
                  Innovation Hub Tower,
                </h3>
                <p className="text-base text-white/70">
                  Al Maryah Island
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-1">
                  Sunday – Thursday
                </h3>
                <p className="text-base text-white/70">
                  9:00 AM – 6:00 PM (GMT+4)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 6l10 7 10-7"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-1">
                  Info@Autonomousai.Ae
                </h3>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-1">
                  +971562992229
                </h3>
              </div>
            </div>
          </div>
        </div>
          </div>

          {/* Right side - Map */}
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.0!2d54.6!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAwLjAiTiA1NMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Autonomous AI Location"
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section py-16">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 md:mb-6">
            <span className="text-primary">LET'S CREATE SOMETHING SMART</span>
          </h2>
          <p className="text-sm md:text-base text-white/70">
            Please Fill In Your Details Below — Our Team Will Get Back To You Within 24 Hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Full Name */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start md:items-center">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4 md:pt-0">
              FULL NAME *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="SAJI"
              required
              className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none transition-colors text-sm md:text-base"
            />
          </div>

          {/* Work Email */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start md:items-center">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4 md:pt-0">
              WORK EMAIL *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ticbyakwad@gmail.com"
              required
              className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none transition-colors text-sm md:text-base"
            />
          </div>

          {/* Phone Number */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start md:items-center">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4 md:pt-0">
              PHONE NUMBER (OPTIONAL)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+97154 994 3774"
              className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none transition-colors text-sm md:text-base"
            />
          </div>

          {/* Company Name */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start md:items-center">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4 md:pt-0">
              COMPANY NAME
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="TICBYAKWAD"
              className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none transition-colors text-sm md:text-base"
            />
          </div>

          {/* Service Interested In */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start md:items-center">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4 md:pt-0">
              SERVICE INTERESTED IN
            </label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white focus:border-primary/50 focus:outline-none transition-colors appearance-none cursor-pointer text-sm md:text-base"
            >
              <option>COMPUTER VISION</option>
              <option>NATURAL LANGUAGE PROCESSING</option>
              <option>AI STRATEGY</option>
              <option>GENERATIVE AI</option>
              <option>BUSINESS AUTOMATION</option>
            </select>
          </div>

          {/* Project Details / Message */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4">
              PROJECT DETAILS / MESSAGE *
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="WRITE YOUR MESSAGE"
              required
              className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none transition-colors resize-none text-sm md:text-base"
            />
          </div>

          {/* Attachment */}
          <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start md:items-center">
            <label className="text-xs md:text-sm text-white uppercase tracking-wide pt-4 md:pt-0">
              ATTACHMENT (OPTIONAL)
            </label>
            <div className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-colors">
              <span className="text-white/40 text-xs md:text-sm">MAX 10MB</span>
              <span className="text-primary text-xl md:text-2xl">+</span>
            </div>
          </div>

          {/* Privacy Policy & Submit */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-4 md:pt-6">
            <label className="flex items-start md:items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={handleInputChange}
                required
                className="w-5 h-5 mt-0.5 md:mt-0 bg-[#1A1A1A] border border-white/20 rounded checked:bg-primary checked:border-primary focus:outline-none cursor-pointer flex-shrink-0"
              />
              <span className="text-xs md:text-sm text-white/70">
                I Agree To The Privacy Policy And To Be Contacted By Autonomous AI
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm tracking-[0.2em] uppercase font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-center text-green-500 text-sm mt-4">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-center text-red-500 text-sm mt-4">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </section>
      
    </Layout>
  );
}
