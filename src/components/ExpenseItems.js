import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'
import Card from './Card'

function ExpenseItems(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    };
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <a href='#' className='ct-button'><button onClick={clickHandler} className='ct-text-button'>Edit</button></a>
        </Card>
    )
}

export default ExpenseItems;