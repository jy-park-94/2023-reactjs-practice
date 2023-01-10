import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
function App() {
  const expenses = [
    { title: "Lamborghini", amount: 666.66, date: new Date(2023, 1, 10) },
    { title: "Poresche", amount: 123.55, date: new Date(2021, 1, 10) },
    { title: "Audi", amount: 999.66, date: new Date(2022, 6, 9) },
  ];

  return (
    <Card className="expenses">
      <h2>Get your used car ! </h2>
      <Expenses expenses={expenses}></Expenses>
    </Card>
  );
}

export default App;
