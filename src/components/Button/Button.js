import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const getButtonStyle = () => {
    switch (props.symbol) {
      case "C":
        return styles.clearButton;
      case "0":
        return styles.zeroButton;
      case "÷":
      case "×":
      case "-":
      case "+":
      case "=":
        return styles.operatorButton;
      default:
        return styles.defaultButton;
    }
  }

  return (
    <button className={getButtonStyle()}>
      {props.symbol}
    </button>
  );
}

export default Button;