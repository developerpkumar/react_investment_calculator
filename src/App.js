import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Result from "./components/result/Result";
import { calculate } from "./utils/calculation";

function App() {
  const [values, setValues] = useState({
    inetialAmount: 100000,
    yearlyInvestment: 10000,
    years: 10,
    yearlyInterestRate: 6,
  });

  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    setResult((pre) => {
      return calculate(
        values.inetialAmount,
        values.yearlyInvestment,
        values.years,
        values.yearlyInterestRate
      );
    });
  };

  const handleValueChange = (valueName, newValue) => {
    return setValues((pre) => {
      return { ...pre, [valueName]: newValue };
    });
  };

  return (
    <div className="App">
      <Header />
      <Input
        values={values}
        handleValueChange={handleValueChange}
        handleCalculate={handleCalculate}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
