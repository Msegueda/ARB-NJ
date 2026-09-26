'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Lock, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 gap-2 sm:gap-4">
        {/* Left: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#0F3826] flex items-center justify-center text-white shrink-0">
            <Building2 className="w-6 h-6 text-[#D49B28]" />
          </div>
          <span className="font-bold text-base sm:text-lg lg:text-xl text-[#0F3826] whitespace-nowrap hidden sm:inline-block">
            {t('navbar.title')}
          </span>
          <span className="font-bold text-base text-[#0F3826] whitespace-nowrap sm:hidden">
            BHP
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#mission" className="hover:text-[#0F3826] transition-colors">
            {t('navbar.mission')}
          </Link>
          <Link href="/transparency" className="hover:text-[#0F3826] transition-colors">
            {t('navbar.liveLedger')}
          </Link>
          <Link href="/governance" className="hover:text-[#0F3826] transition-colors">
            {t('navbar.governance')}
          </Link>
          <Link href="/contribute" className="hover:text-[#0F3826] transition-colors">
            {t('navbar.contribute')}
          </Link>
          <Link href="/dashboard" className="hover:text-[#0F3826] transition-colors">
            {t('navbar.memberPortal')}
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200 shrink-0">
             <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded-full transition-colors ${
                language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
              aria-label="Switch to English"
            >
              🇺🇸 EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 text-xs font-bold rounded-full transition-colors ${
                language === 'fr' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
              aria-label="Switch to French"
            >
              🇧🇫 FR
            </button>
          </div>

          <Link
            href="/treasurer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md border border-slate-200 shrink-0 whitespace-nowrap"
          >
            <Lock className="w-3.5 h-3.5" />
            {t('navbar.treasurerLogin')}
          </Link>

          <Link
            href="/contribute"
            className="inline-flex items-center justify-center rounded-lg bg-[#D49B28] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-[#c08b22] transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            {t('navbar.contributeNow')}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-1 sm:p-2 text-slate-600 hover:text-slate-900 focus:outline-none shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            {t('navbar.mission')}
          </Link>
          <Link
            href="/transparency"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            {t('navbar.liveLedger')}
          </Link>
          <Link
            href="/governance"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            {t('navbar.governance')}
          </Link>
          <Link
            href="/contribute"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            {t('navbar.contribute')}
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            {t('navbar.memberPortal')}
          </Link>
          <Link
            href="/treasurer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-base font-medium text-slate-700 hover:text-[#0F3826] pt-2 border-t border-slate-100"
          >
            <Lock className="w-4 h-4" />
            {t('navbar.treasurerLogin')}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
