import React, { useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext'
import { Transaction } from './Transaction';
import './css/index.css'



export const TransactionList = () => {
    const { transactions } = useContext(ExpenseContext);


    return (
        <div>
            <h3>History</h3>
            <ul  className="list">
                {transactions.map(transaction=>(<Transaction key={transaction._id} transaction={transaction}/>))}     
            </ul>
        </div>
    )
}
