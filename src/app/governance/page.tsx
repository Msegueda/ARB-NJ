import { ShieldAlert, Users, Scale, CheckCircle2 } from 'lucide-react';
import { mockElders } from '@/lib/mock-data';

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
            Governance & Elder Oversight
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our fund is governed by strict community bylaws ensuring that your contributions are protected, audited, and untouchable by any single individual.
          </p>
        </div>

        {/* Dual-Control Banking Rules */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center">
            <ShieldAlert className="h-6 w-6 text-terracotta-600 mr-2" />
            3-Step Dual-Signatory Capital Flow
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Deposit to Valley National Bank Escrow</h3>
                    <p className="text-slate-600">All funds (cash, check, digital) are deposited directly into the association&apos;s central escrow account. The Treasurer immediately logs the receipt on the public ledger.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="z-10 flex items-center justify-center h-16 w-16 rounded-full bg-forest-100 border-4 border-white shadow-sm shrink-0">
                    <span className="text-xl font-bold text-forest-700">2</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Monthly reconciliation published automatically to public ledger</h3>
                    <p className="text-slate-600">Every transaction is logged and published for total transparency.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="z-10 flex items-center justify-center h-16 w-16 rounded-full bg-forest-100 border-4 border-white shadow-sm shrink-0">
                    <span className="text-xl font-bold text-forest-700">3</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Capital release only with dual signatures</h3>
                    <p className="text-slate-600">Withdrawals require signatures from both the President and the Treasurer after Elder approval.</p>
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
            Elder Advisory Board
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
                Bylaws & Contingency Guarantee
              </h2>
            </div>
            <div className="p-8">
              <p className="text-slate-700 mb-6">
                Funds are held in secure escrow solely for building acquisition.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-forest-500 mr-3 shrink-0" />
                  <span className="text-slate-700"><strong>Locked Funds:</strong> All contributions remain locked in an interest-bearing escrow account governed by the association&apos;s 501(c)(3) bylaws.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-forest-500 mr-3 shrink-0" />
                  <span className="text-slate-700"><strong>No Individual Repurposing:</strong> Funds cannot be repurposed for individual loans, unrelated community events, or operational expenses outside the property acquisition scope.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
