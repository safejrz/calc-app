/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import MathOperations from "./components/MathOperation";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1] : "0";
  console.log("App render", value);

  return (
    <main className="react-calculator">
      <h2>Calculator App</h2>
      {/* <Result value={stack} /> */}
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Number: ", { number });
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log("Clear");
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            console.log("Delete");
            const newStack = stack.substring(0, stack.length - 1);
            console.log("onDelete", newStack);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log("Op: ", operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log("Equal:", equal);
          setStack(eval(stack)); //.toString()
        }}
      />
    </main>
  );
};

export default App;
