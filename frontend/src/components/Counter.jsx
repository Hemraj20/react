import { useState } from "react";
import Button from "./Shared/Buttons";

const Counter = () => {
  const [count, setCount] = useState(0);

  const inFunc = () => {
    setCount(count + 1);
  };

  const deFunc = () => {
    setCount(count - 1);
  };

  const resetFunc = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex justify-center items-center">

      <div className="w-[420px] bg-white rounded-3xl shadow-2xl border border-blue-100 p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Counter App
        </h1>

        <p className="text-center text-gray-500 mt-2">
          React Counter with Tailwind CSS
        </p>

        {/* Counter Display */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">

          <p className="text-center text-gray-500 text-lg">
            Current Count
          </p>

          <h2 className="text-center text-7xl font-extrabold text-blue-700 mt-3">
            {count}
          </h2>

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          <Button
            title="+"
            onClick={inFunc}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          />

          <Button
            title="Reset"
            onClick={resetFunc}
            className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          />

          <Button
            title="-"
            onClick={deFunc}
            className="bg-red-500 hover:bg-red-600 text-white"
          />

        </div>

      </div>

    </div>
  );
};

export default Counter;