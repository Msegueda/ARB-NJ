'use client';

import { useState, useEffect } from 'react';
import LedgerTable from '@/components/LedgerTable';
import { ShieldCheck, Landmark, Smartphone, Banknote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getStoredPledges, getStoredTransactions } from '@/lib/storage';

export default function TransparencyPage() {
  const { t } = useLanguage();
  const [totalRaised, setTotalRaised] = useState(24750);
  const goal = 150000;

  useEffect(() => {
    // Calculate total from stored pledges and stored transactions
    const storedPledges = getStoredPledges();
    const storedTxs = getStoredTransactions();

    // Sum pledges
    const localPledgeTotal = storedPledges
      .filter(p => p.type === 'pathwayA')
      .reduce((sum, p) => sum + Number(p.amount || 0), 0);

    // The initial 24750 was derived from the mock data in mock-data.ts
    // Let's rely entirely on the current state of transactions + new pledges
    const txTotal = storedTxs.reduce((sum, tx) => sum + Number(tx.amount || 0), 0);

    setTotalRaised(txTotal + localPledgeTotal);
  }, []);

  const progressPercentage = Math.min(100, (totalRaised / goal) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-forest-900 flex items-center justify-center sm:justify-start">
              <ShieldCheck className="h-8 w-8 text-forest-600 mr-3" />
              {t('transparency.pageTitle')}
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              {t('transparency.pageSubtitle')}
            </p>
          </div>
        </div>

        {/* Progress toward Milestone */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-forest-900">{t('transparency.milestoneTitle')}</h2>
              <p className="text-sm text-slate-500">{t('transparency.milestoneSubtitle')}</p>
            </div>
            <div className="text-right mt-4 sm:mt-0">
              <div className="text-3xl font-black text-forest-600">${totalRaised.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}</div>
              <div className="text-sm font-medium text-slate-500">{t('transparency.raisedOf')} $150,000</div>
            </div>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden border border-slate-200">
            <div className="bg-gold-500 h-4 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>$0</span>
            <span>{progressPercentage}%</span>
            <span>$150,000</span>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 border-l-4 border-l-forest-600">
            <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
              <Landmark className="h-5 w-5 mr-2 text-forest-600" />
              {t('transparency.totalReserves')}
            </div>
            <div className="text-3xl font-bold text-slate-900">${totalRaised.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 border-l-4 border-l-gold-500">
            <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
              <Smartphone className="h-5 w-5 mr-2 text-gold-600" />
              {t('transparency.onlineDeposits')}
            </div>
            <div className="text-3xl font-bold text-slate-900">$14,200.00</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 border-l-4 border-l-terracotta-600">
            <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
              <Banknote className="h-5 w-5 mr-2 text-terracotta-600" />
              {t('transparency.assemblyCash')}
            </div>
            <div className="text-3xl font-bold text-slate-900">$10,550.00</div>
          </div>
        </div>

        {/* Ledger Table */}
        <LedgerTable />
      </div>
    </div>
  );
}
