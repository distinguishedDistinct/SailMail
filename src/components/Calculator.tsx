import React, { useState, CSSProperties } from "react";

export const Calculator = () => {
  // Define calculator style with correct typing
  const calculatorStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    gap: "10px",
    backgroundColor: "#2196F3",
    padding: "10px",
    width: "280px",
    margin: "auto",
  };

  // Define grid item style with correct typing
  const gridItemStyle: CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center", // This will now be correctly typed
  };

  const [display, setDisplay] = useState<string>(""); // Holds the input and result

  // Function to handle value clicks
  const handleValue = (value: string) => {
    setDisplay((prev) => prev + value); // Append clicked value to the display
  };

  // Function to handle "=" button click
  const handleCalculate = () => {
    try {
      setDisplay(eval(display)); // Use eval to calculate the result
    } catch {
      setDisplay("Error"); // Handle invalid expression
    }
  };

  // Function to clear the display
  const handleClear = () => {
    setDisplay(""); // Clear display
  };

  return (
    <div className="container">
      <div className="my-5">
        <h2>{display || "0"}</h2> {/* Show display value or 0 if empty */}
      </div>
      <div className="grid-container" style={calculatorStyle}>
        <button style={gridItemStyle} onClick={() => handleValue("1")}>
          1
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("2")}>
          2
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("3")}>
          3
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("4")}>
          4
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("5")}>
          5
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("6")}>
          6
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("7")}>
          7
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("8")}>
          8
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("9")}>
          9
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("0")}>
          0
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("+")}>
          +
        </button>
        <button style={gridItemStyle} onClick={() => handleValue("-")}>
          -
        </button>
        <button style={gridItemStyle} onClick={handleCalculate}>
          =
        </button>
        <button style={gridItemStyle} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};
