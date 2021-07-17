import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import Home from './page/home/Home.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Home}></Route>
      <Footer />
    </div>
  );
}

export default App;
