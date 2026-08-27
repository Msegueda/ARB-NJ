"use client";

import Link from 'next/link';
import { Menu, X, Building2, Lock } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="p-2 bg-forest-900 rounded-md">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-forest-900 hidden sm:block">Burkina-Newark Community Fund</span>
              <span className="font-bold text-xl text-forest-900 sm:hidden">BNK Fund</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="border-transparent text-slate-500 hover:border-forest-900 hover:text-forest-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
              Mission & Vision
            </Link>
            <Link href="/transparency" className="border-transparent text-slate-500 hover:border-forest-900 hover:text-forest-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
              Live Ledger
            </Link>
            <Link href="/governance" className="border-transparent text-slate-500 hover:border-forest-900 hover:text-forest-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
              Governance
            </Link>
            <Link href="/contribute" className="border-transparent text-slate-500 hover:border-forest-900 hover:text-forest-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
              Contribute
            </Link>
            <Link href="/dashboard" className="border-transparent text-slate-500 hover:border-forest-900 hover:text-forest-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
              Member Portal
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link href="/treasurer" className="text-slate-500 hover:text-slate-700 text-sm font-medium flex items-center">
              <Lock className="w-4 h-4 mr-1" />
              Treasurer Login
            </Link>
            <Link href="/contribute" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-forest-900 bg-gold-700 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-700 transition-colors">
              Contribute Now
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-900"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-forest-50 border-forest-900 text-forest-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Mission & Vision
            </Link>
            <Link href="/transparency" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Live Ledger
            </Link>
            <Link href="/governance" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Governance
            </Link>
            <Link href="/contribute" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Contribute
            </Link>
            <Link href="/dashboard" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Member Portal
            </Link>
            <Link href="/treasurer" className="border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Treasurer Login
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-slate-200">
            <div className="px-4">
              <Link href="/contribute" className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-forest-900 bg-gold-700 hover:bg-gold-600">
                Contribute Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
