import React, { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    setMax(Math.max(max, count + 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container my-3">
        <div>
          <h1 className="my-5">{count} number of Clicks</h1>
        </div>

        <button
          type="button"
          className="btn btn-primary px-5"
          onClick={handleCount}
        >
          Click Here
        </button>
        <button
          type="button"
          className="btn btn-primary px-4 mx-5 "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <h1>Highest Number of Clicks: {max}</h1>
    </>
  );
};
