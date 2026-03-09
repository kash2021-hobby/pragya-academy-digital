import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';
import gallery5 from '@/assets/gallery-5.webp';
import gallery6 from '@/assets/gallery-6.webp';
import gallery7 from '@/assets/gallery-7.webp';
import gallery8 from '@/assets/gallery-8.webp';
import gallery9 from '@/assets/gallery-9.webp';
import gallery10 from '@/assets/gallery-10.webp';
import gallery11 from '@/assets/gallery-11.webp';
import gallery12 from '@/assets/gallery-12.webp';
import gallery13 from '@/assets/gallery-13.webp';
import gallery14 from '@/assets/gallery-14.webp';
import gallery15 from '@/assets/gallery-15.webp';
import gallery16 from '@/assets/gallery-16.webp';
import gallery17 from '@/assets/gallery-17.webp';
import gallery18 from '@/assets/gallery-18.webp';
import gallery19 from '@/assets/gallery-19.webp';
import gallery20 from '@/assets/gallery-20.webp'; 
import gallery21 from '@/assets/gallery-21.webp';
import gallery22 from '@/assets/gallery-22.webp';
import gallery23 from '@/assets/gallery-23.webp';
import gallery24 from '@/assets/gallery-24.webp';
import gallery25 from '@/assets/gallery-25.webp';
import gallery26 from '@/assets/gallery-26.webp';
import gallery27 from '@/assets/gallery-27.webp';
import gallery28 from '@/assets/gallery-28.webp';
import gallery29 from '@/assets/gallery-29.webp';
import gallery30 from '@/assets/gallery-30.webp';
import gallery31 from '@/assets/gallery-31.webp';
import gallery32 from '@/assets/gallery-32.webp';
import gallery33 from '@/assets/gallery-33.webp';
import gallery34 from '@/assets/gallery-34.webp';
import gallery35 from '@/assets/gallery-35.webp';
import gallery36 from '@/assets/gallery-36.webp';
import gallery37 from '@/assets/gallery-37.webp';
import gallery38 from '@/assets/gallery-38.webp';
import gallery39 from '@/assets/gallery-39.webp';
import gallery40 from '@/assets/gallery-40.webp';
import gallery41 from '@/assets/gallery-41.webp';
import gallery42 from '@/assets/gallery-42.webp';
import gallery43 from '@/assets/gallery-43.webp';
import gallery44 from '@/assets/gallery-44.webp';
import gallery45 from '@/assets/gallery-45.webp';
import gallery46 from '@/assets/gallery-46.webp';
import gallery47 from '@/assets/gallery-47.webp';
import gallery48 from '@/assets/gallery-48.webp';
import gallery49 from '@/assets/gallery-49.webp';
import gallery50 from '@/assets/gallery-50.webp';
import gallery51 from '@/assets/gallery-51.webp';
import gallery52 from '@/assets/gallery-52.webp';
import gallery53 from '@/assets/gallery-53.webp';
import gallery54 from '@/assets/gallery-54.webp';
import gallery55 from '@/assets/gallery-55.webp';
import gallery56 from '@/assets/gallery-56.webp';
import gallery57 from '@/assets/gallery-57.webp';
import gallery58 from '@/assets/gallery-58.webp';
import gallery59 from '@/assets/gallery-59.webp';
import gallery60 from '@/assets/gallery-60.webp';
import gallery61 from '@/assets/gallery-61.webp';
import gallery62 from '@/assets/gallery-62.webp';
import gallery63 from '@/assets/gallery-63.webp'; 
import gallery64 from '@/assets/gallery-64.webp';
import gallery65 from '@/assets/gallery-65.webp';
import gallery66 from '@/assets/gallery-66.webp';
import gallery67 from '@/assets/gallery-67.webp';
import gallery68 from '@/assets/gallery-68.webp';
import gallery69 from '@/assets/gallery-69.webp';
import gallery70 from '@/assets/gallery-70.webp';
import gallery78 from '@/assets/gallery-78.webp'
import gallery79 from '@/assets/gallery-79.webp'
import gallery80 from '@/assets/gallery-80.webp'
import gallery81 from '@/assets/gallery-81.webp'
import gallery82 from '@/assets/gallery-82.webp'
import gallery83 from '@/assets/gallery-83.webp'
import gallery85 from '@/assets/gallery-85.webp'
import gallery86 from '@/assets/gallery-86.webp'
import gallery87 from '@/assets/gallery-87.webp'
import gallery89 from '@/assets/gallery-89.webp'
import gallery90 from '@/assets/gallery-90.webp'
import gallery91 from '@/assets/gallery-91.webp'
import gallery92 from '@/assets/gallery-92.webp'
import gallery93 from '@/assets/gallery-93.webp'
import gallery94 from '@/assets/gallery-94.webp'
import gallery95 from '@/assets/gallery-95.webp'
import gallery96 from '@/assets/gallery-96.webp'
import gallery97 from '@/assets/gallery-97.webp'
import gallery99 from '@/assets/gallery-99.webp'
import gallery100 from '@/assets/gallery-100.webp'
import gallery101 from '@/assets/gallery-101.webp'
import gallery102 from '@/assets/gallery-102.webp'
;




