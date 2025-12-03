import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location]);

  const servicesLinks = [
    { name: 'All Services', path: '/services', isSpecial: true },
    { name: 'Web Development', path: '/services/web-development', isSpecial: false },
    { name: 'AI Bot Development', path: '/services/ai-bot-development', isSpecial: false },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions', isSpecial: false },
    { name: 'AI & Machine Learning', path: '/services/ai-ml', isSpecial: false },
    { name: 'Mobile Development', path: '/services/mobile-development', isSpecial: false },
    { name: 'E-Commerce Solutions', path: '/services/e-commerce-solutions', isSpecial: false },
    { name: 'Blockchain Development', path: '/services/blockchain-development', isSpecial: false },
    { name: 'Cybersecurity', path: '/services/cybersecurity', isSpecial: false },
    { name: 'DevOps & CI/CD', path: '/services/devops', isSpecial: false },
    { name: 'Data Analytics', path: '/services/data-analytics', isSpecial: false },
    { name: 'IoT Solutions', path: '/services/iot-solutions', isSpecial: false },
    { name: 'UI/UX Design', path: '/services/ui-ux-design', isSpecial: false }
  ];

  const careersLinks = [
    { name: 'View All Jobs', path: '/careers', isSpecial: true },
    { name: 'Full-time Positions', path: '/careers?type=full-time', isSpecial: false },
    { name: 'Contract Positions', path: '/careers?type=contract', isSpecial: false }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-teal-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">TL</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              TheLogicLess
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/what-we-do"
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              What We Do
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-800/98 backdrop-blur-xl rounded-xl shadow-2xl shadow-teal-500/20 border border-teal-500/30 animate-fade-in overflow-hidden">
                  <div className="max-h-96 overflow-y-auto py-3 custom-scrollbar">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-5 py-2.5 transition-all duration-200 font-medium ${
                          link.isSpecial
                            ? 'bg-gradient-to-r from-orange-500/20 to-teal-500/20 text-teal-300 hover:from-orange-500/30 hover:to-teal-500/30 border-l-4 border-orange-500'
                            : 'text-slate-300 hover:text-teal-400 hover:bg-teal-500/10'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/staffing"
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Staffing
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('careers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Careers</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'careers' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'careers' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-800/98 backdrop-blur-xl rounded-xl shadow-2xl shadow-teal-500/20 py-3 border border-teal-500/30 animate-fade-in">
                  {careersLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-5 py-2.5 transition-all duration-200 font-medium ${
                        link.isSpecial
                          ? 'bg-gradient-to-r from-orange-500/20 to-teal-500/20 text-teal-300 hover:from-orange-500/30 hover:to-teal-500/30 border-l-4 border-orange-500'
                          : 'text-slate-300 hover:text-teal-400 hover:bg-teal-500/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-teal-500/20">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/what-we-do"
              className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              What We Do
            </Link>
            <div>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'services' ? null : 'services')
                }
                className="w-full flex items-center justify-between text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'services' && (
                <div className="mt-2 ml-4 space-y-2 max-h-64 overflow-y-auto">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block transition-colors duration-200 ${
                        link.isSpecial
                          ? 'text-teal-300 font-semibold'
                          : 'text-slate-400 hover:text-teal-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/staffing"
              className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Staffing
            </Link>
            <div>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'careers' ? null : 'careers')
                }
                className="w-full flex items-center justify-between text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                <span>Careers</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'careers' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'careers' && (
                <div className="mt-2 ml-4 space-y-2">
                  {careersLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block transition-colors duration-200 ${
                        link.isSpecial
                          ? 'text-teal-300 font-semibold'
                          : 'text-slate-400 hover:text-teal-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
