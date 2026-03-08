import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  {
    label: 'Academic',
    dropdown: [
      { to: '/academic?tab=principal', label: "Principal's Message" },
      { to: '/academic?tab=advisor', label: "Advisor's Message" },
    ],
  },
  { to: '/courses', label: 'Courses' },
  { to: '/faculties', label: 'Faculties' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcademicOpen, setMobileAcademicOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAcademicOpen(false);
  }, [location]);

  const isAcademicActive = location.pathname === '/academic';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container-main flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pragya Academy Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain" />
          <span className="font-heading text-xl md:text-2xl font-bold text-navy">Pragya</span>
          <span className="font-heading text-xl md:text-2xl font-bold text-orange">Academy</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            'dropdown' in link && link.dropdown ? (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isAcademicActive
                      ? 'text-orange'
                      : scrolled ? 'text-foreground hover:text-orange' : 'text-navy hover:text-orange'
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background/95 backdrop-blur-md rounded-xl shadow-lg border border-border py-2 min-w-[200px]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2.5 text-sm text-foreground hover:text-orange hover:bg-secondary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-orange'
                    : scrolled ? 'text-foreground hover:text-orange' : 'text-navy hover:text-orange'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" className="ml-3 btn-orange text-sm !px-6 !py-2.5">
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-navy">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-up">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              'dropdown' in link && link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileAcademicOpen(!mobileAcademicOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isAcademicActive ? 'text-orange bg-secondary' : 'text-foreground hover:text-orange hover:bg-secondary'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileAcademicOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAcademicOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-orange hover:bg-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to ? 'text-orange bg-secondary' : 'text-foreground hover:text-orange hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/contact" className="block text-center btn-orange mt-3 text-sm">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
