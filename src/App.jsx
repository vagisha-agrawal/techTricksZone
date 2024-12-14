import React from 'react';
import './App.css';
import Header from './components/Header';
import Routers from './routers/Routers';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-full mt-1">
        <Routers />
      </div>
    </div>
  );
}

export default App;
