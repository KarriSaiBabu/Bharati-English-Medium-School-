import { useState } from 'react';
import { BookOpen, Compass, HeartHandshake, Lightbulb, Check, ChevronRight } from 'lucide-react';
import { FACILITIES, IMAGES, SCHOOL_INFO } from '../data/schoolData';

export default function AboutSection() {
  const [activeFacility, setActiveFacility] = useState(0);

  const pillars = [
    {
      title: "Scholastic Rigor",
      desc: "Comprehensive English medium curriculum focusing on core mathematical logic, linguistic fluency, and conceptual science understanding.",
      icon: BookOpen
    },
    {
      title: "Moral & Civic Values",
      desc: "Daily morning assemblies, moral science classes, and community outreach that cultivate empathy, humility, and civic responsibility.",
      icon: HeartHandshake
    },
    {
      title: "STEM & Digital Literacy",
      desc: "Interactive smart classrooms and hands-on laboratory experiments empowering students to code, experiment, and think critically.",
      icon: Lightbulb
    },
    {
      title: "Athletic & Cultural Prowess",
      desc: "Sprawling running tracks, inter-house tournaments, dance, and fine arts programs to ensure a balanced, vibrant mind and body.",
      icon: Compass
    }
  ];

  const currentFac = FACILITIES[activeFacility];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Institutional Legacy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Nurturing Future Leaders with Values, Vision, and Discipline
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Founded in {SCHOOL_INFO.establishedYear}, Bharati English Medium School was established with a singular mission: providing accessible, high-caliber English-medium education rooted in ethical values, modern pedagogy, and community welfare.
          </p>
        </div>

        {/* Principal's Note & Vision Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
                From the Desk of the Principal
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-slate-900 mb-4">
                "Every child possesses a spark of genius waiting to be illuminated."
              </h3>
              <div className="text-sm text-stone-700 space-y-3 leading-relaxed">
                <p>
                  At Bharati English Medium School, education goes far beyond memorizing examination syllabi. We believe in sparking genuine curiosity, nurturing polite and confident communication in English, and giving children the space to question, create, and excel.
                </p>
                <p>
                  Our dedicated faculty acts as mentors rather than mere instructors. With our state-of-the-art smart classrooms, fully equipped laboratories, and sprawling athletic facilities, we ensure that every student steps out of our gates prepared for the global world while remaining deeply connected to their moral roots.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
              <div>
                <div className="font-serif font-bold text-slate-900">Dr. P. Rajeswari</div>
                <div className="text-xs text-stone-500">M.Sc., M.Ed., Ph.D. · Principal & Head of Institution</div>
              </div>
              <span className="text-xs font-serif italic text-amber-800 border-b border-amber-300 pb-0.5">
                Bharati English Medium School
              </span>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-white hover:border-amber-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 font-mono">0{idx + 1}.</div>
                      <h4 className="text-sm font-semibold text-slate-900 mt-0.5">{pillar.title}</h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilities Spotlight */}
        <div id="academics" className="pt-8 border-t border-stone-200 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                Campus Infrastructure
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                World-Class Learning Environments
              </h3>
            </div>
            
            {/* Facility Selector Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg overflow-x-auto">
              {FACILITIES.map((fac, idx) => (
                <button
                  key={fac.id}
                  onClick={() => setActiveFacility(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    activeFacility === idx
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-stone-600 hover:text-slate-900'
                  }`}
                >
                  {fac.title.split(' ')[0]} {fac.title.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Active Facility Card */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px]">
              <img
                src={currentFac.imageUrl}
                alt={currentFac.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-white text-xs font-medium">
                {currentFac.title}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                  Feature 0{activeFacility + 1} of 0{FACILITIES.length}
                </span>
                <h4 className="text-xl font-serif font-bold text-slate-900 mt-1 mb-3">
                  {currentFac.title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {currentFac.description}
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-stone-800 uppercase tracking-wide">
                    Facility Highlights:
                  </div>
                  {currentFac.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Available for all enrolled students
                </span>
                <button
                  onClick={() => setActiveFacility((prev) => (prev + 1) % FACILITIES.length)}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Facility</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
