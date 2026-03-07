import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import { User } from 'lucide-react';

const facultyData = [
  { name: 'Dr. Mukut Kalita', subject: 'Chemistry' },
  { name: 'Sahjahan Ali', subject: 'Chemistry' },
  { name: 'Imran Choudhury', subject: 'Physics' },
  { name: 'Bhaskar Deep Kashyap', subject: 'Assamese' },
  { name: 'Firoza Begum', subject: 'Assamese' },
  { name: 'Kangkana Kundinya', subject: 'English' },
  { name: 'Mahananda Barua', subject: 'English' },
  { name: 'Mehdi Alam Mustafee', subject: 'Mathematics' },
  { name: 'Khanindra Kalita', subject: 'Mathematics' },
  { name: 'Sajidul Islam', subject: 'Zoology' },
  { name: 'Parag Sarma', subject: 'Assamese' },
  { name: 'Kamal Jyoti Deka', subject: 'Political Science' },
  { name: 'Nishigandha Kashyap', subject: 'Geography' },
  { name: 'Sweety Deka', subject: 'Geography' },
  { name: 'Archana Deka', subject: 'Logic & Philosophy' },
  { name: 'Sonia Nath', subject: 'Anthropology' },
  { name: 'Mitu Rani Bora', subject: 'Education' },
  { name: 'Jit Bhuyan', subject: 'Accountancy' },
  { name: 'Rakesh Deka', subject: 'Finance' },
];

const Faculties = () => {
  useScrollReveal();
  return (
    <>
      <PageHero title="Our Faculties" subtitle="Meet Our Dedicated Team" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facultyData.map((f, i) => (
              <div key={i} className="scroll-reveal group bg-card rounded-xl shadow-md overflow-hidden card-hover">
                <div className="aspect-[3/4] bg-secondary flex items-center justify-center relative overflow-hidden">
                  <User size={64} className="text-muted-foreground/30" />
                  <div className="absolute inset-0 bg-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <div className="text-center text-primary-foreground">
                      <p className="text-sm font-medium">Experienced & Dedicated</p>
                      <p className="text-xs text-primary-foreground/70 mt-1">Dept. of {f.subject}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading text-sm font-bold text-foreground">{f.name}</h3>
                  <p className="text-orange text-xs font-medium mt-1">{f.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculties;
