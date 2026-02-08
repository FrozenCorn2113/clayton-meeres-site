
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 fade-in duration-700">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] text-charcoal mb-12 font-newsreader">
              About Clayton
            </h1>
            <p className="text-2xl lg:text-4xl text-charcoal/80 mb-12 leading-relaxed italic font-light font-newsreader">
              "Financial advocacy isn't about numbers on a screen; it's about the security and freedom of the people behind them."
            </p>
            <div className="hidden lg:block border-t border-gray-100 pt-10">
              <p className="text-xl text-charcoal/60 font-light flex items-center gap-3 font-newsreader">
                <span className="material-symbols-outlined text-forest-green">location_on</span>
                Based in Victoria, BC — Independent financial planning for real people, not portfolios.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-px border border-gray-200 rounded-2xl z-20 pointer-events-none"></div>
              <img
                alt="Clayton Meeres professional portrait"
                className="rounded-2xl shadow-2xl w-full object-cover object-[50%_10%] aspect-4/5 relative z-10"
                src="/images/clayton-portrait.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-24 bg-white/40 border-t border-gray-100">
        <div className="max-w-[850px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-forest-green tracking-tight font-newsreader">Why I Chose Independence</h2>
          <div className="space-y-10 text-xl lg:text-2xl leading-relaxed text-charcoal/90 font-light font-newsreader">
            <p>
              For years, I worked within the rigid structures of large financial institutions. While these firms offer scale, they often come with a hidden cost: the pressure to prioritise corporate targets over individual client needs. I realised that to truly advocate for my clients, I needed to step away from the boardroom and back into the living room.
            </p>
            <p>
              Moving toward independence was a choice to remove the middleman. It allowed me to offer advice that is purely objective, unburdened by proprietary products or quarterly sales quotas.
            </p>
            <blockquote className="border-l-4 border-forest-green pl-10 py-8 my-20 italic text-3xl text-charcoal font-medium bg-forest-green/5 rounded-r-2xl font-newsreader">
              "My journey is rooted in the belief that financial advice should be as unique as the person receiving it."
            </blockquote>
            <p>
              Independence means I answer only to you. It means we focus on long-term sustainability and personal values rather than market volatility and standard benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Perspective Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-4 font-newsreader">A Perspective Beyond the Ledger</h2>
          <div className="h-0.5 w-16 bg-forest-green/30 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {[
            {
              src: '/images/perspective-focus-960.jpg',
              srcSet: '/images/perspective-focus-640.jpg 640w, /images/perspective-focus-960.jpg 960w, /images/perspective-focus-1280.jpg 1280w',
              title: 'Focus',
              desc: 'Finding clarity amidst the noise of the market. A quiet Canadian lake at sunrise, where peace meets purpose.'
            },
            {
              src: '/images/perspective-expertise-960.jpg',
              srcSet: '/images/perspective-expertise-640.jpg 640w, /images/perspective-expertise-960.jpg 960w, /images/perspective-expertise-1280.jpg 1280w',
              title: 'Expertise',
              desc: 'Drawing on years of hands-on experience to guide your decisions. Relationships built on trust and shared vision.'
            },
            {
              src: '/images/perspective-legacy-960.jpg',
              srcSet: '/images/perspective-legacy-640.jpg 640w, /images/perspective-legacy-960.jpg 960w, /images/perspective-legacy-1280.jpg 1280w',
              title: 'Legacy',
              desc: 'Building a foundation for the generations to come. Knowledge preserved and passed forward.'
            }
          ].map((card, i) => (
            <div key={i} className="group flex flex-col">
              <div className="overflow-hidden rounded-2xl mb-6 md:mb-8 aspect-16/10 md:aspect-4/5 w-full shrink-0">
                <img
                  src={card.src}
                  srcSet={card.srcSet}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-3 font-newsreader">{card.title}</h3>
              <p className="text-lg text-charcoal/60 font-light italic leading-relaxed font-newsreader">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-forest-green/5 py-32 border-y border-forest-green/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-20 text-center text-forest-green font-newsreader">My Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: 'visibility', title: 'Clear Communication', desc: 'No hidden fees, no confusing jargon. I explain every recommendation until you feel confident and comfortable.' },
              { icon: 'shield', title: 'Unwavering Integrity', desc: 'Your interests always come first. My independence ensures my advice is never conflicted by corporate quotas.' },
              { icon: 'face_6', title: 'Accessibility', desc: 'I am your partner, not just your advisor. When you have a question, you speak directly with me, not a call centre.' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-6">
                <div className="w-16 h-16 bg-forest-green rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-forest-green font-newsreader">{item.title}</h4>
                <p className="text-lg text-charcoal/80 leading-relaxed font-light font-newsreader">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author & Book Section */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-forest-green font-newsreader">Author &amp; Thought Leader</h2>
            <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-charcoal/80 font-light font-newsreader">
              <p>
                Clayton is the author of <em>From Real Estate to Retirement: Rethink, Retire, Thrive</em>, written to help Canadians navigate one of the most common — and most misunderstood — intersections in personal finance: how real estate fits into retirement planning.
              </p>
              <p>
                Drawing on his unique background growing up in the custom home building industry, building and selling his own business, and becoming a financial advisor, the book covers the three stages every retiree faces:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-forest-green mt-1 shrink-0">arrow_forward</span>
                  <span><strong className="text-charcoal">Before retirement</strong> — unlocking hidden potential in your property and aligning it with your future lifestyle</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-forest-green mt-1 shrink-0">arrow_forward</span>
                  <span><strong className="text-charcoal">During retirement</strong> — simplifying your holdings to reduce costs and create reliable cash flow</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-forest-green mt-1 shrink-0">arrow_forward</span>
                  <span><strong className="text-charcoal">Estate planning</strong> — ensuring your property transitions smoothly, tax-efficiently, and prevents family conflict</span>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href="https://www.amazon.ca/dp/1069524824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-forest-green font-bold hover:opacity-80 transition-opacity font-sans"
                >
                  <span>Available on Amazon.ca</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <p className="text-sm text-charcoal/40 font-sans">
                This book is for general informational and educational purposes only. It does not constitute personalised financial, tax, or investment advice. Readers should consult a qualified professional before making financial decisions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-forest-green/5 rounded-2xl p-10 border border-forest-green/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-forest-green text-3xl">menu_book</span>
                <h3 className="text-xl font-bold text-forest-green font-newsreader">The Book</h3>
              </div>
              <p className="text-2xl font-bold text-charcoal mb-2 font-newsreader italic">From Real Estate to Retirement</p>
              <p className="text-lg text-charcoal/60 mb-6 font-newsreader">Rethink, Retire, Thrive</p>
              <p className="text-charcoal/70 leading-relaxed font-newsreader mb-6">
                A practical guide for everyday Canadians who want to understand how their most valuable asset — their property — fits into their retirement plan.
              </p>
              <blockquote className="border-l-4 border-forest-green pl-6 py-2 italic text-charcoal/80 font-newsreader">
                "The government makes a living off what we leave on the table."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 px-6 bg-background-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-forest-green leading-tight font-newsreader">Ready to talk about what matters to you?</h2>
          <p className="text-2xl text-charcoal/70 mb-14 font-light font-newsreader">
            Let's discuss your goals, your concerns, and the future you want to build.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-forest-green text-white hover:bg-forest-green/90 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-lg">
              Schedule an Introductory Call
            </button>
            <Link to="/services" className="border border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-12 py-5 rounded-full font-bold text-xl transition-all">
              View My Services
            </Link>
          </div>
          <p className="text-sm text-charcoal/40 font-sans mt-6">No obligation. No pressure. Just a conversation.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
