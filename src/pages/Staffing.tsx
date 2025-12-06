import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Users, Search, FileCheck, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const Staffing = () => {
  usePageMeta({
    title: 'IT Staffing Solutions',
    description: 'Professional IT staffing and recruitment services. Find qualified developers, engineers, and technology professionals for contract, full-time, and project-based positions.'
  });
  const process = [
    { icon: Search, title: 'Talent Sourcing', description: 'We leverage our extensive network to identify top talent.', image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: FileCheck, title: 'Screening', description: 'Rigorous screening including technical assessments.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Users, title: 'Matching', description: 'We match candidates to your culture and needs.', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Briefcase, title: 'Onboarding', description: 'Comprehensive support for smooth integration.', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">IT Staffing Solutions</h1>
          <p className="text-xl text-slate-400">Connect with exceptional IT professionals</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <AnimatedSection animation="fade-in-left">
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-6">Building High-Performing Teams</h2>
              <p className="text-lg text-slate-300 mb-6">At TheLogicLess, we connect you with highly skilled professionals who align with your company culture and values.</p>
              <Link to="/contact" className="inline-flex items-center self-start px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300">
                Discuss Your Needs<ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Staffing Process</h2>
            <p className="text-xl text-slate-400">A proven workflow that ensures quality</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, idx) => (
              <AnimatedSection key={idx} animation="fade-in-up" delay={idx * 100}>
                <div className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">{idx + 1}</div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-8 h-8 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection animation="fade-in-left">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Employers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/50 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">For Employers</h3>
                <ul className="space-y-3 text-slate-200 mb-6">
                  {['Pre-vetted candidates', 'Reduced time-to-hire', 'Flexible staffing options', 'Quality guarantee'].map((item, idx) => (
                    <li key={idx} className="flex items-start"><CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors">Hire Talent</Link>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Candidates" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/50 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">For Candidates</h3>
                <ul className="space-y-3 text-slate-200 mb-6">
                  {['Exclusive job opportunities', 'Career guidance', 'Competitive packages', 'Long-term support'].map((item, idx) => (
                    <li key={idx} className="flex items-start"><CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
                <Link to="/careers" className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors">View Opportunities</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in-up" className="p-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-slate-300 mb-8">Whether you're looking to hire or seeking your next opportunity</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300">
            Get Started<ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Staffing;
