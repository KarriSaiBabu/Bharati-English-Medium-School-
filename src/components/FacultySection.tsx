import { useState, useMemo } from 'react';
import { Search, Mail, Award, BookOpen, GraduationCap, Clock, ChevronRight, X, Send } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/schoolData';
import { FacultyMember } from '../types/school';

export default function FacultySection() {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTeacher, setActiveTeacher] = useState<FacultyMember | null>(null);
  const [consultationSuccess, setConsultationSuccess] = useState(false);

  const departments = [
    'All',
    'Administration & Leadership',
    'Mathematics',
    'Physical Sciences',
    'Languages',
    'Technology',
    'Physical Education',
    'Cultural Arts'
  ];

  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter((faculty) => {
      const matchesDept = selectedDept === 'All' || faculty.department === selectedDept;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        faculty.name.toLowerCase().includes(query) ||
        faculty.department.toLowerCase().includes(query) ||
        faculty.qualification.toLowerCase().includes(query) ||
        faculty.subjects.some((s) => s.toLowerCase().includes(query));
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <section id="faculty" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Our Educators & Mentors
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Distinguished Faculty Dedicated to Every Student's Growth
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              Meet our team of 58+ certified teachers, subject specialists, and visionary leaders who blend traditional pedagogical values with modern interactive instruction.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty or subject..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedDept === dept
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-200 hover:text-slate-900 border border-stone-200'
              }`}
            >
              {dept === 'Administration & Leadership' ? 'Leadership' : dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200 p-8">
            <GraduationCap className="w-10 h-10 text-stone-400 mx-auto mb-2" />
            <p className="text-stone-700 font-medium">No faculty members found</p>
            <p className="text-xs text-stone-500 mt-1">Try clearing your search query or selecting a different department.</p>
            <button
              onClick={() => {
                setSelectedDept('All');
                setSearchQuery('');
              }}
              className="mt-4 px-3 py-1.5 text-xs font-semibold bg-stone-900 text-white rounded-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl border border-stone-200 p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Top card identity */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-13 h-13 rounded-full flex items-center justify-center font-serif font-bold text-lg border shrink-0 ${member.avatarColor}`}>
                      {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 group-hover:text-amber-800 transition-colors">
                        {member.name}
                      </h3>
                      <div className="text-xs font-medium text-amber-700">
                        {member.designation}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {member.department}
                      </div>
                    </div>
                  </div>

                  {/* Academic credentials */}
                  <div className="space-y-1.5 text-xs text-stone-600 mb-4 bg-stone-50 p-3 rounded-lg border border-stone-100">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{member.qualification}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  {/* Bio brief */}
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                    {member.bio}
                  </p>

                  {/* Subjects taught */}
                  <div className="mb-4">
                    <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                      Subjects & Specializations:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.subjects.map((subj) => (
                        <span
                          key={subj}
                          className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded text-[11px] font-medium"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-amber-800 transition-colors"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Faculty</span>
                  </a>

                  <button
                    onClick={() => {
                      setActiveTeacher(member);
                      setConsultationSuccess(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-900 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Teacher Profile / Consultation Modal */}
      {activeTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveTeacher(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-xl border shrink-0 ${activeTeacher.avatarColor}`}>
                {activeTeacher.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  {activeTeacher.name}
                </h3>
                <div className="text-xs font-medium text-amber-700">
                  {activeTeacher.designation}
                </div>
                <div className="text-xs text-stone-500">
                  Department of {activeTeacher.department}
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-700 mb-6">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80">
                <div className="font-semibold text-slate-900 mb-1">Academic Background</div>
                <p>Qualification: {activeTeacher.qualification}</p>
                <p className="mt-0.5">Teaching Experience: {activeTeacher.experience}</p>
                <p className="mt-0.5 font-mono text-[11px] text-stone-500">Official Email: {activeTeacher.email}</p>
              </div>

              <div>
                <div className="font-semibold text-slate-900 mb-1">Pedagogical Philosophy</div>
                <p className="leading-relaxed text-stone-600">{activeTeacher.bio}</p>
              </div>

              <div>
                <div className="font-semibold text-slate-900 mb-1.5">Curriculum & Classes</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeTeacher.subjects.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Parent-Teacher Consultation Request */}
            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Request Parent-Teacher Consultation
              </h4>
              {consultationSuccess ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs">
                  Your appointment request has been scheduled with {activeTeacher.name}. The school office will confirm your slot via SMS.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultationSuccess(true);
                  }}
                  className="space-y-2 text-xs"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      required
                      placeholder="Student Name & Grade"
                      className="w-full px-2.5 py-1.5 border border-stone-300 rounded text-xs"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Parent Phone Number"
                      className="w-full px-2.5 py-1.5 border border-stone-300 rounded text-xs"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Brief query or preferred consultation timing..."
                    className="w-full px-2.5 py-1.5 border border-stone-300 rounded text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Meeting Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
