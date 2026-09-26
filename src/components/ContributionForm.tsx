"use client";

import { useState } from 'react';
import { Smartphone, Banknote, Building, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { savePledge } from '@/lib/storage';
import { Pledge } from '@/lib/types';

export default function ContributionForm() {
  const { t } = useLanguage();
  const [pledgeType, setPledgeType] = useState('pathwayA');
  const [amount, setAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [customAmount, setCustomAmount] = useState('');

  // Pathway A fields
  const [formDataA, setFormDataA] = useState({
    fullName: '',
    familyName: '',
    phone: '',
    whatsappOptIn: false,
    email: '',
    location: 'newark',
    privacy: 'public'
  });

  // Pathway B fields
  const [formDataB, setFormDataB] = useState({
    fullName: '',
    phone: '',
    email: '',
    skills: {
      legal: false,
      architecture: false,
      event: false,
      accounting: false,
      youth: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setAmount(Number(val));
  };

  const handleSkillChange = (skill: keyof typeof formDataB.skills) => {
    setFormDataB({
      ...formDataB,
      skills: {
        ...formDataB.skills,
        [skill]: !formDataB.skills[skill]
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      let pledgeRecord: Pledge;

      if (pledgeType === 'pathwayA') {
        pledgeRecord = {
          id: `BH-PLG-${Math.floor(Math.random() * 10000)}`,
          type: 'pathwayA',
          date: new Date().toISOString(),
          amount: amount,
          paymentMethod: paymentMethod as Pledge['paymentMethod'],
          ...formDataA,
          location: formDataA.location as Pledge['location'],
          privacy: formDataA.privacy as Pledge['privacy']
        };
      } else {
        pledgeRecord = {
          id: `BH-PLG-${Math.floor(Math.random() * 10000)}`,
          type: 'pathwayB',
          date: new Date().toISOString(),
          ...formDataB
        };
      }

      savePledge(pledgeRecord);

      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200 p-12 text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-forest-50 mb-6">
          <svg className="h-10 w-10 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-forest-900 mb-4">{t('contribute.successMsg')}</h2>
        <p className="text-slate-600 mb-8">Thank you for your commitment to the Burkina House Project.</p>
        <button
          onClick={() => {
            setShowSuccess(false);
            setAmount(100);
            setCustomAmount('');
            setFormDataA({...formDataA, fullName: '', familyName: ''});
          }}
          className="text-forest-600 font-medium hover:text-forest-700 underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
      <div className="bg-forest-900 px-6 py-8 sm:px-10 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Secure Your Pledge</h2>
        <p className="text-slate-300">Join the movement to build our community center</p>
      </div>

      <div className="p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row p-1 mb-8 bg-slate-100 rounded-lg">
          <button
            onClick={() => setPledgeType('pathwayA')}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors ${
              pledgeType === 'pathwayA' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-500 hover:text-forest-700'
            }`}
          >
            {t('contribute.pathwayA')}
          </button>
          <button
            onClick={() => setPledgeType('pathwayB')}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors ${
              pledgeType === 'pathwayB' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-500 hover:text-forest-700'
            }`}
          >
            {t('contribute.pathwayB')}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {pledgeType === 'pathwayA' ? (
            // PATHWAY A: CAPITAL PLEDGE
            <div className="space-y-8">
              {/* Amount Selector */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Select Tier</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => handleAmountSelect(50)}
                    className={`p-4 border rounded-xl text-left transition-all ${
                      amount === 50 && !customAmount
                        ? 'border-forest-600 bg-forest-50 ring-1 ring-forest-600'
                        : 'border-slate-200 hover:border-forest-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="text-sm font-medium text-slate-500 mb-1">{t('contribute.tierSolidaire').split('(')[0].trim()}</div>
                    <div className="font-bold text-2xl text-forest-900">$50<span className="text-sm font-normal text-slate-500">/mo</span></div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAmountSelect(100)}
                    className={`p-4 border rounded-xl text-left transition-all relative ${
                      amount === 100 && !customAmount
                        ? 'border-gold-500 bg-gold-50 ring-2 ring-gold-500'
                        : 'border-gold-300 hover:border-gold-400 bg-white text-slate-700'
                    }`}
                  >
                    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
                      <span className="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Popular</span>
                    </div>
                    <div className="text-sm font-bold text-gold-700 mb-1">{t('contribute.tierFamille').split('(')[0].trim()}</div>
                    <div className="font-bold text-2xl text-forest-900">$100<span className="text-sm font-normal text-slate-500">/mo</span></div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAmountSelect(250)}
                    className={`p-4 border rounded-xl text-left transition-all ${
                      amount === 250 && !customAmount
                        ? 'border-forest-600 bg-forest-50 ring-1 ring-forest-600'
                        : 'border-slate-200 hover:border-forest-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="text-sm font-medium text-slate-500 mb-1">{t('contribute.tierBienfaiteur').split('(')[0].trim()}</div>
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
                    placeholder={t('contribute.tierCustom')}
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.fullNameLabel')} *</label>
                  <input
                    type="text"
                    required
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border"
                    value={formDataA.fullName}
                    onChange={e => setFormDataA({...formDataA, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.familyNameLabel')}</label>
                  <input
                    type="text"
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border"
                    value={formDataA.familyName}
                    onChange={e => setFormDataA({...formDataA, familyName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.phoneLabel')} *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border"
                    value={formDataA.phone}
                    onChange={e => setFormDataA({...formDataA, phone: e.target.value})}
                  />
                  <div className="mt-2 flex items-center">
                    <input
                      id="whatsapp"
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded"
                      checked={formDataA.whatsappOptIn}
                      onChange={e => setFormDataA({...formDataA, whatsappOptIn: e.target.checked})}
                    />
                    <label htmlFor="whatsapp" className="ml-2 block text-xs text-slate-600">
                      {t('contribute.whatsappOptIn')}
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.emailLabel')}</label>
                  <input
                    type="email"
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border"
                    value={formDataA.email}
                    onChange={e => setFormDataA({...formDataA, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Status and Privacy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.locationLabel')}</label>
                  <select
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border bg-white"
                    value={formDataA.location}
                    onChange={e => setFormDataA({...formDataA, location: e.target.value})}
                  >
                    <option value="newark">{t('contribute.locNewark')}</option>
                    <option value="tristate">{t('contribute.locTriState')}</option>
                    <option value="diaspora">{t('contribute.locUSDiaspora')}</option>
                    <option value="international">{t('contribute.locInternational')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.privacyLabel')}</label>
                  <select
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border bg-white"
                    value={formDataA.privacy}
                    onChange={e => setFormDataA({...formDataA, privacy: e.target.value})}
                  >
                    <option value="public">{t('contribute.privPublic')}</option>
                    <option value="anonymous">{t('contribute.privAnon')}</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">{t('contribute.paymentModeLabel')}</label>
                <div className="flex space-x-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('zelle')}
                    className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                      paymentMethod === 'zelle' ? 'bg-white text-purple-900 shadow-sm' : 'text-slate-600 hover:text-purple-700 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Zelle
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('check')}
                    className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                      paymentMethod === 'check' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-600 hover:text-forest-700 hover:bg-slate-50'
                    }`}
                  >
                    <Banknote className="w-4 h-4 mr-2" />
                    Check
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                      paymentMethod === 'cash' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-600 hover:text-forest-700 hover:bg-slate-50'
                    }`}
                  >
                    <Banknote className="w-4 h-4 mr-2" />
                    Cash
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('wire')}
                    className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${
                      paymentMethod === 'wire' ? 'bg-white text-forest-900 shadow-sm' : 'text-slate-600 hover:text-forest-700 hover:bg-slate-50'
                    }`}
                  >
                    <Building className="w-4 h-4 mr-2" />
                    Bank Wire
                  </button>
                </div>
              </div>

            </div>
          ) : (
            // PATHWAY B: SKILLS REGISTRY
            <div className="space-y-8">
              <div className="bg-forest-50 p-4 rounded-lg border border-forest-100 text-forest-800 text-sm">
                Register your professional skills to support the development, operations, and success of the Burkina House Project without a direct financial pledge.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.fullNameLabel')} *</label>
                  <input
                    type="text"
                    required
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border"
                    value={formDataB.fullName}
                    onChange={e => setFormDataB({...formDataB, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contribute.phoneLabel')} *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border-slate-300 rounded-lg shadow-sm focus:border-forest-500 focus:ring-forest-500 py-2 px-3 border"
                    value={formDataB.phone}
                    onChange={e => setFormDataB({...formDataB, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">{t('contribute.skillsLabel')}</label>
                <div className="space-y-3 bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded" checked={formDataB.skills.legal} onChange={() => handleSkillChange('legal')} />
                    <span className="ml-3 text-sm text-slate-700">{t('contribute.skillLegal')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded" checked={formDataB.skills.architecture} onChange={() => handleSkillChange('architecture')} />
                    <span className="ml-3 text-sm text-slate-700">{t('contribute.skillArch')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded" checked={formDataB.skills.event} onChange={() => handleSkillChange('event')} />
                    <span className="ml-3 text-sm text-slate-700">{t('contribute.skillEvent')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded" checked={formDataB.skills.accounting} onChange={() => handleSkillChange('accounting')} />
                    <span className="ml-3 text-sm text-slate-700">{t('contribute.skillAcc')}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-slate-300 rounded" checked={formDataB.skills.youth} onChange={() => handleSkillChange('youth')} />
                    <span className="ml-3 text-sm text-slate-700">{t('contribute.skillYouth')}</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Submit Action Area */}
          <div className="pt-8 mt-8 border-t border-slate-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-forest-900 bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Processing...' : t('contribute.submitBtn')} <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