const images = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
  { src: gallery7 },
  { src: gallery8 },
  { src: gallery9 },
  { src: gallery10 },
  { src: gallery11 },
  { src: gallery12 },
  { src: gallery13 },
  { src: gallery14 },
  { src: gallery15 },
  { src: gallery16 },
  { src: gallery17 },
  { src: gallery18 },
  { src: gallery19 },
  { src: gallery20 },
  { src: gallery21 },
  { src: gallery22 },
  { src: gallery23 },
  { src: gallery24 },
  { src: gallery25 },
  { src: gallery26 },
  { src: gallery27 },
  { src: gallery28 },
  { src: gallery29 },
  { src: gallery30 },
  { src: gallery31 },
  { src: gallery32 },
  { src: gallery33 },
  { src: gallery34 },
  { src: gallery35 },
  { src: gallery36 },
  { src: gallery37 },
  { src: gallery38 },
  { src: gallery39 },
  { src: gallery40 },
  { src: gallery41 },
  { src: gallery42 },
  { src: gallery43 },
  { src: gallery44 },
  { src: gallery45 },
  { src: gallery46 },
  { src: gallery47 },
  { src: gallery48 },
  { src: gallery49 },
  { src: gallery50 },
  { src: gallery51 },
  { src: gallery52 },
  { src: gallery53 },
  { src: gallery54 },
  { src: gallery55 },
  { src: gallery56 },
  { src: gallery57 },
  { src: gallery58 },
  { src: gallery59 },
  { src: gallery60 },
  { src: gallery61 },
  { src: gallery62 },
  { src: gallery63 },
  { src: gallery64 },
  { src: gallery65 },
  { src: gallery66 },
  { src: gallery67 },
  { src: gallery68 },
  { src: gallery69 },
  { src: gallery70 },
  { src: gallery78 },
  { src: gallery79 },
  { src: gallery80 },
  { src: gallery81 },
  { src: gallery82 },
  { src: gallery83 },
  { src: gallery85 },
  { src: gallery86 },
  { src: gallery87 },
  { src: gallery89 },
  { src: gallery90 },
  { src: gallery91 },
  { src: gallery92 },
  { src: gallery93 },
  { src: gallery94 },
  { src: gallery95 },
  { src: gallery96 },
  { src: gallery97 },
  { src: gallery99 },
  { src: gallery100 },
  { src: gallery101 },
  { src: gallery102 },

];

const Gallery = () => {
  useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // Handle touch events for swipe
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
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <>
      <PageHero title="Gallery" subtitle="Moments & Memories" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div 
                key={i} 
                className="scroll-reveal break-inside-avoid cursor-pointer group" 
                onClick={() => openLightbox(i)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={img.src} 
                    alt={`Gallery image ${i + 1}`}
                    loading="lazy" /* Lazy loading for performance */
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    style={{ height: i % 3 === 0 ? '350px' : i % 3 === 1 ? '250px' : '300px' }} 
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox with Swipe Navigation */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close button - Enhanced visibility */}
          <button 
            className="absolute top-4 right-4 z-[60] text-white hover:text-orange transition-all duration-300 p-3 bg-black/70 rounded-full hover:bg-black/90 hover:scale-110 shadow-lg" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={36} strokeWidth={2.5} />
          </button>

          {/* Previous button */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] text-white hover:text-orange transition-all duration-300 p-2 bg-black/70 rounded-full hover:bg-black/90 hover:scale-110 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} strokeWidth={2.5} />
          </button>

          {/* Next button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] text-white hover:text-orange transition-all duration-300 p-2 bg-black/70 rounded-full hover:bg-black/90 hover:scale-110 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={40} strokeWidth={2.5} />
          </button>

          {/* Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={images[lightboxIndex].src} 
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
