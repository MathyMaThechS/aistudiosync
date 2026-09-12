import React from 'react';
import { BookOpen, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  onStartExam: () => void;
  onExploreLessons: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartExam, onExploreLessons }) => {
  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#514487] via-[#5e4f9b] to-[#6d5cae] p-6 md:p-8 text-white shadow-lg">
      {/* Decorative subtle background accents */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[#b7a9e8]/20 blur-xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-[#b7a9e8]" />
          Civil Service Commission &bull; DepEd Schools Division
        </div>

        <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          Administrative Officer II Reviewer
        </h1>

        <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
          Written Examination &bull; Panel Interview &bull; Practical Office Skills &bull; v2.0
        </p>

        <div className="mt-3 max-w-2xl text-xs text-white/80">
          Comprehensive study aid updated with <strong>RA 12009</strong> (New Procurement Act), <strong>EO 64 s. 2024</strong> (Salary Schedule Tranches), <strong>RA 6713</strong>, and DepEd financial guidelines.
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartExam}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#514487] shadow-sm transition hover:bg-[#f1effb] active:scale-95"
          >
            <CheckCircle className="h-4 w-4 text-[#6d5cae]" />
            Take Practice Exam (270+ Qs)
          </button>
          <button
            onClick={onExploreLessons}
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
          >
            <BookOpen className="h-4 w-4" />
            Browse 14 Lessons & Quick Facts
          </button>
          <PWAInstallButton variant="header" />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] text-white/70">
          <span>&bull; Study Aid Only — Verify latest CSC & DepEd issuances</span>
          <span>&bull; 100% Free & Interactive</span>
        </div>
      </div>
    </header>
  );
};
