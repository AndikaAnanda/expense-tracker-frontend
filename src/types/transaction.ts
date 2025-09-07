export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  created_at: string; // ISO date string
}

export interface CreateTransactionDTO {
  title: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface UpdateTransactionDTO {
  title?: string;
  amount?: number;
  type?: 'income' | 'expense';
}