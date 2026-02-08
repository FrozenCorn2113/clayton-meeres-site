
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-forest-green mb-6">
          How We Can <span className="text-forest-green/80 italic font-normal">Help You</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Independent financial planning tailored to your life, your goals, and your timeline. No cookie-cutter solutions — just honest, personalised guidance.
        </p>
      </section>

      {/* Process Section */}
      <section className="bg-forest-green/5 border-y border-forest-green/10 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">How We Work Together</h2>
            <p className="text-slate-500 font-sans max-w-xl mx-auto">A clear, comfortable process from first conversation to ongoing partnership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: 'chat',
                title: 'Discovery Conversation',
                desc: 'We start with a relaxed, no-obligation conversation. We want to understand your life, your goals, and what keeps you up at night — not just your account balance.'
              },
              {
                step: '02',
                icon: 'description',
                title: 'Your Personal Plan',
                desc: 'We build a clear, comprehensive financial plan tailored to your situation. Every recommendation is explained in plain language, so you always know the "why" behind each decision.'
              },
              {
                step: '03',
                icon: 'rocket_launch',
                title: 'Implementation',
                desc: "Once you're comfortable, we put your plan into action. We handle the details and coordinate with other professionals (accountants, lawyers) as needed."
              },
              {
                step: '04',
                icon: 'handshake',
                title: 'Ongoing Partnership',
                desc: "Your life changes, and your plan should too. We meet regularly to review, adjust, and make sure your strategy still fits where you're headed."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-forest-green/5 hover:border-forest-green/20 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-black text-forest-green/20">{item.step}</span>
                  <div className="w-10 h-10 bg-forest-green/10 text-forest-green rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-forest-green mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-sans text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">Services</h2>
          <p className="text-slate-500 font-sans max-w-xl mx-auto">Practical solutions for the financial questions that matter most to you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: 'beach_access',
              title: 'Retirement Planning',
              desc: "A realistic plan for the retirement you actually want — based on your lifestyle, your timeline, and what matters most to you."
            },
            {
              icon: 'trending_up',
              title: 'Investment Management',
              desc: "Thoughtful, diversified portfolio management guided by your goals and risk comfort — not market hype or product quotas."
            },
            {
              icon: 'family_restroom',
              title: 'Estate & Legacy Planning',
              desc: "Helping you protect what you've built and pass it on to the people and causes you care about, with as little tax and hassle as possible."
            },
            {
              icon: 'account_balance',
              title: 'Tax-Efficient Strategies',
              desc: "Smart, legal approaches to keep more of what you earn — including RRSP, TFSA, corporate structures, and income-splitting strategies."
            },
            {
              icon: 'home',
              title: 'Real Estate & Retirement',
              desc: "Practical guidance on how your real estate fits into your retirement picture — whether to hold, sell, downsize, or leverage your property."
            },
            {
              icon: 'storefront',
              title: 'Business Owner Planning',
              desc: "Financial planning built for entrepreneurs — from compensation strategies and corporate structures to succession planning and eventual exit."
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-forest-green/5 hover:border-forest-green/30 transition-all group hover:shadow-xl hover:shadow-forest-green/5">
              <div className="w-14 h-14 bg-forest-green/10 text-forest-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest-green group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl inline-flex items-center justify-center leading-none">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-forest-green">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-y border-forest-green/10 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-forest-green mb-4">Your Confidence Matters</h2>
            <p className="text-slate-500 font-sans max-w-xl mx-auto">The credentials, protections, and commitments behind my practice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'verified',
                title: 'CFP® Professional',
                desc: 'Held to the highest standard of financial planning competency and ethics in Canada.'
              },
              {
                icon: 'security',
                title: 'CIRO Regulated',
                desc: 'Registered and overseen by the Canadian Investment Regulatory Organization, ensuring your protection.'
              },
              {
                icon: 'shield',
                title: 'CIPF Member',
                desc: 'Your accounts are protected by the Canadian Investor Protection Fund within prescribed limits.'
              },
              {
                icon: 'hub',
                title: 'Independent Practice',
                desc: 'Not tied to any bank or insurance company. My only obligation is to you.'
              },
              {
                icon: 'lock',
                title: 'Privacy & Security',
                desc: 'Your personal and financial information is protected with industry-standard encryption and strict confidentiality.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-forest-green/10 text-forest-green rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined inline-flex items-center justify-center leading-none">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-forest-green mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8 shadow-2xl">
          <div className="absolute inset-0 bg-forest-green/90 z-10"></div>
          <div className="relative z-20 max-w-2xl text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">Not sure where to start?</h2>
            <p className="text-lg opacity-90 italic font-sans">That's perfectly fine. The first step is simply a conversation.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
              <Link to="/contact" className="bg-white hover:bg-white/90 text-forest-green px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-black/20 inline-block">
                Book a Free Consultation
              </Link>
              <span className="text-sm text-white/60 font-sans">No obligation. No pressure. Just a conversation.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <p className="text-xs text-slate-400 font-sans text-center leading-relaxed">
          The services described on this page are subject to suitability and regulatory requirements. Investment products and services are not guaranteed — their values change frequently, and past performance may not be repeated. This information is for general purposes only and does not constitute a solicitation or offer. Please consult with Sparrow Financial directly to discuss your specific situation.
        </p>
      </div>
    </div>
  );
};

export default Services;
