import { useState } from 'react';
import { X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import campus1 from '@/assets/campus-1.jpg';
import campus2 from '@/assets/campus-2.jpg';
import campus3 from '@/assets/campus-3.jpg';
import heroCampus from '@/assets/hero-campus.jpg';

const categories = ['All', 'Campus', 'Labs', 'Events', 'Achievements'];

const images = [
  { src: heroCampus, category: 'Campus', title: 'Campus Aerial View' },
  { src: campus1, category: 'Campus', title: 'Main Building' },
  { src: campus2, category: 'Events', title: 'Classroom Session' },
  { src: campus3, category: 'Labs', title: 'Science Laboratory' },
  { src: heroCampus, category: 'Achievements', title: 'Annual Day' },
  { src: campus1, category: 'Campus', title: 'Campus Grounds' },
  { src: campus3, category: 'Labs', title: 'Chemistry Lab' },
  { src: campus2, category: 'Events', title: 'Cultural Event' },
];

const Gallery = () => {
  useScrollReveal();
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <PageHero title="Gallery" subtitle="Moments & Memories" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat ? 'bg-orange text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div key={i} className="scroll-reveal break-inside-avoid cursor-pointer group" onClick={() => setLightbox(img.src)}>
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ height: i % 3 === 0 ? '350px' : i % 3 === 1 ? '250px' : '300px' }} />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-end">
                    <p className="text-primary-foreground font-medium text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">{img.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}><X size={32} /></button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
};

export default Gallery;
