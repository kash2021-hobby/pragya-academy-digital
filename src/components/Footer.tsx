import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-main section-padding !py-12 md:!py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Pragya Academy Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain" />
              <span className="font-heading text-2xl font-bold text-primary-foreground">Pragya</span>
              <span className="font-heading text-2xl font-bold text-orange">Academy</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering learners for tomorrow through quality education in Science, Arts, and Commerce since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{ to: '/about', label: 'About Us' }, { to: '/courses', label: 'Courses' }, { to: '/faculties', label: 'Faculties' }, { to: '/gallery', label: 'Gallery' }, { to: '/contact', label: 'Contact' }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/70 hover:text-orange transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-orange shrink-0" />Baihata Chariali, Mangaldoi Road, Assam, 781381</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-orange shrink-0" />+91-9435015476</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-orange shrink-0" />pragyaacademy2017@gmail.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-orange transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Pragya Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
