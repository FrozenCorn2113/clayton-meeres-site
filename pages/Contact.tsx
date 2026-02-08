
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form submission service (e.g., Formspree, Netlify Forms, or custom API)
    alert('Thank you for your message. The Sparrow Financial team will be in touch within one business day.');
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-forest-green mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-sans mb-10">
              Have a question or want to learn more? Send us a message and we'll get back to you within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-forest-green mb-2 font-sans">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/40 transition-all font-sans"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-forest-green mb-2 font-sans">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/40 transition-all font-sans"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-forest-green mb-2 font-sans">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/40 transition-all font-sans"
                    placeholder="(250) 555-0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-forest-green mb-2 font-sans">What can I help with?</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/40 transition-all font-sans bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="investment">Investment Management</option>
                    <option value="estate">Estate & Legacy Planning</option>
                    <option value="tax">Tax-Efficient Strategies</option>
                    <option value="realestate">Real Estate & Retirement</option>
                    <option value="business">Business Owner Planning</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>
              <div>
                  <label htmlFor="message" className="block text-sm font-bold text-forest-green mb-2 font-sans">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-forest-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green/30 focus:border-forest-green/40 transition-all font-sans resize-y"
                  placeholder="Tell me a little about your situation or what questions you have..."
                />
              </div>
              <button
                type="submit"
                className="bg-forest-green hover:bg-forest-green/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-forest-green/20 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-6 bg-forest-green/5 rounded-xl border border-forest-green/10">
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-forest-green mt-0.5">lock</span>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  Your information is kept strictly confidential. We will never share your details with third parties or add you to a mailing list. This form is for introductory purposes only and does not establish an advisor-client relationship.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Info + Booking */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 border border-forest-green/5 shadow-sm">
              <h2 className="text-2xl font-bold text-forest-green mb-8">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-forest-green/10 text-forest-green rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-forest-green text-sm font-sans">Office</p>
                    <p className="text-slate-600 font-sans">Serving clients nationwide</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-forest-green/10 text-forest-green rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-forest-green text-sm font-sans">Email</p>
                    <p className="text-slate-600 font-sans">hello@sparrowfinancial.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-forest-green/10 text-forest-green rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div>
                    <p className="font-bold text-forest-green text-sm font-sans">Phone</p>
                    <p className="text-slate-600 font-sans">(604) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-green rounded-2xl p-10 text-white">
              <h2 className="text-2xl font-bold mb-4">Prefer to Book Directly?</h2>
              <p className="text-white/80 font-sans mb-6 leading-relaxed">
                Schedule a free 20-minute discovery call at a time that works for you. No preparation needed — just come as you are.
              </p>
              {/* TODO: Replace with real Calendly/booking link */}
              <button className="bg-white hover:bg-white/90 text-forest-green px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg w-full">
                Schedule a Discovery Call
              </button>
              <p className="text-sm text-white/50 font-sans mt-4 text-center">
                No obligation. No pressure. Just a conversation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-forest-green/5 shadow-sm">
              <h3 className="text-lg font-bold text-forest-green mb-4">What to Expect</h3>
              <ul className="space-y-3 font-sans text-sm text-slate-600">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-forest-green text-sm mt-0.5">check_circle</span>
                  <span>We typically respond within one business day</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-forest-green text-sm mt-0.5">check_circle</span>
                  <span>Our first conversation is always free and no-obligation</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-forest-green text-sm mt-0.5">check_circle</span>
                  <span>Meetings available in person (Victoria) or by video call</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-forest-green text-sm mt-0.5">check_circle</span>
                  <span>No sales pitch — just an honest conversation about your goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <p className="text-xs text-slate-400 font-sans text-center leading-relaxed">
          Submitting this form does not establish an advisor-client relationship. Sparrow Financial is registered with <span className="font-medium">[PLACEHOLDER — dealer name]</span>. This website is for informational purposes only and does not constitute financial, investment, tax, or legal advice.
        </p>
      </div>
    </div>
  );
};

export default Contact;
