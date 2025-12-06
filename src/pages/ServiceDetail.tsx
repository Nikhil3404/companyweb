import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  usePageMeta({
    title: service?.title || 'Service Details',
    description: service?.description || 'Learn more about our technology services and solutions.'
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-teal-400 hover:text-emerald-300">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center text-teal-400 hover:text-emerald-300 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-slate-300">{service.description}</p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-400 rounded-lg font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss how {service.title.toLowerCase()} can benefit your business</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
