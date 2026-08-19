import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const operators = ["+", "-", "*", "/"];

  const calculateResult = () => {
    if (!calVal) return;

    const parts = calVal.split(/([+\-*/])/);

    if (parts.length < 3) return;

    let result = Number(parts[0]);

    if (Number.isNaN(result)) {
      setCalVal("Error");
      return;
    }

    const numbers = [result];
    const operatorsList = [];

    for (let i = 1; i < parts.length; i += 2) {
      operatorsList.push(parts[i]);
      numbers.push(Number(parts[i + 1]));
    }

    for (let i = 0; i < operatorsList.length; i++) {
      if (operatorsList[i] === "*" || operatorsList[i] === "/") {
        if (Number.isNaN(numbers[i + 1])) {
          setCalVal("Error");
          return;
        }

        if (operatorsList[i] === "/" && numbers[i + 1] === 0) {
          setCalVal("Error");
          return;
        }

        if (operatorsList[i] === "*") {
          numbers[i] *= numbers[i + 1];
        } else {
          numbers[i] /= numbers[i + 1];
        }

        numbers.splice(i + 1, 1);
        operatorsList.splice(i, 1);
        i--;
      }
    }

    result = numbers[0];

    for (let i = 0; i < operatorsList.length; i++) {
      if (Number.isNaN(numbers[i + 1])) {
        setCalVal("Error");
        return;
      }
      if (operatorsList[i] === "+") {
        result += numbers[i + 1];
      } else {
        result -= numbers[i + 1];
      }
    }
    setCalVal(String(result));
  };

  const handleOperator = (operator) => {
    setCalVal((prev) => {
      if (!prev) return "";

      const lastCharacter = prev.slice(-1);

      if (operators.includes(lastCharacter)) {
        return prev.slice(0, -1) + operator;
      }

      return prev + operator;
    });
  };

  const handleDecimal = () => {
    setCalVal((prev) => {
      const currentNumber = prev.split(/[+\-*/]/).pop();

      if (currentNumber.includes(".")) {
        return prev;
      }

      if (!currentNumber) {
        return prev + "0.";
      }

      return prev + ".";
    });
  };

  const onButtonClick = (buttonText) => {
    if (operators.includes(buttonText)) {
      handleOperator(buttonText);
      return;
    }

    if (buttonText === "C") {
      setCalVal("");
      return;
    }

    if (buttonText === "⌫") {
      setCalVal((prev) => prev.slice(0, -1));
      return;
    }

    if (buttonText === "=") {
      calculateResult();
      return;
    }

    if (buttonText === ".") {
      handleDecimal();
      return;
    }

    setCalVal((prev) => prev + buttonText);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
