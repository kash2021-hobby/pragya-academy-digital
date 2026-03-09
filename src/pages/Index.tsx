import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Users, Monitor, Laptop, Shield, BookOpen, GraduationCap, FlaskConical, Trophy, UserCheck, GitBranch, Mail, Camera, Home, Heart, Presentation, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import heroCampus from '@/assets/gallery-59.webp';
import campus1 from '@/assets/gallery-3.webp';
import campus2 from '@/assets/gallery-19.webp';
import campus3 from '@/assets/gallery-10.webp';
import topAchievers from '@/assets/top-achievers.webp';
import results2025 from '@/assets/results-2025.webp';
import results2024 from '@/assets/results-2024.webp';
// Gallery images
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery5 from '@/assets/gallery-5.webp';
import gallery7 from '@/assets/gallery-7.webp';
import gallery8 from '@/assets/gallery-8.webp';
import gallery9 from '@/assets/gallery-9.webp';

const heroImages = [heroCampus, campus1, campus3];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'achievers' | '2025' | '2024'>('achievers');

  useScrollReveal();

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  const streams = useCountUp(3);
  const professors = useCountUp(30);
  const trophies = useCountUp(30);
  const students = useCountUp(1000);

  return (
    <>
      {/* Hero Slider */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Images with Ken Burns Effect */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 w-full h-full animate-ken-burns">
              <img 
                src={img} 
                alt={`Pragya Academy ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
        
        {/* Dark Overlay - Full Coverage */}
        <div className="absolute inset-0 w-full h-full bg-black/45 z-10" />
        
        {/* Centered Content */}
        <div className="relative z-20 container-main px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 animate-fade-in">
              Welcome to Pragya Academy
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              Empowering Learners for <span className="text-orange">Tomorrow</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up-delay">
              Quality education in Science, Arts & Commerce since 2017. Building ambitious futures with dedication.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
              <Link to="/courses" className="btn-orange text-base w-full sm:w-auto">Get Started</Link>
              <Link to="/about" className="btn-orange-outline !border-white !text-white hover:!bg-white hover:!text-navy text-base w-full sm:w-auto">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Service Cards with Alternating Colors */}
      <section className="relative z-50 -mt-24 md:-mt-32 container-main px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="scroll-reveal rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl bg-white"
              style={{ 
                transitionDelay: `${i * 150}ms`,
                backgroundColor: i % 2 === 0 ? '#e8eef5' : '#fef3ed'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#fef3ed' }}>
                <s.icon size={24} className="text-orange" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: '#1e3a5f' }}>{s.title}</h3>
              <p className="text-sm" style={{ color: '#4a5568' }}>{s.desc}</p>
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

      {/* Consistent Academic Excellence Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
              Consistent Academic Excellence
            </h2>
          </div>

          {/* Tabbed Interface */}
          <div className="scroll-reveal">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('achievers')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'achievers'
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-navy hover:bg-navy/10 shadow-md'
                }`}
              >
                Our Top Achievers
              </button>
              <button
                onClick={() => setActiveTab('2025')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === '2025'
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-navy hover:bg-navy/10 shadow-md'
                }`}
              >
                2025 Results
              </button>
              <button
                onClick={() => setActiveTab('2024')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === '2024'
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-navy hover:bg-navy/10 shadow-md'
                }`}
              >
                2024 Results
              </button>
            </div>

            {/* Tab Content - Centered with max width for desktop */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
              {activeTab === 'achievers' && (
                <div className="animate-fade-in">
                  <img
                    src={topAchievers}
                    alt="Our Top Achievers"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              )}

              {activeTab === '2025' && (
                <div className="animate-fade-in">
                  <img
                    src={results2025}
                    alt="2025 Results"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              )}

              {activeTab === '2024' && (
                <div className="animate-fade-in">
                  <img
                    src={results2024}
                    alt="2024 Results"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-soft">
        <div className="container-main">
          <div className="text-center mb-12 scroll-reveal">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Key Strengths</h2>
          </div>
          
          {/* Responsive Cards Grid with Alternating Colors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <div 
                key={i} 
                className="scroll-reveal rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl"
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  backgroundColor: i % 2 === 0 ? '#e8eef5' : '#fef3ed'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#fef3ed' }}
                >
                  <item.icon size={28} className="text-orange" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: '#1e3a5f' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#4a5568' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12 scroll-reveal">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">Gallery</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Campus Life & Moments</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore the vibrant moments and memories captured at Pragya Academy
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[gallery1, gallery2, gallery5, gallery7, gallery8, gallery9].map((img, i) => (
              <div 
                key={i} 
                className="scroll-reveal group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center scroll-reveal">
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-8 py-4 rounded-xl hover:bg-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              See More
              <ArrowRight size={20} />
            </Link>
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
