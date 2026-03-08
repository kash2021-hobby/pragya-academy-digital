import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import { User } from 'lucide-react';
import mukutKalitaImg from '@/assets/mukut-kalita.webp';
import placeholder1 from '@/assets/faculty-placeholder-1.webp';
import placeholder2 from '@/assets/faculty-placeholder-2.webp';
import placeholder3 from '@/assets/faculty-placeholder-3.webp';
import placeholder4 from '@/assets/faculty-placeholder-4.webp';
import placeholder5 from '@/assets/faculty-placeholder-5.webp';
import placeholder6 from '@/assets/faculty-placeholder-6.webp';
import placeholder7 from '@/assets/faculty-placeholder-7.webp';
import placeholder8 from '@/assets/faculty-placeholder-8.webp';
import placeholder9 from '@/assets/faculty-placeholder-9.webp';
import placeholder10 from '@/assets/faculty-placeholder-10.webp';
import placeholder11 from '@/assets/faculty-placeholder-11.webp';
import placeholder12 from '@/assets/faculty-placeholder-12.webp';
import placeholder13 from '@/assets/faculty-placeholder-13.webp';
import placeholder14 from '@/assets/faculty-placeholder-14.webp';
import placeholder15 from '@/assets/faculty-placeholder-15.webp';
import placeholder16 from '@/assets/faculty-placeholder-16.webp';
import placeholder17 from '@/assets/faculty-placeholder-17.webp';
import placeholder18 from '@/assets/faculty-placeholder-18.webp';

const facultyData = [
  { name: 'Dr. Mukut Kalita', subject: 'Chemistry', qualification: 'M.Sc, Ph.D', experience: '19 Years', image: mukutKalitaImg, details: 'Worked at Shrimanta Shankar Academy, Dispur; CIPET, Changsari; Anundoram Borooah Academy, Pathsala etc.' },
  { name: 'Sahjahan Ali', subject: 'Chemistry', qualification: 'B. Pharm', experience: '3 Years', image: placeholder1 },
  { name: 'Imran Choudhury', subject: 'Physics', qualification: 'M.Sc', experience: '5 Years', image: placeholder2 },
  { name: 'Bhaskar Deep Kashyap', subject: 'Assamese', qualification: 'MA, D.El.Ed.', experience: '15 Years', image: placeholder3 },
  { name: 'Firoza Begum', subject: 'Assamese', qualification: 'MA', experience: '26 Years', image: placeholder4 },
  { name: 'Kangkana Kundinya', subject: 'English', qualification: 'MA, B. Ed', experience: '5 Years', image: placeholder5 },
  { name: 'Mahananda Barua', subject: 'English', qualification: 'MA, B. Ed', experience: '25 Years', image: placeholder6 },
  { name: 'Mehdi Alam Mustafee', subject: 'Mathematics', qualification: 'M.Sc', experience: '7 Years', image: placeholder7 },
  { name: 'Khanindra Kalita', subject: 'Mathematics', qualification: 'M.Sc, B. Ed', experience: '5 Years', image: placeholder8 },
  { name: 'Sajidul Islam', subject: 'Zoology', qualification: 'M.Sc, B. Ed', experience: '3 Years', image: placeholder9 },
  { name: 'Parag Sarma', subject: 'Assamese', qualification: 'MA', experience: '10 Years', image: placeholder10 },
  { name: 'Kamal Jyoti Deka', subject: 'Political Science', qualification: 'MA, D.El.Ed.', experience: '9 Years', image: placeholder11 },
  { name: 'Nishigandha Kashyap', subject: 'Geography', qualification: 'MA, D.El.Ed.', experience: '5 Years', image: placeholder12 },
  { name: 'Sweety Deka', subject: 'Geography', qualification: 'MA', experience: '6 Years', image: placeholder13 },
  { name: 'Archana Deka', subject: 'Logic & Philosophy', qualification: 'MA, D.El.Ed.', experience: '6 Years', image: placeholder14 },
  { name: 'Sonia Nath', subject: 'Anthropology', qualification: 'MA', experience: '2 Years', image: placeholder15 },
  { name: 'Mitu Rani Bora', subject: 'Education', qualification: 'MA, D.El.Ed, B.Ed', experience: '6 Years', image: placeholder16 },
  { name: 'Jit Bhuyan', subject: 'Accountancy', qualification: 'M.Com', experience: '6 Years', image: placeholder17 },
  { name: 'Rakesh Deka', subject: 'Finance', qualification: 'M.Com', experience: '8 Years', image: placeholder18 },
];

const Faculties = () => {
  useScrollReveal();
  return (
    <>
      <PageHero title="Our Faculties" subtitle="Meet Our Dedicated Team" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facultyData.map((f, i) => (
              <div key={i} className="scroll-reveal flex flex-col bg-card rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
                  {f.image ? (
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={64} className="text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="font-heading text-sm font-bold text-foreground">{f.name}</h3>
                  <p className="text-orange text-xs font-medium mt-1">{f.subject}</p>
                  <p className="text-muted-foreground text-xs mt-1">{f.qualification}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1">Experience: {f.experience}</p>
                  {f.details && (
                    <p className="text-muted-foreground/60 text-xs mt-2 italic line-clamp-3">{f.details}</p>
                  )}
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
