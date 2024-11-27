import React, { useState } from "react";
import Child from "./Child";

const ParentCallback = () => {
  const [data, setData] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const removeItem = React.useCallback(() => {}, [data]);

  const handleButton = () => {
    let p = [...data];
    p.push(input);
    setData(p);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h2 className="text-4xl font-semibold text-purple-600">
        React Use Callback
      </h2>
      <input
        type="text"
        placeholder="Enter text"
        onChange={handleChange}
        className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
      />
      <button
        onClick={handleButton}
        className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500"
      >
        Save
      </button>
      <Child d={data} removeItem={removeItem} />
    </div>
  );
};

export default ParentCallback;
