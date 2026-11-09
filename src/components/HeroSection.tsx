import { useState } from 'react';
import { ArrowRight, MapPin, Award, CheckCircle2, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../data/schoolData';

interface HeroSectionProps {
  onOpenAdmissions: () => void;
}

export default function HeroSection({ onOpenAdmissions }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-stone-100/70 border-b border-stone-200 overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: School Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Excellence in English Medium Education</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Est. {SCHOOL_INFO.establishedYear}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Where Knowledge Meets Character, and Young Minds Flourish
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-slate-900 font-semibold">{SCHOOL_INFO.name}</strong>, where holistic English-medium pedagogy, modern smart classrooms, and ethical grounding empower every child from Kindergarten to Grade 10 to realize their highest academic and personal potential.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Individualized student mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Modern interactive STEM & IT labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Extensive sports & athletic grounds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Safe GPS-monitored student transport</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Enroll for Academic Year 2027</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-2xs transition-colors"
              >
                <Eye className="w-4 h-4 text-stone-600" />
                <span>Explore Campus & Classrooms</span>
              </a>
            </div>

            {/* Campus location note */}
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Visakhapatnam, Andhra Pradesh · School Hours: 8:30 AM – 4:00 PM</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Campus Photography Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 border border-stone-300/80 shadow-lg group">
              {/* Fallback container when loading */}
              {!imageLoaded && (
                <div className="aspect-16/10 w-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-amber-50 to-stone-200 text-stone-600">
                  <Sparkles className="w-8 h-8 text-amber-600 mb-2 animate-spin" />
                  <span className="text-xs font-medium">Loading Campus Visual...</span>
                </div>
              )}

              <img
                src={IMAGES.campus}
                alt="Bharati English Medium School - Campus architecture and lush courtyard with students"
                referrerPolicy="no-referrer"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                className={`w-full aspect-16/10 object-cover transform group-hover:scale-102 transition-transform duration-500 ${imageLoaded ? 'block' : 'hidden'}`}
              />

              {/* Verified Campus Badge Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/85 backdrop-blur-md rounded-xl text-white border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-400">Main Educational Campus</div>
                  <div className="text-[11px] text-stone-300">Modern 2-story building, courtyard & sports arenas</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-stone-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Stats Strip */}
        <div className="mt-12 pt-8 border-t border-stone-300/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {SCHOOL_INFO.stats.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-white/70 border border-stone-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-amber-900 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
