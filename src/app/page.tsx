'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldAlert } from 'lucide-react';
import HeroProgress from '@/components/HeroProgress';
import BuildingProjectCard from '@/components/BuildingProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-forest-900 pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/burkina-house-exterior.jpg"
            alt="Burkina House Exterior"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {t('home.heroTitle')}
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('home.heroSubtitle')}
          </p>

          <div className="max-w-3xl mx-auto -mb-48 relative z-20">
            <HeroProgress />
          </div>
        </div>
      </section>

      {/* Elder Accountability Banner */}
      <section className="pt-56 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-terracotta-50 border-l-4 border-terracotta-600 p-4 rounded-r-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <ShieldAlert className="h-6 w-6 text-terracotta-700" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-bold text-terracotta-900 uppercase tracking-wider mb-1">{t('home.elderGuaranteeTitle')}</h3>
                <p className="text-sm text-terracotta-800 font-medium leading-relaxed">
                  {t('home.elderGuaranteeDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <BuildingProjectCard />
        </div>
      </section>

      {/* Trust, Governance & Escrow Transparency Module */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-forest-900 mb-8 text-center">{t('home.trustTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-forest-900 mb-2">{t('home.trustDualTitle')}</h3>
              <p className="text-sm text-slate-600">{t('home.trustDualDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-forest-900 mb-2">{t('home.trustEscrowTitle')}</h3>
              <p className="text-sm text-slate-600">{t('home.trustEscrowDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-forest-900 mb-2">{t('home.trustAuditedTitle')}</h3>
              <p className="text-sm text-slate-600">{t('home.trustAuditedDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-20 bg-slate-50 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-forest-900 mb-8">{t('home.readyTitle')}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contribute" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-md text-forest-900 bg-gold-500 hover:bg-gold-600 transition-colors">
              {t('home.makePledge')}
            </Link>
            <Link href="/transparency" className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 text-lg font-bold rounded-xl shadow-sm text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              {t('home.viewLedger')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
