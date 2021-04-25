import React from 'react'
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import Form from "./components/Form"

function App () {
   return (
      <div>
        <Header />
        <Form/>
        <Card/>
      </div>
    );
}

export default App;
