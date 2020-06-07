import React from 'react';
import { Header } from './ExpenseComponent/Header';
import { Balance } from './ExpenseComponent/Balance';
import { IncExp } from './ExpenseComponent/IncExp';
import { TransactionList } from './ExpenseComponent/TransactionList';
import { AddTransaction } from './ExpenseComponent/AddTransaction';
import { ExpenseProvider } from '../context/ExpenseContext';

export const ExpenseTracker = () => {
    return (
        <div className="expense_app">
            <ExpenseProvider>
                <Header />
                <div className="container">
                    <Balance />
                    <IncExp />
                    <TransactionList />
                    <AddTransaction />
                </div>    
            </ExpenseProvider>
        </div>
    )
}
