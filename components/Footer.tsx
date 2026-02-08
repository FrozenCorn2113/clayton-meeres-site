
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-green text-white/60 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img src="/images/1000013217.png" alt="Sparrow Financial logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold tracking-tight">Sparrow Financial</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-sans">
              Independent financial planning for individuals, families, and business owners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><span className="material-symbols-outlined">alternate_email</span></a>
              <a href="#" className="hover:text-white transition-colors"><span className="material-symbols-outlined">share</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-sans uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li><Link className="hover:text-white transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/about">About Sparrow</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-sans uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-sm text-accent">location_on</span>
                <span>Serving clients nationwide</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-sm text-accent">mail</span>
                <span>hello@sparrowfinancial.com</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-sm text-accent">phone</span>
                <span>(604) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-xs font-sans leading-relaxed text-white/40 mb-8 max-w-4xl">
          <p className="mb-3">
            Sparrow Financial is registered with <span className="text-white/60">[PLACEHOLDER — dealer name]</span>.
          </p>
          <p>
            This website is for informational purposes only and does not constitute financial, investment, tax, or legal advice. Please consult a qualified professional regarding your specific situation. Investment products and services are not guaranteed — their values change frequently, and past performance may not be repeated.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-sans font-medium uppercase tracking-widest">
          <p>© 2025 Sparrow Financial. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Regulatory Disclosure</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
