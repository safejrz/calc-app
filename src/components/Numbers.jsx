import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// [...Array(10).keys()]
const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
numbers.push(0);

const renderButtons = (onClickNumber) => {
  const renderButton = (number) => (
    <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  );
  return numbers.map(renderButton);
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

Numbers.propTypes = { onClickNumber: PropTypes.func.isRequired };

export default Numbers;
