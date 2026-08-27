"use client";

import { useState } from 'react';
import { CreditCard, Smartphone, Banknote, Building, ChevronRight, QrCode } from 'lucide-react';

export default function ContributionForm() {
  const [pledgeType, setPledgeType] = useState('monthly');
  const [amount, setAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setAmount(Number(val));
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
      <div className="bg-forest-900 px-6 py-8 sm:px-10 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Secure Your Pledge</h2>
        <p className="text-slate-300">Join the movement to build our community center</p>
      </div>

      <div className="p-6 sm:p-10">
        <div className="flex p-1 mb-8 bg-slate-100 rounded-lg">
          <button
            onClick={() => setPledgeType('monthly')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              pledgeType === 'monthly' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-500 hover:text-forest-700'
            }`}
          >
            Monthly Pledge
          </button>
          <button
            onClick={() => setPledgeType('one-time')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              pledgeType === 'one-time' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-500 hover:text-forest-700'
            }`}
          >
            One-Time Donation
          </button>
        </div>

        {/* Amount Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-3">Select Tier</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <button
              onClick={() => handleAmountSelect(50)}
              className={`p-4 border rounded-xl text-left transition-all ${
                amount === 50 && !customAmount
                  ? 'border-forest-600 bg-forest-50 ring-1 ring-forest-600'
                  : 'border-slate-200 hover:border-forest-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="text-sm font-medium text-slate-500 mb-1">Community Member</div>
              <div className="font-bold text-2xl text-forest-900">$50<span className="text-sm font-normal text-slate-500">/mo</span></div>
            </button>
            <button
              onClick={() => handleAmountSelect(100)}
              className={`p-4 border rounded-xl text-left transition-all relative ${
                amount === 100 && !customAmount
                  ? 'border-gold-500 bg-gold-50 ring-2 ring-gold-500'
                  : 'border-gold-300 hover:border-gold-400 bg-white text-slate-700'
              }`}
            >
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
                <span className="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
              </div>
              <div className="text-sm font-bold text-gold-700 mb-1">Family Builder</div>
              <div className="font-bold text-2xl text-forest-900">$100<span className="text-sm font-normal text-slate-500">/mo</span></div>
            </button>
            <button
              onClick={() => handleAmountSelect(250)}
              className={`p-4 border rounded-xl text-left transition-all ${
                amount === 250 && !customAmount
                  ? 'border-forest-600 bg-forest-50 ring-1 ring-forest-600'
                  : 'border-slate-200 hover:border-forest-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="text-sm font-medium text-slate-500 mb-1">Founding Benefactor</div>
              <div className="font-bold text-2xl text-forest-900">$250<span className="text-sm font-normal text-slate-500">/mo</span></div>
            </button>
          </div>

          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-slate-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="custom-amount"
              id="custom-amount"
              className="focus:ring-forest-500 focus:border-forest-500 block w-full pl-7 pr-12 sm:text-sm border-slate-300 rounded-lg py-3 border bg-white"
              placeholder="Custom / One-Time Amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-3">Payment Method</label>
          <div className="flex space-x-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                paymentMethod === 'card' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-600 hover:text-forest-700 hover:bg-slate-50'
              }`}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Debit/Credit/ACH
            </button>
            <button
              onClick={() => setPaymentMethod('zelle')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                paymentMethod === 'zelle' ? 'bg-white text-purple-900 shadow-sm' : 'text-slate-600 hover:text-purple-700 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Zelle
            </button>
            <button
              onClick={() => setPaymentMethod('cash')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                paymentMethod === 'cash' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-600 hover:text-forest-700 hover:bg-slate-50'
              }`}
            >
              <Banknote className="w-4 h-4 mr-2" />
              Cash/Check
            </button>
          </div>
        </div>

        {/* Dynamic Payment Action Area */}
        <div className="pt-6 border-t border-slate-200">
          {paymentMethod === 'card' && (
            <button className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-forest-900 bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors">
              Proceed to Secure Checkout <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          )}

          {paymentMethod === 'zelle' && (
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex flex-col items-center text-center">
              <QrCode className="w-32 h-32 text-purple-900 mb-4" />
              <h4 className="font-bold text-purple-900 mb-2">Scan to Pay with Zelle</h4>
              <p className="text-sm text-purple-800 mb-4">Or send directly to official community association account:</p>
              <div className="bg-white px-4 py-2 rounded-lg border border-purple-200 mb-4 w-full">
                <div className="font-mono text-lg font-bold text-slate-900">finance@burkinanewark.org</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200 w-full text-left">
                <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Required Memo</div>
                <div className="font-mono font-bold text-slate-900 text-sm">BNK PLEDGE - [YOUR FULL NAME]</div>
              </div>
            </div>
          )}

          {paymentMethod === 'cash' && (
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-start mb-4">
                <Building className="h-6 w-6 text-forest-600 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-forest-900">In-Person Drop-off Instructions</h4>
                  <p className="text-sm text-slate-600 mt-1">Please bring your contribution to the next General Assembly meeting.</p>
                </div>
              </div>
              <ul className="text-sm text-slate-700 space-y-3 list-disc list-inside bg-white p-5 rounded-lg border border-slate-200">
                <li>Make checks payable to: <strong className="text-forest-900">Burkina-Newark Community Fund</strong></li>
                <li>Hand directly to the Treasurer or President only.</li>
                <li>Ensure you receive an official numbered paper receipt immediately.</li>
                <li>Your name and receipt number will be logged live on the public ledger during the meeting.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
