export interface Transaction {
  id: string;
  contributorName: string;
  amount: number;
  date: string;
  method: 'cash' | 'zelle' | 'card' | 'ach' | 'check';
  status: 'cleared' | 'pending' | 'verified';
  receiptNumber: string;
  verifiedBy: string;
  notes: string;
}

export interface Milestone {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

export interface ElderAdvisor {
  name: string;
  role: string;
  communityAffiliation: string;
  statement: string;
}
