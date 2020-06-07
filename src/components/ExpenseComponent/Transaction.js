import React, { useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext';
import { numberwithCommas } from '../../utils/format';
import './css/index.css'



export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(ExpenseContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.text} <span>{sign}{numberwithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button></li>
    )
}
