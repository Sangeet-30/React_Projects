import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "⌫",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={`${styles.button} ${
            ["+", "-", "*", "/"].includes(buttonName) ? styles.operator : ""
          } ${["C", "⌫"].includes(buttonName) ? styles.action : ""} ${
            buttonName === "=" ? styles.equals : ""
          }`}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
