"use client";

import { useState } from 'react';
import { User, Download, MapPin, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [voted, setVoted] = useState(false);

  // Mock personal data
  const personalStats = {
    name: 'Oumar T.',
    memberSince: 'Oct 2023',
    totalContributed: 3500,
    pledgeStatus: 'Active - $100/mo',
  };

  const personalHistory = [
    { id: 'BH-REC-2024-0042', date: 'Oct 15, 2024', amount: 100, method: 'Card (Stripe)', status: 'Cleared' },
    { id: 'BH-REC-2024-0018', date: 'Sep 15, 2024', amount: 100, method: 'Card (Stripe)', status: 'Cleared' },
    { id: 'BH-REC-2024-0005', date: 'Aug 15, 2024', amount: 100, method: 'Card (Stripe)', status: 'Cleared' },
    { id: 'BH-REC-2023-0001', date: 'Oct 15, 2023', amount: 1000, method: 'Zelle', status: 'Cleared' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-forest-900 flex items-center">
              <User className="h-8 w-8 text-forest-600 mr-3" />
              Member Dashboard
            </h1>
            <p className="mt-2 text-slate-600">Welcome back, {personalStats.name}</p>
          </div>
          <Link href="/contribute" className="px-4 py-2 bg-gold-500 text-forest-900 rounded-md font-bold hover:bg-gold-600 shadow-sm transition-colors">
            Make New Pledge
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Stats & Voting */}
          <div className="space-y-8">

            {/* Personal Stats Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-forest-900 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Your Contribution Summary</h2>
              </div>
              <div className="p-6">
                <div className="text-4xl font-black text-forest-600 mb-2">
                  ${personalStats.totalContributed.toLocaleString()}
                </div>
                <div className="text-sm text-slate-500 mb-6">Total Lifetime Contribution</div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Pledge Status</span>
                    <span className="text-sm font-medium text-forest-600 flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      {personalStats.pledgeStatus}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Member Since</span>
                    <span className="text-sm font-medium text-slate-900">{personalStats.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Voting Poll */}
            <div className="bg-white rounded-2xl shadow-sm border border-gold-200 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-gold-100 text-gold-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                LIVE POLL
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-gold-600 mr-2" />
                  <h2 className="text-lg font-bold text-slate-900 leading-tight">Vote for Preferred Commercial Corridor in Newark</h2>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  As an active contributor, your voice matters. The Elder Board is evaluating two zones. Cast your vote.
                </p>

                {voted ? (
                  <div className="bg-forest-50 rounded-lg p-4 text-center border border-forest-100">
                    <CheckCircle2 className="h-8 w-8 text-forest-500 mx-auto mb-2" />
                    <div className="font-bold text-forest-900">Vote Recorded</div>
                    <div className="text-sm text-forest-700 mt-1">Thank you for participating in community governance.</div>

                    <div className="mt-4 space-y-2">
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Ferry St / Ironbound</span>
                          <span className="font-bold">68%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-forest-200">
                          <div style={{ width: "68%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-forest-500"></div>
                        </div>
                      </div>
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>South Ward / Broad St</span>
                          <span className="font-bold">32%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                          <div style={{ width: "32%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={() => setVoted(true)}
                      className="w-full flex justify-between items-center p-4 border border-slate-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-colors text-left"
                    >
                      <span className="font-medium text-slate-900">Ferry St / Ironbound</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </button>
                    <button
                      onClick={() => setVoted(true)}
                      className="w-full flex justify-between items-center p-4 border border-slate-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-colors text-left"
                    >
                      <span className="font-medium text-slate-900">South Ward / Broad St</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full">
              <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-slate-900">Personal Contribution History</h2>
                <button className="inline-flex items-center text-sm font-medium text-forest-600 hover:text-forest-700">
                  <Download className="h-4 w-4 mr-1" />
                  Download 2024 Tax Statement
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Method</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {personalHistory.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{tx.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">${tx.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{tx.method}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-forest-100 text-forest-800">
                            {tx.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-forest-600 hover:text-forest-900 inline-flex items-center">
                            PDF <Download className="h-3 w-3 ml-1" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-slate-400 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Your official tax receipt for the current year will be available for download in January of the following year.
                    If you notice any discrepancies in your history, please contact the Treasurer directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
