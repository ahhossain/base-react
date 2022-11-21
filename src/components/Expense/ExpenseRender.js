import './ExpenseRender.css'
import ExpenseItems from "./ExpenseItems";
import Card from '../Card/Card'

function ExpenseRender(props) {

    return(
        <Card className='expenses'>
            <ExpenseItems title={props.items[0].desc} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItems>
            <ExpenseItems title={props.items[1].desc} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItems>
            <ExpenseItems title={props.items[2].desc} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItems>
            <ExpenseItems title={props.items[3].desc} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItems>
        </Card>
    );
}

export default ExpenseRender;