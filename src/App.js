// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import PaymentRole from './PaymentRole';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Payment Role</h1>
        </header>
        <main>
          <Routes>
            <Route path="/payment" element={<PaymentRole />} />
            <Route path="/" element={
              <>
                <h2>Welcome to the Payment Role App</h2>
                <p>Navigate to the payment page to complete a transaction.</p>
                <Link to="/payment">Go to Payment Page</Link>
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
