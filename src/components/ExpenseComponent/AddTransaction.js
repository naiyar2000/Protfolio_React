import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext';
import uuid from 'uuid/v4'
import './css/index.css'

export const AddTransaction = () => {
    const {addTransaction} = useContext(ExpenseContext)
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: uuid(),
            text,
            amount: +amount
        }
        if(text!=='' && amount!=='')
            addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text"/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..."/>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
       
    )
}
