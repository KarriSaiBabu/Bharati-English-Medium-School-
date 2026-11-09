import { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Tag, Download, Bell, FileText, ChevronRight, X, CalendarCheck } from 'lucide-react';
import { SCHOOL_EVENTS, ANNOUNCEMENTS } from '../data/schoolData';
import { SchoolEvent, Announcement } from '../types/school';

export default function EventsCalendarSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'events' | 'announcements'>('events');
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [savedToCalendar, setSavedToCalendar] = useState<string | null>(null);

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Exams'];

  const filteredEvents = useMemo(() => {
    return SCHOOL_EVENTS.filter((evt) => {
      const matchesCat = selectedCategory === 'All' || evt.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        evt.title.toLowerCase().includes(q) ||
        evt.description.toLowerCase().includes(q) ||
        evt.location.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCalendar = (evt: SchoolEvent) => {
    setSavedToCalendar(evt.id);
    setTimeout(() => {
      setSavedToCalendar(null);
    }, 2500);
  };

  return (
    <section id="events" className="py-16 sm:py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Academic Year 2026–2027 Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Events Calendar & Student Announcements
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              Stay synchronized with examination schedules, inter-house sports competitions, science exhibitions, and official administrative circulars.
            </p>
          </div>

          {/* Primary View Switcher */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-stone-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Events Schedule ({SCHOOL_EVENTS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'announcements'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-stone-600 hover:text-slate-900'
              }`}
            >
              <Bell className="w-3.5 h-3.5 text-amber-600" />
              <span>Announcements ({ANNOUNCEMENTS.length})</span>
            </button>
          </div>
        </div>

        {activeTab === 'events' ? (
          <div>
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1 overflow-x-auto pb-2 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-amber-600 text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-xs text-stone-500">
                Showing {filteredEvents.length} upcoming events
              </div>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-stone-50 border border-stone-200 hover:border-amber-300 rounded-xl p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Date + Category */}
                    <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-3">
                      <span className="font-semibold text-amber-800">{evt.category}</span>
                      {evt.circularNo && (
                        <span className="font-mono text-[11px] text-stone-400">{evt.circularNo}</span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug mb-2">
                      {evt.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-stone-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="font-medium text-stone-800">{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {evt.description}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleAddToCalendar(evt)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                        savedToCalendar === evt.id
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-amber-600" />
                      <span>{savedToCalendar === evt.id ? 'Reminder Saved!' : 'Add Reminder'}</span>
                    </button>

                    <button
                      onClick={() => setSelectedEvent(evt)}
                      className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Student Announcements List */
          <div className="space-y-4">
            {ANNOUNCEMENTS.map((ann) => (
              <div
                key={ann.id}
                className="bg-stone-50 border border-stone-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-amber-300 transition-colors"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold uppercase tracking-wider text-amber-800">{ann.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{ann.date}</span>
                    {ann.pinned && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 font-medium">Important</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                    {ann.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {ann.summary}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedAnnouncement(ann)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Circular</span>
                  </button>
                  <button
                    onClick={() => alert(`Downloading circular: ${ann.docUrl || 'Document.pdf'}`)}
                    className="p-2 border border-stone-300 rounded-lg text-stone-600 hover:text-slate-900 hover:bg-white transition-colors cursor-pointer"
                    title="Download Circular PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono uppercase text-amber-800 mb-1">
              {selectedEvent.category} · Ref: {selectedEvent.circularNo || 'CAMPUS-EVENT'}
            </div>

            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
              {selectedEvent.title}
            </h3>

            <div className="space-y-2 p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-xs text-stone-700 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Date: <strong className="text-slate-900">{selectedEvent.date}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Timing: <strong className="text-slate-900">{selectedEvent.time}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Venue: <strong className="text-slate-900">{selectedEvent.location}</strong></span>
              </div>
            </div>

            <div className="text-sm text-stone-600 leading-relaxed mb-6">
              <p>{selectedEvent.description}</p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Attendance requirement: All enrolled students
              </span>
              <button
                onClick={() => {
                  alert(`Added "${selectedEvent.title}" on ${selectedEvent.date} to your personal schedule.`);
                  setSelectedEvent(null);
                }}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Sync with My Calendar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Announcement Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-amber-800 uppercase tracking-wider mb-2">
              Official School Circular · {selectedAnnouncement.date}
            </div>

            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
              {selectedAnnouncement.title}
            </h3>

            <div className="text-sm text-stone-700 space-y-3 leading-relaxed mb-6">
              <p>{selectedAnnouncement.content}</p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3 text-xs">
              <span className="text-stone-500 font-mono">
                {selectedAnnouncement.docUrl}
              </span>
              <button
                onClick={() => {
                  alert(`Downloading ${selectedAnnouncement.docUrl}`);
                }}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Circular Copy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
