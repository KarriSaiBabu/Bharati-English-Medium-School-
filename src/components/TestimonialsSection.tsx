import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Parent & Alumni Reflections
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Trusted by Generations of Visakhapatnam Families
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Hear from the parents and students whose futures have been shaped by the disciplined, caring environment at Bharati English Medium School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-600/40 mb-3" />
                <p className="text-stone-700 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80">
                <div className="font-serif font-bold text-slate-900 text-sm">
                  {t.parentName}
                </div>
                <div className="text-xs text-amber-800 font-medium">
                  {t.relation}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  {t.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
