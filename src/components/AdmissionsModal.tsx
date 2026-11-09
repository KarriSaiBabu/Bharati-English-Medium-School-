import { useState } from 'react';
import { X, Send, CheckCircle2, GraduationCap, Download, Calendar, Phone, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionsModal({ isOpen, onClose }: AdmissionsModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Grade 1',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    previousSchool: '',
    address: '',
    transportRequired: 'Yes'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `BEMS-2027-${Math.floor(10000 + Math.random() * 90000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 mb-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Academic Year 2027–2028</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-1">
              Admission Registration Form
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Bharati English Medium School invites applications for Pre-KG to Grade 10. Submit your details for early seat reservation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Ananya Karri"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.gradeApplying}
                    onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  >
                    <option>Pre-KG</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10 (SSC Board)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. S. Karri"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Primary Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    placeholder="e.g. 9347567746"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
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
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder="e.g. parent@gmail.com"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    School Bus Transport Required?
                  </label>
                  <select
                    value={formData.transportRequired}
                    onChange={(e) => setFormData({ ...formData, transportRequired: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                  >
                    <option>Yes, need GPS school bus facility</option>
                    <option>No, self-drop and pick up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Residential Address (Visakhapatnam area) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Door No., Street, Colony, Locality..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 text-xs sm:text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-sm transition-colors text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Admission Registration Submitted!
            </h3>

            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Thank you for applying to <strong>{SCHOOL_INFO.name}</strong>. Your provisional application has been recorded.
            </p>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between border-b border-stone-200 pb-1.5">
                <span className="text-stone-500">Application Number:</span>
                <span className="font-mono font-bold text-amber-800">{appId}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-1.5">
                <span className="text-stone-500">Student Name:</span>
                <span className="font-medium text-slate-900">{formData.studentName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-1.5">
                <span className="text-stone-500">Grade Applied:</span>
                <span className="font-medium text-slate-900">{formData.gradeApplying}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Parent Contact:</span>
                <span className="font-mono text-slate-900">{formData.parentPhone}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => alert(`Downloaded receipt for Application #${appId}`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 text-xs font-medium cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Application Acknowledgment</span>
              </button>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
