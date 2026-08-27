import LedgerTable from '@/components/LedgerTable';
import { ShieldCheck, Landmark, Smartphone, Banknote } from 'lucide-react';

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-forest-900 flex items-center justify-center sm:justify-start">
              <ShieldCheck className="h-8 w-8 text-forest-600 mr-3" />
              Public Financial Ledger
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Complete transparency. Every dollar collected, verified, and accounted for.
            </p>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 border-l-4 border-l-forest-600">
            <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
              <Landmark className="h-5 w-5 mr-2 text-forest-600" />
              Total Escrow Reserves
            </div>
            <div className="text-3xl font-bold text-slate-900">$24,750.00</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 border-l-4 border-l-gold-500">
            <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
              <Smartphone className="h-5 w-5 mr-2 text-gold-600" />
              Online Deposits
            </div>
            <div className="text-3xl font-bold text-slate-900">$14,200.00</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 border-l-4 border-l-terracotta-600">
            <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
              <Banknote className="h-5 w-5 mr-2 text-terracotta-600" />
              Assembly Cash/Checks
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
