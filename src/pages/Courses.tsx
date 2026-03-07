import { useState } from 'react';
import { FlaskConical, Palette, Briefcase, Target, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';

const compulsory = ['English', 'Assamese / Alt English', 'Environmental Education'];

const streams = [
  { icon: FlaskConical, title: 'Science', color: 'bg-blue-500/10 text-blue-600', subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Geography', 'IT'] },
  { icon: Palette, title: 'Arts', color: 'bg-purple-500/10 text-purple-600', subjects: ['Political Science', 'Logic / Philosophy', 'Education', 'Economics', 'Geography', 'Anthropology', 'Bihu'] },
  { icon: Briefcase, title: 'Commerce', color: 'bg-green-500/10 text-green-600', subjects: ['Accountancy', 'Business Studies', 'Economics', 'Banking and Finance'] },
  { icon: Target, title: 'Integrated Programme', color: 'bg-orange/10 text-orange', subjects: ['NEET', 'JEE', 'CUET', 'CEE'] },
];

const Courses = () => {
  useScrollReveal();
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero title="Courses" subtitle="Explore Our Streams" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          {/* Compulsory */}
          <div className="scroll-reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange rounded-full px-5 py-2 text-sm font-semibold mb-4">
              <BookOpen size={16} /> Compulsory Subjects
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {compulsory.map((s) => (
                <span key={s} className="bg-secondary text-foreground text-sm font-medium px-4 py-2 rounded-lg">{s}</span>
              ))}
            </div>
          </div>

          {/* Stream Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {streams.map((stream, i) => (
              <div
                key={i}
                className={`scroll-reveal bg-card rounded-xl shadow-md p-8 card-hover cursor-pointer border-2 transition-colors ${active === i ? 'border-orange' : 'border-transparent'}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stream.color}`}>
                    <stream.icon size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{stream.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stream.subjects.map((sub) => (
                    <span key={sub} className="bg-secondary text-muted-foreground text-sm px-3 py-1.5 rounded-lg">{sub}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
