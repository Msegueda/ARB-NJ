'use client';

import ContributionForm from '@/components/ContributionForm';
import { ShieldCheck, HeartHandshake, History } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContributePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
            {t('contribute.pageTitle')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('contribute.pageSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContributionForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-forest-900 mb-4 flex items-center">
                <ShieldCheck className="h-5 w-5 text-forest-600 mr-2" />
                {t('contribute.secureTitle')}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {t('contribute.secureDesc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-forest-900 mb-4 flex items-center">
                <HeartHandshake className="h-5 w-5 text-forest-600 mr-2" />
                {t('contribute.taxTitle')}
              </h3>
              <p className="text-sm text-slate-600">
                {t('contribute.taxDesc')}
              </p>
            </div>

            <div className="bg-forest-900 rounded-2xl shadow-sm p-6 text-white border border-forest-800">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <History className="h-5 w-5 text-gold-400 mr-2" />
                {t('contribute.historyTitle')}
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                {t('contribute.historyDesc')}
              </p>
              <button className="w-full py-2 bg-forest-800 hover:bg-forest-700 text-sm font-medium rounded-md transition-colors border border-forest-700">
                {t('contribute.dashboardBtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
