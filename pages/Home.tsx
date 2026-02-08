
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[720px] py-20 md:py-12">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs tracking-[0.4em] uppercase text-forest-green/60 font-sans font-bold">Sparrow Financial</p>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.15] md:leading-[1.1] text-forest-green">
              Human-first financial planning.
              <span className="text-forest-green/80 italic font-normal block md:inline mt-3 md:mt-0 md:ml-2">
                Built for the life you want.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              We help families and business owners turn complexity into clarity with independent advice, careful planning, and steady support.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/contact" className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-forest-green/20 flex items-center gap-2">
              <span>Schedule a Discovery Call</span>
              <span className="material-symbols-outlined">calendar_today</span>
            </Link>
            <Link to="/about" className="bg-white border border-forest-green/20 hover:bg-slate-50 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center">
              See How We Work
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-full flex items-center justify-center">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -inset-6 bg-forest-green/5 rounded-4xl transform -rotate-2"></div>
            <div className="relative overflow-hidden rounded-3xl border border-forest-green/10 shadow-2xl bg-white aspect-square flex items-center justify-center">
              <img
                alt="Sparrow Financial brand mark"
                className="w-full h-full object-cover"
                src="/images/1000013218.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-[1200px] mx-auto px-6 py-28">
        <div className="bg-white rounded-3xl border border-forest-green/10 shadow-sm p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">Trusted by thoughtful planners</h2>
            <p className="text-slate-500 font-sans max-w-2xl mx-auto">
              Clients come to Sparrow for clarity, confidence, and an advisor who leads with empathy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "For the first time, we can picture retirement without anxiety.",
                name: "Kelly W."
              },
              {
                quote: "Every conversation feels clear, honest, and focused on our goals.",
                name: "Patrick G."
              },
              {
                quote: "We finally understand the why behind every decision.",
                name: "David T."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background-light rounded-2xl p-6 border border-forest-green/10">
                <div className="flex items-center gap-1 text-forest-green mb-4">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm font-sans leading-relaxed">“{item.quote}”</p>
                <p className="text-xs uppercase tracking-[0.2em] text-forest-green/60 font-bold mt-4">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human-first message */}
      <section className="max-w-[1200px] mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-forest-green mb-6">Personal planning, not packaged advice.</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-sans mb-8">
              Our process starts with your values and the life you want to live. We translate those goals into a clear plan that covers
              investments, taxes, retirement income, and legacy decisions.
            </p>
            <div className="space-y-4">
              {[
                'Independent guidance, free of product quotas',
                'Simple explanations and transparent planning',
                'Proactive reviews, not reactive check-ins'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-600 font-sans">
                  <span className="material-symbols-outlined text-forest-green mt-0.5">check_circle</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-forest-green/5 rounded-3xl"></div>
            <img
              alt="Calm office workspace"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-4/3"
              src="/images/perspective-focus-1280.jpg"
            />
          </div>
        </div>
      </section>

      {/* Two-tier planning */}
      <section className="max-w-[1200px] mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-forest-green/60 font-sans font-bold">Two-tier approach</p>
              <h2 className="text-4xl md:text-5xl font-black text-forest-green mt-4">A plan that looks ahead and stays grounded.</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-sans">
              We layer long-range strategy with day-to-day clarity so every decision supports your larger goals without feeling overwhelming.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Foundational strategy',
                  desc: 'Retirement income planning, investment structure, and risk alignment.'
                },
                {
                  title: 'Real-life decisions',
                  desc: 'Cash flow, tax coordination, and the timing of major life changes.'
                },
                {
                  title: 'Legacy planning',
                  desc: 'Estate alignment and family conversations before they become urgent.'
                },
                {
                  title: 'Ongoing guidance',
                  desc: 'Clear checkpoints so your plan evolves as your life does.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-forest-green/10 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-forest-green mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 bg-forest-green/5 rounded-3xl"></div>
            <img
              alt="Sparrow Financial planning materials"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-4/3"
              src="/images/perspective-expertise-1280.jpg"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-background-light border-y border-forest-green/10 py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">How we work together</h2>
            <p className="text-slate-500 font-sans max-w-xl mx-auto">A clear, comfortable process from first conversation to ongoing partnership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: 'chat',
                title: 'Explore Call',
                desc: 'We start with a relaxed call to understand your goals, timeline, and what matters most.'
              },
              {
                step: '02',
                icon: 'description',
                title: 'Personal Plan',
                desc: 'We design a clear, comprehensive plan that connects every financial decision to your values.'
              },
              {
                step: '03',
                icon: 'rocket_launch',
                title: 'Implementation',
                desc: 'We handle the details and coordinate with your tax and legal professionals as needed.'
              },
              {
                step: '04',
                icon: 'handshake',
                title: 'Ongoing Care',
                desc: 'Regular reviews keep the plan aligned as life evolves and opportunities arise.'
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

      {/* Image collage */}
      <section className="max-w-[1200px] mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-forest-green">A calm, structured experience.</h2>
            <p className="text-slate-600 font-sans leading-relaxed">
              We keep meetings focused, decisions clear, and documentation easy to follow — so you always know what’s next.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-forest-green font-bold">
              Explore the approach
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img src="/images/perspective-focus-1280.jpg" alt="Planning session" className="rounded-2xl shadow-lg object-cover h-64 w-full" />
            <img src="/images/perspective-legacy-1280.jpg" alt="Legacy planning focus" className="rounded-2xl shadow-lg object-cover h-64 w-full" />
            <img src="/images/perspective-expertise-1280.jpg" alt="Investment review" className="rounded-2xl shadow-lg object-cover h-64 w-full sm:col-span-2" />
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="max-w-[1200px] mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">Focused, advisor-led planning</h2>
            <p className="text-slate-500 font-sans leading-relaxed mb-8">
              Sparrow is a boutique, advisor-led firm. You work directly with your lead advisor, supported by a streamlined planning
              process that keeps you informed at every step.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Lead advisor relationship', icon: 'person' },
                { label: 'Clear review cadence', icon: 'event' },
                { label: 'Tax-aware coordination', icon: 'receipt_long' },
                { label: 'Estate planning alignment', icon: 'shield' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-600 font-sans">
                  <span className="material-symbols-outlined text-forest-green">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-forest-green/5 rounded-3xl"></div>
            <img
              alt="Sparrow Financial mark"
              className="relative w-full rounded-3xl shadow-2xl object-contain bg-white p-12 border border-forest-green/10"
              src="/images/1000013216.png"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-light border-y border-forest-green/10 py-28">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">Common questions</h2>
            <p className="text-slate-500 font-sans">Straight answers to the most common questions.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'What does it take to become a client?',
                a: 'We serve families and business owners who want comprehensive planning, proactive advice, and a long-term partner.'
              },
              {
                q: 'How do you get paid?',
                a: 'We charge a transparent advisory fee based on the scope of work and assets we manage. No commissions or hidden incentives.'
              },
              {
                q: 'What services do you offer?',
                a: 'Retirement planning, investment management, tax coordination, estate planning guidance, and business owner planning.'
              },
              {
                q: 'Do you work virtually?',
                a: 'Yes. We meet by video and in-person when it makes sense. Our process is built to work wherever you live.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-forest-green/10 p-8">
                <h3 className="text-lg font-bold text-forest-green mb-3">{item.q}</h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-[1200px] mx-auto px-6 py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">Insights for better decisions</h2>
          <p className="text-slate-500 font-sans">Short, practical guidance designed for real financial life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Retirement income planning that feels simple',
              desc: 'Learn how we structure income for clarity, flexibility, and confidence.',
              img: '/images/perspective-expertise-1280.jpg'
            },
            {
              title: 'Tax-aware investment decisions in every season',
              desc: 'Understand the moves that can keep more of what you earn.',
              img: '/images/perspective-focus-1280.jpg'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-forest-green/10 shadow-sm">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-forest-green mb-3">{item.title}</h3>
                <p className="text-slate-600 font-sans text-sm mb-6">{item.desc}</p>
                <Link to="/about" className="inline-flex items-center gap-2 text-forest-green font-bold text-sm">
                  Explore the approach
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white border-y border-forest-green/10 py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-forest-green mb-4">What clients say</h2>
            <p className="text-slate-500 font-sans">Real feedback from people who wanted clarity and calm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'We finally have a plan we can explain to our family.',
                name: 'Amanda L.'
              },
              {
                quote: 'Every step is organized, and nothing feels rushed.',
                name: 'Chris D.'
              },
              {
                quote: 'The advice feels practical, not theoretical.',
                name: 'Lena P.'
              },
              {
                quote: 'We feel supported without being overwhelmed.',
                name: 'Michael S.'
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-forest-green/10 p-8 shadow-sm bg-background-light">
                <div className="flex items-center gap-1 text-forest-green mb-4">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">“{item.quote}”</p>
                <p className="text-xs uppercase tracking-[0.2em] text-forest-green/60 font-bold mt-4">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="relative rounded-3xl overflow-hidden min-h-[440px] flex items-center justify-center text-center p-10 shadow-2xl">
          <div className="absolute inset-0 bg-forest-green/90 z-10"></div>
          <img
            alt="Calm shoreline landscape"
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            src="/images/perspective-legacy-1280.jpg"
          />
          <div className="relative z-20 max-w-2xl text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">Build a plan that feels steady.</h2>
            <p className="text-lg opacity-90 italic font-sans">Start with a conversation and walk away with a clear next step.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
              <Link to="/contact" className="bg-white hover:bg-white/90 text-forest-green px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-black/20">
                Schedule a Discovery Call
              </Link>
              <span className="text-sm text-white/60 font-sans">A relaxed 20-minute call to see if we're a good fit.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
