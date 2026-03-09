import { useState } from 'react';
import { FlaskConical, Palette, Briefcase, Target, BookOpen, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';

const compulsory = ['English', 'Assamese / Alt English', 'Environmental Education'];

const streams = [
  {
    icon: FlaskConical,
    title: 'Science',
    description: 'Explore Physics, Chemistry, Biology and more to build a strong scientific foundation.',
    bg: 'bg-blue-50 border-t-4 border-t-blue-500',
    iconBg: 'bg-blue-500',
    tagBg: 'bg-blue-100 text-blue-700',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Geography', 'IT'],
  },
  {
    icon: Palette,
    title: 'Arts',
    description: 'Develop critical thinking with humanities, social sciences and creative disciplines.',
    bg: 'bg-purple-50 border-t-4 border-t-purple-500',
    iconBg: 'bg-purple-500',
    tagBg: 'bg-purple-100 text-purple-700',
    subjects: ['Political Science', 'Logic / Philosophy', 'Education', 'Economics', 'Geography', 'Anthropology', 'Bihu'],
  },
  {
    icon: Briefcase,
    title: 'Commerce',
    description: 'Master business, finance and economics for a career in the commercial world.',
    bg: 'bg-green-50 border-t-4 border-t-green-500',
    iconBg: 'bg-green-500',
    tagBg: 'bg-green-100 text-green-700',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Banking and Finance'],
  },
  {
    icon: Target,
    title: 'Integrated Programme',
    description: 'Focused coaching for competitive entrance examinations alongside regular studies.',
    bg: 'bg-orange-50 border-t-4 border-t-orange-500',
    iconBg: 'bg-orange',
    tagBg: 'bg-orange-100 text-orange-700',
    subjects: ['NEET', 'JEE', 'CUET', 'CEE'],
  },
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
          <div className="scroll-reveal grid md:grid-cols-2 gap-6">
            {streams.map((stream, i) => {
              const isOpen = active === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl shadow-md p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${stream.bg}`}
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${stream.iconBg}`}>
                        <stream.icon size={28} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">{stream.title}</h3>
                    </div>
                    <ChevronDown
                      size={22}
                      className={`text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{stream.description}</p>

                  {/* Expandable subjects */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {stream.subjects.map((sub) => (
                        <span key={sub} className={`text-sm font-medium px-3 py-1.5 rounded-lg ${stream.tagBg}`}>{sub}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
