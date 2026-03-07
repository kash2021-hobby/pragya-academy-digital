interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const PageHero = ({ title, subtitle, bgImage }: PageHeroProps) => (
  <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
    <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-navy/75" />
    <div className="relative text-center text-primary-foreground z-10">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-primary-foreground/80 text-lg">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
