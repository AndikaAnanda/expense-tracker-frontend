import React, { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { getTransactions } from '../services/transactionService';
import type { Transaction } from '../types/transaction';

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    
    fetchTransactions();
  }, []);

  const handleTransactionAdded = (newTransaction: Transaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const handleTransactionUpdated = (updatedTransaction: Transaction) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };

  const handleTransactionDeleted = (id: string) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <h1 className='text-center'>Expense Tracker</h1>
      <TransactionForm onTransactionSaved={handleTransactionAdded} />
      <TransactionList 
        transactions={transactions} 
        onEdit={handleTransactionUpdated} 
        onDelete={handleTransactionDeleted} 
      />
    </div>
  );
};

export default TransactionsPage;