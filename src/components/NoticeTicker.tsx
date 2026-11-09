import { useState } from 'react';
import { Bell, ChevronRight, FileText, X, Download } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/schoolData';
import { Announcement } from '../types/school';

export default function NoticeTicker() {
  const [selectedNotice, setSelectedNotice] = useState<Announcement | null>(null);
  const urgentNotices = ANNOUNCEMENTS.filter(a => a.pinned || a.category === 'Urgent');
  const [currentIdx, setCurrentIdx] = useState(0);

  const activeNotice = urgentNotices[currentIdx] || ANNOUNCEMENTS[0];

  return (
    <>
      <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-900 shrink-0">
              <Bell className="w-4 h-4 text-amber-600" />
              <span>Campus Notice:</span>
            </span>
            <button
              onClick={() => setSelectedNotice(activeNotice)}
              className="text-stone-800 hover:text-amber-800 font-medium truncate text-left underline decoration-amber-300 underline-offset-2 transition-colors cursor-pointer"
            >
              {activeNotice.title}
            </button>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto text-xs text-stone-600">
            <span>{activeNotice.date}</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setSelectedNotice(activeNotice)}
              className="font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-0.5 cursor-pointer"
            >
              <span>Read Full Circular</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-800 mb-2">
              <span className="font-semibold uppercase tracking-wider">{selectedNotice.category} Circular</span>
              <span aria-hidden="true">·</span>
              <span>{selectedNotice.date}</span>
            </div>

            <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug mb-3">
              {selectedNotice.title}
            </h3>

            <div className="p-3 bg-stone-50 rounded-lg text-xs font-sans text-stone-600 mb-4 border border-stone-100">
              <p className="font-medium text-stone-800 mb-1">Brief Summary:</p>
              <p>{selectedNotice.summary}</p>
            </div>

            <div className="text-sm text-stone-700 leading-relaxed space-y-3 mb-6">
              <p>{selectedNotice.content}</p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-stone-500">
                Official dispatch from Bharati Administrative Wing
              </div>
              <button
                onClick={() => {
                  alert(`Downloading circular document: ${selectedNotice.docUrl || 'CIRCULAR.pdf'}`);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Circular Copy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
