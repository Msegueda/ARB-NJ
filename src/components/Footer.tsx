import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-forest-900 border-t border-forest-800 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-white tracking-tight">Burkina-Newark Community Fund</span>
            <p className="mt-2 text-sm text-slate-300 max-w-md">
              A registered community association initiative dedicated to securing a permanent cultural and mixed-use event space for the Burkina Faso community in Newark, NJ.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold-500 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/transparency" className="text-sm text-slate-300 hover:text-white">Public Ledger</Link>
              </li>
              <li>
                <Link href="/governance" className="text-sm text-slate-300 hover:text-white">Governance & Bylaws</Link>
              </li>
              <li>
                <Link href="/contribute" className="text-sm text-slate-300 hover:text-white">Make a Pledge</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold-500 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-300">
                <span className="block mb-2 text-white font-medium">Nonprofit 501(c)(3) Status: Pending</span>
                <span className="block mb-2 text-white font-medium">Escrow Bank: Valley National Bank, Newark Branch</span>
                <span className="block text-xs">Contributions are subject to the community association bylaws. All funds require dual-signatory approval.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-forest-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-slate-300">
            &copy; {new Date().getFullYear()} Burkina-Newark Community Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
