import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Code, Cloud, ShieldCheck, Rocket } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

const Home = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const projectCount = useCountUp(20, 1000, statsVisible);
  const satisfactionCount = useCountUp(100, 1000, statsVisible);
  const teamCount = useCountUp(15, 1000, statsVisible);

  const serviceOverlays = [
    { icon: Sparkles, pattern: 'repeating-linear-gradient(45deg, rgba(20, 184, 166, 0.1) 0px, rgba(20, 184, 166, 0.1) 10px, transparent 10px, transparent 20px)' },
    { icon: Code, pattern: 'repeating-linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0px, rgba(6, 182, 212, 0.1) 10px, transparent 10px, transparent 20px)' },
    { icon: Cloud, pattern: 'repeating-linear-gradient(0deg, rgba(249, 115, 22, 0.1) 0px, rgba(249, 115, 22, 0.1) 10px, transparent 10px, transparent 20px)' },
    { icon: ShieldCheck, pattern: 'repeating-linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0px, rgba(234, 88, 12, 0.15) 8px, transparent 8px, transparent 16px)' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/75 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">

<div className="relative group">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.15] tracking-tight">
              <span className="block mb-3 overflow-hidden">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent group-hover:from-teal-400 group-hover:via-cyan-400 group-hover:to-teal-400 transition-all duration-700">
                    Where Logic ends, creativity
                  </span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-teal-400 group-hover:to-cyan-400 transition-all duration-700">
                    begins.
                  </span>
                </span>
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-400 italic font-light mb-10 animate-fade-in tracking-wide" style={{ animationDelay: '600ms' }}>
            because the best ideas aren't logical.
          </p>

<p className="text-lg md:text-xl text-teal-100 leading-relaxed font-medium mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '800ms' }}>
            Data, Cloud, AI and full-stack staffing—delivered with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link
              to="/services"
              className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-white rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
            >
              <span className="relative z-10 flex items-center">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-teal-500/30 text-white rounded-2xl font-bold text-base hover:bg-slate-700/50 hover:border-teal-500/60 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                Get Started
              </span>
            </Link>
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            {[
              { count: projectCount, suffix: '', label: 'Projects Delivered', gradient: 'from-teal-400 to-cyan-500' },
              { count: satisfactionCount, suffix: '%', label: 'Client Satisfaction', gradient: 'from-cyan-400 to-orange-500' },
              { count: teamCount, suffix: '', label: 'Team Members', gradient: 'from-orange-400 to-teal-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.count}{stat.suffix}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <AnimatedSection className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">TheLogicLess</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The three pillars that drive our success and yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <div className="flip-card h-[500px] rounded-3xl">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front relative h-full rounded-3xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Innovation First"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">
                        Cutting-Edge Innovation
                      </h3>
                      <p className="text-slate-300 text-lg">
                        Hover for details
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 p-8 flex flex-col justify-center">
                    <Sparkles className="w-16 h-16 text-white/80 mb-6" />
                    <h3 className="text-3xl font-black text-white mb-6">
                      Cutting-Edge Innovation
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      We stay ahead of the curve by leveraging the latest technologies and methodologies to deliver solutions that give you a competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="flip-card h-[500px] rounded-3xl">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front relative h-full rounded-3xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Lightning Fast"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">
                        Rapid Delivery
                      </h3>
                      <p className="text-slate-300 text-lg">
                        Hover for details
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-600 to-orange-700 p-8 flex flex-col justify-center">
                    <Zap className="w-16 h-16 text-white/80 mb-6" />
                    <h3 className="text-3xl font-black text-white mb-6">
                      Rapid Delivery
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Our streamlined processes and experienced team ensure quick turnaround times without compromising on quality or reliability.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="flip-card h-[500px] rounded-3xl">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front relative h-full rounded-3xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Fort Knox Security"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">
                        Enterprise Security
                      </h3>
                      <p className="text-slate-300 text-lg">
                        Hover for details
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800 p-8 flex flex-col justify-center">
                    <Shield className="w-16 h-16 text-white/80 mb-6" />
                    <h3 className="text-3xl font-black text-white mb-6">
                      Enterprise Security
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      We implement robust security measures and best practices to protect your data and ensure compliance with industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our Core <span className="bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI & Automation',
                description: 'Intelligent automation solutions that streamline operations and enhance productivity across your organization.',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/services/ai-bot-development'
              },
              {
                title: 'Custom Development',
                description: 'Scalable web and mobile applications built with modern frameworks to meet your specific requirements.',
                image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/services/web-development'
              },
              {
                title: 'Cloud Solutions',
                description: 'Enterprise-grade cloud infrastructure and migration services across AWS, Azure, and Google Cloud Platform.',
                image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/services/cloud-solutions'
              },
              {
                title: 'Security & Compliance',
                description: 'Comprehensive security solutions including threat detection, compliance management, and risk assessment.',
                image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/services/cybersecurity'
              }
            ].map((solution, index) => {
              const OverlayIcon = serviceOverlays[hoveredService ?? -1]?.icon;
              const isHovered = hoveredService === index;
              const showOverlay = hoveredService !== null && !isHovered;

              return (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <Link
                    to={solution.link}
                    className="group relative h-80 rounded-3xl overflow-hidden block"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent group-hover:via-slate-950/50 transition-all duration-500"></div>

                    {showOverlay && OverlayIcon && (
                      <div
                        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                        style={{ background: serviceOverlays[hoveredService].pattern }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <OverlayIcon className="w-32 h-32 text-white/10" strokeWidth={1} />
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-3xl font-black text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="flex items-center text-teal-400 font-bold">
                        <span>Explore More</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-teal-500/30 text-white rounded-2xl font-bold hover:bg-slate-700/50 hover:border-teal-500/60 transition-all duration-300 transform hover:scale-105"
            >
              View All Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="scale-in" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative rounded-[3rem] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Join Us"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/90 to-teal-900/95"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-2xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's build something extraordinary together.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-12 py-6 bg-white text-teal-600 rounded-2xl font-black text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
