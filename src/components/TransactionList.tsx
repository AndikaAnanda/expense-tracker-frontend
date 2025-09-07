import React from 'react';
import type { Transaction } from '../types/transaction';
import TransactionItem from './TransactionItem';
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table';
import DecryptedText from './DecryptedText';

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onEdit,
  onDelete,
}) => {
  return (
    <div className=' p-4 rounded-lg shadow text-white bg-neutral-900'>
      <div className='mb-4 text-lg font-bold'>
        <DecryptedText
          text="List of Transactions"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-white'>Title</TableHead>
            <TableHead className='text-white'>Amount</TableHead>
            <TableHead className='text-white'>Type</TableHead>
            <TableHead className='text-white'>Date</TableHead>
            <TableHead className='text-white'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionList;
