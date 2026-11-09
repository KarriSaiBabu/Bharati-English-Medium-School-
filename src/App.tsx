/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FacultySection from './components/FacultySection';
import EventsCalendarSection from './components/EventsCalendarSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdmissionsModal from './components/AdmissionsModal';

export default function App() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenAdmissions={() => setIsAdmissionsOpen(true)} />

      {/* Campus Notice Board Ticker */}
      <NoticeTicker />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with Campus Showcase & Stats */}
        <HeroSection onOpenAdmissions={() => setIsAdmissionsOpen(true)} />

        {/* Institutional Legacy, Philosophy & Facilities */}
        <AboutSection />

        {/* Faculty Profiles & Staff Directory */}
        <FacultySection />

        {/* Events Calendar & Student Announcements Hub */}
        <EventsCalendarSection />

        {/* Achievement & Extracurricular Gallery */}
        <GallerySection />

        {/* Parent & Alumni Endorsements */}
        <TestimonialsSection />

        {/* Contact, Timings & Location Map Info */}
        <ContactSection />
      </main>

      {/* Footer with School Info & Developer Author Details */}
      <Footer />

      {/* Admissions Registration Modal */}
      <AdmissionsModal
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
      />
    </div>
  );
}
