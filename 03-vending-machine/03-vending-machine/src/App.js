import React, {useState} from 'react';

export default function App () {
  const [displayMessage, setDisplayMessage] = useState('');

  const handleDispense = (message) => {
    setDisplayMessage(message);
  };

  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">{displayMessage}
        </div>
        <button onClick={() => handleDispense('Dispensing coffee')}>Coffee</button>
        <button onClick={() => handleDispense('Dispensing tea')}>Tea</button>
        <button onClick={() => handleDispense('Dispensing orange juice')}>Orange Juice</button>
      </React.Fragment>
    );
  
}



