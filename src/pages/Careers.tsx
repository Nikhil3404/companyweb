import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { jobs, Job } from '../data/jobs';
import { X, MapPin, Briefcase } from 'lucide-react';

const Careers = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const [filter, setFilter] = useState<'All' | 'Full-time' | 'Contract'>(
    typeParam === 'full-time' ? 'Full-time' : typeParam === 'contract' ? 'Contract' : 'All'
  );
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filteredJobs = filter === 'All' ? jobs : jobs.filter((job) => job.type === filter);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-400">Discover exciting opportunities</p>
        </div>

        <div className="flex justify-center space-x-4 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {['All', 'Full-time', 'Contract'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === type
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job, index) => (
            <AnimatedSection key={job.id} animation="fade-in-up" delay={index * 50}>
              <div
                className={`transition-all duration-300 ${
                  hoveredId && hoveredId !== job.id ? 'opacity-30' : 'opacity-100'
                }`}
                onMouseEnter={() => setHoveredId(job.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  onClick={() => setSelectedJob(job)}
                  className="group rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden cursor-pointer"
                >
                <div className="h-48 overflow-hidden relative">
                  <img src={job.imageUrl} alt={job.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${job.type === 'Full-time' ? 'bg-teal-500/20 text-teal-400' : 'bg-purple-500/20 text-purple-400'}`}>
                    {job.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-teal-400 transition-colors">{job.title}</h3>
                  <div className="flex items-center text-slate-400 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />{job.location}
                  </div>
                  <p className="text-slate-400 line-clamp-2">{job.description}</p>
                </div>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal-500/30 animate-scale-in">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                <div className="flex items-center space-x-4 text-slate-400">
                  <div className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />{selectedJob.type}</div>
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{selectedJob.location}</div>
                </div>
              </div>
              <button onClick={() => setSelectedJob(null)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img src={selectedJob.imageUrl} alt={selectedJob.title} className="w-full h-64 object-cover rounded-xl mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">About This Role</h3>
              <p className="text-slate-300 mb-6">{selectedJob.description}</p>
              <h3 className="text-2xl font-bold text-white mb-4">Requirements</h3>
              <ul className="space-y-2 mb-6">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start"><span className="text-teal-400 mr-2">•</span><span className="text-slate-300">{req}</span></li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold text-white mb-4">Responsibilities</h3>
              <ul className="space-y-2 mb-6">
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start"><span className="text-teal-400 mr-2">•</span><span className="text-slate-300">{resp}</span></li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold">Apply Now</button>
                <button onClick={() => setSelectedJob(null)} className="px-6 py-3 bg-slate-800 text-white rounded-lg">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
