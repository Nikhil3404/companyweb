import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// NavLink helper to handle current page clicks
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Optional: trigger animations on the page if needed
      window.dispatchEvent(new CustomEvent('pageClick', { detail: to }));
    }
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

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
  }, [location]);

  const servicesLinks = [
    { name: 'All Services', path: '/services' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'AI & Machine Learning', path: '/services/ai-ml' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
  ];

  const careersLinks = [
    { name: 'View All Jobs', path: '/careers' },
    { name: 'Full-time Positions', path: '/careers?type=full-time' },
    { name: 'Contract Positions', path: '/careers?type=contract' },
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
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">TL</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              TheLogicLess
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              Home
            </NavLink>
            <NavLink to="/what-we-do" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              What We Do
            </NavLink>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-slate-800/98 backdrop-blur-xl rounded-xl shadow-2xl shadow-teal-500/20 py-3 border border-teal-500/30 animate-fade-in">
                  {servicesLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="block px-5 py-2.5 text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200 font-medium"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/staffing" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              Staffing
            </NavLink>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('careers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Careers</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'careers' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'careers' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-slate-800/98 backdrop-blur-xl rounded-xl shadow-2xl shadow-teal-500/20 py-3 border border-teal-500/30 animate-fade-in">
                  {careersLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="block px-5 py-2.5 text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200 font-medium"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-teal-500/20">
          <div className="px-4 py-6 space-y-4">
            <NavLink to="/" className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              Home
            </NavLink>
            <NavLink to="/what-we-do" className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              What We Do
            </NavLink>

            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeDropdown === 'services' && (
                <div className="mt-2 ml-4 space-y-2">
                  {servicesLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className="block text-slate-400 hover:text-teal-400 transition-colors duration-200">
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/staffing" className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              Staffing
            </NavLink>

            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'careers' ? null : 'careers')}
                className="w-full flex items-center justify-between text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                <span>Careers</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'careers' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeDropdown === 'careers' && (
                <div className="mt-2 ml-4 space-y-2">
                  {careersLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className="block text-slate-400 hover:text-teal-400 transition-colors duration-200">
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className="block text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium text-center"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
