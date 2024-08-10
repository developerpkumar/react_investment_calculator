import React from "react";

function Result({ result }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Capital</th>
            <th>Interest</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((e) => {
              return (
                <tr key={e.year}>
                  <td>{e.year}</td>
                  <td>{e.capital}</td>
                  <td>{e.interest}</td>
                  <td>{e.value}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Result;
