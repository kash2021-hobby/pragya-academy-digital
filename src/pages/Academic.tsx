import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import principalImg from '@/assets/principal.jpg';
import advisorImg from '@/assets/advisor.jpg';

const tabs = ['Principal', 'Advisor'];

const Academic = () => {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHero title="Academic" subtitle="Leadership Messages" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === i ? 'bg-orange text-primary-foreground shadow-lg' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}'s Message
              </button>
            ))}
          </div>

          {activeTab === 0 && (
            <div className="scroll-reveal bg-card rounded-xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 shrink-0">
                  <img src={principalImg} alt="Principal" className="rounded-xl shadow-md w-full max-w-[250px] mx-auto" />
                  <div className="text-center mt-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">ড° ত্ৰিগুনাৰঞ্জন শৰ্মা</h3>
                    <p className="text-orange text-sm font-medium">M.Sc., Ph.D, অধ্যক্ষ</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">অধ্যক্ষৰ বাণী</h2>
                  <div className="text-muted-foreground leading-[1.9] space-y-4 text-base">
                    <p>বাইহাটা চাৰিআলিস্থিত "প্ৰজ্ঞা একাডেমী" বিজ্ঞান, কলা আৰু বাণিজ্য শাখাৰ এখন অগ্ৰণী শিক্ষানুষ্ঠান। ২০১৭ চনত স্থাপিত এই প্ৰতিষ্ঠানে ছাত্ৰ-ছাত্ৰীসকলক উচ্চমানৰ শিক্ষা প্ৰদান কৰি আহিছে। আমাৰ অভিজ্ঞ শিক্ষকমণ্ডলীয়ে প্ৰতিজন ছাত্ৰ-ছাত্ৰীক এক উজ্জ্বল ভৱিষ্যতৰ দিশে আগবঢ়াই নিয়াৰ প্ৰতিশ্ৰুতি লৈ আহিছে।</p>
                    <p>আমাৰ প্ৰতিষ্ঠানে অসমীয়া আৰু ইংৰাজী দুয়োটা ভাষাতে পাঠদান কৰে। আধুনিক পৰীক্ষাগাৰ, স্মাৰ্ট শ্ৰেণীকোঠা আৰু অনুশাসনপূৰ্ণ পৰিৱেশে আমাৰ শিক্ষানুষ্ঠানক বিশিষ্ট কৰি তুলিছে।</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium">অভিজ্ঞতা:</p>
                    <p className="text-sm text-muted-foreground">Swadeshi Academy 16 Yrs • Anandoram Barooah Academy 4 Yrs • MBRS 4 Yrs • NEET/Integrated 7 Yrs</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="scroll-reveal bg-card rounded-xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 shrink-0">
                  <img src={advisorImg} alt="Advisor" className="rounded-xl shadow-md w-full max-w-[250px] mx-auto" />
                  <div className="text-center mt-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">নাৰায়ণ গোস্বামী</h3>
                    <p className="text-orange text-sm font-medium">অৱসৰপ্ৰাপ্ত উপাধ্যক্ষ</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">উপদেষ্টাৰ বাণী</h2>
                  <div className="text-muted-foreground leading-[1.9] space-y-4 text-base">
                    <p>প্ৰজ্ঞা একাডেমী সমগ্ৰ কামৰূপ জিলাৰ ভিতৰতে এখনি উন্নত মানদণ্ডৰ জাকত জিলিকা শিক্ষানুষ্ঠান। ইয়াৰ শিক্ষকসকলৰ নিষ্ঠা আৰু ছাত্ৰ-ছাত্ৰীসকলৰ কঠোৰ পৰিশ্ৰমে এই প্ৰতিষ্ঠানক সফলতাৰ শিখৰলৈ লৈ গৈছে।</p>
                    <p>আমি বিশ্বাস কৰোঁ যে সুশিক্ষাই সমাজ পৰিৱৰ্তনৰ একমাত্ৰ পথ। প্ৰজ্ঞা একাডেমীয়ে এই লক্ষ্যত অহৰহ কাম কৰি আহিছে আৰু ভৱিষ্যতেও কৰি যাব।</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Academic;
