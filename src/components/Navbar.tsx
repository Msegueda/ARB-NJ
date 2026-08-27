'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Lock, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Left: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#0F3826] flex items-center justify-center text-white">
            <Building2 className="w-6 h-6 text-[#D49B28]" />
          </div>
          <span className="font-bold text-base sm:text-lg lg:text-xl text-[#0F3826] whitespace-nowrap">
            Burkina-Newark Fund
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#mission" className="hover:text-[#0F3826] transition-colors">
            Mission & Vision
          </Link>
          <Link href="/transparency" className="hover:text-[#0F3826] transition-colors">
            Live Ledger
          </Link>
          <Link href="/governance" className="hover:text-[#0F3826] transition-colors">
            Governance
          </Link>
          <Link href="/contribute" className="hover:text-[#0F3826] transition-colors">
            Contribute
          </Link>
          <Link href="/dashboard" className="hover:text-[#0F3826] transition-colors">
            Member Portal
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/treasurer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md border border-slate-200"
          >
            <Lock className="w-3.5 h-3.5" />
            Treasurer Login
          </Link>

          <Link
            href="/contribute"
            className="inline-flex items-center justify-center rounded-lg bg-[#D49B28] px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-[#c08b22] transition-colors shadow-sm whitespace-nowrap"
          >
            Contribute Now
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            Mission & Vision
          </Link>
          <Link
            href="/transparency"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            Live Ledger
          </Link>
          <Link
            href="/governance"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            Governance
          </Link>
          <Link
            href="/contribute"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            Contribute
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#0F3826]"
          >
            Member Portal
          </Link>
          <Link
            href="/treasurer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-base font-medium text-slate-700 hover:text-[#0F3826] pt-2 border-t border-slate-100"
          >
            <Lock className="w-4 h-4" />
            Treasurer Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
