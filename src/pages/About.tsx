import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, TrendingUp, Globe, Shield, ArrowRight, Lightbulb } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const values = [
    { icon: Target, title: 'Excellence', description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations.' },
    { icon: Heart, title: 'Integrity', description: 'We operate with transparency and honesty, building trust through ethical practices.' },
    { icon: Users, title: 'Collaboration', description: 'We believe in teamwork, fostering partnerships that bring innovative solutions.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace change and continuously explore new technologies.' },
    { icon: Shield, title: 'Commitment', description: 'We are dedicated to our clients success, providing unwavering support.' },
    { icon: Globe, title: 'Diversity', description: 'We celebrate diverse backgrounds creating an inclusive environment.' }
  ];

  const metrics = [
    { icon: Award, number: 20, label: 'Projects' },
    { icon: Users, number: 15, label: 'Team Members' },
    { icon: TrendingUp, number: 100, label: 'Satisfaction', isPercent: true },
    { icon: Globe, number: 5, label: 'Clients' }
  ];

  // Intersection observer for scroll-triggered animation
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3
  });

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About TheLogicLess</h1>
          <p className="text-xl text-slate-400">Where Logic Ends, Creativity Begins</p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-lg text-slate-300 mb-4">
              Every great idea starts with a simple problem. Ours started with seeing how great talent often goes unnoticed and how businesses struggle to find the right tech expertise at the right time.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              What began as a small vision to deliver reliable software solutions and honest IT staffing quickly grew into something bigger. We realized that companies don’t just need developers or engineers — they need problem solvers, thinkers, and long-term partners. And professionals don’t just need jobs — they need growth, mentorship, and the right opportunities.
            </p>
            <p className="text-lg text-slate-300 mb-4">That’s where we come in.</p>
            <p className="text-lg text-slate-300">
              Today, TheLogicLess works across Software Development, Cloud Services, Data Engineering, Artificial Intelligence, Cyber Security, Web Development, and IT Staffing. We help businesses scale with confidence and help professionals build meaningful careers.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
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

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all duration-300">
                <Icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Metrics Section with scroll-triggered animation every time */}
        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <Icon className="w-10 h-10 mx-auto mb-4 text-teal-400" />
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {metricsInView ? (
                    <CountUp
                      key={metricsInView ? `count-${idx}` : `count-${idx}-out`}
                      start={0}
                      end={metric.number}
                      duration={2}
                      suffix={metric.isPercent ? '%' : ''}
                    />
                  ) : (
                    0
                  )}
                </div>
                <div className="text-slate-400">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="p-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
