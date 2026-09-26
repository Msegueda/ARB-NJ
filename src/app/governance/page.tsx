'use client';

import { ShieldAlert, Users, Scale, CheckCircle2 } from 'lucide-react';
import { mockElders } from '@/lib/mock-data';
import { useLanguage } from '@/context/LanguageContext';

export default function GovernancePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
            {t('governance.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('governance.subtitle')}
          </p>
        </div>

        {/* Dual-Control Banking Rules */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center">
            <ShieldAlert className="h-6 w-6 text-terracotta-600 mr-2" />
            {t('governance.flow.title')}
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-forest-200"></div>

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="z-10 flex items-center justify-center h-16 w-16 rounded-full bg-forest-100 border-4 border-white shadow-sm shrink-0">
                    <span className="text-xl font-bold text-forest-700">1</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('governance.flow.step1Title')}</h3>
                    <p className="text-slate-600">{t('governance.flow.step1Desc')}</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="z-10 flex items-center justify-center h-16 w-16 rounded-full bg-forest-100 border-4 border-white shadow-sm shrink-0">
                    <span className="text-xl font-bold text-forest-700">2</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('governance.flow.step2Title')}</h3>
                    <p className="text-slate-600">{t('governance.flow.step2Desc')}</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="z-10 flex items-center justify-center h-16 w-16 rounded-full bg-forest-100 border-4 border-white shadow-sm shrink-0">
                    <span className="text-xl font-bold text-forest-700">3</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('governance.flow.step3Title')}</h3>
                    <p className="text-slate-600">{t('governance.flow.step3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elder Advisory Board */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center">
            <Users className="h-6 w-6 text-forest-600 mr-2" />
            {t('governance.elders.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockElders.map((elder, idx) => (
              <div key={idx} className="bg-forest-900 rounded-xl p-6 shadow-md border border-forest-800">
                <div className="w-16 h-16 bg-forest-700 rounded-full mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-forest-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{elder.name}</h3>
                <p className="text-gold-400 text-sm font-medium mb-3">{elder.role}</p>
                <p className="text-slate-300 text-sm italic">
                  &quot;{elder.statement}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contingency Rules */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-8 py-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-forest-900 flex items-center">
                <Scale className="h-6 w-6 text-forest-600 mr-2" />
                {t('governance.bylaws.title')}
              </h2>
            </div>
            <div className="p-8">
              <p className="text-slate-700 mb-6">
                {t('governance.bylaws.intro')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-forest-500 mr-3 shrink-0" />
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: t('governance.bylaws.rule1') }}></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-forest-500 mr-3 shrink-0" />
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: t('governance.bylaws.rule2') }}></span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
