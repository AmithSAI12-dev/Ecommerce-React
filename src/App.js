import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import Home from './page/home/Home.component';
import Login from './page/login/Login.component';
import ProductDescription from './page/product-description/ProductDescription.component';
import Register from './page/register/Register.component';
import Shop from './page/shop/Shop.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/register' component={Register} />
        <Route path='/product' component={ProductDescription} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
