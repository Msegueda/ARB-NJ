import { mockMilestones } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export default function HeroProgress() {
  const milestone = mockMilestones[0];
  const percentage = (milestone.currentAmount / milestone.targetAmount) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="px-6 py-8 sm:p-10">

        <div className="relative pt-1">
          <div className="flex flex-col md:flex-row mb-4 items-center justify-between text-center md:text-left">
            <div>
              <span className="text-4xl font-extrabold text-forest-900 inline-block">
                {formatCurrency(milestone.currentAmount)}
              </span>
              <span className="text-lg font-medium text-slate-500 ml-2 block md:inline-block mt-2 md:mt-0">
                Raised of {formatCurrency(milestone.targetAmount)} Milestone
              </span>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <span className="text-2xl font-bold inline-block text-gold-600">
                ({percentage.toFixed(1)}%)
              </span>
            </div>
          </div>

          <div className="overflow-hidden h-6 mb-6 text-xs flex rounded-full bg-slate-100 shadow-inner">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gold-500 transition-all duration-1000 ease-out"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <span className="text-3xl font-bold text-forest-900">21</span>
              <span className="text-sm font-medium text-slate-600 text-center mt-1">Active Contributing Families</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <span className="text-3xl font-bold text-forest-900">100%</span>
              <span className="text-sm font-medium text-slate-600 text-center mt-1">Dual-Signatory Bank Escrow</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <span className="text-3xl font-bold text-forest-900">Live</span>
              <span className="text-sm font-medium text-slate-600 text-center mt-1">Real-Time Ledger Audited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
