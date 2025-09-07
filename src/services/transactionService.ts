import axios from 'axios';
import type { Transaction, CreateTransactionDTO, UpdateTransactionDTO } from '../types/transaction'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const getTransactions = async (): Promise<Transaction[]> => {
  const response = await axios.get(`${API_ENDPOINT}/transactions`);
  return response.data;
};

export const createTransaction = async (transaction: CreateTransactionDTO): Promise<Transaction> => {
  const response = await axios.post(`${API_ENDPOINT}/transactions`, transaction);
  return response.data;
};

export const updateTransaction = async (id: string, transaction: UpdateTransactionDTO): Promise<Transaction> => {
  const response = await axios.put(`${API_ENDPOINT}/transactions/${id}`, transaction);
  return response.data;
};

export const deleteTransaction = async (id: string): Promise<void> => {
  await axios.delete(`${API_ENDPOINT}/transactions/${id}`);
};