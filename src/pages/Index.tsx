import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Users, Monitor, Laptop, Shield, BookOpen, GraduationCap, FlaskConical, Trophy, UserCheck, GitBranch, Mail, Camera, Home, Heart, Presentation } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import heroCampus from '@/assets/hero-campus.webp';
import campus1 from '@/assets/gallery-1.webp';
import campus2 from '@/assets/gallery-2.webp';
import campus3 from '@/assets/gallery-10.webp';

const services = [
  { icon: UserCheck, title: 'Qualified Staff', desc: 'Powered by highly qualified and dedicated faculty members.' },
  { icon: Monitor, title: 'Expert Classes', desc: 'Advanced digital learning tools and smart classrooms.' },
  { icon: Laptop, title: 'Digital Learning', desc: 'Embracing technology-driven education with online resources.' },
  { icon: Shield, title: 'Best Environment', desc: 'A safe, disciplined, and student-friendly environment.' },
];

const whyChoose = [
  { icon: BookOpen, title: 'Interactive Classes', desc: 'Engaging, effective, and concept-oriented methods.' },
  { icon: GraduationCap, title: 'Experienced Faculty', desc: 'Deep subject knowledge and innovative techniques.' },
  { icon: FlaskConical, title: 'Modern Labs', desc: 'Well-equipped labs for hands-on practical exposure.' },
  { icon: Camera, title: 'CCTV Surveillance', desc: 'Complete campus security with 24/7 monitoring.' },
  { icon: Home, title: 'Separate Hostels', desc: 'Safe and comfortable hostels for boys and girls.' },
  { icon: Heart, title: 'Special Care for Students', desc: 'Individual attention and personalized support.' },
  { icon: Presentation, title: 'Smart Digital Classroom', desc: 'Modern technology-enabled interactive learning spaces.' },
];

const Index = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const streams = useCountUp(3);
  const professors = useCountUp(30);
  const trophies = useCountUp(30);
  const students = useCountUp(1000);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img ref={heroImgRef} src={heroCampus} alt="Pragya Academy Campus" className="absolute inset-0 w-full h-[120%] object-cover will-change-transform" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        <div className="relative z-10 container-main px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <p className="text-orange font-semibold tracking-wider uppercase text-sm mb-4">Welcome to Pragya Academy</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
              Empowering Learners for <span className="text-orange">Tomorrow</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl">
              Quality education in Science, Arts & Commerce since 2017. Building ambitious futures with dedication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-orange text-base">Get Started</Link>
              <Link to="/about" className="btn-orange-outline !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-navy text-base">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="relative z-10 -mt-16 md:-mt-20 container-main px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="scroll-reveal bg-card rounded-xl shadow-lg p-6 card-hover" 
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                <s.icon size={24} className="text-orange" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal grid grid-cols-2 gap-4">
              <img src={campus1} alt="Campus" className="rounded-xl shadow-md col-span-1 h-48 md:h-64 object-cover w-full" />
              <img src={campus2} alt="Classroom" className="rounded-xl shadow-md col-span-1 h-48 md:h-64 object-cover w-full mt-8" />
              <img src={campus3} alt="Lab" className="rounded-xl shadow-md col-span-2 h-48 md:h-56 object-cover w-full" />
            </div>
            <div className="scroll-reveal">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Welcome To Pragya Academy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pragya Academy, Baihata Chariali was established in 2017. Classes are conducted in both Assamese and English languages. Our dedicated team will lead the students towards an ambitious future.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer comprehensive education across Science, Arts, and Commerce streams with experienced faculty and modern facilities.
              </p>
              <Link to="/about" className="btn-orange inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { ref: streams.ref, count: streams.count, label: 'Streams', icon: GitBranch },
              { ref: professors.ref, count: professors.count, label: 'Experienced Professors', icon: Users, suffix: '+' },
              { ref: trophies.ref, count: trophies.count, label: 'Trophy Won', icon: Trophy, suffix: '+' },
              { ref: students.ref, count: students.count, label: 'Student Enrolled', icon: GraduationCap, suffix: '+' },
            ].map((stat, i) => (
              <div key={i} ref={stat.ref} className="text-primary-foreground">
                <stat.icon size={32} className="text-orange mx-auto mb-3" />
                <div className="font-heading text-3xl md:text-4xl font-bold">{stat.count}{stat.suffix}</div>
                <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-soft overflow-hidden">
        <div className="container-main">
          <div className="text-center mb-12 scroll-reveal">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Key Strengths</h2>
          </div>
          
          {/* Animated horizontal scrolling cards */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-cards">
              {/* First set of cards */}
              {whyChoose.map((item, i) => (
                <div key={`first-${i}`} className="flex-shrink-0 w-72 bg-card rounded-xl shadow-md p-6 text-center card-hover">
                  <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-orange" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {whyChoose.map((item, i) => (
                <div key={`second-${i}`} className="flex-shrink-0 w-72 bg-card rounded-xl shadow-md p-6 text-center card-hover">
                  <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-orange" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen */}
      <section className="bg-orange py-10 md:py-14">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">Facing Difficulties To Find a Course?</h3>
              <p className="text-primary-foreground/80 mt-1">Let us know and we'll help you out.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 md:w-72 px-4 py-3 rounded-xl text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              <button className="bg-navy text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-navy-dark transition-colors">
                <Mail size={18} className="inline mr-1" /> Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
