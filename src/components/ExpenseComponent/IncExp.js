import React, { useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext'
import { numberwithCommas } from '../../utils/format';
import './css/index.css'



export const IncExp = () => {
    const {transactions} = useContext(ExpenseContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc+=item), 0)
        .toFixed(2);
    
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc+=item), 0)*
        -1
        ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${numberwithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${numberwithCommas(expense)}</p>
            </div>
        </div>
    )
}
