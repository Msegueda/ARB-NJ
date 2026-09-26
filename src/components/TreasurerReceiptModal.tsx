"use client";

import { useState } from 'react';
import { Save, User, DollarSign, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { saveTransaction } from '@/lib/storage';
import { Transaction } from '@/lib/types';

export default function TreasurerReceiptModal() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    isAnonymous: false,
    amount: '',
    method: 'cash',
    meetingLocation: 'Monthly Meeting - Ferry St, Newark',
    collectingOfficer: 'Mamadou O. (Treasurer)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const generateReceiptId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `BH-REC-2026-${randomNum}`;
  };

  const [receiptId, setReceiptId] = useState(generateReceiptId());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newTx: Transaction = {
        id: receiptId,
        contributorName: formData.isAnonymous ? 'Anonymous' : (formData.name + (formData.familyName ? ` ${formData.familyName}` : '')),
        amount: Number(formData.amount),
        date: new Date().toISOString(),
        method: formData.method as Transaction['method'],
        status: 'verified',
        receiptNumber: receiptId,
        verifiedBy: formData.collectingOfficer,
        notes: formData.notes
      };

      saveTransaction(newTx);
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          ...formData,
          name: '',
          familyName: '',
          isAnonymous: false,
          amount: '',
          notes: '',
        });
        setReceiptId(generateReceiptId());
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 w-full max-w-lg mx-auto">
      <div className="bg-forest-900 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Save className="h-5 w-5 mr-2" />
          {t('treasurer.modal.title')}
        </h2>
        <span className="bg-gold-500 text-forest-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{t('treasurer.modal.treasurerOnly')}</span>
      </div>

      <div className="p-6">
        {showSuccess ? (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-forest-50 mb-6">
              <svg className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('treasurer.modal.successTitle')}</h3>
            <p className="text-slate-500 mb-6">
              {t('treasurer.modal.successMsg1')} <span className="font-mono font-bold text-slate-800">{receiptId}</span> {t('treasurer.modal.successMsg2')}
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setReceiptId(generateReceiptId());
              }}
              className="text-forest-600 font-medium hover:text-forest-700 underline"
            >
              {t('treasurer.modal.logAnother')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-sm font-medium text-slate-600">{t('treasurer.modal.receiptNumber')}</span>
              <span className="font-mono font-bold text-slate-900">{receiptId}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('treasurer.modal.contributor')}</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    required={!formData.isAnonymous}
                    disabled={formData.isAnonymous}
                    className="focus:ring-forest-500 focus:border-forest-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-3 border disabled:bg-slate-100 disabled:text-slate-500"
                    placeholder={t('treasurer.modal.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Family / Clan Name</label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    disabled={formData.isAnonymous}
                    className="focus:ring-forest-500 focus:border-forest-500 block w-full px-3 sm:text-sm border-slate-300 rounded-md py-3 border disabled:bg-slate-100 disabled:text-slate-500"
                    placeholder="Optional"
                    value={formData.familyName}
                    onChange={(e) => setFormData({...formData, familyName: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center">
              <input
                id="anonymous"
                type="checkbox"
                className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded"
                checked={formData.isAnonymous}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    isAnonymous: e.target.checked,
                    name: e.target.checked ? t('treasurer.modal.anonymousMember') : '',
                    familyName: e.target.checked ? '' : formData.familyName
                  });
                }}
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm text-slate-600">
                {t('treasurer.modal.keepAnonymous')}
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{t('treasurer.modal.amount')}</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-6 w-6 text-slate-400" />
                </div>
                {/* Big numeric keypad/input */}
                <input
                  type="number"
                  required
                  min="1"
                  step="0.01"
                  className="focus:ring-forest-500 focus:border-forest-500 block w-full pl-10 pr-12 text-2xl font-black text-forest-900 border-slate-300 rounded-md py-4 border"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{t('treasurer.modal.paymentType')}</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, method: 'cash'})}
                  className={`py-3 px-2 text-sm font-medium rounded-md border transition-colors ${
                    formData.method === 'cash'
                    ? 'bg-forest-900 text-white border-forest-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {t('treasurer.modal.btnCash')}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, method: 'check'})}
                  className={`py-3 px-2 text-sm font-medium rounded-md border transition-colors ${
                    formData.method === 'check'
                    ? 'bg-forest-900 text-white border-forest-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {t('treasurer.modal.btnCheck')}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, method: 'zelle'})}
                  className={`py-3 px-2 text-sm font-medium rounded-md border transition-colors ${
                    formData.method === 'zelle'
                    ? 'bg-forest-900 text-white border-forest-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {t('treasurer.modal.btnZelle')}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{t('treasurer.modal.meetingContext')}</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  required
                  className="focus:ring-forest-500 focus:border-forest-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-2 border bg-slate-50 text-slate-600"
                  value={formData.meetingLocation}
                  onChange={(e) => setFormData({...formData, meetingLocation: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Collecting Officer</label>
                <input
                  type="text"
                  required
                  disabled
                  className="focus:ring-forest-500 focus:border-forest-500 block w-full px-3 sm:text-sm border-slate-300 rounded-md py-2 border bg-slate-100 text-slate-500"
                  value={formData.collectingOfficer}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Notes / Assembly Date</label>
                <input
                  type="text"
                  className="focus:ring-forest-500 focus:border-forest-500 block w-full px-3 sm:text-sm border-slate-300 rounded-md py-2 border bg-white"
                  placeholder="Additional context"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-forest-900 bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-70 transition-colors"
            >
              {isSubmitting ? t('treasurer.modal.submitLoading') : t('treasurer.modal.submitBtn')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
