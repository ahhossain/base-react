import React, {useState} from "react";
import './ExpenseRender.css'
import ExpenseItems from "./ExpenseItems";
import Card from '../Card/Card'
import ExpensesFilter from './ExpensesFilter';

function ExpenseRender(props) {

    const [year, setYear] = useState('');

    const changeYearData = (yearData) => {
        setYear(yearData);
    };
    
    console.log(year);

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={year} onChangeYear={changeYearData}/>
            <ExpenseItems title={props.items[0].desc} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItems>
            <ExpenseItems title={props.items[1].desc} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItems>
            <ExpenseItems title={props.items[2].desc} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItems>
            <ExpenseItems title={props.items[3].desc} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItems>
        </Card>
    );

}

export default ExpenseRender;