import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import SecondStep from './Components/AccountDetailsStep';
import { Form } from './Components/Form';

function App() {
  const handleFormSubmit = (loginData: any) => {
    // Handle the form submit logic here
    console.log(loginData);
  };

  return (
    <div className="App">
      <Login onFormSubmit={handleFormSubmit} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
