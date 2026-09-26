export interface Transaction {
  id: string;
  contributorName: string;
  amount: number;
  date: string;
  method: 'cash' | 'zelle' | 'card' | 'ach' | 'check' | 'wire';
  status: 'cleared' | 'pending' | 'verified';
  receiptNumber: string;
  verifiedBy: string;
  notes: string;
}

export interface Pledge {
  id: string;
  type: 'pathwayA' | 'pathwayB';
  date: string;
  amount?: number;
  paymentMethod?: 'cash' | 'zelle' | 'card' | 'ach' | 'check' | 'wire';
  fullName: string;
  familyName?: string;
  phone: string;
  whatsappOptIn?: boolean;
  email?: string;
  location?: 'newark' | 'tristate' | 'diaspora' | 'international';
  privacy?: 'public' | 'anonymous';
  skills?: {
    legal: boolean;
    architecture: boolean;
    event: boolean;
    accounting: boolean;
    youth: boolean;
  };
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
