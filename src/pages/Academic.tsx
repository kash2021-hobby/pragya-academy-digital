import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';
import principalImg from '@/assets/principal.jpg';
import advisorImg from '@/assets/advisor.jpg';

const tabs = ['Principal', 'Advisor'];

const Academic = () => {
  useScrollReveal();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'advisor' ? 1 : 0;

  const handleTabChange = (i: number) => {
    setSearchParams({ tab: i === 1 ? 'advisor' : 'principal' }, { replace: true });
  };

  useEffect(() => {
    if (!tabParam) {
      setSearchParams({ tab: 'principal' }, { replace: true });
    }
  }, [tabParam, setSearchParams]);

  return (
    <>
      <PageHero title="Academic" subtitle="Leadership Messages" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => handleTabChange(i)}
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
                    <p className="text-sm text-muted-foreground">Swadeshi Academy 16 Yrs • Anandorom Barooah Academy 4 Yrs • MBRS 4 Yrs • NEET/Integrated 7 Yrs</p>
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
                    <p className="text-orange text-sm font-medium">অৱসৰপ্ৰাপ্ত উপাধ্যক্ষ তথা মুৰব্বী অধ্যাপক, অৰ্থনীতি বিজ্ঞান বিভাগ, পূৱ কামৰূপ মহাবিদ্যালয়।</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">উপদেষ্টাৰ বাণী</h2>
                  <div className="text-muted-foreground leading-[1.9] space-y-4 text-base">
                    <p>প্ৰজ্ঞা একাডেমী সমগ্ৰ কামৰূপ জিলাৰ ভিতৰতে এখনি উন্নত মানদণ্ডৰ জাকত জিলিকা শিক্ষানুষ্ঠান। এই অনুষ্ঠানটিৰ মূল লক্ষ্য আৰু উদ্দেশ্যই হ'ল ছাত্ৰ-ছাত্ৰীৰ শৈক্ষিক, মানসিক তথা বৌদ্ধিক বিকাশ সাধন কৰা। ছাত্ৰ-ছাত্ৰী,শিক্ষক তথা অভিভাৱক সকলৰ ত্ৰিকোণীয় প্ৰচেষ্টাৰ জৰিয়তে ছাত্ৰ-ছাত্ৰীসকলৰ সৰ্বাংগীন উন্নয়নৰ অহৰহ প্ৰচেষ্টা চলাই অহা হৈছে।</p>
                    <p>বৃহত্তৰ বাইহাটা চাৰিআলিত অনুষ্ঠিত অন্যতম আকৰ্ষণীয় শিক্ষা অনুষ্ঠান প্ৰজ্ঞা একাডেমীত উন্নত মানৰ শিক্ষা প্ৰদানৰ অৰ্থেপ্ৰতিটো বিষয়তে অভিজ্ঞ তথা অৰ্হতা সম্পন্ন শিক্ষক নিযুক্তি দিয়াৰ লগতে শিক্ষাৰ্থীসকলৰ সুবিধাৰ্থে হোষ্টেল নাইবা অন্যান্য সুবিধাজনক আৱাসৰ ব্যৱস্থা কৰা হৈছে । ইয়াৰ লগতে সকলো সময়তে শিক্ষাৰ্থী সকলৰ নিৰীক্ষণ তথা তত্ত্বাবধানৰ বাবে উপযুক্ত পৰিচালক-পৰিদৰ্শকক দায়িত্ব অৰ্পণ কৰা হৈছে।</p>
                    <p>কামৰূপ জিলাৰ পূৱ-প্ৰান্তত অৱস্থিত এই অনুষ্ঠানটিয়ে ছাত্ৰ- ছাত্ৰীসকলৰ মাজত নিহিত হৈ থকা বিভিন্ন প্ৰতিভা বিকাশৰ অৰ্থে প্ৰতিটো বছৰে ন-ন কাৰ্যসূচীৰ অন্তৰ্ভুক্ত কৰি আহিছে। বিগত বছৰবোৰত এই অনুষ্ঠানৰ প্ৰায়খিনি ছাত্ৰ-ছাত্ৰীৰ সফলতাই অনুষ্ঠানটিৰ লগতে অঞ্চলটোৰ সুনাম কঢ়িয়াই আনিবলৈ সক্ষম হৈছে।</p>
                    <p>সেয়েহে আশা ৰাখিছোঁ আটাইৰে আন্তৰিকতা, সদিচ্ছা তথা গঠনমূলক দিশ- পৰামৰ্শৰে অদূৰ ভৱিষ্যতেও যাতে প্ৰজ্ঞা একাডেমীয়ে প্ৰজ্ঞা সাধনাৰে সুনাগৰিক তথা মানৱ সম্পদ গঠনৰ জৰিয়তে বিশ্ব দৰবাৰত নিজৰ স্থান নিৰূপণ কৰিবলৈ সক্ষম হ'ব।</p>
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
