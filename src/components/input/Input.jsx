import React from "react";

function Input({ values, handleValueChange, handleCalculate }) {
  return (
    <form>
      <div>
        <label htmlFor="inetialInvestment">Inetial Amount</label>
        <input
          type="number"
          id="initialInvestment"
          name="initialInvestment"
          value={values.inetialAmount}
          onChange={(e) => handleValueChange("inetialAmount", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="yearlyInvestment">Yearly Investment</label>
        <input
          type="number"
          id="yearlyInvestment"
          name="yearlyInvestment"
          value={values.yearlyInvestment}
          onChange={(e) =>
            handleValueChange("yearlyInvestment", e.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="years">Duration In Years</label>
        <input
          type="number"
          id="years"
          name="years"
          value={values.years}
          onChange={(e) => handleValueChange("years", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="yearlyInterestRate">Yearly Interest Rate</label>
        <input
          type="number"
          id="yearlyInterestRate"
          name="yearlyInterestRate"
          value={values.yearlyInterestRate}
          onChange={(e) =>
            handleValueChange("yearlyInterestRate", e.target.value)
          }
        />
      </div>
      <button onClick={(e) => handleCalculate(e)}>Calculate</button>
    </form>
  );
}

export default Input;
