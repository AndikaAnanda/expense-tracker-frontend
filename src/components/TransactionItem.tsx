import { deleteTransaction } from '@/services/transactionService';
import type { Transaction } from '../types/transaction';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Button } from './ui/button';
import { TableCell, TableRow } from './ui/table';

interface TransactionItemProps {
  transaction: Transaction;
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onEdit,
  onDelete,
}) => {
  const handleDelete = async () => {
    try {
      await deleteTransaction(transaction.id);
      onDelete(transaction.id);
      console.log('Transaction deleted successfully');
    } catch (error) {
      console.error('Failed to delete transaction:', error);
    }
  };
  return (
    <TableRow>
      <TableCell>{transaction.title}</TableCell>
      <TableCell>
        {transaction.type === 'expense' ? '-' : '+'}Rp.
        {transaction.amount.toFixed(2)}
      </TableCell>
      <TableCell>
        <span
          className={
            transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'
          }
        >
          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
        </span>
      </TableCell>
      {transaction.created_at
        ? new Date(transaction.created_at).toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : '-'}{' '}
      <TableCell>
        <Button
          variant="outline"
          size="sm"
          className="mr-2"
          onClick={() => onEdit(transaction)}
        >
          Edit
        </Button>
        {/* Delete with confirmation dialog */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure want to delete this transaction?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undo. The transaction{' '}
                <span className="font-semibold">{transaction.title}</span> will
                be deleted permanently.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};

export default TransactionItem;
