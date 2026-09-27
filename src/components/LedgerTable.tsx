"use client";

import { useState, useEffect } from 'react';
import { Search, Download, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Transaction } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { getStoredTransactions, getStoredPledges } from '@/lib/storage';

export default function LedgerTable() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [localTransactions, setLocalTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Load local pledges
    const storedPledges = getStoredPledges();
    const storedTxs = getStoredTransactions();

    // Map local pledges to Transaction interface
    const mappedPledges = storedPledges
      .filter((p) => p.type === 'pathwayA') // Only show financial pledges
      .map((p) => ({
        id: p.id,
        date: p.date,
        contributorName: p.privacy === 'anonymous' ? 'Anonymous' : p.fullName,
        method: p.paymentMethod || 'cash',
        amount: p.amount || 0,
        receiptNumber: p.id,
        verifiedBy: 'Pending Review',
        status: 'pending' as const,
        notes: ''
      }));

    // De-duplicate in case of manual reset issues, preferring storedTxs over pledges for the same ID
    const combined = [...storedTxs, ...mappedPledges];
    const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());

    // Sort by date descending
    unique.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    setLocalTransactions(unique);
  }, []);

  const filteredTransactions = localTransactions.filter((tx) => {
    const matchesSearch =
      tx.contributorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === 'all') return true;
    if (filter === 'cash' && (tx.method === 'cash' || tx.method === 'check')) return true;
    if (filter === 'zelle' && (tx.method === 'zelle' || tx.method === 'ach')) return true;
    if (filter === 'card' && tx.method === 'card') return true;

    return false;
  });

  const getMethodText = (method: Transaction['method']) => {
    switch (method) {
      case 'cash': return t('ledger.method.cash');
      case 'check': return t('ledger.method.check');
      case 'zelle': return t('ledger.method.zelle');
      case 'ach': return t('ledger.method.ach');
      case 'card': return t('ledger.method.card');
      case 'wire': return t('ledger.method.wire');
      default: return method;
    }
  };

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'cleared':
      case 'verified':
        return (
          <span className="inline-flex items-center text-sm font-medium text-forest-700 bg-forest-50 px-2 py-1 rounded">
            <CheckCircle2 className="mr-1.5 h-4 w-4 text-forest-600" />
            {status === 'cleared' ? t('ledger.status.cleared') : t('ledger.status.verified')}
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center text-sm font-medium text-gold-800 bg-gold-50 px-2 py-1 rounded">
            <Clock className="mr-1.5 h-4 w-4 text-gold-600" />
            {t('ledger.status.pending')}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center text-sm font-medium text-terracotta-700 bg-terracotta-50 px-2 py-1 rounded">
            <AlertCircle className="mr-1.5 h-4 w-4 text-terracotta-600" />
            {t('ledger.status.error')}
          </span>
        );
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border border-slate-200">
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'all' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {t('ledger.filters.all')}
          </button>
          <button
            onClick={() => setFilter('cash')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'cash' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {t('ledger.filters.cash')}
          </button>
          <button
            onClick={() => setFilter('zelle')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'zelle' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {t('ledger.filters.zelle')}
          </button>
          <button
            onClick={() => setFilter('card')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'card' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {t('ledger.filters.card')}
          </button>
        </div>

        <div className="relative rounded-md shadow-sm max-w-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="focus:ring-forest-500 focus:border-forest-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-2 border bg-white"
            placeholder={t('ledger.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.date')}</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.contributor')}</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.method')}</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.amount')}</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.receipt')}</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.verified')}</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{t('ledger.columns.status')}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {formatDate(tx.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-slate-900">{tx.contributorName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {getMethodText(tx.method)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-slate-900">${tx.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-mono">
                  {tx.receiptNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {tx.verifiedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(tx.status)}
                </td>
              </tr>
            ))}
            {filteredTransactions.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                  {t('ledger.noResults')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
        <span className="text-sm text-slate-500">
          {t('ledger.showingResults')
            .replace('{count}', filteredTransactions.length.toString())
            .replace('{total}', localTransactions.length.toString())}
        </span>
        <button className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500">
          <Download className="mr-2 h-4 w-4" />
          {t('ledger.exportBtn')}
        </button>
      </div>
    </div>
  );
}
