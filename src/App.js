import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { PaymailClient } from '@bsv/paymail/client';

function App() {
  const [paymentDestination, setPaymentDestination] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentDestination = async () => {
      try {
        const client = new PaymailClient();
        const result = await client.getP2pPaymentDestination('brandonbryant@handcash.io', 100);
        setPaymentDestination(result);
        console.log(result);
      } catch (err) {
        console.log(err)
        setError(err.message);
      }
    };

    fetchPaymentDestination();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {paymentDestination && (
          <p>Payment Destination: {JSON.stringify(paymentDestination)}</p>
        )}
        {error && (
          <p>Error: {error}</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
