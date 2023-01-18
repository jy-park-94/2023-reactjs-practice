import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";

import NewExpense from "./components/NewExpense/ExpenseForm";
function App() {
  const expenses = [
    { title: "Lamborghini", amount: 666.66, date: new Date(2023, 1, 10) },
    { title: "Poresche", amount: 123.55, date: new Date(2021, 1, 10) },
    { title: "Audi", amount: 999.66, date: new Date(2022, 6, 9) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expenses);
  };

  return (
    <Card className="expenses">
      <h2>Get your used car ! </h2>
      <NewExpense onAddExpens={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </Card>
  );
}

export default App;
