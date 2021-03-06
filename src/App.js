import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/services" exact component={Services} />
               <Route path="/products" exact component={Products} />
               <Route path="/sign-up" exact component={SignUp} />
            </Switch>
         </BrowserRouter>
      </div>
   );
};

export default App;
