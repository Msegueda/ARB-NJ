"use client";

import { useState } from 'react';
import { Search, Download, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { mockTransactions } from '@/lib/mock-data';
import { Transaction } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function LedgerTable() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = mockTransactions.filter((tx) => {
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
      case 'cash': return 'Cash (Meeting)';
      case 'check': return 'Check (Meeting)';
      case 'zelle': return 'Zelle Transfer';
      case 'ach': return 'Monthly ACH';
      case 'card': return 'Credit Card';
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
            {status === 'cleared' ? 'Cleared' : 'Verified'}
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center text-sm font-medium text-gold-800 bg-gold-50 px-2 py-1 rounded">
            <Clock className="mr-1.5 h-4 w-4 text-gold-600" />
            Pending
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center text-sm font-medium text-terracotta-700 bg-terracotta-50 px-2 py-1 rounded">
            <AlertCircle className="mr-1.5 h-4 w-4 text-terracotta-600" />
            Error
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
            All
          </button>
          <button
            onClick={() => setFilter('cash')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'cash' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Cash at Assemblies
          </button>
          <button
            onClick={() => setFilter('zelle')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'zelle' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Zelle & ACH
          </button>
          <button
            onClick={() => setFilter('card')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${filter === 'card' ? 'bg-forest-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Credit Card
          </button>
        </div>

        <div className="relative rounded-md shadow-sm max-w-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="focus:ring-forest-500 focus:border-forest-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-2 border bg-white"
            placeholder="Search by family name or receipt #..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Contributor</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Method</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Receipt #</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Verified By</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
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
                  No transactions found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
        <span className="text-sm text-slate-500">Showing {filteredTransactions.length} of {mockTransactions.length} transactions</span>
        <button className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500">
          <Download className="mr-2 h-4 w-4" />
          Export Monthly Financial Statement (PDF)
        </button>
      </div>
    </div>
  );
}
