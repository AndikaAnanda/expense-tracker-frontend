import React, { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { getTransactions } from '../services/transactionService';
import type { Transaction } from '../types/transaction';
import TrueFocus from '@/components/TrueFocusText';
import Prism from '@/components/PrismBackground';
import LiquidEther from '@/components/LiquidEtherBackground';

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
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
  };

  const handleTransactionDeleted = (id: string) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          className="mx-auto p-8 flex flex-col space-y-12"
        >
          <TrueFocus
            sentence="Expense Tracker"
            manualMode={false}
            blurAmount={5}
            borderColor="gray"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <TransactionForm onTransactionSaved={handleTransactionAdded} />
          <TransactionList
            transactions={transactions}
            onEdit={handleTransactionUpdated}
            onDelete={handleTransactionDeleted}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionsPage;
