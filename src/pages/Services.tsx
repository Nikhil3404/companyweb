import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const Services = () => {
  usePageMeta({
    title: 'Our Services',
    description: 'Explore theLogicLess comprehensive technology services: AI automation, custom web and mobile development, cloud solutions, cybersecurity, data engineering, and IT consulting.'
  });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} animation="scale-in" delay={index * 50}>
              <div
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`transition-all duration-300 ${
                  hoveredId && hoveredId !== service.id ? 'opacity-30' : 'opacity-100'
                }`}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-teal-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden block h-full"
                >

                <div className="h-48 overflow-hidden relative">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-400 text-xs font-semibold">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 group-hover:bg-teal-500/10 text-slate-300 group-hover:text-teal-400 rounded-full text-xs transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-teal-400 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" className="mt-20 p-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 backdrop-blur-sm text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We can tailor our services to meet your specific business requirements
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
            Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
