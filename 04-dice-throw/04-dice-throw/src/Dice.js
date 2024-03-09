import React, { useState } from 'react';
import './dice.css';

const Dice = () => {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
  };

  return (
    <div className="dice-container">
      <div className="dice">{number}</div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;
