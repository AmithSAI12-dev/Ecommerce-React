import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import Home from './page/home/Home.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Home}></Route>
    </div>
  );
}

export default App;
