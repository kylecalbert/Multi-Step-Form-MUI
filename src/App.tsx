import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import SecondStep from './Components/AccountDetailsStep';
import { Form } from './Components/Form';
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Form />
    </div>
  );
}

export default App;
