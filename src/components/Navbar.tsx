import { useState } from 'react';
import { Menu, X, GraduationCap, Phone, Calendar, Users, Image as ImageIcon, BookOpen, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmissions: () => void;
}

export default function Navbar({ onOpenAdmissions }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', icon: BookOpen },
    { label: 'Academics', href: '#academics', icon: GraduationCap },
    { label: 'Faculty', href: '#faculty', icon: Users },
    { label: 'Calendar', href: '#events', icon: Calendar },
    { label: 'Gallery', href: '#gallery', icon: ImageIcon },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-stone-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-stone-300">
            <span>Affiliation: {SCHOOL_INFO.affiliation}</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline">Admissions Open 2027–28</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
            <a href={`tel:${SCHOOL_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Following Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center shadow-sm group-hover:bg-amber-700 transition-colors">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-slate-900 whitespace-nowrap leading-none">
              Bharati English Medium School
            </span>
            <span className="text-[11px] font-medium text-stone-500 tracking-wider uppercase mt-1">
              Visakhapatnam · Est. 1998
            </span>
          </div>
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-amber-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAdmissions}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Apply for Admission</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-slate-900 hover:bg-stone-100 rounded-md focus:outline-hidden focus:ring-2 focus:ring-amber-600"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-stone-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Apply for Admission</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
