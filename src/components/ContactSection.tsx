import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const faqs = [
    {
      q: "What is the medium of instruction at Bharati School?",
      a: "The primary medium of instruction across all grades (Pre-KG to Grade 10) is English. We emphasize strong spoken fluency and vocabulary, alongside comprehensive Telugu and Hindi second/third language options according to state board regulations."
    },
    {
      q: "What are the school timings and assembly hours?",
      a: "Classes operate from Monday to Saturday between 8:30 AM and 4:00 PM. Morning assembly commences at 8:45 AM. Primary grades have an earlier dispersal on Saturdays at 12:45 PM."
    },
    {
      q: "Is school bus transport available with GPS tracking?",
      a: "Yes. Our fleet of school buses covers major residential zones across Visakhapatnam. All vehicles are fitted with certified GPS trackers, speed governors, and trained lady attendants for child safety."
    },
    {
      q: "How does the school prepare Grade 10 students for Board Exams?",
      a: "We conduct structured revision cycles, weekly chapter assessments, unit tests, and three pre-final examinations. Individual doubt-clearing sessions and parent-teacher alignment are held every month."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Campus Office & Admissions Desk
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Have questions about admissions, school bus routes, or academic curriculum? Reach out to our administrative team or plan a campus visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Campus Info & FAQ */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs space-y-4">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Bharati English Medium School Campus
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Address:</strong>
                    <p className="text-stone-600 mt-0.5">{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Contact Numbers:</strong>
                    <p className="text-stone-600 mt-0.5">
                      <a href={`tel:${SCHOOL_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-amber-800 underline decoration-stone-300">
                        {SCHOOL_INFO.phone}
                      </a>{' '}
                      · {SCHOOL_INFO.alternatePhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Official Email:</strong>
                    <p className="text-stone-600 mt-0.5">
                      <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-amber-800 underline decoration-stone-300">
                        {SCHOOL_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">School & Office Timings:</strong>
                    <p className="text-stone-600 mt-0.5">{SCHOOL_INFO.timings}</p>
                    <p className="text-xs text-stone-500 mt-0.5">Morning Assembly: {SCHOOL_INFO.assemblyTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-slate-900 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-2xs">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 mb-1">
              Send an Inquiry or Feedback
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Our administrative desk will reply to your message within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-stone-600">
                  Thank you for contacting Bharati English Medium School. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white text-xs sm:text-sm"
                    >
                      <option>Admissions & Fee Details</option>
                      <option>General Inquiry</option>
                      <option>Transport & Bus Routes</option>
                      <option>Curriculum & Books</option>
                      <option>Principal Appointment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your child's age, grade applying for, or specific query..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to School Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
