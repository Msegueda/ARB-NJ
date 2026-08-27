import { Home, Store, ShieldCheck } from 'lucide-react';

export default function BuildingProjectCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-forest-900 px-6 py-8 sm:px-10">
        <h2 className="text-2xl font-bold text-white mb-2">The Mixed-Use Vision</h2>
        <p className="text-slate-300">Securing a sustainable future for our community in Newark</p>
      </div>

      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-gold-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg text-forest-700 shadow-sm">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Cultural & Event Hall</h3>
            </div>
            <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
              Weekend bookings, weddings, naming ceremonies, cultural galas.
            </p>
          </div>

          <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-gold-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg text-gold-600 shadow-sm">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Commercial Storefront</h3>
            </div>
            <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
              Leasable retail space generating revenue to cover property taxes and mortgage.
            </p>
          </div>

          <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-gold-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg text-terracotta-700 shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Community Legacy</h3>
            </div>
            <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
              100% owned by the registered community association, not a single individual.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
