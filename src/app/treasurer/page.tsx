import TreasurerReceiptModal from '@/components/TreasurerReceiptModal';
import { ShieldAlert, BookOpen, Clock, Activity } from 'lucide-react';

export default function TreasurerPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-terracotta-50 border-l-4 border-terracotta-500 p-4 mb-8 rounded-r shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <ShieldAlert className="h-5 w-5 text-terracotta-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-terracotta-800 font-medium">
                Restricted Access Area. You are logged in as <span className="font-bold">Mamadou O. (Treasurer)</span>.
                All entries made here are permanently recorded to the public ledger and cannot be deleted.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <TreasurerReceiptModal />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center uppercase tracking-wider">
                <Activity className="h-4 w-4 text-forest-600 mr-2" />
                Live Session Stats
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Entries This Session</div>
                  <div className="text-2xl font-bold text-slate-900">12</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Total Collected</div>
                  <div className="text-2xl font-bold text-forest-600">$4,250.00</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center uppercase tracking-wider">
                <Clock className="h-4 w-4 text-gold-600 mr-2" />
                Recent Entries
              </h3>
              <ul className="space-y-3">
                {[
                  { id: 'BNK-2026-9042', amount: 100, name: 'Oumar T.', time: '2 min ago' },
                  { id: 'BNK-2026-9041', amount: 50, name: 'Anonymous', time: '15 min ago' },
                  { id: 'BNK-2026-9040', amount: 250, name: 'Fatou K.', time: '1 hr ago' },
                ].map((log) => (
                  <li key={log.id} className="flex justify-between items-center text-sm border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <div>
                      <span className="font-medium text-slate-900 block">{log.name}</span>
                      <span className="font-mono text-xs text-slate-500">{log.id}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-forest-600 block">${log.amount}</span>
                      <span className="text-xs text-slate-400">{log.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 py-2 bg-slate-50 hover:bg-slate-100 text-sm font-medium rounded text-slate-600 transition-colors border border-slate-200">
                View All Entries
              </button>
            </div>

            <div className="bg-forest-900 rounded-xl shadow-sm p-5 text-white">
              <h3 className="text-sm font-bold mb-3 flex items-center uppercase tracking-wider text-slate-300">
                <BookOpen className="h-4 w-4 text-gold-400 mr-2" />
                Protocol
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                <li>Verify cash amount before submitting.</li>
                <li>Write receipt number on paper copy for member.</li>
                <li>Cash must be deposited to Valley National Bank within 24 hours.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
