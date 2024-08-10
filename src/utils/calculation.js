export function calculate(
  inetialAmount,
  yearlyInvestment,
  years,
  interestRate
) {
  inetialAmount = Number(inetialAmount);
  yearlyInvestment = Number(yearlyInvestment);
  years = Number(years);
  interestRate = Number(interestRate);

  let capital;
  let year;
  let interest;
  let totalInterest = 0;
  let value;

  let arr = [];

  for (let i = 1; i <= years; i++) {
    capital = capital
      ? capital + yearlyInvestment
      : inetialAmount + yearlyInvestment;
    year = i;
    interest = (capital * interestRate) / 100;
    interest = interest.toFixed(2);
    totalInterest = totalInterest + +interest;
    value = capital + totalInterest;
    value = value.toFixed(2);
    arr.push({ year, capital, interest, value });
  }
  return arr;
}
