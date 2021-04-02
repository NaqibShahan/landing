import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
          
          </Route>
          <Route path="/orders">
            <Header />
           
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
   
      
        
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
