'use client';

import { Home, Store, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function BuildingProjectCard() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-forest-900 px-6 py-8 sm:px-10">
        <h2 className="text-2xl font-bold text-white mb-2">{t('home.visionTitle')}</h2>
        <p className="text-slate-300">{t('home.visionSubtitle')}</p>
      </div>

      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Multipurpose cultural ballroom */}
          <div className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 hover:border-gold-300 hover:shadow-md transition-all overflow-hidden">
             <div className="relative h-48 w-full">
              <Image
                src="/images/burkina-house-hall.jpg"
                alt="Multipurpose cultural ballroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-lg text-forest-700 shadow-sm">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t('home.hallTitle')}</h3>
                </div>
                <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                  {t('home.hallDesc')}
                </p>
            </div>
          </div>

          {/* Card 2: Ground-level commercial storefront */}
          <div className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 hover:border-gold-300 hover:shadow-md transition-all overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/burkina-house-storefront.jpg"
                alt="Ground-level commercial storefront"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-lg text-gold-600 shadow-sm">
                    <Store className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t('home.storefrontTitle')}</h3>
                </div>
                <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                  {t('home.storefrontDesc')}
                </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-gold-300 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white rounded-lg text-terracotta-700 shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{t('home.legacyTitle')}</h3>
          </div>
          <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
            {t('home.legacyDesc')}
          </p>
        </div>
      </div>
    </div>
  );
}
