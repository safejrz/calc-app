import React, { useState } from "react";
import MathOperations from "./components/MathOperation";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const arrayTextoFuncionModificaTexto = useState("");
  const texto = arrayTextoFuncionModificaTexto[0];
  const functionModificaTexto = arrayTextoFuncionModificaTexto[1];

  console.log("App render");
  return (
    <main className="react-calculator">
      <h2>Calculator App</h2>
      <Result value={texto} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Number: ", { number });
          functionModificaTexto(number);
        }}
      />
      <Functions
        onContentClear={() => console.log("Clear")}
        onDelete={() => console.log("Delete")}
      />
      <MathOperations
        onClickOperation={(operation) => console.log("Op: ", operation)}
        onClickEqual={(equal) => console.log("Equal:", equal)}
      />
    </main>
  );
};

export default App;
