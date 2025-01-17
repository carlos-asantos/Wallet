import { Transaction } from "@prisma/client";
import { TransactionParams, TransactionResponse } from "../protocols";
import transactionRepository from "../repositories/transaction-repository";

export function transactionValueHandle(transactions: Transaction[]): TransactionResponse[] {
    return transactions.map(transaction => ({
        id: transaction.id,
        description: transaction.description,
        date: transaction.createdAt,
        type: transaction.type,
        value: (transaction.value / 100).toFixed(2).replace(".", ","),
    }));
}

export async function calculateBalance(transactions: Transaction[]) {
    const balance = (transactions.reduce((total, transaction) => {
        return transaction.type === "income"
            ? total + transaction.value
            : total - transaction.value;
    }, 0) / 100).toFixed(2).replace(".", ",");

    const result = {
        transactions: transactionValueHandle(transactions),
        balance,
    };

    return result;
}

async function createTransaction(data: TransactionParams) {
    return transactionRepository.createTransaction({ ...data, value: data.value * 100 })
}

async function getTransactionById(id: number) {
    return transactionRepository.getTransactionById(id);
}

async function getUserTransactions(userId: number) {
    const transactions = await transactionRepository.getUserTransactions(userId);

    const result = calculateBalance(transactions);

    return result;
}


const transactionServices = {
    createTransaction,
    getTransactionById,
    getUserTransactions,
}

export default transactionServices;