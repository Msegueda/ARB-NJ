import ContributionForm from '@/components/ContributionForm';
import { ShieldCheck, HeartHandshake, History } from 'lucide-react';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
            Make Your Pledge
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose how you want to support the Burkina-Newark Community Fund. Every dollar is tracked publicly and securely.
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
                Secure & Audited
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                All online transactions are processed securely. Funds are deposited directly into the association&apos;s escrow account.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-forest-900 mb-4 flex items-center">
                <HeartHandshake className="h-5 w-5 text-forest-600 mr-2" />
                Tax Deductible
              </h3>
              <p className="text-sm text-slate-600">
                The Burkina-Newark Community Association is a registered nonprofit. Once our 501(c)(3) status is finalized, all contributions will be tax-deductible retroactively to the extent allowed by law.
              </p>
            </div>

            <div className="bg-forest-900 rounded-2xl shadow-sm p-6 text-white border border-forest-800">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <History className="h-5 w-5 text-gold-400 mr-2" />
                Already pledged?
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Access your member dashboard to view your contribution history, download receipts, and participate in community votes.
              </p>
              <button className="w-full py-2 bg-forest-800 hover:bg-forest-700 text-sm font-medium rounded-md transition-colors border border-forest-700">
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
