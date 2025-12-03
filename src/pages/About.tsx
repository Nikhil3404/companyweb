import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, TrendingUp, Globe, Shield, ArrowRight, Lightbulb, MapPin, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

const About = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const projectCount = useCountUp(20, 1000, statsVisible);
  const teamCount = useCountUp(15, 1000, statsVisible);
  const satisfactionCount = useCountUp(100, 1000, statsVisible);
  const clientCount = useCountUp(5, 1000, statsVisible);

  const values = [
    { icon: Target, title: 'Excellence', description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations.' },
    { icon: Heart, title: 'Integrity', description: 'We operate with transparency and honesty, building trust through ethical practices.' },
    { icon: Users, title: 'Collaboration', description: 'We believe in teamwork, fostering partnerships that bring innovative solutions.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace change and continuously explore new technologies.' },
    { icon: Shield, title: 'Commitment', description: 'We are dedicated to our clients success, providing unwavering support.' },
    { icon: Globe, title: 'Diversity', description: 'We celebrate diverse backgrounds creating an inclusive environment.' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About TheLogicLess</h1>
          <p className="text-lg text-slate-500">Where Logic Ends, Creativity Begins</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Every great idea starts with a simple problem. Ours started with seeing how great talent often goes unnoticed and how businesses struggle to find the right tech expertise at the right time.
              </p>
              <p>
                What began as a small vision to deliver reliable software solutions and honest IT staffing quickly grew into something bigger. We realized that companies don't just need developers or engineers — they need problem solvers, thinkers, and long-term partners. And professionals don't just need jobs — they need growth, mentorship, and the right opportunities.
              </p>
              <p className="font-semibold text-teal-300">
                That's where we come in.
              </p>
              <p>
                Today, TheLogicLess works across Software Development, Cloud Services, Data Engineering, Artificial Intelligence, Cyber Security, Web Development, and IT Staffing. We help businesses scale with confidence and help professionals build meaningful careers.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Our team" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30">
            <Target className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-slate-300">To empower businesses through innovative technology solutions that drive growth and competitive advantage.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30">
            <Eye className="w-12 h-12 text-teal-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-lg text-slate-300">To be the world's most trusted technology partner, recognized for innovation and impact.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all duration-300">
              <value.icon className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Award, count: projectCount, suffix: '', label: 'Projects' },
            { icon: Users, count: teamCount, suffix: '', label: 'Team Members' },
            { icon: TrendingUp, count: satisfactionCount, suffix: '%', label: 'Satisfaction' },
            { icon: Globe, count: clientCount, suffix: '', label: 'Clients' }
          ].map((metric, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <metric.icon className="w-10 h-10 mx-auto mb-4 text-teal-400" />
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                {metric.count}{metric.suffix}
              </div>
              <div className="text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden p-12 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" className="text-teal-400" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.7,87.1C-21.4,86.6,-36.2,82.6,-49.8,75.4C-63.4,68.2,-75.8,57.8,-82.9,44.7C-90,31.6,-91.8,15.8,-89.7,1.1C-87.6,-13.6,-81.6,-27.2,-73.8,-39.8C-66,-52.4,-56.4,-64,-43.8,-70.8C-31.2,-77.6,-15.6,-79.6,0.5,-80.5C16.6,-81.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Our Office</p>
                      <p className="text-slate-300">212 N. 2ND ST. STE 100</p>
                      <p className="text-slate-300">Richmond, KY 40475</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <p className="text-slate-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <p className="text-slate-300">info@thelogicless.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-80 border border-slate-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.7461539595894!2d-84.29817842406906!3d37.74768161338846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842433e0e3a1d27%3A0x5e0a6c8c7c8c0!2s212%20N%202nd%20St%20%23100%2C%20Richmond%2C%20KY%2040475!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
