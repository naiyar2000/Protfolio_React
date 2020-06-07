import React, { useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';
import { numberwithCommas } from '../../utils/format';
import './css/index.css'


export const Balance = () => {
    const {transactions} = useContext(ExpenseContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${numberwithCommas(total)}</h1>
        </div>
    )
}
