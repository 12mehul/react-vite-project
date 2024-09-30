import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="mt-20 h-screen flex flex-col gap-5 items-center">
      <h1 className="text-6xl font-semibold text-rose-500">Counter</h1>
      <h3 className="text-6xl font-semibold text-green-500">{count}</h3>
      <div className="flex gap-5">
        <div>
          <button
            className="w-20 flex items-center justify-center p-2 text-2xl font-semibold uppercase border-2 border-orange-600 text-black hover:text-orange-600 rounded-lg"
            onClick={decrement}
          >
            Dec
          </button>
        </div>
        <div>
          <button
            className="w-20 flex items-center justify-center p-2 text-2xl font-semibold uppercase border-2 border-red-600 text-black hover:text-red-600 rounded-lg"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        <div>
          <button
            className="w-20 flex items-center justify-center p-2 text-2xl font-semibold uppercase border-2 border-green-600 text-black hover:text-green-600 rounded-lg"
            onClick={increment}
          >
            Inc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
