/**
 * Binary to Decimal
 *
 */

import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onBinaryChanged = (e) => setBinary(e.target.value);
  const onConvertSubmit = (e) => {
    e.preventDefault();

    if (!binary.match(/^[0-1]+$/g)) {
      setErrorMsg("Please enter 0 or 1");
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      return;
    }

    const binaryNumber = binary.split("").map(Number);
    const decimalNumber = binaryNumber
      .reverse()
      .reduce((acc, cur, index) => acc + cur * Math.pow(2, index), 0);

    setDecimal(decimalNumber);
  };

  return (
    <section className="binaryToDecimal">
      <h2>Binary to Decimal</h2>
      {errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={onConvertSubmit}>
        <div>
          <label htmlFor="binary">Input Binary</label>
          <input
            type="text"
            name="binary"
            id="binary"
            placeholder="Enter 0 or 1"
            value={binary}
            onChange={onBinaryChanged}
          />
        <button type="submit" className="button">
          Convert
        </button>
        </div>
        <div>
          <label htmlFor="decimal">Output Decimal</label>
          <input
            type="text"
            name="decimal"
            id="decimal"
            value={decimal}
            disabled
          />
        </div>
      </form>
    </section>
  );
};

export default App;
