import { Transaction, Pledge } from './types';
import { mockTransactions } from './mock-data';

const PLEDGE_KEY = 'bnk_pledges';
const TX_KEY = 'bnk_transactions';

export function getStoredPledges(): Pledge[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(PLEDGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored) as Pledge[];
  } catch (e) {
    console.error('Failed to parse stored pledges:', e);
    return [];
  }
}

export function savePledge(pledge: Pledge): void {
  if (typeof window === 'undefined') return;
  const current = getStoredPledges();
  current.push(pledge);
  localStorage.setItem(PLEDGE_KEY, JSON.stringify(current));
}

export function getStoredTransactions(): Transaction[] {
  if (typeof window === 'undefined') return mockTransactions;
  const stored = localStorage.getItem(TX_KEY);
  if (!stored) {
    // Initialize with mock data
    localStorage.setItem(TX_KEY, JSON.stringify(mockTransactions));
    return mockTransactions;
  }
  try {
    return JSON.parse(stored) as Transaction[];
  } catch (e) {
    console.error('Failed to parse stored transactions:', e);
    return mockTransactions;
  }
}

export function saveTransaction(tx: Transaction): void {
  if (typeof window === 'undefined') return;
  const current = getStoredTransactions();
  current.unshift(tx); // Add new to front
  localStorage.setItem(TX_KEY, JSON.stringify(current));
}
