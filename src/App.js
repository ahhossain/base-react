
import ExpenseRender from "./components/Expense/ExpenseRender";
import NavBar from "./components/Nav/NavBar";
import NewExpense from "./components/NewExpense/NewExpense";

function App() { 
  const expenses = [
    {
      id: 'e1',
      desc: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      desc: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      desc: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      desc: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NavBar></NavBar>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseRender items={expenses}></ExpenseRender>
    </div>
  );
}

export default App;
