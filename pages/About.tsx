
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
              About Sparrow Financial
            </h1>
            <p className="text-2xl lg:text-4xl text-charcoal/80 mb-12 leading-relaxed italic font-light font-newsreader">
              "Great advice is about people first — the goals, the values, and the life you want your money to support."
            </p>
            <div className="hidden lg:block border-t border-gray-100 pt-10">
              <p className="text-xl text-charcoal/60 font-light flex items-center gap-3 font-newsreader">
                <span className="material-symbols-outlined text-forest-green">location_on</span>
                Independent wealth management for people who want clarity and confidence.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-px border border-gray-200 rounded-2xl z-20 pointer-events-none"></div>
            <img
              alt="Sparrow Financial team portrait"
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-forest-green tracking-tight font-newsreader">Why We Chose Independence</h2>
          <div className="space-y-10 text-xl lg:text-2xl leading-relaxed text-charcoal/90 font-light font-newsreader">
            <p>
              For years, we watched how large institutions shaped advice around product quotas instead of people. We built Sparrow Financial to do the opposite: start with your life, then build a plan that protects it.
            </p>
            <p>
              Independence removes the middleman. It means every recommendation is objective, transparent, and aligned with your goals — not a corporate agenda.
            </p>
            <blockquote className="border-l-4 border-forest-green pl-10 py-8 my-20 italic text-3xl text-charcoal font-medium bg-forest-green/5 rounded-r-2xl font-newsreader">
              "Financial advice should be as unique as the person receiving it."
            </blockquote>
            <p>
              Independence means we answer only to you. We focus on long-term sustainability and personal values rather than market noise and standard benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-forest-green font-newsreader">From Real Estate to Retirement</h2>
            <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-charcoal/80 font-light font-newsreader">
              <p>
                Sparrow Financial founder Clayton Meeres wrote <em>From Real Estate to Retirement: Rethink, Retire, Thrive</em> to help Canadians
                navigate the intersection of property, retirement income, and lifestyle decisions.
              </p>
              <p>
                The book outlines three practical stages that most retirees face, with clear guidance and real-world examples.
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-forest-green mt-1 shrink-0">arrow_forward</span>
                  <span><strong className="text-charcoal">Before retirement</strong> — align your property, income plan, and lifestyle priorities</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-forest-green mt-1 shrink-0">arrow_forward</span>
                  <span><strong className="text-charcoal">During retirement</strong> — simplify holdings and create reliable cash flow</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-forest-green mt-1 shrink-0">arrow_forward</span>
                  <span><strong className="text-charcoal">Estate planning</strong> — pass on assets with clarity and fewer surprises</span>
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
                This book is for general informational and educational purposes only. It does not constitute personalised financial, tax, or investment advice.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-forest-green/5 rounded-2xl p-10 border border-forest-green/10">
              <div className="overflow-hidden rounded-xl bg-white/70 shadow-sm border border-forest-green/10 mb-8">
                <img
                  src="/images/s-l1600.webp"
                  alt="Cover of From Real Estate to Retirement"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-forest-green text-3xl">menu_book</span>
                <h3 className="text-xl font-bold text-forest-green font-newsreader">The Book</h3>
              </div>
              <p className="text-2xl font-bold text-charcoal mb-2 font-newsreader italic">From Real Estate to Retirement</p>
              <p className="text-lg text-charcoal/60 mb-6 font-newsreader">Rethink, Retire, Thrive</p>
              <p className="text-charcoal/70 leading-relaxed font-newsreader mb-6">
                A practical guide for everyday Canadians who want to understand how their property fits into retirement.
              </p>
              <blockquote className="border-l-4 border-forest-green pl-6 py-2 italic text-charcoal/80 font-newsreader">
                "Clarity is the foundation of confidence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-forest-green/5 py-32 border-y border-forest-green/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-20 text-center text-forest-green font-newsreader">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: 'visibility', title: 'Clear Communication', desc: 'No hidden fees, no confusing jargon. We explain every recommendation until it feels clear.' },
              { icon: 'shield', title: 'Unwavering Integrity', desc: 'Your interests always come first. Our advice is never conflicted by corporate quotas.' },
              { icon: 'support_agent', title: 'Accessibility', desc: 'You have a direct relationship with your advisor, not a call centre.' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-forest-green rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl inline-flex items-center justify-center leading-none">
                    {item.icon}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-forest-green font-newsreader">{item.title}</h4>
                <p className="text-lg text-charcoal/80 leading-relaxed font-light font-newsreader">{item.desc}</p>
              </div>
            ))}
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
            <Link to="/contact" className="border border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-12 py-5 rounded-full font-bold text-xl transition-all">
              Start a Conversation
            </Link>
          </div>
          <p className="text-sm text-charcoal/40 font-sans mt-6">No obligation. No pressure. Just a conversation.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
