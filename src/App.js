import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from "./components/Cart";
import Footer from './components/Footer';
import Default from './components/Default';
class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Switch>
          <Route  exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/footer" component={Footer} />
            <Route component={Default} />
          </Switch>
           <Footer />
      </div>
    );
  }
}

export default App;
