
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[700px] py-12 md:py-0">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-forest-green">
              Independent Financial Advice. <span className="text-forest-green/80 italic font-normal">Built Around You.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              Thoughtful financial planning for Canadian families and business owners — built on independence, not sales targets.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-forest-green/20 flex items-center gap-2">
              <span>Book a Free Consultation</span>
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <Link to="/about" className="bg-white border border-forest-green/20 hover:bg-slate-50 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center">
              Read My Story
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-full flex items-center justify-center">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute -inset-4 bg-forest-green/5 rounded-[2rem] transform rotate-2"></div>
            <div className="relative overflow-hidden rounded-2xl border-[12px] border-white shadow-2xl bg-white aspect-[4/5]">
              <img
                alt="Portrait of Clayton Meeres"
                className="w-full h-full object-cover object-[50%_10%] transition-all duration-700"
                src="/images/clayton-portrait.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-light/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="max-w-4xl mx-auto mb-24 mt-24 px-6">
        <div className="bg-white p-8 md:p-16 rounded-3xl border border-forest-green/5 shadow-sm relative overflow-hidden group">
          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <div className="w-16 h-1 bg-forest-green rounded-full"></div>
            <h2 className="text-3xl font-bold text-forest-green">A Message from Clayton</h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700 italic max-w-2xl mx-auto">
              <p>
                "I believe wealth is about more than numbers. It's about the security of your family and the legacy you leave behind. My practice is built on the foundation of independence and deep, personal relationships."
              </p>
              <p>
                "I'm here to help you navigate every financial milestone with honesty and clarity — because your plan should be as unique as your life."
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <span className="font-signature text-5xl text-forest-green opacity-90 select-none">Clayton Meeres</span>
              <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase opacity-40 mt-2">Principal Advisor</span>
            </div>
            <Link to="/about" className="mt-4 flex items-center gap-2 text-forest-green hover:opacity-80 transition-opacity font-bold group">
              <span>Learn more about my approach</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">What Guides My Practice</h2>
          <p className="text-slate-500 font-sans max-w-xl mx-auto">A personal approach grounded in independence, integrity, and your best interests.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'verified_user',
              title: 'Unwavering Integrity',
              desc: "Transparent advice that always puts your interests first. Every recommendation is made with your goals in mind — not a corporate agenda."
            },
            {
              icon: 'hub',
              title: 'True Independence',
              desc: 'Free from big-bank quotas and proprietary product requirements. I can recommend what\'s genuinely right for you.'
            },
            {
              icon: 'family_restroom',
              title: 'Legacy Planning',
              desc: "Planning that looks beyond today. From retirement readiness to estate strategies, I help you think across generations."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-forest-green/5 hover:border-forest-green/30 transition-all group hover:shadow-xl hover:shadow-forest-green/5 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-forest-green/10 text-forest-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest-green group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl inline-flex items-center justify-center leading-none">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-forest-green">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book Credibility Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="bg-forest-green/5 rounded-3xl p-8 md:p-16 border border-forest-green/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="material-symbols-outlined text-forest-green text-3xl">menu_book</span>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-green">Sharing Knowledge Beyond the Office</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With one of the greatest wealth transfers in Canadian history underway, Clayton wrote <em>From Real Estate to Retirement: Rethink, Retire, Thrive</em> to help everyday Canadians think proactively about how their real estate can shape their retirement — and benefit their family for generations. The book walks through the three key stages every retiree faces: before retirement, during retirement, and estate planning.
            </p>
            <a
              href="https://www.amazon.ca/dp/1069524824"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-forest-green font-bold hover:opacity-80 transition-opacity"
            >
              <span>Find it on Amazon.ca</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <p className="text-xs text-slate-400 font-sans mt-4">
              This book is for general informational and educational purposes only. It does not constitute personalised financial advice. Individual circumstances vary — please consult a qualified professional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8 shadow-2xl">
          <div className="absolute inset-0 bg-forest-green/90 z-10"></div>
          <img
            alt="Canadian landscape"
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHtBqA5MJ-_zPWXci4fl1qpJ2gwFfuvgMM2TMK9WCHk2XjYe9xZg4CtCSOETA5aSW8Tx4v-WHPtEHClpz59utduKJvh_E_dZDdkpEzNV_1KADyrm_fM5UQB_vTbwfMNCV---u5zT5m2PSeWh52Ytnw_pi98R2guxc2qa7B8xfadR6Gw5V2ZLVf4wP7-_k48TMzXklXg9ABsGAlElXxX5nQvawN4oI_b7i4PDhulN8Y1vPrLuC9sRk8jIeuibUzLePwdcl5TRkV-8"
          />
          <div className="relative z-20 max-w-2xl text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">Your financial future deserves personal attention.</h2>
            <p className="text-lg opacity-90 italic font-sans">Let's start with a conversation — no pressure, no obligation.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
              <button className="bg-white hover:bg-white/90 text-forest-green px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-black/20">
                Schedule a Discovery Call
              </button>
              <span className="text-sm text-white/60 font-sans">A relaxed 20-minute call to see if we're a good fit.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
