import { Link } from 'react-router-dom';
import { Lightbulb, Target, Users, Rocket, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const WhatWeDo = () => {
  usePageMeta({
    title: 'What We Do',
    description: 'Discover our methodology for driving technology innovation. We analyze, design, develop, and optimize solutions to help businesses achieve their digital transformation goals.'
  });
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">What We Do</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our methodology and approach to driving technology innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-6">Technology Innovation at Its Core</h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              At TheLogicLess, we don't just follow technology trends—we create them. Our approach combines deep technical expertise with strategic business thinking to deliver solutions that transform organizations.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We partner with businesses to understand their unique challenges, identify opportunities for innovation, and implement solutions that drive measurable results.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Innovation" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: Lightbulb, title: 'Discovery & Strategy', points: ['Stakeholder interviews', 'Technical assessment', 'Strategic roadmap development'] },
            { icon: Target, title: 'Design & Planning', points: ['Architecture design', 'UX/UI design', 'Technology stack selection'] },
            { icon: Rocket, title: 'Development & Testing', points: ['Agile sprints', 'Automated testing', 'Performance optimization'] },
            { icon: Zap, title: 'Launch & Support', points: ['Deployment support', '24/7 monitoring', 'Continuous improvement'] }
          ].map((phase, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <phase.icon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Innovation Journey?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss how our approach can drive transformation for your business</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300">
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
