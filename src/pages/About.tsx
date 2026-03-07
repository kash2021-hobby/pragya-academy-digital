import { Eye, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  useScrollReveal();
  return (
    <>
      <PageHero title="About Us" subtitle="Discover Our Story" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main max-w-3xl text-center scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Welcome to Pragya Academy</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-base md:text-lg">
            <p>Pragya Academy, Baihata Chariali was established in 2017. Classes are conducted in both Assamese and English languages. Our dedicated team of experienced professors will lead the students towards an ambitious future.</p>
            <p>We offer comprehensive education across Science, Arts, and Commerce streams. Our institution is committed to providing quality education with modern facilities, well-equipped laboratories, and a nurturing environment that fosters academic excellence.</p>
            <p className="font-semibold text-orange">Limited seats available. Apply today to secure your future!</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Eye, title: 'Our Vision', text: 'To impart student centric education and empower them in an environment that is diverse, vibrant & inclusive.' },
              { icon: Heart, title: 'Our Values', text: 'To benchmark education services of highest quality, uphold integrity, and equip students to be responsible citizens.' },
            ].map((card, i) => (
              <div key={i} className="scroll-reveal bg-card rounded-xl shadow-lg p-8 card-hover">
                <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center mb-5">
                  <card.icon size={28} className="text-orange" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
