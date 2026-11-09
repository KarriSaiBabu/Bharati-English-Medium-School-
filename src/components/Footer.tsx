import { GraduationCap, Phone, Mail, MapPin, ArrowUp, Code2, Globe, Heart } from 'lucide-react';
import { SCHOOL_INFO, DEVELOPER_DETAILS } from '../data/schoolData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-stone-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* School Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white tracking-tight leading-tight block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="text-[11px] text-amber-400 font-mono tracking-wider uppercase">
                  Est. {SCHOOL_INFO.establishedYear} · English Medium
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Committed to imparting exemplary English medium education, scientific curiosity, moral rectitude, and athletic vigor to young learners across Andhra Pradesh.
            </p>

            <div className="text-xs text-stone-400 pt-1 space-y-1">
              <div><strong className="text-stone-300">Motto:</strong> {SCHOOL_INFO.motto}</div>
              <div><strong className="text-stone-300">Grades:</strong> {SCHOOL_INFO.grades}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Institution</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">Smart Classrooms & Labs</a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">Faculty Directory</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Events Calendar</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Student Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Campus Contact</a>
              </li>
            </ul>
          </div>

          {/* Academic Info & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Academic Timings
            </h4>
            <div className="text-xs text-stone-400 space-y-2">
              <div>
                <div className="text-stone-200 font-medium">Monday - Saturday:</div>
                <div className="font-mono text-stone-400">8:30 AM – 4:00 PM</div>
              </div>
              <div>
                <div className="text-stone-200 font-medium">Morning Assembly:</div>
                <div className="font-mono text-stone-400">8:45 AM – 9:00 AM</div>
              </div>
              <div>
                <div className="text-stone-200 font-medium">Office Visiting Hours:</div>
                <div className="font-mono text-stone-400">9:30 AM – 3:30 PM</div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Campus Office
            </h4>
            <div className="text-xs text-stone-400 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors font-mono tabular-nums">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Web Developer Author Card Section as requested */}
        <div className="my-8 p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Website Crafted & Maintained By
                </span>
              </div>
              <div className="text-base font-serif font-bold text-white mt-0.5">
                {DEVELOPER_DETAILS.name}{' '}
                <span className="text-xs font-sans font-normal text-stone-400">
                  ({DEVELOPER_DETAILS.role})
                </span>
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                Full-Stack & Responsive Web Engineering for Educational Institutions
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
            <a
              href={`tel:${DEVELOPER_DETAILS.contact}`}
              className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-stone-200 hover:text-white rounded-lg text-xs font-mono transition-colors border border-slate-700"
              title="Call Developer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{DEVELOPER_DETAILS.contact}</span>
            </a>

            <a
              href={`mailto:${DEVELOPER_DETAILS.email}`}
              className="inline-flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
              title="Email Developer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{DEVELOPER_DETAILS.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
