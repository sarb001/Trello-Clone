import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import CardsComp from './Components/CardsComp';

function App() {
  return (
    <div className = "App">
        <div id = "main-comp">
          <Sidebar />
          <CardsComp />
        </div>
    </div>
  );
}

export default App;
