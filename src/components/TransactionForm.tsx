import React, { useState } from 'react';
import { Button } from '../components/ui/button'
import type { Transaction } from '../types/transaction';
import { createTransaction, updateTransaction } from '../services/transactionService';
import { Input } from './ui/input';

interface TransactionFormProps {
  transaction?: Transaction;
  onTransactionSaved: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ transaction, onTransactionSaved }) => {
  const [title, setTitle] = useState(transaction ? transaction.title : '');
  const [amount, setAmount] = useState(transaction ? String(transaction.amount) : '');
  const [type, setType] = useState(transaction ? transaction.type : 'expense');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const transactionData = { title, amount: parseFloat(amount), type };

    let savedTransaction: Transaction;
    if (transaction) {
      savedTransaction = await updateTransaction(transaction.id, transactionData);
    } else {
      savedTransaction = await createTransaction(transactionData);
    }

    onTransactionSaved(savedTransaction);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setAmount('');
    setType('expense');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 mb-6 max-w-md mx-auto flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold mb-2">{transaction ? 'Edit' : 'Add'} Transaction</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="font-medium">Title</label>
        <Input
          id="title"
          type="text"
          placeholder="e.g. Lunch, Salary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="amount" className="font-medium">Amount (Rp)</label>
        <Input
          id="amount"
          type="number"
          placeholder="e.g. 50000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="type" className="font-medium">Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>
      <Button type="submit" className="w-full mt-2">
        {transaction ? 'Update' : 'Add'} Transaction
      </Button>
    </form>
  );
};

export default TransactionForm;